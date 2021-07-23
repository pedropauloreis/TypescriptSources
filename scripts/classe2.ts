class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome=  nome;
        this.idade=  idade;
        this.materia=  materia;
    }

    seApresentar (): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}`    }

    dizerMedia (...notas:number[]):number {
        const notaTotal  = notas.reduce((total:number , notaAtual:number):number => total + notaAtual,0);
        return notaTotal/notas.length;
    }
}

const Prof1 = new Professor("Eduardo Saad", 55, "Lógica de programação");
console.log(Prof1.seApresentar());

console.log(Prof1.dizerMedia(10,9,8,1).toFixed(2));