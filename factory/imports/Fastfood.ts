import { Comida } from "./Comida";

export class Lancheria implements Comida {
    public verificaTempo(numero: number): void {
        if (numero < 10) {
            console.log('Fast food: Recomendamos que peça um hamburguer.')
        } else {
            console.log('Fast food: Desculpe, trabalhamos apenas com fast food.')
        }
    }

    public verificaPrato(nome: string): void {
        if (nome == 'Hamburguer' || nome == 'Bauru') {
            console.log('Fast Food: Pedido feito com sucesso.')
        } else {
            console.log('Fast Food: Não trabalhamos com esse prato.')
        }
    }
}