import {NomeController} from "./NomeController.js";
import {EmailController} from "./EmailController.js";
import {PasswordController} from "./PasswordController.js";
import {SubmitView} from "../view/SubmitView.js";

export class SubmitController {

    constructor() {
        this.nomeController = new NomeController()
        this.emailController = new EmailController()
        this.passwordController = new PasswordController()
        this.submitView = new SubmitView();
        this.inputSubmit = $('#submit-button')

        this.inputSubmit.on('click', (e) => {
            e.preventDefault()
            this.validaFormulario()
        })
    }

    validaFormulario() {
        this.submitView.searchSpinner(this.inputSubmit)

        let issues = []

        if (!this.nomeController.validaNome()) {
            issues.push('Nome inválido')
        }

        if (!this.emailController.validaEmail()) {
            issues.push('Email inválido')
        }

        if (!this.passwordController.validaSenha() || !this.passwordController.confirmaSenha()) {
            issues.push('Senha inválida')
        }

        if (issues.length > 0) {
            this.submitView.exibeModal('Dados inválidos', issues)
            return false
        }

        this.submitView.exibeModal('Cadastro realizado', 'Você receberá um email para confirmação dos dados')
    }
}