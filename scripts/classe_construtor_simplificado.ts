//CONSTRUTOR CLÁSSICO
class Pedido {
    public produto: string;
    private valorTotal: number;
    protected previsaoEntrega: Date;

    constructor(produto: string, valorTotal: number,previsaoEntrega: Date) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}



const meuPedido = new Pedido("TV NOVA",2000,new Date("2021-05-31"));
console.log(meuPedido);

//CONSTRUTOR SIMPLIFICADO
class PedidoSimplificado {
    constructor(public produto: string, private valorTotal: number, protected previsaoEntrega: Date) {  }
}

const meuPedidoSimplificado = new PedidoSimplificado("TV NOVA",2000,new Date("2021-05-31"));
console.log(meuPedidoSimplificado);