const promises = [];
for (const icon of manifest.icons) {
	if (icon.src.startsWith("chrome-extension://")) {
		promises.push(
			fetch(icon.src)
				.then((response) => response.blob())
				.then((blob) => {
					return new Promise(function (resolve, reject) {
						const reader = new FileReader();

						reader.onloadend = function () {
							resolve(reader.result);
						};

						reader.readAsDataURL(blob);
					});
				})
				.then((dataUrl) => {
					icon.src = dataUrl;
				})
				.catch((error) => {
					console.warn(
						`Better PWA: dropping unreadable icon ${icon.src}`,
						error,
					);
					icon.src = null;
				}),
		);
	}
}

Promise.all(promises)
	.then(() => {
		manifest.icons = manifest.icons.filter((icon) => icon.src !== null);

		const link = document.createElement("link");
		link.rel = "manifest";
		link.href = `data:application/json;base64,${btoa(JSON.stringify(manifest))}`;

		// Drop the site's own manifest
		for (const child of document.head.children) {
			if (child.tagName == "LINK" && child.rel == "manifest") {
				document.head.removeChild(child);
			}
		}

		document.head.appendChild(link);
		if (chrome.runtime?.sendMessage) chrome.runtime.sendMessage({ type: "manifestInjected" });
	})
	.catch((error) => {
		console.error("Better PWA: could not inject manifest", error);
	});

// Observe DOM for PWAs that inject their own manifests later
new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) {
			if (node.tagName === "LINK" && node.rel === "manifest" && !node.href.startsWith("data:")) {
				node.remove();
			}
		}
	}
}).observe(document.head, { childList: true });
