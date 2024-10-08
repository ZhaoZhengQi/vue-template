<template>
  <div class="header">
    <div class="left">
      <span>基础配置管理项目</span>
    </div>
    <div class="right">
      <span @click="onQuit">退出登录</span>
    </div>
  </div>
</template>

<script setup>
import { removeToken, toLogin } from '@/utils'

const onQuit = () => {
  toLogin()
  removeToken()
  console.log('点击 退出登录')
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-shadow: var(--el-box-shadow-lighter);

  .left {
    span {
      margin-left: 20px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .right {
    padding-right: 20px;

    span {
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
