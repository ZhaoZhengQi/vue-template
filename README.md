# Front Base Common Web

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# 强制使用 pnpm 下载包

为了统一包管理工具，需要强制使用 pnpm 来安装依赖包。
`npm install -g pnpm `

# eslint 依赖说明

已安装下面的依赖来支持 vue3 环境的代码校验

```perl
  # 让所有与 prettier 规则存在冲突的 Eslint rules 失效，并使用 prettier 进行代码检查
  "eslint-config-prettier": "^8.6.0",
  "eslint-plugin-import": "^2.27.5",
  "eslint-plugin-node": "^11.1.0",
  # 运行更漂亮的 Eslint，使 prettier 规则优先级更高，Eslint 优先级低
  "eslint-plugin-prettier": "^4.2.1",
  # vue.js 的 Eslint 插件（查找 vue 语法错误，发现错误指令，查找违规风格指南
  "eslint-plugin-vue": "^9.9.0",
  # 该解析器允许使用 Eslint 校验所有 babel code
  "@babel/eslint-parser": "^7.19.1",
```

# 配置 prettier

有了 eslint，为什么还要有 prettier？
eslint 针对的是 javascript，它是一个检测工具，包含 js 语法以及少部分格式问题，在 eslint 看来，语法对了就能
保证代码正常允许，格式问题属于其次；
而 prettier 属于格式化工具，它看不惯格式不统一，所以它就把 eslint 没干好的事接着干，另外，prettier 支持
包含 js 在内的多种语言。
总结起来，eslint 和 prettier 这俩兄弟一个保证 js 代码质量，一个保证代码美观。

# 配置 stylelint

[stylelint](https://stylelint.io/)为 css 的 lint 工具。可格式化 css 代码，检查 css 语法错误与不合理的写法，指定 css 书写顺序等

# 配置 husky

强制让开发人员按照代码规范来提交
利用 husky 在代码提交之前出发 git hook，然后执行 pnpm format 来自动的格式化代码

# 配置 commitlint

对于 commit 信息，也是有统一规范的，不能随便写,subject 为统一风格
当 commit 提交信息时，就不能再随意写，必须是 git commit -m 'fix: xxx' 符合类型的才可以，需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的。
提交规范 参考 commitlint.config.js 配置
嫌上面麻烦，可以使用提交方式二
全局安装 pnpm i -g commitizen
全局安装 commitizen,如此一来可以快速使用 git cz 命令进行启动
安装后 也可以使用 pnpm cz 代替执行 git cz
执行 git cz 前，需要执行 `git add .`

# 补充配置

在项目中最好是使用统一行尾符（建议不管还是 mac 还是 windows 都使用 lf），但是按上面的配置，发现保存的时候无法将 crlf 行尾符转换成 lf 行尾符，当然可以直接点击 vscode 的右下角切换行尾符，但终究是有点麻烦，这时使用.editorconfig 就很有必要了，保存的时候就可以直接转换成 lf 行尾符了，当然.editorconfig 的作用不仅仅于此，配置得当甚至可以替换 eslint 和 prettier,而且其配置还是跨平台和跨编辑器的

# 集成 pinia 状态管理

TODO 封装
集成[数据持久化插件](https://juejin.cn/post/7137183785841328136)

# 集成 router@4x

vue-router@4x 相对于 vue-router3x 除了新增了组合式 API 以外，还删除或变动了不少地方

> 注意：命名路由 params 传参（已被废弃）

# 配置 scss 全局变量

/src/styles/variables.scss，并定义 scss 变量

# 常用工具类封装

src 下

- is 库-utils/common/is.js
- 封装 localStorage 和 sessionStorage（支持命名空间和过期时间）- utils/storage

# 集成 axios

- 封装 axios 请求库
  使用可参考@api

# 配置环境变量

.env（所有环境生效）.env.development（开发环境配置） .env.production（生产环境配置）

1. 以 VITE\_ 为前缀定义变量

`VITE_APP_TITLE = "Vite Vue3 Template"`

2. 使用变量

`import.meta.env.VITE_APP_TITLE`

# lint-staged

只检查&修复修改过的文件，也就是说 lint-staged 能让 eslint 等插件只扫描暂存区的文件而不是全盘扫描，不会影响同事以前写过的代码。

如果项目紧急且不需要规范，则可以打开根目录下.husky/\_/pre-commit 文件，注释掉 pnpm lint-staged 的配置

如果需要灵活使用则可以利用命令：git commit -m'feat: test' -n 提交到仓库中，-n 表示忽略 pre-commit 钩子，直接提交，本次提交的是不符合编码规范的代码。

# 开发环境集成 VueDevTools

添加插件 `vite-plugin-vue-devtools`

> ⚠️：只在开发环境生效，生产环境不生效

无需浏览器安装，直接使用 pnpm 安装即可使用
`pnpm install vite-plugin-vue-devtools -D`

```js
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [VueDevTools(), vue()],
})
```

[介绍：](https://juejin.cn/post/7249286574530576439)

### Overview

展示应用程序的快速概览，扩展应用正在使用的 Vue 版本、页面和组件数量。

### Pages

Pages 展示了当前注册的路由并且提供了一个快捷的方式进行路由导航。
对于动态路由，它还提供了一个表单来交互式地填写每个参数。
你还可以在搜索框输入指定的路径来匹配相应的路由。

### Components

Components 展示了你在应用程序使用的组件和它们的层级关系。你可以选中相应的组件来查看它的详细信息(例如 data、props 等)。

### Assets

Assets 展示了你的静态资源列表(目前只展示 Vite config.publicDir 目录下资源)以及它们的详细信息，你可以在浏览器打开或下载它们。

### Timeline

Timeline 分为三个分类：分别是性能、路由跳转及 Pinia。你可以切换它们来查看对应的状态变化及时间线。

### Routes

Routes 是一个与 Vue Router 进行集成的功能，它允许你查看你所注册的路由及相关详细信息。

### Pinia

Pinia 是一个与 Pinia 进行集成的功能，它允许你查看你所注册的模块及相关详细信息。

### Graph

Graph 提供了显示组件之间关系的依赖视图。

### Inspect

Inspect 集成了 Vite -plugin- Inspect，允许你检查 Vite 的转换步骤。了解每个插件如何转换你的代码并发现潜在问题是很有帮助的。

### Inspector

你也可以使用 Inspector 特性来检查 DOM 树，看看是哪个组件在渲染它。单击以转到特定行的编辑器。使更改更容易，而不需要彻底了解项目结构。(此功能基于 vite-plugin-vue-inspector 实现)
