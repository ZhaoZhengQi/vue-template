<template>
  <div class="app-wrapper">
    <div class="top-header">
      <!-- 顶部 navbar -->
      <AppHeader />
    </div>
    <div class="main-container">
      <!-- 左侧menu -->
      <el-scrollbar>
        <SideBar class="sidebar" />
      </el-scrollbar>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/header/index.vue'
import SideBar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.top-header {
  height: 64px;
}

.sidebar {
  position: relative;
  z-index: 2;
  min-width: 200px;
  height: calc(100vh - 64px);
}

.sidebar-container {
  min-width: 200px;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
