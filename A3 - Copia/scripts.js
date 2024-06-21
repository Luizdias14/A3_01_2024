document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (name === '' || email === '' || password === '') {
        errorMessage.textContent = 'Todos os campos são obrigatórios.';
        errorMessage.style.display = 'block';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
        console.log('Formulário enviado com sucesso!');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
