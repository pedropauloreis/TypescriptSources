interface ITipoGenerico {
    length: number
}

function mostrarQuantidade<T extends ITipoGenerico>(valor: T): T{
    console.log(`Total: ${valor.length}`); //ERRProperty 'lenght' does not exist on type 'T'.ts(2339)
    return valor;
}

console.log(mostrarQuantidade([10,20,30]));

console.log(mostrarQuantidade({nome: "Pedro", length: 1}));