function probarValidarNombre(){
console.assert(
    validarNombre('') === 'Este campo debe tener al menos un caracter',
    'Validar nombre no validó que el nombre no sea vacio'
 )

 console.assert(
    validarNombre('11111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
    'validar nombre no validó que el nombre tenga menos de 50 caracteres'
 )
}
probarValidarNombre()

function probarValidarCiudad(){
   console.assert(
      validarCiudad('') === 'Debes seleccionar una ciudad',
      'Validar ciudad no validó que se deba seleccionar una ciudad'
   )
}
probarValidarCiudad()
