class Veiculo { //Método Público é o encapsulamento PADRÂO 
    
    public cor: string; //Variável Pública
    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta ():boolean { //Método Publico
        return false;
    }
}
const carro = new Veiculo("Branco");
console.log(carro);
carro.cor = "Preto";
console.log(carro);

console.log(carro.tentarAbrirPorta());
