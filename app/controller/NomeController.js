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
            this.validaNome()
        })
    }

    validaNome() {
        if (this.inputNome.val().length < 3) {
            this.cadastroView.invalido(this.inputNome, this.checkIcon)
            return false
        }

        this.cadastroView.valido(this.inputNome, this.checkIcon)
        return true
    }

}