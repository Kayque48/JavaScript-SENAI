let n1 = 60;
let n2 = 60;

 if (n1 % n2 == 0) {
  console.log(` ${n1} / ${n2} = ${n1 / n2}`);
} else if (n1 < n2) {
  console.log(` ${n1} + ${n2} = ${n1 + n2}`);
} else if (n1 > n2) {
  console.log(` ${n1} - ${n2} = ${n1 - n2}`);
} else {
  console.log(` ${n1} x ${n2} = ${n1 * n2}`);
}
