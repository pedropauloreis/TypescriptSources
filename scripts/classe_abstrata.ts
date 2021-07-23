interface  IMeuUsuario {
    nome: string;
    email: string;
    telefone: string;
    idApple?: string;
    idAndroid?: string;
}

abstract class Notificacao {
    abstract enviar(usuario: IMeuUsuario): boolean;
}

//const notify = new Notificacao; // ERR: Cannot create an instance of an abstract class.ts(2511)

class Email extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Email enviado para ${usuario.email}!`);
        return true;
    }
}

const email = new Email();
email.enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});
//new Email().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});

class SMS extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`SMS enviado para ${usuario.telefone}!`);
        return true;
    }
}

const sms = new SMS();
sms.enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});
//new SMS().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});


class AppleNotify extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Push Apple enviado para ${usuario.idApple}!`);
        return true;
    }
}

const apple = new AppleNotify();
apple.enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012", idApple: "IDAPPLE_EXEMPLO"});
//new AppleNotify().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});

class AndroidNotify extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Push Android enviado para ${usuario.idAndroid}!`);
        return true;
    }
}

const android = new AndroidNotify();
android.enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012", idAndroid: "IDANDROID_EXEMPLO"});
//new AndroidNotify().enviar({nome:"Pedro Paulo",email: "ppreis@gmail.com", telefone: "+4915165042012"});