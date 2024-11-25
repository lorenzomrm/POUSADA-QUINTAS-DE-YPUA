function mascara_cpf() {
    var cpf = document.getElementById('cpf');
    if (cpf.value.length === 3 || cpf.value.length === 7) {
        cpf.value += ".";
    } else if (cpf.value.length === 11) {
        cpf.value += "-";
    }
}

function mascara_telefone() {
    var telefone = document.getElementById('telefone');
    var valor = telefone.value.replace(/\D/g, '');

    if (valor.length <= 2) {
        telefone.value = '(' + valor;
    } else if (valor.length <= 6) {
        telefone.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
    } else {
        telefone.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
    }
}

function mascara_datanascimento() {
    var data = document.getElementById('nascimento');
    if (data.value.length === 2 || data.value.length === 5) {
        data.value += "/";
    }
}

document.getElementById('toggleSenha').addEventListener('click', function () {
    const inputSenha = document.getElementById('senha');
    const isPassword = inputSenha.type === 'password';
    inputSenha.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '🙈' : '🙉';
});

document.getElementById('form-edicao').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const pessoas = document.getElementById('pessoas').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const alerta = document.getElementById('alerta-sucesso');

    
    if (!nome || !email || !endereco || !telefone || !pessoas || !nascimento) {
        alert('Todos os campos obrigatórios devem ser preenchidos!');
    } else {
        alerta.style.display = 'block';
        setTimeout(function() {
            alerta.style.display = 'none';
            window.location.href = 'Acomodacoes.html';
        }, 3000);
    }
});

document.getElementById('cpf').addEventListener('keyup', mascara_cpf);
document.getElementById('telefone').addEventListener('input', mascara_telefone);
document.getElementById('nascimento').addEventListener('keyup', mascara_datanascimento);
