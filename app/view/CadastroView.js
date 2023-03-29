export class CadastroView {

    invalidaInput(input, icon, helper, helperMessage) {
        input.removeClass('is-primary')
        input.addClass('is-danger')
        icon.removeClass('fa-check has-text-primary')
        icon.addClass('fa-xmark has-text-danger')
        helper.removeClass('is-hidden')
        helper.text(helperMessage)
    }

    validaInput(input, icon, helper) {
        input.removeClass('is-danger')
        input.addClass('is-primary')
        icon.removeClass('fa-xmark has-text-danger')
        icon.addClass('fa-check has-text-primary')
        helper.addClass('is-hidden')
        helper.text('')
    }
}