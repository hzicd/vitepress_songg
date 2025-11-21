import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'



export default defineConfig({
  
  base: '/',
  title: "华子的博客",
  description: "",
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    lineNumbers: true,
  },

  srcDir: "docs",
  themeConfig: {
     //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'MA4B33E3QF',
        apiKey: 'acd76b80d7b34f90672332dbb88cacd6',
        indexName: 'doc',
      },
    },
    appearance: 'light',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: {
      level: [1,2,3],
      label: '本章目录'
    },
    logo: "/img/favicon.ico",
    nav: nav,
    sidebar: sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '到底了~',
      copyright: 'Copyright ©2025 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025131207号</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzicd/vitepress_songg' },
      { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=ZtqABPum8lwqzUbX-JOwQhMOqowFYYqs' },

    ]
  },
})
