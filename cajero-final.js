const usuarios = [
    { nombre: "Paola", apellido: "Basualdo", pin: 1234, saldo: 200000 },
    { nombre: "Yazmin", apellido: "Juarez", pin: 2345, saldo: 150000 },
    { nombre: "Sofia", apellido: "Heredia", pin: 3456, saldo: 250000 },
    { nombre: "Daniel", apellido: "Cuda", pin: 4567, saldo: 130000 }
]

let usuario_valido = false
let indice_usuario = null

function login() {
    let usuario_ingresado = prompt("Ingrese su usuario: ")
    let pass = Number(prompt("Ingrese su contraseña: "))
    let usuario_logueado = usuarios.findIndex((usuario) => {
        return usuario.nombre === usuario_ingresado && usuario.pin === pass
    })
    if (usuario_logueado !== -1) {
        usuario_valido = true
        indice_usuario = usuario_logueado
    } else {
        alert("Usuario o Contraseña invalida")
    }
}

function menuPrincipal() {
    let opcion = Number(prompt("Bienvenida/o " + usuarios[indice_usuario].nombre + " " + usuarios[indice_usuario].apellido + "\n"
        + "Ingrese una opcion:" + "\n" + "1 - Depositar dinero" + "\n" + "2 - Retirar dinero" + "\n" + "3 - Mostrar saldo" + "\n" + "4 - Salir"))
    if (opcion === 4) {
        usuario_valido = false
    } else if (opcion === 1) {
        deposito()
    } else if (opcion === 2) {
        extraccion()
    } else if (opcion === 3) {
        saldo()
    }
}

function saldo() {
    alert("Su saldo es : $" + usuarios[indice_usuario].saldo)
}

function deposito() {
    deposito_correcto = false
    while (!deposito_correcto) {
        let monto_a_depositar = Number(prompt("Ingrese el monto a depositar: "))
        if (isNaN(monto_a_depositar)) {
            alert("Valor incorrecto, intente nuevamente")
        } else {
            usuarios[indice_usuario].saldo += monto_a_depositar
            alert("Su nuevo saldo es: $" + usuarios[indice_usuario].saldo)
            deposito_correcto = true
        }
    }
}

function extraccion() {
    extraccion_correcta = false
    while (!extraccion_correcta) {
        let monto_a_extraer = Number(prompt("Ingrese el monto a extraer: "))
        if (isNaN(monto_a_extraer)) {
            alert("Valor incorrecto, intente nuevamente")
        } else {
            if (usuarios[indice_usuario].saldo < monto_a_extraer) {
                alert("El monto ingresado es mayor a su saldo, su saldo disponible es: $" + usuarios[indice_usuario].saldo)
            } else {
                usuarios[indice_usuario].saldo -= monto_a_extraer
                alert("Su nuevo saldo es: $" + usuarios[indice_usuario].saldo)
                extraccion_correcta = true
            }
        }
    }
}

function app() {
    while (!usuario_valido) {
        login()
    }

    while (usuario_valido) {
        menuPrincipal()
    }
}

while (!usuario_valido) {
    app()
}