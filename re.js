const pessoas = [
    { nome: "Ana", peso: 54, altura: 1.65 },
    { nome: "Carlos", peso: 82, altura: 1.75 },
    { nome: "Mariana", peso: 110, altura: 1.60 },
    { nome: "João", peso: 68, altura: 1.78 }
];

console.log("=== CALCULADORA DE IMC EM LOTE ===");

// 2. Estrutura de Loop (for) para percorrer cada item da lista
for (let i = 0; i < pessoas.length; i++) {
    let pessoaAtual = pessoas[i];

    // Variáveis locais para o cálculo
    let peso = pessoaAtual.peso;
    let altura = pessoaAtual.altura;
    let imc;
    let classificacao = "";

    // Cálculo do IMC: Peso dividido pela altura ao quadrado
    imc = peso / (altura * altura);

    // 3. Estrutura de Decisão (if / else if / else) para definir a classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso (Magreza)";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal (Saudável)";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 40) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade Grave";
    }

    // Exibição formatada dos resultados no console
    console.log(`\nNome: ${pessoaAtual.nome}`);
    console.log(`Dados: ${peso}kg | ${altura}m`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
    console.log("-----------------------------------------");
}