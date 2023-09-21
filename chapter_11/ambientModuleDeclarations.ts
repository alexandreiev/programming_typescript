// declare module 'module-name' {
//     export type MyType = number
//     export type MyDefaultType = {a: string}
//     export let myExport: MyType
//     let myDefaultExport: MyDefaultType
//     export default myDefaultExport
// }

// declare a module that can be imported, where each of its imports are any
// declare module 'unsafe-module-name'

// import {x} from 'unsafe-module-name'
// x // any


// // Type json files imported with Webpack's json-loader
// declare module 'json!*' {
//     let value: object
//     export default value
// }

// // Type CSS files imported with Webpack's style-loader
// declare module '*.css' {
//     let css: CSSRuleList
//     export default css
// }

// import a from 'json!myFile'
// a   // object

// import b from './widget.css'
// b   // CSSRuleList