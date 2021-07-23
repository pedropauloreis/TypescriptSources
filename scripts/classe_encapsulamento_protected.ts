class Domicilio {

    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object) {
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {
        return "Interfone tocado!";
    }

    protected atenderInterfone(mensagem: string): string{
        return mensagem;
    }
    
}

class Casa extends Domicilio { //Sem propriedades novas



    public entrarNaCasa():string {
        return this.atenderInterfone("Oi quem é?"); //Método atenderInterfone está na classe pai e pode ser acessado através da herança - PROTECTED
    }

}

const casaDoHomer = new Casa("rosa",{cidade:"Springfield"});
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());