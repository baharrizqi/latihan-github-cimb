
// const validator = (arr,cb) => {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//       if (cb(arr[i])) {
//           arrResult[i] = 1
//       }else{
//           arrResult[i] =0
//       }
//     }
//     return arrResult
// }
// let arrParam = [2,3,7,4,1,2]
// const cb = (val) => {
//  if (val % 2 ==0) {
//      return 1
//  }else{
//      return 0
//  }
// }
// console.log(validator(arrParam,cb))


// const validator = (arr,cb) => {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//       if (cb(arr[i])) {
//           arrResult[i] = 1
//       }else{
//           arrResult[i] =0
//       }
//     }
//     return arrResult
// }
// let arrParam = [2,3,7,4,1,2]
// console.log(validator(arrParam,(val) => {
//     if (val % 2 ==0) {
//         return 1
//     }else{
//         return 0
//     }
// }))

// const validator = (arr, cb) => {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//         arrResult[i] = cb(arr[i])
//     }
//     return arrResult
// }
// let arrParam = [2, 3, 7, 4, 1, 2]
// const cb = (val) => {
//     return val * 2
// }
// console.log(validator(arrParam, cb))

// const validator = (arr, cb) => {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//         arrResult.push(cb(arr[i]))
//     }
//     return arrResult
// }
// let arrParam = [2, 3, 7, 4, 1, 2]
// const cb = (val) => {
//     return val * 2
// }
// console.log(validator(arrParam, cb))

// let arr = [1,2,3,4]
// console.log(arr.map((val) =>{
//     return val *2
// }));




