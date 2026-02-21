function sair(){
    s = window.document.getElementById("saida")
    alert("teste")
    var teste = document.createElement("h2")
    var test_text = document.createTextNode("teste de texto")
    teste.appendChild(test_text)
    document.body.append(teste)
    teste.style.textAlign =  "center";

}

function again(){
    but = document.getElementById("testando")
    but = document.createElement("input","type:text")
    document.body.appendChild(but)
    but = document.createElement("button")
    document.body.appendChild(but)
}