const $form = document.querySelector('#carta-a-santa')

const nombre = $form.nombre.value
//tambien se puede usar
// const nombre = querySelector('[name=nombre]').value
// const nombre = querySelector('#nombre').value

const ciudad = $form.ciudad.value //Esto esta maaaaaal
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos un caracter'
    }
    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    return ''
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Debes seleccionar una ciudad'
    }
    return ''
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'Este campo debe tener al menos un caracter'
    }
    if(descripcionRegalo.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    return ''
}
