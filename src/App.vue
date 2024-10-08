<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
// Element Plus 还提供了一个 Vue 组件 ConfigProvider 用于全局配置国际化的设置。
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
