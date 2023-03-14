export class PasswordView {
    constructor() {
        this.passwordProgressBlock = $('#password-strength-block')
        this.passwordProgressBar = $('#password-progress')
        this.passwordNotification = $('#password-notification')
        this.passwordNotificationDelete = $('#password-notification-delete')
        this.passwordNotificationMessage = $('#password-notification-message')
        this.passwordConfirm = $('#password-confirm')
        this.passwordConfirmMessage = $('#password-confirm-message')

        this.passwordNotificationDelete.on('click', (e) => {
            e.preventDefault()
            this.fechaNotificacao()
        })
    }

    exibeForcaSenha(){
        this.passwordProgressBlock.removeClass('is-hidden')
    }

    fechaForcaSenha(){
        this.passwordProgressBlock.addClass('is-hidden')
    }

    atualizaForcaSenha(forca){
        let classeNotificacao = ['is-danger' ,'is-danger', 'is-warning', 'is-primary', 'is-success']
        this.passwordProgressBar.attr('value', forca * 20)
        this.passwordProgressBar.removeClass('is-danger is-dangger is-warning is-primary is-success')
        this.passwordProgressBar.addClass(classeNotificacao[forca - 1])
    }

    exibeNotificacao(mensagem){
        this.passwordNotification.removeClass('is-hidden')
        this.passwordNotificationMessage.text(mensagem)
        this.passwordNotificationMessage.text(mensagem)
    }

    fechaNotificacao() {
        this.passwordNotification.addClass('is-hidden')
    }

    passwordConfirmEnable(){
        this.passwordConfirm.attr('disabled', false)
    }

    passwordConfirmDisable(){
        this.passwordConfirm.attr('disabled', true)
    }

    exibePasswordConfirmMessage(){
        this.passwordConfirmMessage.removeClass('is-hidden')
    }

    fechaPasswordConfirmMessage(){
        this.passwordConfirmMessage.addClass('is-hidden')
    }

}