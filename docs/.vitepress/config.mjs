import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "圣哥の知识经验库",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [1, 6],
    logo:'/BrotherSheng.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
	      text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
	  { text: 'test', link: '/test'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sheng-brother' }
    ]
  }
})
