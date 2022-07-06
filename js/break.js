console.log("break");
for (let i = 0; i <= 5; i += 1){
    console.log(i);

    if (i === 3) {
        console.log("Se rompe el ciclo");
        break;
    }
}
console.log("hola");

console.log("continue");
for (let i = 0; i <= 5; i += 1){
    console.log(i);

    if (i === 3) {
        console.log("Continua");
        continue;
    }
}
console.log("hola");