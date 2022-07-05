import prompt from 'prompt-sync';
import { Fastfood } from './Comida';

const rango: Fastfood = new Fastfood();
let teclado = prompt();

let opcao:number = 0
let digita

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

        rango.verificaTempo(digita)
        break;

        case 2:
        digita = teclado('O que você gosta ? ')

        rango.verificaComida(digita)
        break;
    }
    
}