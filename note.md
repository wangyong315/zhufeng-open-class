## Redux 专注状态管理的库

- Redux专注于状态管理，和react解耦
- 单一状态，单向数据流
- 核心概念  store action reducer dispatch

## Redux和React一起用
- 把store.dispatch方法传递给组件，内部可以调用修改状态
- Subscribe订阅render函数。每次修改都重新渲染
- redux相关内容。移动到单独的文件index.redux.js单独管理
