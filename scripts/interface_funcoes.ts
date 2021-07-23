interface ISoma {
    (num1:number, num2: number):number;
}

let primeiraSoma_explicita: ISoma;
primeiraSoma_explicita = (numero1:number, numero2:number):number => {
    return numero1+numero2;
}

let primeiraSoma_implicita: ISoma;
primeiraSoma_implicita = (numero1, numero2) => {
    return numero1+numero2;
}


// DEFININDO MÉTODOS

interface ICalculos {
    somar(a:number, b:number):number;
    subtrair(a:number, b:number):number;
    multuplicar(a:number, b:number):number;
    dividir(a:number, b:number):number;
}

const multplicacao = (a:number, b:number):number => a*b ;
function divisao (a:number, b:number):number {return a/b;};

let calculadora : ICalculos;
calculadora = {
    somar: (a:number, b:number) => { return a + b},
    subtrair: (a:number, b:number) => { return a - b },
    multuplicar: multplicacao,
    dividir: divisao,
}

console.log(`15+3: ${calculadora.somar(15,3)}`);
console.log(`15-3: ${calculadora.subtrair(15,3)}`);
console.log(`15*3: ${calculadora.multuplicar(15,3)}`);
console.log(`15/3: ${calculadora.dividir(15,3)}`);