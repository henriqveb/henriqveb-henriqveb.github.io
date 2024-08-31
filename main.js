document.addEventListener('DOMContentLoaded', function() {
    // Validação do Formulário de Cadastro
    const formCadastro = document.querySelector('form[action="index.html"]');
    formCadastro.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const telefone = document.getElementById('telefone').value;
        const endereco = document.getElementById('endereco').value;
        
        // Validação de Nome
        if (nome.length < 3) {
            alert('O nome deve ter pelo menos 3 caracteres.');
            event.preventDefault();
            return;
        }

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

/*
        // Validação de Telefone
        const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefoneRegex.test(telefone)) {
            alert('O telefone deve estar no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.');
            event.preventDefault();
            return;
        }
*/

        // Validação de Endereço
        if (endereco.length < 10) {
            alert('O endereço deve ter pelo menos 10 caracteres.');
            event.preventDefault();
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

    // Interatividade nas Seções
    const blocksItems = document.querySelectorAll('.blocks-item');
    blocksItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            item.style.backgroundColor = '#f2f2f2';
        });
        item.addEventListener('mouseleave', function() {
            item.style.backgroundColor = '';
        });
    });
});
