interface ICadastroPadrao {
    readonly id: number;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface ICadastroUsuario extends ICadastroPadrao {
    nome: string;
    email: string;
    senha: string;
}

interface ICadastroCategoria  extends ICadastroPadrao {
    nome: string;
    categoriaPai? :ICadastroCategoria;
}

class CadastroModelo<T> {
    create (dados: T) {
        console.log("Criando novo registro");
        return dados;
    }
    read (id: number): T {
        console.log(`Lendo dados do registro id ${id}`);
        return {} as T;
    }
    update (id: number, dados: T): T {
        console.log(`Alterando dados do registro ${id}`);
        return dados as T;
    }
    delete (id: number): boolean {
        console.log(`Excluindo dados do registro id ${id}`);
        return true;
    }
}

class CadatroUsuario extends CadastroModelo<ICadastroUsuario> {}

const novousuario = new CadatroUsuario();
console.log(novousuario.create({
        id: 1,
        nome: "Pedro Reis",
        email: "ppreis@gmail.com",
        senha: "senha123",
        created_at: new Date("2001-01-01"),
        updated_at: new Date("2021-05-24"),
    }))


class CadastroCategoria extends CadastroModelo<ICadastroCategoria> {}

const novacategoria = new CadastroModelo<ICadastroCategoria>();
console.log(novacategoria.create({
        id: 1,
        nome: "TypeScript",
        created_at: new Date("2001-01-01"),
        updated_at: new Date("2021-05-24"),
    }))