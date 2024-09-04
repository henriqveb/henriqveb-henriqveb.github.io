document.addEventListener('DOMContentLoaded', function() {
    // Validação do Formulário de Cadastro
    const formCadastro = document.querySelector('form[action="login.html"]');
    formCadastro.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Validação de E-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            event.preventDefault();
            return;
        }

        // Validação de Senha
        if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            event.preventDefault();
            return;
        }
    });

    // Funcionalidade de Pesquisa
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert('Você pesquisou por: ' + query);
            // Aqui você pode adicionar a funcionalidade de redirecionamento para a página de resultados da pesquisa.
        } else {
            alert('Por favor, insira um termo de pesquisa.');
        }
    });
});
