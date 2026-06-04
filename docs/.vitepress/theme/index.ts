import { h, defineComponent } from "vue";
import DefaultTheme from "vitepress/theme";
import ScreenshotGallery from "./components/ScreenshotGallery.vue";
import DownloadPanel from "./components/DownloadPanel.vue";
import type { EnhanceAppContext } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      return () =>
        h(DefaultTheme.Layout, null, {
          "home-hero-info-after": () => h(ScreenshotGallery),
          "home-hero-after": () =>
            h(DownloadPanel, {
              downloadUrl: "#",
              chinaDownloadUrl: "#",
              allDownloadsUrl: "/downloads",
              changelogUrl: "/changelog",
              version: "v1.0.0",
              releaseDate: "2026-06-05",
              platforms: "Windows x64",
            }),
        });
    },
  }),
  enhanceApp(ctx: EnhanceAppContext) {
    // Register additional components here if needed
  },
};
