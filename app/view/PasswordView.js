export class PasswordView {
    constructor() {
        this.passwordProgressBlock = $('#password-strength-block')
        this.passwordProgressBar = $('#password-progress')
    }

    atualizaForcaSenha(nivelDeSeguranca) {
        this.passwordProgressBlock.removeClass('is-hidden')
        let classeNotificacao = ['is-danger' ,'is-danger', 'is-warning', 'is-primary', 'is-success']
        this.passwordProgressBar.attr('value', nivelDeSeguranca * 20)
        this.passwordProgressBar.removeClass('is-danger is-dangger is-warning is-primary is-success')
        this.passwordProgressBar.addClass(classeNotificacao[nivelDeSeguranca - 1])
    }

}