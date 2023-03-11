export class PasswordView {
    constructor() {
        this.passwordPRogressBlock = $('#password-strength-block')
        this.passwordProgressBar = $('#password-progress')
        this.passwordNotification = $('#password-notification')
        this.passwordNotificationDelete = $('#password-notification-delete')
        this.passwordNotificationDelete.on('click', (e) => {
            e.preventDefault()
            this.fechaNotificacao()
        })
        this.passwordNotificationMessage = $('#password-notification-message')
    }

    exibeForcaSenha(){
        this.passwordPRogressBlock.removeClass('is-hidden')
    }

    fechaForcaSenha(){
        this.passwordPRogressBlock.addClass('is-hidden')
    }

    atualizaForcaSenha(forca){
        // console.log(forca)
        this.passwordProgressBar.attr('value', forca * 20)
    }

    exibeNotificacao(mensagem){
        // console.log(mensagem)
        this.passwordNotification.removeClass('is-hidden')
        this.passwordNotificationMessage.text(mensagem)
        this.passwordNotificationMessage.text(mensagem)
    }

    fechaNotificacao() {
        this.passwordNotification.addClass('is-hidden')
    }
}