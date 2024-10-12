<template>
	<div class="login-page">
		<h1>登录页</h1>
		<button @click="login">登录</button>
		<!-- <el-icon> -->
		<!-- <Edit /> -->
		<!-- <IconEpEdit /> -->
		<!-- <i-ep-edit-location /> -->
		<el-icon><i-ep-edit /></el-icon>
		<!-- <IconEpApple /> -->
		<!-- </el-icon> -->
	</div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index.ts"
import { useRouter } from "vue-router"
const userStore = useUserStore()
const router = useRouter()
const login = async () => {
	const res = await userStore.storeUserLogin({
		username: "admin",
		password: "admin"
	})
	if (res && res.code === 200) {
		console.log("登录成功")
		ElMessage({
			message: "登录成功",
			type: "success"
		})
		router.push("/")
	}
}
</script>

<style lang="less" scoped>
.login-page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 100px;
}
</style>
