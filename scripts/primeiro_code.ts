console.log("Hello World!");
console.log("==============");

const nome = "João";
console.log("Olá " + nome + ". Seja bem-vindo!");

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor:number)
    {
        this.nome = produtoNome;
        this.valor = produtoValor;

    }

}
 
const Playstation5 = new Produto("Playstation 5", 5000);