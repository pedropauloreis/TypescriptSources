function monstramMensagem(texto: string | number | object): boolean
{
    console.log(texto);
    return true;
}

console.log(monstramMensagem("HCode"));
console.log(monstramMensagem(123));
console.log(monstramMensagem({url: "https://google.com.br"}));

const  monstramMensagem2 =  (texto: string | number | object): boolean => {
    console.log(texto);
    return true;
}

console.log(monstramMensagem2("HCode2"));
console.log(monstramMensagem2(123));
console.log(monstramMensagem2({url: "https://google.com.br"}));