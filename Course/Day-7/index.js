/*
function tambah1(){
    return 3
}
function tambah2(a){
    return a
}
console.log(tambah1()+tambah2(0))
*/

// let orang = {
//     nama: 'iBahri',
//     tahunlahir: '1997',
//     asal: 'Surabaya'
// }
// let arrKaryawan = [iBahri,]

// class Person{
//     constructor(paramNama,paramTahunlahir,paramAsal){
//         this.nama = paramNama
//         this.tahunlahir = paramTahunlahir
//         this.asal = paramAsal
//     }
// }
// class Developer extends Person{
//     constructor(nama,tahunlahir,asal,speciality,pengalaman){ // construtor adalah parameter kayak function
//         super(nama,tahunlahir,asal)
//         this.speciality = speciality
//         this.pengalaman = pengalaman
//     }
// }

// class Product {
//     constructor(name,price,stock,qty){
//         this.name = name
//         this.price = price
//         this.stock = stock
//         this.qty = qty
//     }
// }

// class Clothing extends Product{
//     constructor(name,price,stock,qty,size){
//         super(name,price,stock,qty)
//         this.size = size
//     }
// }
// let a  = new Person('Bahri','1990','Sunda')
// let b = new Person('Bahar','1997','Jawa')
// let c = new Clo
// console.log(a)
// console.log(b)


//hitung uang parkir tarif pertama 2 ribu 2 jam , setelah 2 jam tarifnya jadi 500 perak perjam
// let price
// function tarif(input) {
// if (input <= 2) {
//     price = 2000
//     return price
// }
// else{
//     price = 2000 + (500*(input-2))
//     return price
// }
// }
// console.log(tarif(3))

// function parkir(hour){
//     if (hour<= 2) {
//         return 2000*hour
//     }
//     return 2000 * 2 + ((hour-2)*500)
// }
// console.log(parkir(3))

// let result = 0
// while (hour>0) {
//     if (hour <= 2) {
//         result += 2000
//     }else{
//         result += 500
//     }
//     hour--
// }
// return result


// let arr = [1,50,60,20,100]
// let max = arr[i]
// let min = arr[i]
// function selisih(){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<max) {
//             max = arr[i]
//         }else{
//             max = max
//         }
//         if (arr[i]<min) {
//             min = arr[i]
//         }else{
//             min = min
//         }

//         return max - min
//     }
    
// }
// console.log(arr)

// function maxDiff(arr = []){
//     arr.sort(function(a,b){
//         return a-b
//     })
//     return arr[arr.length-1] -arr[0]
// }

// console.log(maxDiff([1,5,10,200,100]))

let huruf = ('abcdefghijklmnopqrstuvwxyz').split('')
let tmp = 0
let j = 0
function kata(input){
do{
for (let i = 0; i < huruf.length; i++) {
    if (input[j] == huruf[i]) {
        tmp += (i+1)
        j++
    }
} 
}while (j<input.length)
return tmp
}
let input = 'dc'
console.log(kata(input))
