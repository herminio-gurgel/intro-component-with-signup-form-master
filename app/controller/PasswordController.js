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

    /*

        validaSenha(pw) {
            let issues = []
            if (pw.length < 8) {
                issues.push('be at least 8 letters long')
            }
            if (pw.length > 16) {

                issues.push('be less than 16 letters long')
            }
            if (!pw.match(/[A-Z]/g)) {
                issues.push('contain a capital letter')
            }
            if (!pw.match(/[a-z]/g)) {
                issues.push('contain a lowercase letter')
            }
            if (!pw.match(/\d/g)) {
                issues.push('contain a number')
            }
            if (!pw.match(/\W+/g)) {
                issues.push('contain a special character')
            }

            return issues.length ? {
                sentence: sentence(issues),
                issues: issues
            } : false;

            function sentence(reasons) {
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
        }

     */

    validaSenha(pw) {
        let issues = []
        if (pw.length < 8) {
            issues.push('be at least 8 letters long')
        }
        if (pw.length > 16) {

            issues.push('be less than 16 letters long')
        }
        if (!pw.match(/[A-Z]/g)) {
            issues.push('contain a capital letter')
        }
        if (!pw.match(/[a-z]/g)) {
            issues.push('contain a lowercase letter')
        }
        if (!pw.match(/\d/g)) {
            issues.push('contain a number')
        }
        if (!pw.match(/\W+/g)) {
            issues.push('contain a special character')
        }

        // console.log(issues.length)

        // return issues.length ? {
        //     sentence: this.sentence(issues),
        //     // issues: issues
        // } : false;
        if (issues.length > 0) {
            console.log(issues.length)
            this.sentence(issues)
        }

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
}