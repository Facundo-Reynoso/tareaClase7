function probarValidarNombre(){
   console.assert(
      validarNombre('') === 'Este campo debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacio'
   )

   console.assert(
      validarNombre('11111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
      'validar nombre no validó que el nombre tenga menos de 50 caracteres'
   )

   console.assert(
      validarNombre('Facundo') === '',
      'validarNombre falló con un nombre valido'
   )
}
probarValidarNombre()

function probarValidarCiudad(){
   console.assert(
      validarCiudad('') === 'Debes seleccionar una ciudad',
      'Validar ciudad no validó que se deba seleccionar una ciudad'
   )

   console.assert(
      validarCiudad('Tucuman') === '',
      'validarCiudad falló con una ciudad valida'
   )
}
probarValidarCiudad()

function probarValidarDescripcionRegalo(){
   console.assert(
      validarDescripcionRegalo('') === 'Este campo debe tener al menos un caracter',
      'Validar descripción regalo no validó que el campo no sea vacio'
   )
   console.assert(
      validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
       === 'Este campo debe tener menos de 100 caracteres',
      'Validar Descripción regalo no validó que el campo tenga menos de 100 caracteres'
   )
   console.assert(
      validarDescripcionRegalo('computadora') === '',
      'validarDescricionRegalo falló con un regalo valido'
   )
}
probarValidarDescripcionRegalo()
