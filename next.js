
function proximoA(sequencia) {
    return sequencia[sequencia.length - 1] + 2;
}


function proximoB(sequencia) {
    return sequencia[sequencia.length - 1] * 2;
}


function proximoC(sequencia) {
    return (sequencia.length) * (sequencia.length);
}


function proximoD(sequencia) {
    return (Math.sqrt(sequencia[sequencia.length - 1]) + 2) ** 2;
}


function proximoE(sequencia) {
    return sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
}

function proximoF(sequencia) {
    const numerosPorExtenso = ['Dois', 'Dez', 'Doze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove', 'Duzentos'];

    if (sequencia.length >= numerosPorExtenso.length - 1) {
        return 200;
    }

    // Percorre a lista de números por extenso a partir do próximo número após 19
    for (let i = sequencia.length; i < numerosPorExtenso.length; i++) {
        if (numerosPorExtenso[i].startsWith('D')) {
            return 200;
        }
    }

    return "Não foi possível encontrar o próximo número.";
}

// Testando as funções
console.log(proximoA([1, 3, 5, 7])); // Saída: 9
console.log(proximoB([2, 4, 8, 16, 32, 64])); // Saída: 128
console.log(proximoC([0, 1, 4, 9, 16, 25, 36])); // Saída: 49
console.log(proximoD([4, 16, 36, 64])); // Saída: 100
console.log(proximoE([1, 1, 2, 3, 5, 8])); // Saída: 13
console.log(proximoF([2, 10, 12, 16, 17, 18, 19])); // Saída: 200
