class Banco {

    private cofreQtd: number = 10000;

    private debitarCofre(quantidade: number): number|string{
        if (this.cofreQtd >= quantidade)
        {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else
        {
            return "O cofre não possui a quantidade requisitada;"
        }
    }

    protected sacarDoCaixa(quantidade:number):number|string{
        return this.debitarCofre(quantidade);
    }

    public sacarDoCaixaEletronico(quantidade:number):number|string{
        return this.sacarDoCaixa(quantidade);
    }

}


class Banco24hs extends Banco {

    public sacar (quantidade:number): number|string{
        return this.sacarDoCaixa(quantidade);
    }

}

const bradesco = new Banco();
console.log(bradesco.sacarDoCaixaEletronico(5000));

const baco24h = new Banco24hs();
console.log(baco24h.sacar(12000));