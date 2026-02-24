// Conversor de moedas 

function converter(quantidade_dolar,valor_dolar){
    console.log(quantidade_dolar);
    console.log(valor_dolar);
    console.log("convertendo a quantidade de : " + quantidade_dolar ," Dolars , Cotação atual de: " + valor_dolar);
    var converter = quantidade_dolar*valor_dolar
    console.log("Valor em real de R$: " + converter)
}

converter(200,5.20)