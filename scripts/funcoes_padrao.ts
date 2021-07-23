const enviar_email = (
    para: string,                       //parametro normal
     assunto: string = "Sem assunto",   //parametro padrão
     remetente?: string                 //parametro opcional
     ) : void => {
    console.log({para, assunto,remetente})
}

enviar_email ("ppreis@gmail.com")
enviar_email ("ppreis@gmail.com","Typescript")
enviar_email ("ppreis@gmail.com","Typescript","remetente@gmail.com")