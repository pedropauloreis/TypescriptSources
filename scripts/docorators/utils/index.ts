export function debug(classe: any){
    console.log("Classe criada!", classe);
}

export function log(constructor: any){
    return class extends constructor {
        created_at: Date = new Date();
        public prop1: string = "ValorValorDoDecorator";
    }

}