let resposta;
const numeroSorteado = Math.floor(Math.random() * (151 - 50)) + 50;  
alert("O número sorteado foi " + numeroSorteado);  

if (numeroSorteado % 2 == 0) {  
  if (numeroSorteado < 100) {  
    alert("É um número par e menor que 100");
  } else {
    alert("É um número par e maior ou igual a 100");
  }
} else {  
  if (numeroSorteado % 3 == 0) {  
    alert("É ímpar e múltiplo de 3!");
  } else {
    alert("É ímpar e não é múltiplo de 3.");
  }
}
