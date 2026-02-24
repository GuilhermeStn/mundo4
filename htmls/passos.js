/// pegar valor digitado 

function pegar(){
    var numero = document.querySelector("input");
    window.alert(numero.value);
    var valor_dolar = numero.value / 5.17 ;
    window.alert("o valor em dolar é " + valor_dolar);
    var resposta = document.querySelector("#resposta");
    resposta.innerHTML = "<h2>Em dolar você terá :  </h2>"+valor_dolar.toFixed(2);
}