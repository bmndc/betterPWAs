const ENABLED_ICON = "./images/icon48.png";
const DISABLED_ICON = "./images/iconDisabled48.png";
const ENABLED_TEXT = "Better PWA: Manifest updated";
const DISABLED_TEXT = "Better PWA: No betterment available";

chrome.runtime.onInstalled.addListener(() => {
	const rules = [
		{
			id: 1,
			priority: 100,
			action: {
				type: "modifyHeaders",
				responseHeaders: [
					{ header: "content-security-policy", "operation": "set", "value": "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;" }
				]
			},
			condition: {
				requestDomains: ["x.com", "twitter.com", "github.com", "teams.microsoft.com"]
			}
		}
	];
	chrome.declarativeNetRequest.updateDynamicRules({
		removeRuleIds: [1],
		addRules: rules
	}).catch(err => console.error(err));
});

chrome.runtime.onMessage.addListener((request, sender) => {
	if (request.type === "manifestInjected" && sender.tab) {
        chrome.action.setIcon({ path: { 48: ENABLED_ICON }, tabId: sender.tab.id });
        chrome.action.setTitle({ title: ENABLED_TEXT, tabId: sender.tab.id });
	}
});
