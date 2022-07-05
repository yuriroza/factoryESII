import prompt from 'prompt-sync';
import {Comida} from './imports/Comida';
import {Lancheria} from './imports/Fastfood';
import {Restaurante} from './imports/Restaurante';

let teclado = prompt();
let restaurante: Comida = new Restaurante()
const lancheria: Lancheria = new Lancheria()

let opcao:number = 0
let digita

function verificaTempo(numero:number): void {
    restaurante.verificaTempo(numero)
    lancheria.verificaTempo(numero)
}

function verificaPrato(nome:string): void {
    restaurante.verificaPrato(nome)
    lancheria.verificaPrato(nome)
}


while (opcao != 5) {
    console.log()
    console.log('------------ Fast Food Avenida -------------')
    console.log('1. Seu tempo                                ')
    console.log('2. Verifica tipo                            ')
    console.log('5. Sair                                     ')
    console.log('--------------------------------------------')
    console.log()

    opcao = +teclado("Escolha a opção: ")

    switch (opcao) {
        case 1:
        digita = +teclado('Seu tempo (minutos): ')

        verificaTempo(digita)
        break;

        case 2:
        digita = teclado('O que você gosta ? ')

        verificaPrato(digita)
        break;
    }
    
}