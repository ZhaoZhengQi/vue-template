import { defineStore } from 'pinia'
// import { getUser } from '@/api/user'
import { removeToken, toLogin } from '@/utils'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
    }
  },
  getters: {
    userId() {
      return this.userInfo?.id
    },
    name() {
      return this.userInfo?.name
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      return this.userInfo?.role || []
    },
  },
  actions: {
    async getUserInfo() {
      try {
        // const res = await getUser()
        const res = {
          code: 0,
          data: {
            id: '1',
            name: 'admin',
            avatar: '',
            role: ['admin'],
          },
        }
        if (res.code === 0) {
          const { id, name, avatar, role } = res.data
          this.userInfo = { id, name, avatar, role }
          return Promise.resolve(res.data)
        }
        return Promise.reject(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      removeToken()
      this.userInfo = {}
      toLogin()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
  // 开始数据持久化
  // persist: true, // 默认为false，不开启持久化
  persist: {
    paths: ['userInfo'], // 存储userInfo
  },
  // 自定义修改key值和存储位置
  // 将persist: true,改为
  // persist: {
  //   key: 'storekey', // 修改存储的键名，默认为当前 Store 的 id
  //   storage: window.sessionStorage, // 存储位置修改为 sessionStorage
  //   paths: ['userInfo'], //  默认会将store中的所有字段都缓存，可以通过paths点符号路径数组指定要缓存的字段
  // },
})
