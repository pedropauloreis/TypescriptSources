class Usuario {
    readonly id: string = "12345"; //Readonly - Só lê
    nome: string = "Pedro";
    private senha: string = "123mudar";
    dataCadastro: Date = new Date("2021-05-23"); //private - nem vê fora da classe
}

const usuario = new Usuario();
console.log(usuario.id);

//usuario.id = "1111"; // ERR: Cannot assign to 'id' because it is a read-only property.ts(2540)
//console.log(usuario.senha); // ERR: Property 'senha' is private and only accessible within class 'Usuario'.ts(2341)