function obterPrimeiraPosicao<T>(meuarray: Array<T>) : T {
    return meuarray[0];
}


console.log(obterPrimeiraPosicao(["Pedro","Camila","Mateus"]));

console.log(obterPrimeiraPosicao([10,20,30]));

console.log(obterPrimeiraPosicao([false,true]));