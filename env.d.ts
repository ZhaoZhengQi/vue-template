// 在文件中加上
// declare module '*.vue' {
//    import type { DefineComponent } from 'vue'
//    const component: DefineComponent<{}, {}, any>
//    export default component
// }
// 或者
// declare module '*.vue' {
//    import type { DefineComponent } from 'vue'
//    const component: ComponentOptions | ComponentOptions['setup']
//    export default component
// }
