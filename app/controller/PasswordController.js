import {PasswordView} from '../view/PasswordView.js'
import {CadastroView} from "../view/CadastroView.js";

export class PasswordController {
    constructor() {
        this.inputPassword = $('#password')
        this.passwordCheck = $('#password-check')
        this.passwordHelp = $('#password-help')
        this.passwordHelpMessage = ''
        this.passwordStrength = 0
        this.passwordView = new PasswordView()
        this.cadastroView = new CadastroView()

        this.inputConfirmPassword = $('#password-confirm')
        this.inputConfirmPassword.attr('disabled', true)
        this.passwordConfirmCheck = $('#password-confirm-check')
        this.passwordConfirmHelp = $('#password-confirm-help')

        this.inputPassword.on('blur', () => {
            this.validaCampo()
            this.passwordView.passwordProgressBlock.toggleClass('is-hidden', true)
        })

        this.inputPassword.on('input', () => {
            this.validaSenha()
            this.passwordView.atualizaForcaSenha(this.passwordStrength)
        })

        this.inputConfirmPassword.on('blur', () => {
            this.confirmaSenha()
        })

    }

    validaSenha() {
        let pw = this.inputPassword.val()
        let issues = []
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

        this.passwordStrength = forcaSenha;

        if (issues.length > 0) {
            this.passwordHelpMessage = this.sentence(issues)
            return false
        }
        this.passwordHelpMessage = ''
        return true
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

    validaCampo() {
        if (!this.validaSenha()) {
            this.cadastroView.invalidaInput(this.inputPassword, this.passwordCheck, this.passwordHelp, this.passwordHelpMessage)
            this.passwordView.passwordProgressBlock.toggleClass('is-hidden', true)
            this.inputConfirmPassword.attr('disabled', true)
            return false
        }
        this.cadastroView.validaInput(this.inputPassword, this.passwordCheck, this.passwordHelp)
        this.passwordView.passwordProgressBlock.toggleClass('is-hidden', true)
        this.inputConfirmPassword.attr('disabled', false)
        return true
    }

    confirmaSenha() {
        if (this.inputPassword.val() === this.inputConfirmPassword.val()) {
            this.cadastroView.validaInput(this.inputConfirmPassword, this.passwordConfirmCheck, this.passwordConfirmHelp)
            return true
        }
        this.cadastroView.invalidaInput(this.inputConfirmPassword, this.passwordConfirmCheck, this.passwordConfirmHelp, 'As senhas devem ser iguais')
        return false
    }
}