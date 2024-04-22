// for start

// 1 - mashq;
// let n = Number(prompt("Son kiriting"));
// for (i = 1; i <= n; i++) {
//   console.log(i);
// }

// 2-mashq

// let n = Number(prompt("Son kiriting"));
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

// 3-mashq
// let n = Number(prompt("Son kiriting"));
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// 4-mashq

// let n = prompt("Son kiriting:");
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log("sum:", sum);

// 5-mashq

// let n = prompt("Son kiriting!");
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log("sum", sum);

// 6-mashq

// let n = prompt("Son kiriting");
// for (i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

// 7-mashq

// let n = prompt("Son kiriting");
// let sum = 0;
// let count = 0;
// for (i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     sum += i;
//     count++;
//   }
// }
// console.log(`${count} ta boluvchi, yigindi: ${sum}`);

// 8-mashq

// let n = prompt("Son kiriting");
// let sum = 0;
// let total = 0;
// for (i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     total++;
//   }
// }
// if (total == 2) {
//   console.log("tubson");
// } else if (total == 1) {
//   console.log("1 raqami tubga ham, tub emasga ham kirmaydi");
// } else {
//   console.log("tubson emas");
// }
// for end

// if start

// 1-mashq

// let n = Number(prompt("Son kiriting"));
// if (n > 0) {
//   alert(n + 1);
// } else {
//   alert(n);
// }

// 2-mashq

// let n = Number(prompt("Son kiriting"));
// if (n > 0) {
//   alert(n + 1);
// } else {
//   alert(n - 2);
// }

//  3-mashq

// let n = Number(prompt("Son kiriting"));
// if (n > 0) {
//   alert(n + 1);
// } else if (n == 0) {
//   alert((n = 10));
// } else {
//   n - 2;
// }

// 4-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));
// let sum = 0;

// if (num1 > 0) {
//   sum++;
// }
// if (num2 > 0) {
//   sum++;
// }
// if (num3 > 0) {
//   sum++;
// }
// alert(`${sum} ta`);

// 5-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));
// let sum = 0;
// let sumNeg = 0;
// if (num1 > 0) {
//   sum++;
// } else {
//   sumNeg++;
// }
// if (num2 > 0) {
//   sum++;
// } else {
//   sumNeg++;
// }
// if (num3 > 0) {
//   sum++;
// } else {
//   sumNeg++;
// }
// alert(`${sum} ta musbat, ${sumNeg} ta manfiy`);

// 6-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 > num2) {
//   alert(`${num1} katta `);
// } else {
//   alert(`${num2} katta `);
// }

// 7-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 > num2) {
//   alert(`2-kichik `);
// } else {
//   alert(`1-kichik `);
// }

// 8-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 > num2) {
//   alert(`${num1}, ${num2} `);
// } else {
//   alert(`${num2}, ${num1} `);
// }

// 9-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 > num2) {
//   alert(`${num2}, ${num1} `);
// } else {
//   alert(`${num1}, ${num2} `);
// }

// 10-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 != num2) {
//   alert(`a=${num1 + num2}, b=${num1 + num2}`);
// } else {
//   alert(`0 , 0 `);
// }

// 11-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));

// if (num1 > num2) {
//   alert(`${num1}, ${num1}`);
// } else if (num2 > num1) {
//   alert(`${num2}, ${num2}`);
// } else {
//   alert(`0, 0`);
// }

// 12-mashq
// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));

// if (num1 <= num2 && num1 <= num3) {
//   alert(num1);
// } else if (num2 <= num3 && num2 <= num1) {
//   alert(num2);
// } else if (num3 <= num2 && num3 <= num1) {
//   alert(num3);
// } else {
//   alert("hello");
// }

// 13-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));
// if ((num1 <= num2 && num1 >= num3) || (num1 >= num2 && num1 <= num3)) {
//   alert(num1);
// } else if ((num2 <= num3 && num2 >= num1) || (num2 >= num3 && num2 <= num1)) {
//   alert(num2);
// } else if ((num3 <= num2 && num3 >= num1) || (num3 >= num2 && num3 <= num1)) {
//   alert(num3);
// } else {
//   alert("hello");
// }

// 14-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));
// if (num1 <= num2 && num1 >= num3) {
//   alert(`${num3} ${num2}`);
// } else if (num1 >= num2 && num1 <= num3) {
//   alert(`${num2} ${num3}`);
// } else if (num2 <= num3 && num2 >= num1) {
//   alert(`${num1}, ${num3}`);
// } else if (num2 >= num3 && num2 <= num1) {
//   alert(`${num3}, ${num1}`);
// } else if (num3 <= num2 && num3 >= num1) {
//   alert(`${num2}, ${num1}`);
// } else if (num3 >= num2 && num3 <= num1) {
//   alert(`${num1}, ${num2}`);
// } else {
//   alert("hello");
// }

// 15-mashq

// let num1 = Number(prompt("Son kiriting"));
// let num2 = Number(prompt("Son kiriting"));
// let num3 = Number(prompt("Son kiriting"));
// if (num1 <= num2 && num1 >= num3) {
//   alert(`${num1} ${num2}`);
// } else if (num1 >= num2 && num1 <= num3) {
//   alert(`${num1} ${num3}`);
// } else if (num2 <= num3 && num2 >= num1) {
//   alert(`${num2}, ${num3}`);
// } else if (num2 >= num3 && num2 <= num1) {
//   alert(`${num2}, ${num1}`);
// } else if (num3 <= num2 && num3 >= num1) {
//   alert(`${num3}, ${num1}`);
// } else if (num3 >= num2 && num3 <= num1) {
//   alert(`${num3}, ${num2}`);
// } else {
//   alert("hello");
// }

// if end

// bolean start

// 1-mashq

// let num = Number(prompt("Son kiriting"));
// if (num > 0) {
//   console.log("Bu musbat son");
// } else {
//   console.log("Bu musbat son emas");
// }

// 2-mashq

// let num = Number(prompt("Son kiriting"));
// if (num % 2 == 1) {
//   console.log("Bu toq son");
// } else {
//   console.log("Bu toq son emas");
// }

// 3-mashq

// let num = Number(prompt("Son kiriting"));
// if (num % 2 == 0) {
//   console.log("Bu juft son");
// } else {
//   console.log("Bu juft son emas");
// }

// 4-mashq

// let a = Number(prompt("Son kiriting"));
// let b = Number(prompt("Son kiriting"));
// if (a > 2 && b <= 3) {
//   console.log("A 2 dan katta va B 3dan kichik yoki teng");
// } else {
//   console.log("A 2 dan katta emas va B 3dan kichik yoki teng emas");
// }

// 5-mashq

// let a = Number(prompt("Son kiriting"));
// let b = Number(prompt("Son kiriting"));
// if (a >= 0 && b < -2) {
//   console.log("A 0 dan katta yoki teng va B -2 dan kichik ");
// } else {
//   console.log("A 0 dan katta yoki teng emas va B -2 dan kichik emas");
// }

// 6-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a <= b && b <= c) {
//   console.log(true );
// } else {
//   console.log(false);
// }

// 7-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if ((a < b && b < c) || (c < b && b < a)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 8-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 11-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if ((a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 12-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 13-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 14-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15-mashq

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (
//   (a > 0 && b > 0 && c < 0) ||
//   (a < 0 && b > 0 && c > 0) ||
//   (a > 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 16-mashq

// let n = Number(prompt("n Son kiriting"));

// if (n % 2 == 0 && n > 9 && n < 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }
