class Cadastro {
    nome: string;
    nascimento: Date;
    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;
    constructor(nome:string, nascimento:Date, email: string, empresa: string) {
        
        //Na herança precisa carregar com o SUPER a criação do construtor do PAI -- PRECISA VIR NA PRIMEIRA POSIÇÂO
        super(nome, nascimento);
        
        this.email = email;
        this.empresa = empresa;
    }
}

const pedro_reis = new Cliente ("Pedro Reis", new Date("1986-09-09"), "ppreis@gmail.com","Home Office" );
console.log(pedro_reis);