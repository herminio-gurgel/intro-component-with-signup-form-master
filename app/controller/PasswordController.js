import {PasswordView} from '../view/PasswordView.js'
import {CadastroView} from "../view/CadastroView.js";

export class PasswordController {
    constructor() {
        this.inputPassword = $('#password')
        this.passwordCheck = $('#password-check')
        this.inputConfirmPassword = $('#password-confirm')
        this.passwordConfirmCheck = $('#password-confirm-check')
        this.passwordView = new PasswordView()
        this.cadastroView = new CadastroView()


        this.inputPassword.on('blur', () => {
            this.passwordView.fechaForcaSenha()
        })

        this.inputPassword.on('input', () => {
            this.passwordView.exibeForcaSenha()
            this.validaSenha()
        })

        this.inputConfirmPassword.on('input', () => {
            this.confirmaSenha()
        })
        this.inputConfirmPassword.on('blur', () => {
            this.confirmaSenha()
        })
    }

    validaSenha() {
        let pw = this.inputPassword.val()
        let issues = []
        let requisitoSenha = ''
        let forcaSenha = 5

        if (pw.length < 8) {
            forcaSenha--
            issues.push('be at least 8 letters long')
        }
        if (pw.length > 16) {
            issues.push('be less than 16 letters long')
        }
        if (!pw.match(/[A-Z]/g)) {
            forcaSenha--
            issues.push('contain a capital letter')
        }
        if (!pw.match(/[a-z]/g)) {
            forcaSenha--
            issues.push('contain a lowercase letter')
        }
        if (!pw.match(/\d/g)) {
            forcaSenha--
            issues.push('contain a number')
        }
        if (!pw.match(/\W+/g)) {
            forcaSenha--
            issues.push('contain a special character')
        }

        if (issues.length > 0) {
            requisitoSenha = this.sentence(issues)
            this.passwordView.exibeNotificacao(requisitoSenha)
            this.forcaSenha(forcaSenha)
            this.passwordView.passwordConfirmDisable()
            this.cadastroView.invalido(this.inputPassword, this.passwordCheck)
            return false
        } else {
            this.passwordView.fechaNotificacao()
            this.forcaSenha(forcaSenha)
            this.passwordView.passwordConfirmEnable()
            this.cadastroView.valido(this.inputPassword, this.passwordCheck)
            return true

        }

    }

    sentence(reasons) {
        let start = 'Password must '
        if (reasons.length === 1) {
            return start + reasons[0] + '.'
        }
        if (reasons.length === 2) {
            return start + reasons[0] + ' and ' + reasons[1] + '.'
        }
        if (reasons.length > 2) {
            let last = reasons[reasons.length - 1];
            return start + reasons.slice(0, -1).map(function (r) {
                return r;
            }).join(', ') + ', and ' + last + '.'
        }
    }

    forcaSenha(nivelSeguranca) {
        this.passwordView.atualizaForcaSenha(nivelSeguranca)
    }

    confirmaSenha() {
        if (this.inputPassword.val() === this.inputConfirmPassword.val()) {
            this.passwordView.fechaPasswordConfirmMessage()
            this.cadastroView.valido(this.inputConfirmPassword, this.passwordConfirmCheck)
            return true
        }
            this.passwordView.exibePasswordConfirmMessage()
            this.cadastroView.invalido(this.inputConfirmPassword, this.passwordConfirmCheck)
            return false
    }
}