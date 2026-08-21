(async function() {
    let manifestUrl = null;
    
    // Check if the user provided a static JSON manifest to bypass aggressive CSPs
    const staticExtensionUrl = chrome.runtime.getURL(`manifests/${window.location.hostname}.json`);
    
    try {
        const response = await fetch(staticExtensionUrl);
        if (response.ok) {
            // Successfully resolved the static JSON file. We can inject this native URL directly
            // which Chrome exempts from the page's manifest-src CSP!
            manifestUrl = staticExtensionUrl;
        }
    } catch (e) {
        // Proceed to fallback
    }
    
    // Fallback to legacy Data URI compilation via the global manifest object defined in manifests/*.js
    if (!manifestUrl && typeof manifest !== 'undefined') {
        const promises = [];
        for (const icon of manifest.icons) {
            if (icon.src && icon.src.startsWith("chrome-extension://")) {
                promises.push(
                    fetch(icon.src)
                        .then((response) => response.blob())
                        .then((blob) => {
                            return new Promise((resolve) => {
                                const reader = new FileReader();
                                reader.onloadend = () => resolve(reader.result);
                                reader.readAsDataURL(blob);
                            });
                        })
                        .then((dataUrl) => icon.src = dataUrl)
                        .catch((error) => {
                            console.warn(`Better PWA: dropping unreadable icon ${icon.src}`, error);
                            icon.src = null;
                        })
                );
            }
        }

        await Promise.all(promises);
        manifest.icons = manifest.icons.filter((icon) => icon.src !== null);
        manifestUrl = `data:application/json;base64,${btoa(JSON.stringify(manifest))}`;
    }

    if (!manifestUrl) {
        console.error("Better PWA: Could not find a static JSON or a global manifest object for this site.");
        return;
    }

    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = manifestUrl;

    // Drop any existing factory manifests injected by the site
    for (const child of Array.from(document.head.children)) {
        if (child.tagName === "LINK" && child.rel === "manifest") {
            document.head.removeChild(child);
        }
    }

    document.head.appendChild(link);
    if (chrome.runtime?.sendMessage) chrome.runtime.sendMessage({ type: "manifestInjected" });

    // Enforce our manifest indefinitely against dynamic Single Page App mutations
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName === "LINK" && node.rel === "manifest" && node.href !== manifestUrl) {
                    node.remove();
                }
            }
        }
    }).observe(document.head, { childList: true });
})();
