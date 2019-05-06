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
// 初始化混入
initMixin(Vue)
// props、methods、data、compute、watch的状态初始化
stateMixin(Vue)
// $on、$once、$off、$emit事件函数初始化
eventsMixin(Vue)
// 初始化生命周期
lifecycleMixin(Vue)
// $nextTick、_render函数初始化
renderMixin(Vue)

export default Vue
