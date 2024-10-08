<script setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
</script>

<template>
  <div class="home">
    <div class="icon">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <div style="margin-top: 10px; text-align: center">
      <el-button :icon="Search" circle></el-button>
      <el-button type="primary" :icon="Edit" circle></el-button>
      <el-button type="success" :icon="Check" circle></el-button>
      <el-button type="info" :icon="Message" circle></el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="danger" :icon="Delete" circle></el-button>
    </div>
    <div class="box">
      <span>全局scss变量</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.icon {
  display: flex;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 5px;
  margin-top: 10px;
  color: #fff;

  // background-color: $primaryColor;
  border-radius: 10px;
}
</style>
