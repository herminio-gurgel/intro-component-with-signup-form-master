export class CadastroView {
//configura as classes e icones dos elementos quando validados
    invalido(elemento, icone) {
        elemento.removeClass('is-primary')
        elemento.addClass('is-danger')
        icone.removeClass('fa-check has-text-primary')
        icone.addClass('fa-xmark has-text-danger')
    }

    valido(elemento, icone){
        elemento.removeClass('is-danger')
        elemento.addClass('is-primary')
        icone.removeClass('fa-xmark has-text-danger')
        icone.addClass('fa-check has-text-primary')
    }

//exibe ou oculta determinado elemento
    exibeElemento(elemento){
        elemento.removeClass('is-hidden')
    }

    ocultaElemento(elemento){
        elemento.addClass('is-hidden')
    }
}