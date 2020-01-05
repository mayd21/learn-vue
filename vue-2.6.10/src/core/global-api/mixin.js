/* @flow */

import { mergeOptions } from '../util/index'

// 融合组件参数
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
