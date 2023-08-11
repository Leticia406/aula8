//criando uma class

export class Alunos{
    nome: string;
    idade: number;
    altura:number;
    cor_cabelo: string;
    cpf: string;

    // construtor define os valores 
    constructor(
        _nome,
        _idade,
        _altura,
        _cor_cabelo, 
        _cpf){

            this.nome = _nome;
            this.idade = _idade;
            this.altura = _altura;
            this.cor_cabelo = _cor_cabelo;
            this.cpf = _cpf;
    }
}

//criando um objeto 

let aluno = new Alunos('leticia', '16', '1.69', 'loiro escuro', '47350005857');

console.log(aluno)