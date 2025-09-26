// 1. Importar o módulo 'readline' do Node.js
const readline = require('readline');

// 2. Configurar a interface para ler do terminal (entrada) e escrever no terminal (saída)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Fazer a pergunta ao usuário (equivale ao ESCREVA e LEIA)
rl.question('Digite a nota do aluno: ', (notaDigitada) => {
  
  // 4. Converter a nota de texto para número. Isso é MUITO importante!
  // O terminal sempre lê a entrada como texto, e precisamos de um número para comparar.
  const nota = parseFloat(notaDigitada);

  // 5. Lógica principal (o bloco SE ... SENÃO)
  if (nota >= 7) {
    console.log("Aluno APROVADO!");
  } else {
    console.log("Aluno REPROVADO.");
  }

  // 6. Fechar a interface de leitura, encerrando o programa
  rl.close();
});