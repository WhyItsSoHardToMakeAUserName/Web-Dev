let i = 3;

while (i) {
    alert( i-- );
}
// 2
let i = 0;
while (++i < 5) alert( i );

// 3
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

// 4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

// 5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// 6
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// 7
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }