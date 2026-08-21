const manifest = {
	name: "Claude",
	id: "better-pwa/claude.ai",
	short_name: "Claude",
	start_url: "https://claude.ai/",
	scope: "https://claude.ai/",
	display: "standalone",
	display_override: ["tabbed"],
	theme_color: "#c15f3c",
	background_color: "hsl(49 26.8% 92%)",
	icons: [
		{
			sizes: "192x192",
			src: "https://static.canva.com/domain-assets/canva/static/images/android-192x192-2.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "180x180",
			src: "https://static.canva.com/domain-assets/canva/static/images/apple-touch-180x180-1.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "16x16",
			src: chrome.runtime.getURL("manifests/icons/claude.ai/claude-16-monochrome.png"),
			type: "image/png",
			purpose: "monochrome",
		},
		{
			sizes: "32x32",
			src: chrome.runtime.getURL("manifests/icons/claude.ai/claude-32-monochrome.png"),
			type: "image/png",
			purpose: "monochrome",
		},
		{
			sizes: "48x48",
			src: chrome.runtime.getURL("manifests/icons/claude.ai/claude-48-monochrome.png"),
			type: "image/png",
			purpose: "monochrome",
		},
		{
			sizes: "512x512",
			src: chrome.runtime.getURL("manifests/icons/claude.ai/claude-512-monochrome.png"),
			type: "image/png",
			purpose: "monochrome",
		},
	],
};
