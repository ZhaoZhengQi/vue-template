import { defineStore } from "pinia"
import { UserState } from "./types"
import pinia from "@/store"
import { refreshUserInfo, userLogin } from "@/api/user"

export const useUserStoreHook = defineStore(
	// 唯一ID
	"User",
	{
		state: () => ({
			username: "政锜",
			accessToken: "",
			roles: ["common"]
		}),
		getters: {},
		actions: {
			// 用于更新store数据
			// UserState为定义好的state类型
			updateInfo(partial: Partial<UserState>) {
				this.$patch(partial)
			},
			// 用户登录
			storeUserLogin(data) {
				return userLogin(data).then((res) => {
					this.username = res.username
					this.roles = res.roles
					this.accessToken = res.accessToken
					return res
				})
			},
			// 刷新用户信息
			refreshUserInfo() {
				if (this.username == "政锜" && this.accessToken != "") {
					refreshUserInfo({
						accessToken: this.accessToken
					})
						.then((res) => {
							this.username = res.username
							this.roles = res.roles
							this.accessToken = res.accessToken
						})
						.catch(() => {
							this.accessToken = ""
						})
				}
			}
		},
		// 持久化保存 accessToken
		persist: {
			key: "userInfo",
			storage: sessionStorage,
			pick: ["accessToken"]
		}
	}
)

// 导出该Store
export function useUserStore() {
	return useUserStoreHook(pinia)
}
