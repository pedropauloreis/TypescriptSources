function decoratorAtt(
    target: unknown,
    nomePropriedade: string
){

    const novoNome = `_${nomePropriedade}`;

    Object.defineProperty(target,nomePropriedade, {
        get(){
            return this[novoNome].toUpperCase();
        },
        set(novoValor){
            this[novoNome] = novoValor.split('').reverse().join(''); //INVERTE A CADEIA DE CARACTERES
            // this[novoNome] = novoValor+" alterado por decorator";
        }
    })
}

class Animal {
    
    @decoratorAtt //APLICAÇÂO DO DECORATOR EM PROPRIEDADES
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const animal = new Animal("cachorro");

animal.nome = 'aryane'; //UTILIZA O DECORATOR

console.log(animal.nome);