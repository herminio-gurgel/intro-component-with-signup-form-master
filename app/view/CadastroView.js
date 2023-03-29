export class CadastroView {

    invalidaInput(input, icon, helper, helperMessage) {
        if (input.val() != '') {
            input.removeClass('is-primary')
            input.addClass('is-danger')
            icon.removeClass('fa-check has-text-primary')
            icon.addClass('fa-xmark has-text-danger')
            helper.removeClass('is-hidden')
            helper.text(helperMessage)
            return true;
        }
        this.limpaInput(input, icon, helper)
        return false
    }

    validaInput(input, icon, helper) {
        input.removeClass('is-danger')
        input.addClass('is-primary')
        icon.removeClass('fa-xmark has-text-danger')
        icon.addClass('fa-check has-text-primary')
        helper.addClass('is-hidden')
        helper.text('')
    }

    limpaInput(input, icon, helper){
        input.removeClass()
        icon.removeClass()
        helper.removeClass()
        input.addClass('input')
        icon.addClass('fas')
        helper.addClass('help is-danger is-hidden')
    }
}