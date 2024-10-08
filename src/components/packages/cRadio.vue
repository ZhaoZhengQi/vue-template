<template>
  <div>
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">单选 1</el-radio>
      <el-radio label="2" size="large">单选 2</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup>
const radio1 = ref('1')
</script>

<style lang="scss" scoped>
@import '@/styles/element/radio';
</style>
