document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const novaSenha = document.getElementById('nova-senha').value;

    // Validação básica
    if (nome === '' || sobrenome === '' || cpf === '' || telefone === '' || email === '' || novaSenha === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    console.log('Formulário enviado com sucesso!', {
        nome, sobrenome, cpf, email, telefone, novaSenha
    });
});
