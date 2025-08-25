import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "虚数精灵",
  description: "网站维护中...",
  themeConfig: {
    // logo: '/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/user_manual' }
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
      message: '<p><a href="https://beian.miit.gov.cn">桂ICP备20002246号-2</a><br /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=45080202000392" rel="noreferrer" target="_blank">桂公网安备45080202000392号</a></p>'
    }
  }
})
