export class SubmitView {

    constructor() {
        this.modal = $('#modal')
        this.modalCardTitle = $('#modal-card-title')
        this.modalClose = $('#modal-close')
        this.modalCardBody = $('#modal-card-body')
        this.modalButton = $('#modal-button')

        this.modalClose.on('click', (e) => {
            e.preventDefault()
            this.modal.removeClass('is-active')
        })

        this.modalButton.on('click', (e) => {
            e.preventDefault()
            this.modal.removeClass('is-active')
        })
    }

    searchSpinner(submit) {
        submit.addClass('is-loading')

        setTimeout(() => {
            submit.removeClass('is-loading')
        }, 1000)
    }

    exibeModal(titulo, mensagem) {
        setTimeout(() => {
            this.modal.addClass('is-active')
            this.modalCardTitle.text(titulo)
            this.modalCardBody.text(mensagem)
        }, 1000)

    }
}