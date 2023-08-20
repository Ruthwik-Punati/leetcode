"use strict";

// let hasBeenAdded = false;

// let fn = (a, b, c) => a + b + c;

// let once = function (fcn) {
//   return function (...arguments) {
//     if (hasBeenAdded) return;
//     hasBeenAdded = true;
//     return fcn(...arguments);
//   };
// };

// let onceFn = once(fn);

// onceFn(1, 2, 3);
// onceFn(2, 3, 4);

// const arr = [1];
// const size = 3;

// const chunk = function (arr, size) {
//   const arr1 = arr.slice(0);

//   const noOfSub = Math.ceil(arr.length / size);
//   const iterationArr = [];
//   for (let i = 0; i < noOfSub; i++) {
//     iterationArr.push(arr1.splice(0, noOfSub - 1));
//   }
//   //  return new Array(noOfSub).fill(0, 0, noOfSub).map(e => {
//   //     return arr1.splice(0, noOfSub - 1);
//   //   });
//   return iterationArr;
// };

// console.log(chunk(arr, size));

// const nonRepeatArr = [1, 2, 'f', 'g', 1, 2, 'c', 'g'];
// const newArrZ = [];
// nonRepeatArr.forEach((e, i, arr) => {
//   arr.forEach((e2, i2, arr2) => {
//     if (e === e2 && i !== i2) {
//       console.log('okay');
//       newArrZ.push(e);
//     }
//   });
// });
// console.log(nonRepeatArr.filter(e => !newArrZ.some(e1 => e1 === e)));

// function* generate(i) {
//   yield i + 2;
//   yield i + 10;
// }

// console.log(generate(4));

// const num = [2, 7, 11, 15];
// const target = 9;

// function add(num, target) {
//   let answer = [];
//   const numb = num;
//   numb.forEach((e, i, arr) =>
//     arr.forEach((e2, i2, arr2) => {
//       if (e + e2 === target && i !== i2) {
//         answer.push(i, i2);
//       }
//     })
//   );
//   return answer.slice(0, 2);
// }

// function check() {
//   return num.reduce((e, acc) => acc + e, 0);
// }

// console.log(check());

// console.log(add(num, target));

// const l1 = [2, 4, 3];
// const l2 = [5, 6, 4];

// const addTwoNumbers = function (l1, l2) {
//   const l3 = l1.slice(0);
//   const l4 = l2.slice(0);

//   const result =
//     parseInt(l4.reduce((e, acc) => acc + `${e}`, '')) +
//     parseInt(l3.reduce((e, acc) => acc + `${e}`, ''));

//   return result.toString().split('').reverse();
// };

// console.log(addTwoNumbers(l1, l2));
// let chunks = [];
// const arrs = [];
// const s = 'bbbbb';
// const lengthOfLongestSubstring = function (s) {
//   s.split('').forEach((e, i, arr) => {
//     if (!chunks.some(e1 => e === e1)) {
//       chunks.push(e);
//     } else {
//       arrs.push(chunks);
//       chunks = [];
//       chunks.push(e);
//     }

//     if (i === arr.length - 1) {
//       arrs.push(chunks);
//     }
//   });

//   arrs.sort((a, b) => a.length - b.length);

//   return arrs.map(e => e.join(''))[arrs.length - 1].length;
// };

// console.log(lengthOfLongestSubstring(s));

// let nums1 = [1, 3];
// let nums2 = [2];

// findMedianSortedArrays = function (nums1, nums2) {
//   const num3 = [...nums1, ...nums2].sort((a, b) => a - b);
//   console.log();
//   const isEven = num3.length % 2;
//   const middleNo = num3.length / 2;

//   if (isEven === 0) {
//     return (num3[middleNo - 1] + num3[middleNo]) / 2;
//   } else {
//     return num3[Math.ceil(middleNo - 1)];
//   }
// };

// console.log(findMedianSortedArrays(nums1, nums2));

// const string = 'babad';
// const longestPalindrome = function (s) {
//   const result = [];

//   s.split('').forEach((e, i, arr) => {
//     arr.forEach((e1, i1) => {
//       if (e === e1 && i !== i1 && i1 > i) {
//         result.push(arr.slice(i, i1 + 1));
//       }
//     });
//   });

//   return result.sort((a, b) => a - b)[0].join('');
// };

// console.log(longestPalindrome(string));

// convert = function (s, numRows) {
//   const s1 = s.split('');

//   let three = [];
//   let one = [];
//   let final = [];
//   let finall = [];

//   if (numRows === 4) {
//     for (let i = 0; i < numRows + 1; i++) {
//       three.push(s1.splice(0, numRows));

//       one.push([0, 0, s1.splice(0, 1), 0].flat());
//       one.push([0, s1.splice(0, 1), 0, 0].flat());
//       final.push(three, one);

//       three = [];
//       one = [];
//     }
//   } else {
//     for (let i = 0; i < numRows + 1; i++) {
//       three.push(s1.splice(0, numRows));

//       one.push([0, s1.splice(0, 1), 0].flat());

//       final.push(three, one);

//       three = [];
//       one = [];
//     }
//   }

//   for (let i = 0; i < numRows + numRows + numRows; i++) {
//     final.flat().forEach((e1, i1, arr) => {
//       {
//         e1.forEach((e2, i2) => {
//           if (i2 === i) {
//             finall.push(e2);
//           }
//         });
//       }
//     });
//   }

//   return finall.filter(e => typeof e === 'string').join('');
// };

// console.log(convert('A', 4));

// const l = Math.pow(-2, 31);
// const m = Math.pow(2, 31) - 1;

// const x = 1534236469;

// console.log(m >= x, x >= l);
// reverse = function (x) {
//   if (x === 0) {
//     return 0;
//   }
//   const a = x.toString().split('').reverse();
//   console.log(a);
//   for (let i = 0; i <= a.length; i++) {
//     if (parseInt(a[i]) === 0) {
//       a.shift();
//       console.log('okay');
//     }

//     if (parseInt(a[i]) !== 0) {
//       break;
//     }
//   }
//   console.log(a);
//   if (a.includes('-')) {
//     a.pop();
//     a.unshift('-');
//   }

//   if (!(m >= parseInt(a.join(''))) || !(parseInt(a.join('')) >= l)) {
//     return 0;
//   }
//   return parseInt(a.join(''));
// };

// console.log(reverse(x));

// const height = [1, 2, 3, 4];

// // px=(i,0),py=(0,height[i])
// maxArea = function (height) {
//   const n = height.length;
//   // console.log(
//   //   2 > n,
//   //   n >= 10 ** 5,
//   //   height.every(e => {
//   //     e >= 0 && e <= 10 ** 4;
//   //   })
//   // );
//   console.log(n);
//   if (n >= 10 ** 5) {
//     return;
//   }
//   if (
//     2 > n ||
//     n >= 10 ** 5 ||
//     height.every(e => {
//       e >= 0 && e <= 10 ** 4;
//     })
//   ) {
//     return;
//   }
//   const area = [];
//   const lines = [];
//   height.forEach((e, i, arr) => {
//     arr.forEach((e1, i1, arr1) => {
//       if (i === i1) return;
//       let y = Math.min(e, e1);
//       let x = Math.sqrt((i + 1 - (i1 + 1)) ** 2);

//       area.push(x * y);
//       lines.push([i, i1]);
//     });
//   });

//   const maxArea = Math.max(...area);

//   console.log(maxArea, lines[area.findIndex(e => e === maxArea)]);

//   return maxArea;
// };

// console.log(maxArea(height));

// intToRoman = function (num) {
//   if (num > 3999) {
//     return;
//   }
//   const roman = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
//     10000000: 'K',
//   };

//   if (num <= 0) {
//     return '';
//   }
//   function closeNum(endNum) {
//     if (endNum <= 0) {
//       return '';
//     }

//     if (
//       Object.keys(roman).find(e => {
//         return e >= endNum;
//       }) -
//         endNum >
//       '1'.padEnd(endNum.toString().length, '0')
//     ) {
//       if (endNum.toString()[0] > 5) {
//         const diff =
//           endNum - parseInt('5'.padEnd(endNum.toString().length, '0'));

//         return (
//           roman[parseInt('5'.padEnd(endNum.toString().length, '0'))] +
//           ''.padEnd(
//             diff.toString()[0],
//             roman[parseInt('1'.padEnd(endNum.toString().length, '0'))]
//           )
//         );
//       }

//       if (endNum.toString()[0] < 5) {
//         const diff =
//           endNum - parseInt('1'.padEnd(endNum.toString().length, '0'));
//         return (
//           roman[parseInt('1'.padEnd(endNum.toString().length, '0'))] +
//           ''.padEnd(
//             diff.toString()[0],
//             roman[parseInt('1'.padEnd(endNum.toString().length, '0'))]
//           )
//         );
//       }
//     } else {
//       return (
//         intToRoman(
//           Object.keys(roman).find(e => {
//             return e > endNum;
//           }) - endNum
//         ) +
//         roman[
//           Object.keys(roman).find(e => {
//             return e > endNum;
//           })
//         ]
//       );
//     }
//   }

//   const l = num.toString().split('').length;
//   let result = '';
//   let i = 0;
//   while (i <= l - 1) {
//     const a = parseInt(num.toString()[i].padEnd(l - i, '0'));

//     result += roman[a] || closeNum(a);
//     i++;
//   }

//   return result;
// };

// console.log(intToRoman(876));

// const romanToInt = function (sym) {
//   let result = [];

//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   sym.split('').forEach((e, i) => {
//     if (result[result.length - 1] < roman[e]) {
//       let calc = roman[e] - result[result.length - 1];
//       result.pop();
//       result.push(calc);
//     } else result.push(roman[e]);
//   });

//   return result.reduce((e, acc) => acc + e, 0);
// };

// console.log(romanToInt('XI'));
// const strs = ['fleor', 'fleower', 'fleower', 'fleower'];

// const longestCommonPrefix = function (strs) {
//   let isLowerCase = true;
//   function lowerCase() {
//     strs.forEach(e => {
//       if (e !== e.toLowerCase() || e === '') {
//         isLowerCase = false;
//       }
//     });
//   }

//   lowerCase();

//   if (
//     !(1 <= strs.length <= 200) ||
//     !strs.every(e => 0 <= e.length <= 200) ||
//     !isLowerCase
//   ) {
//     return '';
//   }

//   let prefix = '';

//   for (let i = 0; i < strs[0].split('').length; i++) {
//     let tick = false;

//     for (let j = 0; j < strs.length; j++) {
//       if (strs[0][i] === strs[j][i]) {
//         tick = true;
//       } else {
//         tick = false;
//         i = 100;
//       }
//     }

//     if (tick && i < strs[0].split('').length) {
//       prefix += strs[0][i];
//     }
//   }

//   return prefix;
// };
// console.log(longestCommonPrefix(strs));

// console.log(strs[0].split('').length);

// let calc = (2 * 10) ** 5 + 1;
// console.log();

// const height = [calc, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const trap = function (height) {
//   let n = height.length;
//   console.log(!(n <= 2 * 10 ** 4));
//   if (
//     !(1 <= n) ||
//     !(n <= 2 * 10 ** 4) ||
//     height.some(e => 0 > e || e > 10 ** 5)
//   )
//     return '';

//   let backwards = [...height];

//   const fill = [];

//   console.log(backwards);
//   flow(height);

//   console.log(backwards);
//   flow(backwards.reverse());

//   function flow(heightArr) {
//     let nextBlock = 0;

//     for (let i = 0; i < heightArr.length; i++) {
//       if (i >= nextBlock) {
//         nextBlock = heightArr.findIndex(
//           (e2, i2) =>
//             i2 > i &&
//             e2 === heightArr.find((e1, i1) => e1 >= heightArr[i] && i < i1)
//         );

//         if (nextBlock < 0) {
//           nextBlock = heightArr.length + nextBlock;
//         }

//         for (let j = i; j <= nextBlock - 1; j++) {
//           if (
//             heightArr[i] <= heightArr[nextBlock] &&
//             heightArr[i] >= heightArr[j + 1] &&
//             j + 1 < nextBlock
//           ) {
//             backwards = backwards.map((e3, i3) => {
//               if (i3 === j + 1) {
//                 return heightArr[i];
//               } else {
//                 return e3;
//               }
//             });
//             console.log(j + 1);
//             fill.push(heightArr[i] - heightArr[j + 1]);
//           }
//         }
//       }
//     }
//   }

//   return fill.reduce((e, acc) => acc + e, 0);
// };

// console.log(trap(height));

// const nums = [2, 3, 1, 1, 4];
// const canJump = function (nums) {
//   let r = false;
//   let v = 0;
//   let z = 0;
//   while (z <= nums.length) {
//     v += nums[z];
//     if (v === nums.length - 1) {
//       r = true;
//     }
//     z = v;
//   }
//   return r;
// };
// console.log(canJump(nums));

// const nums = [2, 0, 0];
// const canJump = function (nums) {
//   if (
//     1 > nums.length ||
//     nums.length > 10 ** 4 ||
//     nums.some(e => e < 0 || e > 10 ** 5)
//   )
//     return;
//   let y = 1;
//   let result;
//   let i = 1;
//   if (nums.length === 1) {
//     result = true;
//     return result;
//   }
//   if (nums[0] === 0) {
//     result = false;
//     return result;
//   }
//   while (i <= nums.length) {
//     i = y;

//     y += nums[i];
//     console.log(y, i, nums.length);
//     if (y >= nums.length - 1) {
//       console.log(y, nums.length - 1);
//       result = true;
//       i = nums.length + 100;
//       return result;
//     }

//     if (nums[i] === 0 && i < nums.length && y < nums.length) {
//       result = false;
//       i = nums.length + 100;
//       return result;
//     }
//   }
//   return result;
// };
// console.log(canJump(nums));

// const o1 = { x: 1, y: [[[[[3]]]]], z: [[{ 1: 'r' }], false] };
// const o2 = { x: 1, y: [[[[[3]]]]], z: [[{ 1: 'r' }], false] };

// let o3 = [1, 2, 3, { x: 4 }];
// let o4 = [1, 2, 3, { x: 4 }];

// console.log(Object.keys(1));
// const areDeeplyEqual = function (o1, o2) {
//   let depth = 0;

//   if (
//     !(1 <= JSON.stringify(o1).length) ||
//     !(JSON.stringify(o1).length <= 10 ** 5) ||
//     !(1 <= JSON.stringify(o2).length) ||
//     !(JSON.stringify(o2).length <= 10 ** 5)
//   )
//     return;

//   if (JSON.stringify(o1).length === JSON.stringify(o2).length) {
//     if (JSON.stringify(o1) === JSON.stringify(o2)) {
//       return true;
//     } else {
//       checkEquality(o1, o2, true);
//     }
//   }

//   function checkEquality(o1, o2) {
//     if (Object.keys(o1).length === Object.keys(o2).length) {
//       console.log(o1, o2);
//       if (Array.isArray(o1) !== Array.isArray(o2)) {
//         return o2 === o1;
//       }
//       if (Object.keys(o1).length === 0) {
//         return o1 === o2;
//       }
//       return Object.keys(o1).every((e, i) => {
//         console.log(typeof o2[e]);

//         if (typeof o2[e] !== 'object' || o2[e] === null) {
//           return o2[e] === o1[e];
//         } else {
//           // if (depthCheck) {
//           //   prev = e;
//           // }
//           // if (prev === e) {
//           //   depth++;
//           // }

//           // console.log(depth);
//           // if (depth > 1000) {
//           //   return;
//           // }
//           return areDeeplyEqual(o1[e], o2[e]);
//         }
//       });
//     } else {
//       return false;
//     }
//   }
//   return checkEquality(o1, o2);
// };

// console.log(areDeeplyEqual(o3, o4));

// const head = [4, 2, 2, 3];
// const pairSum = function (head) {
//   console.log(head.some(e => 0 <= e && e > 10 ** 5));
//   if (
//     head.length % 2 !== 0 ||
//     head.length < 2 ||
//     head.length > 10 ** 5 ||
//     head.some(e => 0 <= e && e > 10 ** 5)
//   ) {
//     return;
//   }

//   const twins = [];
//   for (let i = 0; i <= head.length / 2; i++) {
//     console.log(twins);
//     twins.push(head[i] + head[head.length - 1 - i]);
//   }
//   return Math.max(...twins);
// };

// console.log(pairSum(head));

// const days = [1, 4, 6, 7, 8, 20];
// const costs = [2, 7, 15];
// const mincostTickets = function (days, costs) {
//   let result = [];
//   let length;
//   for (let i = 0; i < days.length; i++) {
//     for (let j = 0; j < days.length; j++) {
//       result.push(days[j] < days[i] + 7);
//     }
//   }
//   return result;
// };

// console.log(mincostTickets(days, costs));

// async function myLocation() {
//   navigator.geolocation.getCurrentPosition(location);

//   function location(position) {
//     console.log(position.coords);
//     return local(position.coords);
//   }
// }

// async function local(coords) {
//   console.log(coords);
//   const local = await fetch(
//     `https://api.geoapify.com/v1/geocode/reverse?lat=${coords.latitude}&lon=${coords.longitude}&apiKey=cbc5bc6d04134d93a0861ade77a8c356`
//   );

//   const localres = await local.json();
//   console.log(localres);
//   return localres;
// }

// console.log(myLocation());

// // references

// const obj = { name: "vivek" };

// const obj2 = obj;

// obj.name = "Tinku";

// obj2.name = "Kartik";
// obj.surname = "punati";
// console.log(obj2);
// console.log(obj);

// // coersion

// console.log(2 == "2");

// // closures

// function higher() {
//   let name = "Ruthwik";
//   return function () {
//     console.log(name);
//   };
// }

// const lower = higher();

// higher();

// // constructor

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("Sheela");

// console.log(person1);

// function scope() {
//   setTimeout(function () {
//     console.log(x);
//     console.log(y);
//   }, 2000);
//   let x = 1;
//   const y = 2;
// }

// scope();

// for (var i = 0; i < 3; i++) {
//   console.log(i);
//   // setTimeout(function () {
//   //   console.log(i);
//   // }, 2000);
// }

// const arr = [1, 2, 3, 3, 4];

// const filtered = arr.filter((e, i) =>
//   arr.some((e1, i1) => e1 === e && i !== i1) ? "" : e
// );

// let inputs = [];

// function sum(a, b) {
//   let c;

//   let ifThere = inputs.find(
//     (e, i) => e.slice(0, 2).includes(a) && e.slice(0, 2).includes(b)
//   );

//   if (ifThere) {
//     console.log("memoised");
//     c = ifThere[2];
//   } else {
//     console.log("calculate");
//     c = a + b;
//     inputs.push([a, b, c]);
//   }

//   console.log(c);
//   return c;
// }

// sum(3, 4);
// sum(100, 200);
// sum(3, 4);

// console.log(inputs);

// sum accepts two integers a and b and returns a + b.

// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.

// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// const fibInputs = [];

// function fib(n) {
//   let ifThere = fibInputs.find((e, i) => e.slice(0, 1).includes(n));

//   if (ifThere) {
//     console.log("memoised");
//     return ifThere[1];
//   } else if (n <= 1) {
//     return 1;
//   } else {
//     console.log("calculated");
//     const result = fib(n - 1) + fib(n - 2);
//     fibInputs.push([n, result]);
//     return result;
//   }
// }

// console.log(fib(3));
// console.log(fib(2));
// console.log(fibInputs);

// const factorialInputs = [];

// function factorial(n) {
//   let ifThere = factorialInputs.find((e, i) => e.slice(0, 1).includes(n));

//   if (ifThere) {
//     console.log("memoised");
//     return ifThere[1];
//   } else if (n <= 1) {
//     return 1;
//   } else {
//     console.log("calculated");
//     const result = factorial(n - 1) * n;
//     fibInputs.push([n, result]);
//     return result;
//   }
// }

// var x = 10;

// console.log(window);

// const arr = [1, 3, 4, 2, 5, 6, 8, 7];

// const filtered = arr.reduce((acc, e) => (acc = acc + e), 1);
// console.log(filtered);

// const arr = [
//   { age: 25, name: "Ruthwik" },
//   { age: 35, name: "Vishnu" },
//   { age: 46, name: "Anil" },
// ];

// const age46 = arr.find((e) => e.age === 46);

// console.log(age46);

// function StatePractice() {
//   const [age, setAge] = useState(0);

//   function increment() {
//     setAge(age + 1);
//   }

//   return <button onClick={() => increment()}>+</button>;
// }

const countries = ["India", "Pakisthan", "Bangladesh", "bhutan"];

console.log(countries);

countries.push("Srilanka");

console.log(countries);

countries.unshift("America");
console.log(countries);

countries.splice(2, 0, "China");
console.log(countries);

document.write("Hihi");
