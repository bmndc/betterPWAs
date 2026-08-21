chrome.runtime.onMessage.addListener((request, sender) => {
	if (request.type === "manifestInjected" && sender.tab?.id) {
		chrome.action.setIcon({ path: { 48: "./images/icon48.png" }, tabId: sender.tab.id });
		chrome.action.setTitle({ title: "betterPWAs: manifest updated", tabId: sender.tab.id });
	}
});
