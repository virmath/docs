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
              downloadUrl: "https://github.com/virmath/docs/releases/download/v1.0.0-beta.1/Virmath-Elf-v1.0.0-beta.1-win-x64-setup.exe",
              chinaDownloadUrl: "https://gh-proxy.org/https://github.com/virmath/docs/releases/download/v1.0.0-beta.1/Virmath-Elf-v1.0.0-beta.1-win-x64-setup.exe",
              allDownloadsUrl: "docs/downloads",
              changelogUrl: "docs/changelog",
              version: "v1.0.0-beta.1",
              releaseDate: "2026-06-22",
              platforms: "Windows 10 x64",
            }),
            h(PricingPanel, {
              plans: [
                {
                  name: { zh: "增强版（Plus）", en: "Plus Edition" },
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
              email: "contact@virmath.com",
              qqGroups: [
                { number: "198129874", link: "https://qm.qq.com/q/FEUkJOG5wW" },
              ],
              // githubLink: "https://github.com/virmath/docs",
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