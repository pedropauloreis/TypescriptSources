//const meuElemento: HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, user, password";
db = null;


//let minhaVariavel;
//let minhaVariavel: undefined;

let minhaVariavel: string | undefined;

if(new Date().getDate() === 20)
{
    minhaVariavel = "Hoje é o dia 20"
}

console.log(minhaVariavel);