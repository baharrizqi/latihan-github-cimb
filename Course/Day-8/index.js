// const alphaValue = (str) => {
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i++) {
//         result += (alpArray.indexOf(str.charAt(i))+1)

//     }
//     return result
// }
// console.log(alphaValue('dca'))

// const alphaValue = (str) => {
//     str = str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i++) {

//         result += (alpArray.indexOf(str[i])+1)
//     }
//     return result
// }
// console.log(alphaValue('dc'))
// console.log(alpArray.indexOf('c'))

// const alphaValueGanjil = (str) => {
//     str = str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = 0
//     for (let i = 0; i < str.length; i++) {
//         if ( i % 2 !== 0) {
//             continue
//         }
//         result += (alpArray.indexOf(str[i])+1)
//     }
//     return result
// }
// console.log(alphaValueGanjil('abc'))

// const alphaValueAngka = (str) => {
//     str = str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = ''
//     for (let i = 0; i < str.length; i++) {

//         result += (alpArray.indexOf(str[i])+1)
//     }
//     return result
// }
// console.log(alphaValueAngka('abc'))

class Product {
    constructor(Nama, Harga) {
        this.Nama = Nama
        this.Harga = Harga
    }
}
let arr = [
    new Product('apel', 10000),
    new Product('apple', 5000),
    new Product('bape', 7000),
    new Product('mangga', 20000)
]

// const searchProductName = str => {
//     return arr.filter((value) =>{
//         if(value.Nama.includes(str)){//boolean
//             return true
//         }else{
//             return false
//         }
//     })
// }

// function searchProductName (str) {
//     return arr.filter((value) => value.Nama.toLowerCase().includes(str.toLowerCase()))
// }

// console.log(searchProductName('m'));

// const searchProductName = str => {
//     return arr.filter((value) => value.Nama.toLowerCase().includes(str.toLowerCase()))
// }

// console.log(searchProductName('a'));

// const searchProductPrice = (min,max) =>{
//     return arr.filter(val => val.Harga >= min && val.Harga <= max)
// }

// console.log(searchProductPrice(7000,20000));

// let a = {
//     nama: 'Sanji',
//     asal: 'Jepang',
//     kontak: {
//         rumah: 'Di rumah',
//         kota: 'BSD'
//     }
// }
// let { nama,asal,kontak:{rumah,kota}} = a

// console.log(kota)

let totalA = 0
let totalB = 0
let hasil
// const exercise = number => {
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] > 0) {
//             totalA += number[i]
//         } else if (number[i] < 0) {
//             totalB += number[i]
//         }
//     }
// }


// const exercise = number =>{
//     totalA = number => number>0 
    
//     totalB = number => number<0 
//     return totalA
//     return totalB
// }
// exercise([-2, -3, 10, 2, -5])
// console.log([totalA, totalB]);
