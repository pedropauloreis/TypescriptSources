interface ICategoria {
    nome: string;
    id: number;
    cegoriaPai?: ICategoria;
}

const frontEnd:  ICategoria = {
    nome: "Front-End",
    id: 1,
}


const backEnd:  ICategoria = {
    nome: "Back-End",
    id: 2,
}


interface Menu  {
    categorias: ICategoria[];
}

let menu :Menu = {
    categorias: [frontEnd, backEnd]
}

console.log(menu);

interface ICursos {
    [indice: number]:ICategoria;
}

let cursos : ICursos = [    
    frontEnd, backEnd  , { nome: "Javascript",  id: 3, cegoriaPai: frontEnd }  
    //frontEnd, backEnd  , { nome: "Javascript",  id: 3, cegoriaPai: frontEnd }  as ICategoria  -- Forçando o tipo
]

console.log(cursos);
console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos[2]);