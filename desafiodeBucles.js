for(var i=1; i<20; i+=2) {    // impar 1-20
    console.log(i);
}

for(var i=100; i>-1; i--) {  // Disminuye múltiplos de 3
    if(i % 3 == 0) {
        console.log(i);
    }
}

for(var i=4; i>-4; i-=1.5) {  // Imprimir la secuencia
    console.log(i);
}

var sum = 0;
for(var i=1; i<101; i++) { // sumar de 1 l 100 Sigma
    sum += i;
}
console.log(sum);

var product = 1;
for(var i=1; i<13; i++) { // Fatoriza multiplica todos los valores del 1 al 12
    product *= i;
}
console.log(product);