
function mascara_cpf() {
    var cpf = document.getElementById('cpf');
    if (cpf.value.length === 3 || cpf.value.length === 7) {
        cpf.value += ".";
    } else if (cpf.value.length === 11) {
        cpf.value += "-";
    }
}


document.getElementById('toggleSenha').addEventListener('click', function () {
    const inputSenha = document.getElementById('senha');
    const isPassword = inputSenha.type === 'password';
    inputSenha.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '🙈' : '🙉'; 
});


document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!cpf || !senha) {
        alert('Todos os campos devem ser preenchidos!');
    } else {
        const alerta = document.getElementById('alerta-sucesso');
        alerta.style.display = 'block';
        setTimeout(function() {
            alerta.style.display = 'none';
            window.location.href = '../html/EditarConta.html';
        }, 3000);
    }
});


document.getElementById('cpf').addEventListener('keyup', mascara_cpf);
