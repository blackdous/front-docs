module.exports = {
  lang: 'zh-CN',
  title: '前端',
  description: '前端相关',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '技术选型',
        children: [
          { text: '语言框架选型', link: '/framework/lang.md' },
          { text: '脚手架选型', link: '/framework/cli.md' },
          { text: '移动端、原生选型', link: '/framework/mobile.md' },
          { text: '小程序选型', link: '/framework/mirco.md' }
        ]
      },
      { 
        text: '语言开发规范', 
        children: [
          { text: 'HTML规范', link: '/baselang/html.md' },
          { text: 'CSS规范', link: '/baselang/css.md' },
          { text: 'H5规范', link: '/baselang/h5.md' },
          { text: 'JavaScript/ES规范', link: '/baselang/javascript.md' },
          { text: 'TS规范', link: '/baselang/ts.md' },
          { text: 'Vue规范', link: '/baselang/vue.md' },
          { text: 'React规范', link: '/baselang/react.md' },
          { text: 'Node规范', link: '/baselang/node.md' }
        ]
      },
      { 
        text: 'Git规范', 
        children: [
          { text: 'Git常规规范', link: '/git/usage.md' },
          { text: 'Git-flow规范', link: '/git/workflow.md' },
          { text: 'Git-commit规范', link: '/git/commit.md' }
        ]
      },
      {
        text: '脚手架',
        children: [
          { text: 'Vue 脚手架', link: '/cli/vue.md' },
          { text: 'React 脚手架', link: '/cli/react.md' },
          { text: 'Rollup 脚手架', link: '/cli/rollup.md' },
          { text: 'Vite 脚手架', link: '/cli/vue-vite.md' }
        ]
      },
      {
        text: '代码校验规则',
        children: [
          { text: 'eslint 规则', link: '/lint/eslint.md' },
          { text: 'ts 规则', link: '/lint/ts.md' }
        ]
      }
    ]
  },
}