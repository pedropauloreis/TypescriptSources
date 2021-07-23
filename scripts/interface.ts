//sem interface

let endereco: object;

endereco = {
    logradouro: "Av. Paulista",
    numero: 1000
}

endereco = {
    logradouro: "Av. Paulista2",
    nro: 2240
}

//variável com interface

let endereco2: {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    pais?:  string;

};

endereco2 = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Bela Cintra",
    cidade: "São Paulo"

}

endereco2 = {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Bela Vista",
    cidade: "São Paulo",
    pais: "Brasil"
}


//interface

interface IEndereco {
    logradouro: string;
    numero: number | string;
    bairro: string;
    cidade: string;
    pais?:  string; //opcional
    postalCode: number;
}

let endereco_SP, endereco_LU: IEndereco;


endereco_SP =  {
    logradouro: "Av. Paulista",
    numero: 1000,
    bairro: "Bela Vista",
    cidade: "São Paulo",
    pais: "Brasil",
    postalCode: 1234
}

endereco_LU =  {
    logradouro: "Rheinalle",
    numero: "4G",
    bairro: "Süd",
    cidade: "Ludwigshaffen",
    postalCode: 67061 
}

console.log(endereco);
console.log(endereco_SP);
console.log(endereco_LU);