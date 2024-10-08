// import { useStore } from '@/store'

export function usePermission(pageName, handleName) {
  // 去store中获取用户的权限
  // 比对权限，返回true或者false
  // const store = useStore()
  // const permissions = store.state.login.permissions // ['system:element:create', 'system:element:update']
  // const permissions = []
  // const verifyPermission = `system:${pageName}:${handleName}`

  // name = "HelloWorld"
  // !name -> false
  // !!name -> true

  // !!"" -> false
  // !!null -> false
  // !!undefined -> false
  // !!0 -> false
  // !!false -> false
  console.log('usePermission', pageName, handleName)
  // !!permissions.find((item) => item === verifyPermission)
  // return !!permissions.find((item) => item === verifyPermission)
  return true
}
