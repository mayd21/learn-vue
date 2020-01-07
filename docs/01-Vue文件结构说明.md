# Vue文件结构
本次采用的是v2.6.10版本的代码，其核心文件结构如下所示：
```
├── dist                         // 项目构建后的输出文件
├── flow                         // flow相关的类型声明文件
├── scripts                      // 项目构建的脚本和配置文件
├── src                          // 项目源文件
│   ├── compeiler                // 模板编译相关代码
│   ├── core                     // 通用的与运行时无关的核心代码
│   │   ├── components           // 内置组件
│   │   ├── global-api           // 全局API
│   │   ├── instance             // Vue实例的狗函数和原型方法
│   │   ├── observer             // 变化检测
│   │   ├── util                 // 工具方法
│   │   ├── vdom                 // 虚拟DOM
│   │   ├── config.js            // 默认配置文件
│   │   └── index.js             // 起始索引文件
│   ├── platforms                // 平台相关 包括web weex
│   ├── server                   // 服务端渲染相关
│   ├── sfc                      // 单文件组件的解析代码
│   └── shared                   // 项目公用的工具代码
├── test                         // 项目测试代码
├── package.json
```
# Vue入口
Vue项目的入口为core/index.js，从该文件开始执行，完成整个Vue的构建
