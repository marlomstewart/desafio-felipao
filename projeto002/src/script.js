//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**


function ranked(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    let nivelJogador = "";
    if (saldo < 10 || saldo < 0) {
        nivelJogador = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivelJogador = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivelJogador = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivelJogador = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivelJogador = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivelJogador = "Lendário";
    } else {
        nivelJogador = "Imortal";
    }

    return {saldo, nivelJogador};
}

for (let i = 0; i < 1; i++) {
    let vitorias = parseInt(prompt("Digite o número de vitórias:")); // Converte o prompt para números inteiros
    let derrotas = parseInt(prompt("Digite o número de derrotas:")); // Converte o prompt para número inteiros

    let resultado = ranked(vitorias, derrotas);

    console.log(`O herói tem de saldo ${resultado.saldo} e está no nível de ${resultado.nivelJogador}`); 
}