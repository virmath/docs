import { h, defineComponent } from "vue";
import DefaultTheme from "vitepress/theme";
import ScreenshotGallery from "./components/ScreenshotGallery.vue";
import DownloadPanel from "./components/DownloadPanel.vue";
import PricingPanel from "./components/PricingPanel.vue";
import ContactPanel from "./components/ContactPanel.vue";
import "./style.css";
import type { EnhanceAppContext } from "vitepress";

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      return () =>
        h(DefaultTheme.Layout, null, {
          "home-features-before": () => h(ScreenshotGallery),
          "home-features-after": () => [
            h(DownloadPanel, {
              downloadUrl: "#",
              chinaDownloadUrl: "#",
              allDownloadsUrl: "/downloads",
              changelogUrl: "/changelog",
              version: "v1.0.0",
              releaseDate: "2026-06-05",
              platforms: "Windows x64",
            }),
            h(PricingPanel, {
              plans: [
                {
                  name: { zh: "专业版（Pro）", en: "Pro Edition" },
                  price: "30",
                  currency: { zh: "元", en: "RMB" },
                  points: "3,000",
                  days: "30",
                  features: [
                    { zh: "不限运行实例数", en: "Unlimited Running Instances" },
                  ],
                },
              ],
            }),
            h(ContactPanel, {
              email: "virmath@outlook.com",
              qqGroups: [
                { number: "198129874", link: "https://qm.qq.com/q/FEUkJOG5wW" },
              ],
              githubLink: "https://github.com/virmath/docs",
              // bilibiliLink: "https://space.bilibili.com/your-uid",
            }),
          ],
        });
    },
  }),
  enhanceApp(ctx: EnhanceAppContext) {
    // Register additional components here if needed
  },
};