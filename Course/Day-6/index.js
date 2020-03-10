// let string = 'abcde'
// function name(params) {
//     console.log(params)
// }
// name(string)
/*
function name(a,b) {
    console.log(a-b)
}
let a = 3
let b = 5
name(b,a)
*/
/*
function name(a,b) {
    let c = a-b
    return c
}
console.log(name(1,2)+5)
*/
/*
function name(a = 5 , b = 3) {
    let c = a + b
    return c
}
console.log(name(undefined,2))
*/

/*
let array = [80,80,50] 
let total = 0
let average
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// console.log(calculateGrade(array));

function calculateGrade(marks) {
  let average = calculateAverage(marks)

  if (average < 60) {
      return 'F'
  }
  if (average <70) {
      return 'D'
  }
  if (average <80) {
      return 'C'
  }
  if (average <90) {
      return 'B'
  }
  if (average <=100) {
      return 'A'
  }
}
function calculateAverage(array) {
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    
    return total / array.length
}
console.log(calculateGrade(array))
*/

/*
  function start () {
    return function () {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: [081234, 432108]
          }
        }
      ],4,5]
    }
}
console.log(start()()[2][1].kontak.telfon[0])
*/

/* pas nambah item dipisah sebuah function */

let string = 'Saya suka jeruk karena saya dan jeruk suka jeruk dan saya'.split(' ')
console.log(string)
