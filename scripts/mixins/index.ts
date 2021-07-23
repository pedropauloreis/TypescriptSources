import applyMixins from './applyMixins';
class ProdutoFinal {

    vender (quantidade: number): string {
        return `Foram vendidos ${quantidade} itens deste produto`;
    }

    
    comprar (quantidade: number): string {
        return `Foram comprados ${quantidade} itens deste produto`;
    }

}

class Movel {
    sentar():string {
        return "Você sentou no móvel";
    }

    empurrar(metros:number): string{
        return `O móvel foi empurrado ${metros} metros.`
    }
}


//class Sofa extends ProdutoFinal, Movel { // ISSO NÂO FUNCIONA - ERR Classes can only extend a single class.ts(1174)
class Sofa {    
    constructor(public nome: string){
        //super();
    }
}

interface Sofa extends ProdutoFinal, Movel { }
applyMixins(Sofa, [ProdutoFinal,Movel]);

const produto = new Sofa("Meu Sofá");

console.log(produto.vender(25));
console.log(produto.comprar(50));
console.log(produto.sentar());
console.log(produto.empurrar(150));