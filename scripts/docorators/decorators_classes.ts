import {debug, log} from './utils'

@debug
class PrimeiraClasse {

    constructor() {

    }
}

@log
@debug
class SegundaClasse {
    public prop1: string = "ValorInicial";

    constructor() {
        
    }
}

console.log(new SegundaClasse());