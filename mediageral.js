const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7, 8, 9];

const salaJava = [6, 5, 8, 9, 6, 2, 7];

const salaPython = [7, 3.5, 8, 9.5, 1, 9];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A media da sala de Javascript é ${calculaMedia(salaJS)}`);
console.log(`A media da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A media da sala de Python é ${calculaMedia(salaPython)}`);