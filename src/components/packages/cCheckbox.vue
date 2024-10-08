<template>
  <div>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="3">
      <el-checkbox
        v-for="city in cities"
        :key="city"
        :label="city"
        :disabled="city === '广州'"
      >
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup>
const checkedCities = ref(['上海', '北京'])
const cities = ['上海', '北京', '广州', '深圳', '香港']
</script>

<style lang="scss" scoped>
@import '@/styles/element/checkbox';
</style>
