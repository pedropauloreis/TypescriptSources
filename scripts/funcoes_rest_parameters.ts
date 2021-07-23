const somar = (mes1:number, mes2:number, mes3:number):number => {
    return mes1 + mes2 +mes3;
}

console.log(somar(250,780,695));


const somar2 = (...meses:number[]):number => {
    return meses.reduce((rendaTotal:number , rendaAtual:number):number => rendaTotal + rendaAtual,0);
}

console.log(somar2(250,780,695,2000,6500));