// function searchEven(a) {
//     for (let i = 0; i < arry.length; i++){
//         if (arry[i] % 2 == 1) {
//             console.log(arry[i])
//         }
//     }
// }
// searchEven(arry);
// console.log(searchEven(arry))
// console.log('hello');

// let arry = [15, -5, 7, 4, 8, -5, 0, 3, 1, 4, 5, 6, -9, 18, -117];

// function FindNegitive(a) {
//     let count = 0;
//     for (let i = 0; i < arry.length; i++){
//         if (arry[i] < 0) {
//             ++count;
//         }
//     }
//     return count;
// }

// console.log(FindNegitive(arry));

// let arry = [15, -5];

// function LargeNum(n) {
//     let max = -Infinity;
//     for (let i = 0; i < arry.length; i++) {
//         if (arry[i] > max) {
//             max = arry[i];
//         }
//     }
//     return max;
// }
// console.log(LargeNum(arry));

// let array1 = [1, 2, 5, 4, 7, 8, 5, 12, 11, 4, 2, 0]
// function SecLarge(array1) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] > first) {
//             second = first;
//             first = array1[i];
//         }
//         else if (array1[i] > second && array1[i] !== first) {
//             second = array1[i];
//         }
//     }
//     return second;
// }
// console.log(SecLarge(array1));

// let array = [1, 2, 5, 4, 7, 8,8, 5, 12, 12, 4, 2, 0]
// function SecLarge(array) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > first) {
//             second = first;
//             first = array[i];
//         }
//         else if (array[i] > second && array[i] !== first) {
//             second = array[i];
//         }
//     }
//     return second;
// }
// console.log(SecLarge(array))

// ------------------------Loop in Loop--------------------------------

// for (let i = 0; i < 4; i++){
//     for (let j = 0; j < 4; j++){
//         console.log('Hello')
//     }
//     console.log('Namaste..')
// }

// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         console.log(i, j);
//     }
//     console.log(i)
// }

// for (let i = 0; i < 4; i++){
//     let row=""
//     for (let j = 0; j < 4; j++){
//         row=row+" *"
//     }
//     console.log(row)
// }

// for (let i = 0; i < 4; i++){
// let row = "";
//     for (let j = 0; j < 10; j++){
//         row=row+" #"
//     }
//     console.log(row)
// }

// for (let i = 0; i < 5; i++){
//     let row = "";
//     for (let j = 0; j < 5; j++){
//         row = row + (j + 1);
//     }
//     console.log(row)
// }

// let n = 4;

// for (let i=0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + " #";
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + (i + 1);
//     }
//     console.log(row);
// }

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//         row = row + (j + 1);
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//         row = row + " #";
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - (i + 1); j++) {
//         row = row + "-"
//     }
//     for (let k = 0; k < (i + 1); k++) {
//         row = row + '#';
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 0; j <= i; j++) {
//     row = row + toggle;
//     if (toggle == 0) {
//       toggle = 1;
//     } else {
//       toggle = 0;
//     }
//   }
//   console.log(row);
// }

// let toggle = 1;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + toggle;
//     if (toggle == 0) {
//       toggle = 1;
//     } else {
//       toggle = 0;
//     }
//   }
//   console.log(row);
// }

// --------------------CountDigits-----------------

// let num = -1478;
// let posNum=Math.abs(num)
// function countDigits(num) {
//     if (posNum === 0) return 1;
//     let count = 0;
//     while (posNum > 0) {
//         posNum = Math.floor(posNum / 10);
//         count++;
//     }
//     return count
// }
// console.log(countDigits(posNum));

let n = 5;
for (let i = 0; i < n; i++) {
  let toggle = 1;
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + toggle;
    if (toggle == 0) {
      toggle = 1;
    } else {
      toggle = 0;
    }
  }
  console.log(row);
}

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let toggle = 1;
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + toggle;
//     if (toggle == 0) {
//       toggle = 1;
//     } else {
//       toggle = 0;
//     }
//   }
//   console.log(row);
// }
