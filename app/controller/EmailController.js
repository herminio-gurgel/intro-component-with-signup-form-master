import {CadastroView} from "../view/CadastroView.js";

export class EmailController {

    constructor() {
        this.inputEmail = $('#email')
        this.checkIcon = $('#email-check')
        this.cadastroView = new CadastroView()
        this.adicionaEvento()
        this.regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
    }

    adicionaEvento() {
        this.inputEmail.on('blur', () => {
            let email = this.inputEmail.val()
            let validacao = this.valida(email)

            if (validacao) {
                this.cadastroView.valido(this.inputEmail, this.checkIcon)
            } else {
                this.cadastroView.invalido(this.inputEmail, this.checkIcon)
            }
        })
    }

    valida(email) {
        if (!email)
            return false;

        if (email.length > 254)
            return false;

        var valid = this.regex.test(email);
        if (!valid)
            return false;

        // Further checking of some things regex can't handle
        var parts = email.split("@");
        if (parts[0].length > 64)
            return false;

        var domainParts = parts[1].split(".");
        if (domainParts.some(function (part) {
            return part.length > 63;
        }))
            return false;

        return true;
    }
}