console.log('primer')

for (var i = -10; i < 20; i++) {
    console.log(i);

}

console.log('print even numbers 10 - 40 ');

for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

console.log('print odd numbers from 300 to 333');

for (var i = 301; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }

}

console.log('print all numbers divisible by 3 and 5 between 5 and 50');

for (var i = 5; i <= 50; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i);
    }

}