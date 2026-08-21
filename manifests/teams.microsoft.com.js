const manifest = {
	name: "Microsoft Teams",
	id: "better-pwa/teams.microsoft.com",
	short_name: "Teams",
	start_url: "/v2/?clientType=pwa",
	scope: "/v2/",
	display: "standalone",
	display_override: ["window-controls-overlay"],
	theme_color: "#EBEBEB",
	background_color: "#FFFFFF",
	icons: [
		{
			sizes: "512x512",
			src: chrome.runtime.getURL("manifests/icons/slack-512.png"),
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "144x144",
			src: chrome.runtime.getURL("manifests/icons/slack-144.png"),
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "512x512",
			src: chrome.runtime.getURL(
				"manifests/icons/slack-512-maskable.png",
			),
			type: "image/png",
			purpose: "maskable",
		},
		{
			sizes: "16x16",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-16.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "32x32",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-32.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "48x48",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-48.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "64x64",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-64.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "128x128",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-128.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "144x144",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-144.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "150x150",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-150.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "192x192",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-192.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "256x256",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-256.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "512x512",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/windows/teams-icon-pwa-v2025-512.png",
			type: "image/png",
			purpose: "any",
		},
		{
			sizes: "256x256",
			src: "https://teams.public.onecdn.static.microsoft/evergreen-assets/icons/microsoft_teams_logo_refresh_v2025.ico",
			type: "image/png",
			purpose: "any",
		}
	],
	launch_handler: {
		client_mode: "focus-existing"
	},
	protocol_handlers: [
		{
			protocol: "web+msteams",
			url: "/?clientType=pwa#deepLink=%s"
		}
	],
};
