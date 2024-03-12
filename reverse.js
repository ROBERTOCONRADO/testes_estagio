function inverterString(str) {
  var invertedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
      invertedStr += str[i];
  }
  return invertedStr;
}

// Exemplo de uso
var minhaString = "Roberto Conrado";
var stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
