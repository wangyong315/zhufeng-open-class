
// // function hello() {
// //     console.log('hello imoce');
// // }

// // function WrapHello(fn) {
// //     return function () {
// //         console.log('before say hello');
// //         fn()
// //         console.log('after say hello');
// //     }
// // }

// // hello = WrapHello(hello) // 装饰器模式

// // hello()

// // hoc 属性代理 和 反向继承
// function WraperHello(Comp) {
//   // class WrapComp extends Component{
//   //     render(){
//   //         return(
//   //             <div>
//   //                 <p>这十个高阶组件</p>
//   //                 <Comp {...this.props}></Comp>
//   //             </div>
//   //         )
//   //     }
//   // }
//   class WrapComp extends Comp{
//       componentDidMount (){
//           console.log('hoc life circle');
//       }
//       render(){
//           return(
//               <div>
//                   <p>这十个高阶组件</p>
//                   <Comp {...this.props}></Comp>
//               </div>
//           )
//       }
//   }
//   return WrapComp
// }
// @WraperHello
// class Hello extends Component{
//   render(){
//       return(
//           <div>
//               hello imoc react     
//           </div>
//       )
//   }
// }
