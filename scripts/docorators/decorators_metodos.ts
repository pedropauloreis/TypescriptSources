
function decoratorMetodo(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor

)
{
    console.log(
        target,
        propertyKey,
        descriptor
    )

    console.log(
        descriptor.value
    )

    descriptor.value = (... args: unknown[]) => { 
        return args.map(item => {
            return (<string>item).toUpperCase(); //DECORATOR TRANSFORMANDO TODA CADEIA EM LETRA MAÍUSCULA
        }) 
    } //NOVA FUNÇÃO ESCRITA
}



class TratarMensagem{

    @decoratorMetodo //APLICACAO DO DECORATOR
    static dizerMensagem (...mensagens: string []): string[]
    {
        return mensagens;
    }
}


console.log(TratarMensagem.dizerMensagem("Olá", "Seja bem-vindo","Curso"));

