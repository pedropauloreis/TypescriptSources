class Permissao {
    constructor(private _nome: string, private _nivel: number) {}

    get nome() { return this._nome.toUpperCase(); } //UTILIZADO QUANDO EU QUERO PERSONALIZAR O RETORNO DE UMA PROPRIEDADE
    set nome(item: string) {  //UTILIZADO QUANDO EU QUERO PERSONALIZAR A ENTRADA DE UMA PROPRIEDADE
        if(item.length<5) { throw new Error("O nome precisa ter pelo menos 5 caracteres.")}
        this._nome = item;
     }


}

const permissao = new Permissao("Administrador", 1);
console.log(permissao.nome);

//permissao.nome = "adm"; //Vai lançar o ERRO (menos que 5 caracteres);

permissao.nome = "adm-12345"; //Vai lançar o ERRO (menos que 5 caracteres);
console.log(permissao.nome); 




