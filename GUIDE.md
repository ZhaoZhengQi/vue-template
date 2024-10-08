### 1. 免登录

在.env 文件中配置

```
//true:需要登录 false:不需要登录
VITE_NEED_LOGIN = true
```

### 2. 开发环境设置项目代理

根目录/settings/proxy-config.js
proxyConfigMappings.dev 数组中 配置代理
如果是多个，则配置数组，参考 dev 对象 ，如果只有单个，则配置对象参考 test 对象

### 3.页面结构，layout 布局，路由配置

1. 修改 src/layout，整体的布局文件 默认采用的 头部 左侧 右侧布局，具体参考示例
2. 路由配置在 src/views/xxx/route.js 该文件中配置 文件夹来区分不同的 route 配置，具体参考实例

### 4.集成 vue-echarts 图表库

采用的 vue-echarts 依赖，具体使用[参考官方文档](https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md)
[官网地址](https://vue-echarts.dev/)
实例参考 views/demo/echart/index.vue

### 5.使用 GSAP 动画库 (v3.x)

[官网地址](https://greensock.com/gsap/)
[中文文档](https://www.tweenmax.com.cn/api/tweenmax/)

### 6.集成 dayjs 时间库

[官网地址](https://dayjs.gitee.io/zh-CN/)

### 7.集成 lodash 工具库

[官网地址](https://www.lodashjs.com/)

### 8.集成 VueUse 工具库

[官网地址](https://vueuse.org/)

### 9.采用 elementPlus UI 库

[官网地址](https://element-plus.gitee.io/#/zh-CN/component/installation)

采用按需导入的方式 已配置 自动导入 功能

icon 自动导入 组件写法
命名写法
icon-ep-Search 或者 IConEpXxx
