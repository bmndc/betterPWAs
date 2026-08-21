const manifestUrl = chrome.runtime.getURL(`manifests/${window.location.hostname}.json`);

const link = document.createElement("link");
link.rel = "manifest";
link.href = manifestUrl;

// Remove any existing manifests
document.querySelectorAll('link[rel="manifest"]').forEach(node => node.remove());
document.head.appendChild(link);

if (chrome.runtime?.sendMessage) {
    chrome.runtime.sendMessage({ type: "manifestInjected" }).catch(() => {});
}

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "manifest" && node.href !== manifestUrl) {
                node.remove();
            }
        }
    }
}).observe(document.head, { childList: true });
