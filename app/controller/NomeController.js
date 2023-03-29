import {CadastroView} from "../view/CadastroView.js";

export class NomeController {

    constructor() {
        this.inputNome = $('#first-name')
        this.checkIcon = $('#first-name-check')
        this.nameHelp = $('#name-help')
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
            this.cadastroView.invalidaInput(this.inputNome, this.checkIcon, this.nameHelp, 'O nome deve possuir ao menos 3 caracteres')
            return false
        }
        this.cadastroView.validaInput(this.inputNome, this.checkIcon, this.nameHelp)
        return true
    }

}