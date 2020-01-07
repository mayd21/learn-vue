/**
 * 该文件为整个Vue项目的起始入口文件
 */
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 给Vue构造函数增加全局静态方法和属性
// 属性：config、util、options
// 方法：set、delete、nextTick、use、mixin、extend、component、directive、filter
initGlobalAPI(Vue)

// $isServer属性-是否是服务端渲染
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

// $ssrContext-ssr上下文
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

// 版本号
Vue.version = '__VERSION__'

export default Vue
