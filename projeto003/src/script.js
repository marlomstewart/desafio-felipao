// # 3️⃣ Escrevendo as classes de um Jogo

// Definindo a classe Heroi
class Heroi {
    // Construtor da classe que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo.toLowerCase(); // Tipo do herói, normalizado para minúsculas. Isso garantirá que a verificação no switch funcione independentemente de como o tipo é passado (por exemplo, "Mago", "mago", "MAGO").
    }

    // Método que define o comportamento de ataque do herói
    atacar() {
        // Usando um switch para determinar o tipo de ataque com base na propriedade tipo
        switch (this.tipo) {
            case "mago":
                // Mensagem para o ataque do mago
                console.log(`O herói ${this.nome} de ${this.idade} anos é um ${this.tipo} e atacou usando magia.`);
                break; // Sai do switch

            case "guerreiro":
                // Mensagem para o ataque do guerreiro
                console.log(`O herói ${this.nome} de ${this.idade} anos é um ${this.tipo} e atacou usando espada.`);
                break; // Sai do switch

            case "monge":
                // Mensagem para o ataque do monge
                console.log(`O herói ${this.nome} de ${this.idade} anos é um ${this.tipo} e atacou usando artes marciais.`);
                break; // Sai do switch

            case "ninja":
                // Mensagem para o ataque do ninja
                console.log(`O herói ${this.nome} de ${this.idade} anos é um ${this.tipo} e atacou usando shuriken.`);
                break; // Sai do switch

            default:
                // Mensagem para o caso em que o tipo não é reconhecido
                console.log("Esse herói não existe.");
        }
    }
}

// Criando um array de instâncias da classe Heroi
let herois = [
    new Heroi("Altherion", 58, "mago"), // Criando um herói do tipo mago
    new Heroi("Tenzin", 71, "monge"), // Criando um herói do tipo monge
    new Heroi("Drogmar", 24, "guerreiro"), // Criando um herói do tipo guerreiro
    new Heroi("Kurozane", 39, "ninja"), // Criando um herói do tipo ninja
    new Heroi("Aiyoko", 44, "monge"), // Criando outro herói do tipo monge
    new Heroi("Kaela", 22, "guerreiro"), // Criando outro herói do tipo guerreiro
    new Heroi("Hikari", 19, "ninja"), // Criando outro herói do tipo ninja
    new Heroi("Myrrhena", 65, "mago") // Criando outro herói do tipo mago
];

// Usando um loop for para iterar sobre o array de heróis
for (let i = 0; i < herois.length; i++) { //length é uma propriedade de arrays em JavaScript que retorna o número total de elementos contidos no array. Por exemplo, se você tem um array chamado herois que contém 8 heróis, herois.length retornará 8.
    // Chamando o método atacar para cada herói no array
    herois[i].atacar();
}