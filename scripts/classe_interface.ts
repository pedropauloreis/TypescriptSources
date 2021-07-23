interface INotificacao{
    enviar(usuario: IMeuUsuarioV2):boolean;
}

interface IEmail{
    nome: string;
    email: string;
}

interface ISms{
    nome: string;
    telefone: string;
}


interface  IMeuUsuarioV2 {
    nome: string;
    email: string;
    telefone: string;
}

abstract class NotificacaoV2 implements INotificacao {
    abstract enviar(usuario: IMeuUsuarioV2): boolean;
}

//const notify = new Notificacao; // ERR: Cannot create an instance of an abstract class.ts(2511)

class EmailV2 extends NotificacaoV2 implements IEmail {
    nome: string;
    email: string;

    constructor(usuario: IMeuUsuarioV2){
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {
        console.log(`Email enviado para ${this.email}!`);
        return true;
    }
}

const emailv2 = new EmailV2({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});
emailv2.enviar();
//new Email().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});

class SMSV2 extends NotificacaoV2 implements ISms {
    nome: string;
    telefone: string;

    constructor(usuario: IMeuUsuarioV2){
        super();
        this.nome = usuario.nome;
        this.telefone = usuario.telefone;
    }
    

    enviar(): boolean {
        console.log(`SMS enviado para ${this.telefone}!`);
        return true;
    }
}

const smsv2 = new SMSV2({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});
smsv2.enviar();
//new SMS().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});

