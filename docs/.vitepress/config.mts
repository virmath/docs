import { defineConfig } from "vitepress";

export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      title: "虚数精灵",
      themeConfig: {
        logo: "/favicon.ico",
        nav: [
          { text: "主页", link: "/index" },
          { text: "公告", link: "/docs/announcements" },
          { text: "文档", link: "/docs/introduction" },
        ],

        sidebar: [
          {
            text: '概览',
            items: [
              { text: '简介', link: '/docs/introduction' },
              { text: '系统要求', link: '/docs/system-requirements' },
              { text: '全部下载', link: '/docs/downloads' },
              { text: '更新日志', link: '/docs/changelog' },
            ]
          },
          {
            text: '使用指南',
            items: [
              { text: '快速入门', link: '/docs/quick-start' },
              { text: '基础功能', link: '/docs/basic-features' },
              { text: '高级功能', link: '/docs/advanced-features' },
            ]
          },
          {
            text: '参考',
            items: [
              { text: '节点参考', link: '/docs/node-reference' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: '常见问题 (FAQ)', link: '/docs/faq' },
              { text: '用户协议', link: '/docs/terms-of-service' },
              { text: '隐私政策', link: '/docs/privacy-policy' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/virmath/docs' }
        ],

        footer: {
          message:
            '<a href="https://beian.miit.gov.cn">桂ICP备20002246号-2</a><br /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=45080202000392" rel="noreferrer" target="_blank">桂公网安备45080202000392号</a>',
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "Virmath Elf",
      themeConfig: {
        logo: "/favicon.ico",
        nav: [
          { text: "Home", link: "/en/index" },
          { text: "Announcement", link: "/en/docs/announcements" },
          { text: "Documents", link: "/en/docs/introduction" },
        ],

        sidebar: [
          {
            text: 'Overview',
            items: [
              { text: 'Introduction', link: '/en/docs/introduction' },
              { text: 'System Requirements', link: '/en/docs/system-requirements' },
              { text: 'Downloads', link: '/en/docs/downloads' },
              { text: 'Changelog', link: '/en/docs/changelog' },
            ]
          },
          {
            text: 'User Guide',
            items: [
              { text: 'Quick Start', link: '/en/docs/quick-start' },
              { text: 'Basic Features', link: '/en/docs/basic-features' },
              { text: 'Advanced Features', link: '/en/docs/advanced-features' },
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Node Reference', link: '/en/docs/node-reference' },
            ]
          },
          {
            text: 'Other',
            items: [
              { text: 'FAQ', link: '/en/docs/faq' },
              { text: 'Terms of Service', link: '/en/docs/terms-of-service' },
              { text: 'Privacy Policy', link: '/en/docs/privacy-policy' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/virmath/docs' }
        ],

        footer: {
          message:
            '<a href="https://beian.miit.gov.cn">桂ICP备20002246号-2</a><br /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=45080202000392" rel="noreferrer" target="_blank">桂公网安备45080202000392号</a>',
        },
      },
    },
  },
});
