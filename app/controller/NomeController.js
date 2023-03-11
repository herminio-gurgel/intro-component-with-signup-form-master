import {CadastroView} from "../view/CadastroView.js";

export class NomeController {

    constructor() {
        this.inputNome = $('#first-name')
        this.checkIcon = $('#first-name-check')
        this.cadastroView = new CadastroView()
        this.adicionaEvento()
    }

    adicionaEvento() {
        this.inputNome.on('blur', () => {
            if (this.inputNome.val().length < 3) {
                this.cadastroView.invalido(this.inputNome, this.checkIcon)
            } else {
                this.cadastroView.valido(this.inputNome, this.checkIcon)
            }
        })
    }

}