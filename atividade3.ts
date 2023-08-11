

import { Alunos } from "./atvidade1";
// class
class Moveis{
    sofa: string;
    armario: string;
    mesa: string;
    cadeira: string;
    estante: string;
    rack: string;

    //construtor

    constructor(_sofa, _armario, _mesa, _cadeira, _estante, _rack){
        this.sofa = _sofa;
        this.armario = _armario;
        this.mesa = _mesa;
        this.cadeira = _cadeira;
        this.estante = _estante;
        this.rack = _rack;
    }
}

// objeto

let marca_moveis = new Moveis('Mobly', 'ITATIAIA', 'MADESA', 'Conforsit Viena', 'ESPRESSO MÓVEIS', 'ARTELY');

console.log(marca_moveis.armario)


let aluno = Alunos