interface IProcessamento<T> {
    valor: T;
    realizarProcessamento(argumento1: T): T;
}

const str: IProcessamento<string> = {
    valor: "Curso",
    realizarProcessamento(argumento1: string): string {
        return argumento1.toUpperCase();
    }
}

console.log(str.valor);
console.log(str.realizarProcessamento("realização de treinamento"));

const num: IProcessamento<number> = {
    valor: 20,
    realizarProcessamento(argumento1: number): number {
        return argumento1*argumento1;
    }
}

console.log(num.valor);
console.log(num.realizarProcessamento(5));
