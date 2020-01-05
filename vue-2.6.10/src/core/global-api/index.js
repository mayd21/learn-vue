/* @flow */

/**
 * Vue全局静态方法和属性的初始化
 */
import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'
import { observe } from 'core/observer/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

export function initGlobalAPI (Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  // 定义Vue的全局配置，可以在启动之前对相关属性进行修改
  // 全局配置文档
  // https://cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE
  Object.defineProperty(Vue, 'config', configDef)

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // 暴露util相关方法，不建议使用
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  // 全局API文档
  // https://cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API

  // 全局API set、delete、nextTick
  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  // 2.6 explicit observable API
  // 2.6新增 让一个对象可响应
  Vue.observable = <T>(obj: T): T => {
    observe(obj)
    return obj
  }

  // 向Vue.options添加资源directives、filters、components
  // 资源文档
  // https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E8%B5%84%E6%BA%90
  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)

  // 增加全局API Vue.use()
  initUse(Vue)
  // 增加全局API Vue.mixin()
  initMixin(Vue)
  // 增加全局API Vue.extend()
  initExtend(Vue)
  // 增加全局API Vue.component()、directive()、filter()
  initAssetRegisters(Vue)
}
