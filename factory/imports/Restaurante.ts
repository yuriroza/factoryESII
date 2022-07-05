import {Comida} from './Comida';
export class Restaurante implements Comida {
    public verificaTempo(numero: number): void {
        if (numero > 10) {
            console.log('Cantina Avenida: Seja bem vindo a Cantina Avenida.')
        } else {
            console.log('Cantina Avenida: Não atendemos esse tipo de pedido.')        }
    }

    public verificaPrato(nome: string): void {
        if(nome == 'Massa' || nome == 'Lasanha') {
            console.log('Cantina Avenida: Pedido feito com sucesso.')
        } else {
            console.log('Cantina Avenida: Não trabalhamos com esse prato.')
        }
    }
}