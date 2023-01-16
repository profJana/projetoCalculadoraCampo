function calcular() {
    valorComprimento = Number(document.getElementById("firstNo").value); //obtem o numero escrito na caixa
  
    var area = valorComprimento * valorComprimento; // faz a contta da area e armazena na variável
    var perimetro  = 4 * valorComprimento; //faz a conta do perimetro e armazena na variável
  
    document.getElementById("resultadoArea").innerHTML = area; //exibe o resultado 
    document.getElementById("resultadoPerimetro").innerHTML = perimetro; //exibe o resultado
    
  }