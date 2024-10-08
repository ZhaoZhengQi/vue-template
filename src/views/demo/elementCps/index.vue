<template>
  <div class="element-box">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="demo"
      :tableData="tableData"
    >
      <template #image="scope">
        <el-image
          preview-teleported
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script setup>
import { contentTableConfig } from './config/content.config'

const tableData = ref([
  {
    name: '小米10',
    oldPrice: 2999,
    newPrice: 1999,
    imgUrl: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    status: 1,
    createAt: '2021-08-01 12:00:00',
    updateAt: '2021-08-01 12:00:00',
  },
  {
    name: '小米19',
    oldPrice: 2999,
    newPrice: 1999,
    imgUrl: 'https://img.yzcdn.cn/vant/ipad.jpeg',
    status: 1,
    createAt: '2021-08-01 12:00:00',
    updateAt: '2021-08-01 12:00:00',
  },
])
</script>

<style lang="scss" scoped></style>
