import {IBancoDeDados} from '../intefaces/IBancoDeDados'

export class BancoDeDados {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQLServer";

    constructor(
        private ip: string,
        private user: string,
        private password: string,
        private tipoBanco: string,
    ) {}

    static factory(parametros: IBancoDeDados){
        if(![BancoDeDados.TIPO_MYSQL,BancoDeDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)){
            throw new Error("Tipo de Banco Inválido");
        }
        return new BancoDeDados(parametros.ip,parametros.user,parametros.password,parametros.tipoBanco );
    }
}
