//Laços de repetição

//for
//for (codinção) {
    //  bloco de código
//}

for(let i = 10; i < 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {    
    console.log(i);
}

for (let i = 0; i <= 100; i+= 10) {
  console.log(i);
}

//while
//while (condição) {
    //bloco de código
//}

let i = 9;
while (i < 10) {
    console.log(i);
    i++;
}

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

let k = 0;
while (k <= 100) {
    console.log(k);
    k+=10;
}

//do while
//do {
    //bloco de código
//} while (condição);

let l = 5;
let m = 10;
do {
    console.log(l, m);
    l++;
    m++;
} while (l < 10 && m < 20);

let o = 15;
do while (o < 25) {
    console.log(o);
    o++;
}while (o < 25);

let n = 0;
do{
    console.log(n);
    n+=10;
}while (n <= 100);

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(i, j);
    }
}

// break
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}