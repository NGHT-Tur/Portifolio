// Formulário de contato (código original)
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! Obrigada por entrar em contato.');
    e.target.reset();
});

// --- LÓGICA DO MODO CLARO/ESCURO ---

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');
const localStorageKey = 'arthur_portfolio_theme';

// 1. Função para aplicar o tema
function applyTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        icon.textContent = '☀️'; // Ícone do sol para indicar que pode ir para o modo claro
    } else {
        body.classList.remove('dark-mode');
        icon.textContent = '🌙'; // Ícone da lua para indicar que pode ir para o modo escuro
    }
}

// 2. Função para alternar o tema
function toggleTheme() {
    // Alterna a classe no body
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Atualiza o ícone e salva a preferência
    if (isDarkMode) {
        localStorage.setItem(localStorageKey, 'dark');
        icon.textContent = '☀️';
    } else {
        localStorage.setItem(localStorageKey, 'light');
        icon.textContent = '🌙';
    }
}

// 3. Event listener para o botão
themeToggle.addEventListener('click', toggleTheme);

// 4. Carregar a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(localStorageKey);
    
    // Verifica a preferência salva
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else if (savedTheme === 'light') {
        applyTheme(false);
    } 
    // Se não houver preferência salva, verifica a preferência do sistema
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme(true); // Aplica o modo escuro se for a preferência do sistema
    }
    // Caso contrário, o modo claro (padrão) já estará aplicado.
});