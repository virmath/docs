import { defineConfig } from "vitepress";

export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      title: "虚数精灵",
      description: "网站维护中...",
      themeConfig: {
        i18nRouting: true,
        logo: "/favicon.ico",
        nav: [
          { text: "主页", link: "/index" },
          { text: "公告", link: "/docs/announcements" },
        ],

        sidebar: [
          {
            text: '概览',
            items: [
              { text: '产品简介', link: '' },
              { text: '系统要求', link: '' },
              { text: '全部下载', link: '' },
              { text: '更新日志', link: '' },
            ]
          },
          {
            text: '使用指南',
            items: [
              { text: '快速入门', link: '' },
              { text: '基础功能', link: '' },
              { text: '高级功能', link: '' },
            ]
          },
          {
            text: '参考',
            items: [
              { text: '节点参考', link: '' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: '常见问题 (FAQ)', link: '' },
              { text: '用户协议', link: '' },
              { text: '隐私政策', link: '' },
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
      description: "网站维护中...",
      themeConfig: {
        logo: "/favicon.ico",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/en/index" },
          { text: "Announcement", link: "/en/docs/announcements" },
        ],

        // sidebar: [
        //   {
        //     text: 'Examples',
        //     items: [
        //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/api-examples' }
        //     ]
        //   }
        // ],

        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ],

        footer: {
          message:
            '<a href="https://beian.miit.gov.cn">桂ICP备20002246号-2</a><br /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=45080202000392" rel="noreferrer" target="_blank">桂公网安备45080202000392号</a>',
        },
      },
    },
  },
});
