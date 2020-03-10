// let input = 'hello world'

// while (input){
//     console.log('loop')
// } --> ctrl+c untuk menghentikan looping unlimited

// for (let input = 0; input < 5; input++) {
//     console.log('loop')
// }

/* satu for loop akan menampilkan 1 sampai 20 kalo angka tsb kelipaatan 3 fizz 5 buzz, 3 dan 5 fizzbuzz
kalo bukan tampilkan angkanya

for (let i = 1; i < 20; i++) 
{
   if (i%3 == 0 && i%5 == 0) {
    console.log('fizzbuzz')
    break;
    } 
   else if (i%3 == 0) {
    console.log('Fizz')
    }
    else if (i%5 == 0) {
    console.log('buzz')
    }
    else {
    console.log(i)
    }   
} */

/*
let fizzbuzzcounter = 0
for (let i = 1; i < 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz')
        fizzbuzzcounter++
        if (fizzbuzzcounter == 2) {
            break;
        }
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('buzz')
    }
    else {
        console.log(i)
    }
}
*/

/*
for (let i = 1; i <= 5; i++) {
    let bintang = '*'
    for (let j = 1; j < 5; j++) { 
        bintang += '1'
    }
    console.log(bintang) 
}
*/

/*
let hasil = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) { 
        hasil +='*'
    }
    hasil += '\n'
}
console.log(hasil)
*/

/*
for (let i = 0; i < 5; i++) {
    let hasil = ''
    for (let j = 0; j < 5; j++) { 
        hasil +='*'
    }
    console.log(hasil)
}
*/

/*
for (let i = 0; i < 5; i++) {
    let hasil = ''
    for (let j = 0; j < 5; j++) { 
        hasil +='*'
        console.log(hasil)
    }
    
}
*/
let result = ''
for (let i = 0; i < 5; i++) {
    result += '*'
    for (let j = 0; j < i; j++) { 
        result += '*'
    }
    result += '\n'
}
console.log(result)

/*
for (let i = 0; i < 5; i++) {
    let hasil = ''
    
    for (let j = 0; j < 5; j++) { 
        
        hasil +=''
        console.log(hasil)
    }
}
*/


