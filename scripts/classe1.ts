class Pessoa {
    
    nome: string;
    idade: number;
    altura: number;

    constructor (nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString (): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e ${this.altura} de altura`;
    }

}

const Pedro = new Pessoa("Pedro Paulo", 34, 1.75);

console.log(Pedro);

Pedro.nome = "Camila Noda"

console.log(Pedro.nome);

console.log(Pedro.toString());