function verificaFibonacci(numero) {
    // Dois primeiros números da sequência de Fibonacci
    let primeiroNumero = 0;
    let segundoNumero = 1;

    // Verificando se o número é um dos primeiros dois da sequência
    if (numero === primeiroNumero || numero === segundoNumero) {
        return true;
    }

    // Calculando a sequência de Fibonacci até que o próximo número seja maior que o número fornecido
    while (segundoNumero <= numero) {
        let nTemporario = segundoNumero; 
        segundoNumero = primeiroNumero + segundoNumero;
        primeiroNumero = nTemporario;

        // Verificando se o número fornecido está na sequência
        if (segundoNumero === numero) {
            return true;
        }
    }
    // Caso o número não seja encontrado na sequência
    return false;
}

// Número a ser verificado
let numero = 20;

// Verificando se o número pertence a sequência de Fibonacci
let pertence = verificaFibonacci(numero);

// Exibindo o resultado
if (pertence) {
    console.log(`O número ${numero} pertence a sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence a sequência de Fibonacci.`);
}
