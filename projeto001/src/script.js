// # 1️⃣ Desafio Classificador de nível de Herói

// - Variáveis
let nomeHeroi = "monstrão"; // Variável para armazenar o nome do herói
let nivel = ""; // Variável para armazenar o nível do herói

// Laço de repetição para XP de 0 a 10000
for (let xp = 0; xp <= 10000; xp++) { // Laço de repetição (for) que itera de 0 a 10000
    // Estruturas de decisão para determinar o nível
    if (xp < 1000) { // Estrutura de decisão (if) para verificar se XP é menor que 1000
        nivel = "Ferro"; // Atribuição do nível "Ferro"
    } else if (xp >= 1001 && xp <= 2000) { // Estrutura de decisão (else if) para verificar se XP está entre 1001 e 2000
        nivel = "Bronze"; // Atribuição do nível "Bronze"
    } else if (xp >= 2001 && xp <= 5000) { // Estrutura de decisão (else if) para verificar se XP está entre 2001 e 5000
        nivel = "Prata"; // Atribuição do nível "Prata"
    } else if (xp >= 5001 && xp <= 7000) { // Estrutura de decisão (else if) para verificar se XP está entre 5001 e 7000
        nivel = "Ouro"; // Atribuição do nível "Ouro"
    } else if (xp >= 7001 && xp <= 8000) { // Estrutura de decisão (else if) para verificar se XP está entre 7001 e 8000
        nivel = "Platina"; // Atribuição do nível "Platina"
    } else if (xp >= 8001 && xp <= 9000) { // Estrutura de decisão (else if) para verificar se XP está entre 8001 e 9000
        nivel = "Ascendente"; // Atribuição do nível "Ascendente"
    } else if (xp >= 9001 && xp <= 10000) { // Estrutura de decisão (else if) para verificar se XP está entre 9001 e 10000
        nivel = "Imortal"; // Atribuição do nível "Imortal"
    } else {
        nivel = "Radiante"; // Para XP maior que 10000, atribuição do nível "Radiante"
    }

    // Exibindo a mensagem
    console.log("Seu XP é: " + xp); // Exibe o valor atual de XP
    console.log("O Herói de nome '" + nomeHeroi + "' está no nível de " + nivel); // Exibe o nome do herói e seu nível
}