import {NomeController} from "./NomeController.js";
import {EmailController} from "./EmailController.js";
import {PasswordController} from "./PasswordController.js";

export class CadastroController {
    constructor() {
        this.inputSubmit = $('#submit-button')
        this.modal = $('#modal')
        this.modalClose = $('#modal-close')
        this.modalButton = $('#modal-button')
        this.nomeController = new NomeController()
        this.emailController = new EmailController()
        this.passwordController = new PasswordController()

        this.inputSubmit.on('click', (e) => {
            e.preventDefault()
            this.enviaFormulario()
        })

        this.modalClose.on('click', (e) => {
            e.preventDefault()
            this.enviaFormulario()
        })

        this.modalButton.on('click', (e) => {
            e.preventDefault()
            this.enviaFormulario()
        })
    }

    enviaFormulario() {
        if (!this.validaFormulario()) {
            // console.log(this.validaFormulario())
            this.modalSwitch()
        }
    }

    validaFormulario() {
        if (!this.nomeController.validaNome()) {
            return false
        }

        if (!this.emailController.valida()) {
            return false
        }

        if (!this.passwordController.validaSenha()) {
            return false
        }

        if (!this.passwordController.confirmaSenha()) {
            return false
        }

        return true
    }

    modalSwitch() {
        this.modal.toggle('is-active')
    }
}