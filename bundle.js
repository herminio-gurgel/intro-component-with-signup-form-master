(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const firstNameInput = document.querySelector('#first-name')
const firstNamecheck = document.querySelector('#first-name-check')
firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value.length === 0) {
        firstNameInput.classList.add('is-danger')
        firstNameInput.classList.remove('is-primary')
        firstNamecheck.classList.add('fa-xmark', 'has-text-danger')
        firstNamecheck.classList.remove('fa-check', 'has-text-primary')
    } else {
        firstNameInput.classList.remove('is-danger')
        firstNameInput.classList.add('is-primary')
        firstNamecheck.classList.remove('fa-xmark', 'has-text-danger')
        firstNamecheck.classList.add('fa-check', 'has-text-primary')
    }
})

const lastNameInput = document.querySelector('#last-name')
const lastNamecheck = document.querySelector('#last-name-check')
lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value.length === 0) {
        lastNameInput.classList.add('is-danger')
        lastNameInput.classList.remove('is-primary')
        lastNamecheck.classList.add('fa-xmark', 'has-text-danger')
        lastNamecheck.classList.remove('fa-check', 'has-text-primary')
    } else {
        lastNameInput.classList.remove('is-danger')
        lastNameInput.classList.add('is-primary')
        lastNamecheck.classList.remove('fa-xmark', 'has-text-danger')
        lastNamecheck.classList.add('fa-check', 'has-text-primary')
    }
})

const emailValidator = require("email-validator/")
const emailInput = document.querySelector('#email')
const emailCheck = document.querySelector('#email-check')
emailInput.addEventListener('blur', () => {
    if (emailValidator.validate(emailInput.value)) {
        emailInput.classList.remove('is-danger')
        emailInput.classList.add('is-primary')
        emailCheck.classList.remove('fa-xmark', 'has-text-danger')
        emailCheck.classList.add('fa-check', 'has-text-primary')
    } else {
        emailInput.classList.remove('is-primary')
        emailInput.classList.add('is-danger')
        emailCheck.classList.remove('fa-check', 'has-text-primary')
        emailCheck.classList.add('fa-xmark', 'has-text-danger')
    }
})

const passwordRules = require('./password-rules')
const passwordInput = document.querySelector('#password')
const passWordCheck = document.querySelector('#password-check')
const passwordMessage = document.querySelector('#message-content')
passwordInput.addEventListener('blur', () => {
    if (passwordRules(passwordInput.value)) {
        passwordInput.classList.remove('is-primary')
        passwordInput.classList.add('is-danger')
        passWordCheck.classList.add('fa-xmark', 'has-text-danger')
        passWordCheck.classList.remove('fa-check', 'has-text-primary')
        passwordMessage.innerHTML = `${passwordRules(passwordInput.value).sentence}`
    } else {
        passwordInput.classList.add('is-primary')
        passwordInput.classList.remove('is-danger')
        passWordCheck.classList.remove('fa-xmark', 'has-text-danger')
        passWordCheck.classList.add('fa-check', 'has-text-primary')
        passwordMessage.innerHTML = ``
    }
})
},{"./password-rules":3,"email-validator/":2}],2:[function(require,module,exports){
"use strict";

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}
},{}],3:[function(require,module,exports){
(function (global){(function (){
(function (f) { if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && define.amd) { define([], f) } else { var g; if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this } g.passwordRules = f() } })(function () {
    var define, module, exports; return (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
        1: [function (require, module, exports) {
            module.exports = function (pw, rules) {
                var issues = [];
                rules = rules || {};
                def(rules, 'minimumLength', 8);
                def(rules, 'maximumLength', Infinity);
                def(rules, 'requireCapital', true);
                def(rules, 'requireLower', true);
                def(rules, 'requireNumber', true);
                def(rules, 'requireSpecial', true);

                if (pw.length < rules.minimumLength) {
                    issues.push({
                        reason: 'minimumLength',
                        message: 'Password must be at least ' + rules.minimumLength + ' letters long',
                        part: 'be at least ' + rules.minimumLength + ' letters long'
                    });
                }
                if (pw.length > rules.maximumLength) {
                    issues.push({
                        reason: 'maximumLength',
                        message: 'Password must be less than ' + rules.maximumLength + ' letters long',
                        part: 'be less than ' + rules.maximumLength + ' letters long'
                    });
                }
                if (rules.requireCapital && !pw.match(/[A-Z]/g)) {
                    issues.push({
                        reason: 'requireCapital',
                        message: 'Password must contain a capital letter',
                        part: 'contain a capital letter'
                    });
                }
                if (rules.requireLower && !pw.match(/[a-z]/g)) {
                    issues.push({
                        reason: 'requireLower',
                        message: 'Password must contain a lowercase letter',
                        part: 'contain a lowercase letter'
                    });
                }
                if (rules.requireNumber && !pw.match(/\d/g)) {
                    issues.push({
                        reason: 'requireNumber',
                        message: 'Password must contain a number',
                        part: 'contain a number'
                    });
                }
                if (rules.requireSpecial && !pw.match(/\W+/g)) {
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
                    var start = 'Password must ';
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

            function def(o, option, val) {
                if (o[option] === undefined) o[option] = val;
            }

        }, {}]
    }, {}, [1])(1)
});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
