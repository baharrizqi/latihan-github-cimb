const hitung = (huruf,num) => {
    var letters = 'abcdefghijklmnopqrstuvsxyz'
    let b = ''
    for (let i = 0; i < huruf.length; i++) {
       if (num < letters.length) {
           b += letters[num]
            num ++
       }else{
           b += letters[num - letters.length]
           num++
       }
    }
    return b
}
console.log(hitung('abce',3));

// function palindrome(str) {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//     // var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

//     var lowRegStr = str.toLowerCase().replace(/ /g, '');
//     // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//     // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//     // var lowRegStr = "amanaplanacanalpanama";

//     // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//     // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//     // And, var reverseStr = "amanaplanacanalpanama";

//     // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//     return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true

//   }
// let lowRegStr = 'aabac'
//   var reverseStr = lowRegStr.split('').reverse().join(''); 
//   console.log(reverseStr);

// const plusMinus = () =>{
//     let a 
//     let numArr = [2,3,4,5]
//     for (let i = 0; i < numArr.length; i++) {
//         if (i== 0) {
//             a = numArr[i]
//         }
//         else if (i%2== 0) {
//             a += numArr[i]
//         }
//         else if (!i%2==0) {
//             a -= numArr[i]
//         }
//         return a
//     } 
// }
// console.log(numArr);

// const plusMinus = (str) => {
//     let result = ''
//     let isi = 0
//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//             isi = str[i]
//             result += str[i]
//         } else if (i % 2 == 0) {
//             result += '-'+ str[i]
//             isi -= str[i]
//         }
//         if (i % 2 !== 0) {
//             result += '+'+ str[i]
//             isi += str[i]
//         }
//     }
//     return result + '=' + isi
// }
// console.log(plusMinus([6, 5, 10, 18,2]));


function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
  }
   
  palindrome("A man, a plan, a canal. Panama");


  
let str = [1, 1, 2, 1, 1]
const plusMinus = () => {
  let result = ''
  let isi = 0
  
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      isi = str[i]
      result += str[i]
    } else if (i % 2 == 0) {
      result += '-' + str[i]
      isi -= str[i]
    }
    else if (i % 2 !== 0) {
      result += '+' + str[i]
      isi += str[i]
    }
  }
  return result + '=' + isi
}
console.log(plusMinus());




const plusMinus = (str) => {
    let a = 0
    let isi = ''
    for (let i = 0; i < str.length; i++) {
      if (i == 0) {
        a = str[i]
        isi += str[i]
      }
      else if (i % 2 == 0) {
        isi += '-' + str[i]
        a -= str[i]
      }
      else if (i % 2 !== 0) {
        isi += '+' + str[i]
        a += str[i]
      }
      return isi + '=' + a
    }
  }
  console.log(plusMinus([2,3,4,5,1]));



