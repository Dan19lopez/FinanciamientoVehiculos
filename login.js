const usuarios = [
    {
        "usuario": "admin",
        "contrasena": "1234",
    },
];
let intentos = 3
function buscarUsuario() {
    const username = document.querySelector("#usuario").value;
    const password = document.querySelector("#contrasena").value;

    const usuarioEncontrado = usuarios.some(usuario => {
        if (username === usuario.usuario && password === usuario.contrasena) {
            window.open("home.html")
            return true;
        }
        return false;
    });

    if (!usuarioEncontrado) {
        intentos-=1
        alert("Usuario o contraseña incorrectos te quedan: "+intentos+" intentos")
        console.log("Usuario o contraseña incorrectos te quedan: "+intentos+" intentos");
        if (intentos == 0){
            window.open("homeclose.html")
        }
    }

    return usuarioEncontrado;
}

document.querySelector("#btnIniciar").addEventListener("click", buscarUsuario);
