//sem readonly
interface ICurso {
    titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number
}

const curso1:ICurso ={
    titulo: "Curso de TS",
    preco: 1500,
    cargaHoraria: 15,
    classificacao: 5
}

console.log(curso1);
curso1.titulo = "PHP 8";
console.log(curso1);

//COM READONLY
interface ICurso_READONLY {
    readonly titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number
}

//let curso2:ICurso_READONLY ={ -- CONST OU LET funciona igual
const curso2:ICurso_READONLY ={
    titulo: "Curso de TS",
    preco: 1500,
    cargaHoraria: 15,
    classificacao: 5
}

console.log(curso2);

// curso2.titulo = "PHP 8"; //ERR: Cannot assign to 'titulo' because it is a read-only property.ts(2540)

console.log(curso2);