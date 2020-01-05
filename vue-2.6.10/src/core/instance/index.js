/**
 * Vue实例构造函数
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // _init来自initMixin
  this._init(options)
}
// 增加 _init方法
initMixin(Vue)
// 增加 $props、$data、$set、$delete、$watch方法和属性
stateMixin(Vue)
// 增加 $on、$once、$off、$emit方法
eventsMixin(Vue)
// 增加 _update、$forceUpdate、$destroy方法
lifecycleMixin(Vue)
// 增加 $nextTick、_render方法
renderMixin(Vue)

export default Vue
