<template>
  <!-- <router-view v-slot="{ Component, route }">
    <KeepAlive :include="keepAliveRouteNames">
      <component
        :is="Component"
        v-if="appStore.reloadFlag"
        :key="appStore.aliveKeys[route.name] || route.fullPath"
      />
    </KeepAlive>
  </router-view> -->
  <div class="main-wrap">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" appea mode="default">
        <component :is="Component" :key="route.path" class="app-main" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// import { useAppStore } from '@/store'
// import { useRouter } from 'vue-router'
// const appStore = useAppStore()
// const router = useRouter()

// const allRoutes = router.getRoutes()
// const keepAliveRouteNames = computed(() => {
//   return allRoutes
//     .filter((route) => route.meta?.keepAlive)
//     .map((route) => route.name)
// })
</script>

<style lang="scss">
.main-wrap {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.app-main {
  position: absolute;
  inset: 20px;
  z-index: 10;
  padding: 20px;
  overflow: auto;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}
</style>
