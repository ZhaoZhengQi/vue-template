<template>
  <div class="login-container">
    <div class="login-title">用户登录</div>
    <el-form class="el-form-login" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.userPassword"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
    <div class="login-btn" :loading="loading" @click="handleLogin">
      <el-button>登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { lStorage, setToken } from '@/utils'
import { addDynamicRoutes } from '@/router'

const router = useRouter()
const { query } = useRoute()

const form = ref({
  userName: '',
  userPassword: '',
})
function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    form.value.userName = localLoginInfo.name || ''
    form.value.userPassword = localLoginInfo.password || ''
  }
}

initLoginInfo()

const loading = ref(false)

async function handleLogin() {
  const { userName, userPassword } = form.value
  if (!userName || !userPassword) {
    ElMessage({
      message: '请输入用户名和密码',
      type: 'warning',
    })
    return
  }
  try {
    loading.value = true
    // const res = await api.login({
    //   userName,
    //   userPassword: userPassword.toString(),
    // })
    const token = '123'
    ElMessage({
      message: '登录成功',
      type: 'success',
    })
    setToken(token)
    await addDynamicRoutes()
    console.log('query', query.redirect)
    if (query.redirect) {
      const path = query.redirect
      Reflect.deleteProperty(query, 'redirect')
      router.push({ path, query })
    } else {
      router.push('/')
    }
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .login-title {
    padding-left: 80px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  .el-form-login {
    width: 240px;
  }

  .login-btn {
    padding-left: 80px;
    margin-top: 10px;
  }
}
</style>
