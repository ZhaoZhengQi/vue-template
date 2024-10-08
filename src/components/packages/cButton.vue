<template>
  <div>
    <el-button @click="handleClick">按钮</el-button>
    <el-button type="primary">type按钮</el-button>
    <el-button disabled type="primary">禁用按钮</el-button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('点击了按钮')
  ElMessage({
    message: '点击了按钮',
    type: 'warning',
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/element/button';
</style>
