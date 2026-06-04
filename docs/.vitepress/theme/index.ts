import { h, defineComponent } from "vue";
import DefaultTheme from "vitepress/theme";
import ScreenshotGallery from "./components/ScreenshotGallery.vue";
import type { EnhanceAppContext } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      return () =>
        h(DefaultTheme.Layout, null, {
          "home-hero-info-after": () => h(ScreenshotGallery),
        });
    },
  }),
  enhanceApp(ctx: EnhanceAppContext) {
    // Register additional components here if needed
  },
};
