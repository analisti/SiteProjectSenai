var usuarioPadrao = "ciclo";
var senhaPadrao = "ciclo";

function verificarFormulario() {
    var usuario = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (usuario === usuarioPadrao && senha === senhaPadrao) {
        alert("Bem-vindo!");
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}