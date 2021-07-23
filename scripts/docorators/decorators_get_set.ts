function decoratorGetSet(valor: boolean){
    return function(
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = valor;
    }
}


class Login {
    constructor(
        private _usario: string,
        private _senha: string
    )
    {}

    @decoratorGetSet(true)
    get usuario(): string { return this._usario; }

    @decoratorGetSet(true)
    get senha(): string { return this._senha; }
}

const login = new Login("ppreis@gmail.com","senha123");

for (let chave in login) {
    console.log("chave: " + chave);
    //console.log("valor: " + login[chave]);
}
