export class Fastfood {
    public verificaTempo(numero:number) {
        if(numero < 15) {
            console.log('Nesse tempo recomendando um hambúrguer.')
        } else {
            console.log('Nesse tempo recomendamos o bauru turbo.')
        }
    }
    public verificaComida(comida: string){
        if(comida == 'Massa' || comida =='Lasanha'){
            console.log('Desculpe não servimos esse prato.')
        } else if (comida == 'Hamburguer' || comida == 'Bauru') {
            console.log('Prato disponível.')
        }
    }
}