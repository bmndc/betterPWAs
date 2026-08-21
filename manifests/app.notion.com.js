const manifest = {
	name: "Notion",
	id: "better-pwa/app.notion.com",
	short_name: "Notion",
	start_url: "https://app.notion.com/",
	scope: "https://app.notion.com/",
	display: "minimal-ui",
	display_override: ["tabbed"],
	icons: [
		{
			sizes: "192x192",
			src: chrome.runtime.getURL("manifests/icons/notion-192.png"),
			type: "image/png",
			purpose: "any maskable",
		},
		{
			sizes: "512x512",
			src: chrome.runtime.getURL("manifests/icons/notion-512.png"),
			type: "image/png",
			purpose: "any maskable",
		},
		{
			sizes: "512x512",
			src: chrome.runtime.getURL("manifests/icons/notion-512-maskable.png"),
			type: "image/png",
			purpose: "maskable",
		},
	],
};
