document.getElementById('formOrdemServico').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const veiculoAno = document.getElementById('veiculoAno');

    let valid = true;

    if (nomeCliente.value.trim() === '') {
        alert('Por favor, preencha o nome do cliente');
        valid = false;
    }

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)');
        valid = false;
    }

    if (email.value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido');
            valid = false;
        }
    }

    if (veiculoAno.value < 1900 || veiculoAno.value > new Date().getFullYear()) {
        alert('Ano do veículo deve ser entre 1900 e o ano atual');
        valid = false;
    }

    if (valid) {
        alert('Ordem de serviço enviada com sucesso!');
        this.reset();
    }
});