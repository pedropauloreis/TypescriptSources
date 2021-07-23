enum Sexo {
    Masculino = "M",
    Feminio = "F",
    NaoInformado = "I",
} 

interface IModelo {
    id: number;
    created_at: Date;
    updated_at?: Date;
}

interface IPessoa extends IModelo {
    nome: string;
    idade: number;
    nacionalidade? : string;
    sexo : Sexo;
}

//interface IUsuario extends IPessoa,IModelo { //PODE TER MAIS DE  UM EXTENDS
interface IUsuario extends IPessoa {
    email: string;
    senha: string;
 
}


const usuarioComInterface : IUsuario = {
    id: 1,
    nome: "Pedro Paulo",
    idade: 34,
    nacionalidade: "Brasileiro",
    sexo: Sexo.Masculino,
    email: "ppreis@gmail.com",
    senha: "senha",
    created_at: new Date(Date.now()),
}

console.log(usuarioComInterface);