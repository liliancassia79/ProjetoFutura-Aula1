// ========== FUNÇÕES DE VERIFICAÇÃO ==========

// 1. Verifica se um número é positivo, negativo ou zero.
function verificarPositivoNegativoZero(numero) {
    if (numero > 0) {
        return `${numero} é positivo.`;
    } else if (numero < 0) {
        return `${numero} é negativo.`;
    } else {
        return `${numero} é zero.`;
    }
}

// 2. Verifica se um número é par ou ímpar.
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par.`;
    } else {
        return `${numero} é ímpar.`;
    }
}

// 3. Verifica se uma pessoa é maior de idade (18 anos ou mais).
function verificarMaioridade(idade) {
    if (idade >= 18) {
        return `Com ${idade} anos, a pessoa é maior de idade.`;
    } else {
        return `Com ${idade} anos, a pessoa é menor de idade.`;
    }
}

// 4. Verifica se um número é divisível por 3.
function ehDivisivelPor3(numero) {
    if (numero % 3 === 0) {
        return `${numero} é divisível por 3.`;
    } else {
        return `${numero} não é divisível por 3.`;
    }
}

// 5. Verifica se um número é múltiplo de 5.
function ehMultiploDe5(numero) {
    if (numero % 5 === 0) {
        return `${numero} é múltiplo de 5.`;
    } else {
        return `${numero} não é múltiplo de 5.`;
    }
}

// 6. Verifica se um número está dentro de um intervalo (entre 1 e 10).
function estaNoIntervalo1a10(numero) {
    if (numero >= 1 && numero <= 10) {
        return `${numero} está entre 1 e 10.`;
    } else {
        return `${numero} está fora do intervalo de 1 a 10.`;
    }
}

// 7. Verifica se um número é maior que 10, menor que 10 ou igual a 10.
function compararCom10(numero) {
    if (numero > 10) {
        return `${numero} é maior que 10.`;
    } else if (numero < 10) {
        return `${numero} é menor que 10.`;
    } else {
        return `${numero} é igual a 10.`;
    }
}

// 8. Verifica se um número é um número primo.
function ehNumeroPrimo(numero) {
    if (numero <= 1) { return `${numero} não é um número primo.`; }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return `${numero} não é um número primo (é divisível por ${i}).`;
        }
    }
    return `${numero} é um número primo.`;
}

// 9. Verifica se uma palavra tem mais de 5 letras.
function verificarTamanhoPalavra(palavra) {
    if (palavra.length > 5) {
        return `A palavra "${palavra}" tem mais de 5 letras.`;
    } else {
        return `A palavra "${palavra}" tem 5 letras ou menos.`;
    }
}

// 10. Verifica se uma pessoa está usando máscara (com base em uma variável booleana).
function verificarUsoDeMascara(estaUsandoMascara) {
    if (estaUsandoMascara === true) {
        return "A pessoa está usando máscara. Entrada permitida.";
    } else {
        return "A pessoa NÃO está usando máscara. Entrada negada.";
    }
}


// ========== EXEMPLOS DE USO ==========
// Você pode digitar essas linhas no console uma por uma para ver o resultado!

console.log("--- Teste 1: Positivo, Negativo ou Zero ---");
console.log(verificarPositivoNegativoZero(15));
console.log(verificarPositivoNegativoZero(-8));
console.log(verificarPositivoNegativoZero(0));

console.log("\n--- Teste 2: Par ou Ímpar ---");
console.log(verificarParOuImpar(22));
console.log(verificarParOuImpar(7));

console.log("\n--- Teste 3: Maioridade ---");
console.log(verificarMaioridade(25));
console.log(verificarMaioridade(16));

console.log("\n--- Teste 4: Divisível por 3 ---");
console.log(ehDivisivelPor3(9));
console.log(ehDivisivelPor3(10));

console.log("\n--- Teste 5: Múltiplo de 5 ---");
console.log(ehMultiploDe5(50));
console.log(ehMultiploDe5(51));

console.log("\n--- Teste 6: Intervalo de 1 a 10 ---");
console.log(estaNoIntervalo1a10(5));
console.log(estaNoIntervalo1a10(11));

console.log("\n--- Teste 7: Comparar com 10 ---");
console.log(compararCom10(100));
console.log(compararCom10(5));
console.log(compararCom10(10));

console.log("\n--- Teste 8: Número Primo ---");
console.log(ehNumeroPrimo(7));
console.log(ehNumeroPrimo(12));
console.log(ehNumeroPrimo(1));

console.log("\n--- Teste 9: Tamanho da Palavra ---");
console.log(verificarTamanhoPalavra("javascript"));
console.log(verificarTamanhoPalavra("oi"));

console.log("\n--- Teste 10: Uso de Máscara ---");
console.log(verificarUsoDeMascara(true));
console.log(verificarUsoDeMascara(false));