import {PasswordView} from '../view/PasswordView.js'

export class PasswordController {
    constructor() {
        this.inputPassword = $('#password')

        this.inputPassword.on('blur', () => {
            this.passwordView.fechaForcaSenha()
        })

        this.inputPassword.on('input', () => {
            let password = this.inputPassword.val()
            this.passwordView.exibeForcaSenha()
            if (password.length > 0) {
                this.passwordView.exibeNotificacao(this.validaSenha(password).sentence)
            }
        })
        this.passwordView = new PasswordView()

    }

    validaSenha(pw) {
        let issues = []
        if (pw.length < 8) {
            issues.push({
                reason: 'minimumLength',
                message: 'Password must be at least 8 letters long',
                part: 'be at least 8 letters long'
            });
        }
        if (pw.length > 16) {

            issues.push({
                reason: 'maximumLength',
                message: 'Password must be less than 16 letters long',
                part: 'be less than 16 letters long'
            });
        }
        if (!pw.match(/[A-Z]/g)) {
            issues.push({
                reason: 'requireCapital',
                message: 'Password must contain a capital letter',
                part: 'contain a capital letter'
            });
        }
        if (!pw.match(/[a-z]/g)) {
            issues.push({
                reason: 'requireLower',
                message: 'Password must contain a lowercase letter',
                part: 'contain a lowercase letter'
            });
        }
        if (!pw.match(/\d/g)) {
            issues.push({
                reason: 'requireNumber',
                message: 'Password must contain a number',
                part: 'contain a number'
            });
        }
        if (!pw.match(/\W+/g)) {
            issues.push({
                reason: 'requireSpecial',
                message: 'Password must contain a special character',
                part: 'contain a special character'
            });
        }

        return issues.length ? {
            sentence: sentence(issues),
            issues: issues
        } : false;

        function sentence(reasons) {
            let start = 'Password must ';
            if (reasons.length === 1) {
                return start + reasons[0].part + '.';
            }
            if (reasons.length === 2) {
                return start + reasons[0].part + ' and ' + reasons[1].part + '.';
            }
            if (reasons.length > 2) {
                var last = reasons[reasons.length - 1].part;
                return start + reasons.slice(0, -1).map(function (r) {
                    return r.part;
                }).join(', ') + ', and ' + last + '.';
            }
        }
    };

    validaTamanhoMinimo(pw){
    }

    validaTamanhoMaximo(pw){

    }

    validaMaiusculo(pw){

    }

    validaMinuculo(pw){

    }

    validaNumero(pw){

    }

    validaEspecial(pw){

    }
}