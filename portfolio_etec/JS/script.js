const frasesSecretas = [
    "Café + Código = Sucesso na ETEC ☕",
    "Desenvolvendo o futuro na FATEC ! 🎓",
    "Eu amo tocar violão! ",
    "HTML é linguagem de programação sim! (Brincadeira) 💻",
    "Você encontrou o easter egg secreto da Mirela! 🎉",
    "O Leon é o melhor personagem existente sim!",
    "Nós te amamos Soap ❤️",
    "Vamos fingir que MW4 nunca existiu...",
    "Gostou do site? Manda um opa no meu email! :)"
];


document.addEventListener('DOMContentLoaded', () => {
    const easterEgg = document.getElementById('easter-egg');
    
    if (easterEgg) {
        easterEgg.addEventListener('click', () => {
            const textoEaster = document.getElementById('texto-easter');
            const randomIndex = Math.floor(Math.random() * frasesSecretas.length);
            textoEaster.textContent = frasesSecretas[randomIndex];
        });
    }
});