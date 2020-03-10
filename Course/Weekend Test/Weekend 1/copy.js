// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 


// 1

/*
teks = "Bahar Rizqi"
console.log(teks.replace(/[aueio]/gi, ""))
*/

// let txt = 'Halo Onic Esports'
// let tmp = []
// let j = 0
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] == 'a' || txt[i] == 'A' ||
//         txt[i] == 'i' || txt[i] == 'I' ||
//         txt[i] == 'u' || txt[i] == 'U' ||
//         txt[i] == 'e' || txt[i] == 'E' ||
//         txt[i] == 'o' || txt[i] == 'O' || txt[i] == ' '){
//         j=j
//     }else{
//         tmp[j] = txt[i]
//         j++
//     }
// }
// console.log(tmp.join(''))



// 2
//Sort Abjad A-Z
/*
let abjad = ['Abdul','Dany','Rizqi','Bahar','Lukman']
let temp
for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < abjad.length; j++) {
        if (abjad[i]<abjad[j]) {
            temp = abjad[i]
            abjad[i] = abjad[j]
            abjad[j] = temp
        }
        else{
            abjad[i] = abjad[i]
        }
        
    }
    
}
console.log(abjad)
*/
/*
//Sort Abjad Z-A
let abjad = ['Abdul','Dany','Rizqi','Bahar','Lukman']
let temp
for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < abjad.length; j++) {
        if (abjad[i]>abjad[j]) {
            temp = abjad[i]
            abjad[i] = abjad[j]
            abjad[j] = temp
        }
        else{
            abjad[i] = abjad[i]
        }
        
    }
    
}
console.log(abjad)
*/


// 3
/*
//Sort Angka dari kecil ke besar
let angka = [10,1,5,4,2]
let temp
for (let i = 0; i < angka.length; i++) {
    for (let j = 0; j < angka.length; j++) {
        if (angka[i]<angka[j]) {
            temp = angka[i]
            angka[i]=angka[j]
            angka[j]=temp
        }
        else{
            angka[i] = angka[i]
        }  
    }
}
console.log(angka)
*/
/*
//Sort Angka dari besar ke kecil
let angka = [10,1,5,4,2]
let temp
for (let i = 0; i < angka.length; i++) {
    for (let j = 0; j < angka.length; j++) {
        if (angka[i]>angka[j]) {
            temp = angka[i]
            angka[i]=angka[j]
            angka[j]=temp
        }
        else{
            angka[i] = angka[i]
        }  
    }
}
console.log(angka)
*/

// 4
// let angka = [1,4,60,70,50,90]
// let max = angka[0]
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i]>max) {
//         max = angka[i]
//     }else{
//         max = max
//     }   
// }
// console.log(max)


// 5 FIX
// let arrItem = ['Baju','Celana',1,4,'Jaket',21]
// let arrTmp = []
// let j = 0
// for (let i = 0; i < arrItem.length; i++) {
//     if (typeof(arrItem[i]) == 'string') {
//         arrItem[i] = ''
//         j=j
//     }else{
//         arrTmp[j] = arrItem[i]
//         j++
//     }
    
// }
// console.log(arrTmp)


// 6 FIX
// let nama = "Onic Esports";
// let tampilan = nama.slice(1,-1);
// console.log(tampilan)


let txt = 'Halo Evos Esports'
let tmp = txt.split('')
let arrsmp = []
let j = 0
for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] = tmp[i].startsWith(0)) {
        tmp[i] = ''
        j = j
    }else{
        arrsmp = tmp[i]
        j++
    }
    
}
console.log(arrsmp)

// let txt = 'Halo Evos Esports'
// let tmp = txt.split('')
// let arrsmp = []
// let j = 0 
// for (let i = 0; i < txt.length; i++) {
    
//     if (txt[i] == txt.pop() || txt == txt.shift()) {
        
        
//     }else{
//         arrsmp[j] = txt[i]
        
//     }
    
// }
// console.log(arrsmp)

// var fruits = ["Apple", "Banana"];
// console.log(fruits.pop())

// console.log(txt.substring(1,16))

// var str = 'asdfghjkl';
// console.log(str.split(''))

