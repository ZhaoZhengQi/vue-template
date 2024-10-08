<template>
  <div class="page-content">
    <hy-table
      :listData="tableData"
      :listCount="tableData.length"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="default"
          @click="handleNewClick"
        >
          新建用户
        </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btn">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="small"
            link
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="small"
            link
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script setup>
// import { ref, watch } from 'vue'
// import { useStore } from '@/store'
// import { usePermission } from '@/hooks/use-permission'

import HyTable from '@/base-ui/table'

const props = defineProps({
  // 表格的配置
  contentTableConfig: {
    type: Object,
    require: true,
  },
  // 表格的数据
  tableData: {
    type: Array,
    require: true,
  },
  // 传递过来的页面名称
  pageName: {
    type: String,
    required: true,
  },
  // 临时添加 操作权限对象 后续会从pinia中获取
  accessLevelObj: {
    type: Object,
    default: () =>
      reactive({
        isCreate: true,
        isUpdate: true,
        isDelete: true,
        isQuery: true,
      }),
  },
})
const emit = defineEmits(['newBtnClick', 'editBtnClick', 'delBtnClick'])

// 0.获取操作的权限
// 把 props.accessLevelObj 解构出来
const { isCreate, isUpdate, isDelete, isQuery } = toRefs(props.accessLevelObj)

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })

watch(pageInfo, () => getPageData())

// TODO 2.发送网络请求 queryInfo = {}
const getPageData = (queryInfo) => {
  if (!isQuery.value) return
  if (!queryInfo) queryInfo = {}
  // 从pinia中获取数据
}
getPageData()
// TODO 3.从pinia中获取数据 表格数据和总条数 通过计算属性获取
// const dataList = computed(() =>
//   store.getters[`system/pageListData`](props.pageName),
// )
// const dataCount = computed(() =>
//   store.getters[`system/pageListCount`](props.pageName),
// )

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter((item) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handler') return false
  return true
})

// 5.删除/编辑/新建操作
const handleDeleteClick = (item) => {
  console.log(item)
  emit('delBtnClick', item)
  // TODO 通过pinia调接口
  // store.dispatch('system/deletePageDataAction', {
  //   pageName: props.pageName,
  //   id: item.id,
  // })
}
const handleNewClick = () => {
  emit('newBtnClick')
}
const handleEditClick = (item) => {
  emit('editBtnClick', item)
}
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
