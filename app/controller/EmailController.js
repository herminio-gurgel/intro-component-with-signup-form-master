import {CadastroView} from "../view/CadastroView.js";

export class EmailController {

    constructor() {
        this.inputEmail = $('#email')
        this.checkIcon = $('#email-check')
        this.emailHelper = $('#email-help')
        this.cadastroView = new CadastroView()
        this.adicionaEvento()
        this.regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    }

    adicionaEvento() {
        this.inputEmail.on('blur', () => {
            if (!this.validaEmail()) {
                this.cadastroView.invalidaInput(this.inputEmail, this.checkIcon, this.emailHelper, 'Email inválido')
                return false
            }
            this.cadastroView.validaInput(this.inputEmail, this.checkIcon, this.emailHelper)
            return true
        })
    }

    validaEmail() {
        let email = this.inputEmail.val()
        if (!email)
            return false;

        if (email.length > 254)
            return false;

        let valid = this.regex.test(email);
        if (!valid)
            return false;

        // Further checking of some things regex can't handle
        let parts = email.split("@");
        if (parts[0].length > 64)
            return false;

        let domainParts = parts[1].split(".");
        if (domainParts.some(function (part) {
            return part.length > 63;
        }))
            return false;

        return true;
    }
}