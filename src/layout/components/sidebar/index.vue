<template>
  <div class="side-bar">
    <el-menu
      :default-active="activeKey"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <template v-for="item in menuOptions" :key="item.key">
        <template v-if="!item.children">
          <el-menu-item :index="item.path">{{ item.label }}</el-menu-item>
        </template>
        <template v-if="item.children">
          <el-sub-menu :index="item.path">
            <template #title>{{ item.label }}</template>
            <template
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
            >
              <template v-if="!subItem.children">
                <el-menu-item :index="subItem.path">
                  {{ subItem.label }}
                </el-menu-item>
              </template>

              <template v-if="subItem.children">
                <el-sub-menu :index="subItem.path">
                  <template #title>
                    <!-- <img :src="subItem.icon" alt="" /> -->
                    <span>{{ subItem.label }}</span>
                  </template>
                  <template
                    v-for="child in subItem.children"
                    :key="child.label"
                  >
                    <el-menu-item :index="child.path">
                      <template #title>{{ child.label }}</template>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { usePermissionStore } from '@/store'
import { isExternal } from '@/utils'

const curRoute = useRoute()
const permissionStore = usePermissionStore()

const activeKey = computed(() => curRoute.meta?.activeMenu || curRoute.name)
const menuOptions = computed(() => {
  return permissionStore.menus
    .map((item) => getMenuItem(item))
    .sort((a, b) => a.order - b.order)
})

const menu = ref(null)
watch(curRoute, async () => {
  await nextTick()
  menu.value?.showOption()
})
// 打印menuOptions
// console.log('菜单列表', menuOptions.value)
function getMenuItem(route, basePath = '') {
  let menuItem = {
    label: (route.meta && route.meta.title) || route.name,
    key: route.name,
    path: resolvePath(basePath, route.path),
    icon: '',
    order: route.meta?.order || 0,
  }

  const visibleChildren = route.children
    ? route.children.filter((item) => item.name && !item.isHidden)
    : []

  if (!visibleChildren.length) return menuItem

  if (visibleChildren.length === 1) {
    // 单个子路由处理
    const singleRoute = visibleChildren[0]
    menuItem = {
      ...menuItem,
      label: singleRoute.meta?.title || singleRoute.name,
      key: singleRoute.name,
      path: resolvePath(menuItem.path, singleRoute.path),
      icon: '',
    }
    const visibleItems = singleRoute.children
      ? singleRoute.children.filter((item) => item.name && !item.isHidden)
      : []

    if (visibleItems.length === 1) {
      menuItem = getMenuItem(visibleItems[0], menuItem.path)
    } else if (visibleItems.length > 1) {
      menuItem.children = visibleItems
        .map((item) => getMenuItem(item, menuItem.path))
        .sort((a, b) => a.order - b.order)
    }
  } else {
    menuItem.children = visibleChildren
      .map((item) => getMenuItem(item, menuItem.path))
      .sort((a, b) => a.order - b.order)
  }
  return menuItem
}
function resolvePath(basePath, path) {
  if (isExternal(path)) return path
  return (
    '/' +
    [basePath, path]
      .filter((path) => !!path && path !== '/')
      .map((path) => path.replace(/(^\/)|(\/$)/g, ''))
      .join('/')
  )
}

const handleOpen = () => {}
const handleClose = () => {}
// function handleMenuSelect(key, item) {
//   if (isExternal(item.path)) {
//     window.open(item.path)
//   } else {
//     if (item.path === curRoute.path) {
//       // appStore.reloadPage()
//     } else {
//       router.push(item.path)
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  height: calc(100vh - 64px);
  box-shadow: var(--el-box-shadow-lighter);
}

.el-menu {
  height: calc(100vh - 64px);
}
</style>
