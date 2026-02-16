function texto(){
    texto = document.createElement("h1"); // Create a element h1 using the DOM
    var texto_conteudo = document.createTextNode("Texto criado por Js"); // Create a text node in the h1 element 
    texto.appendChild(texto_conteudo); // text add texto_conteudo as a child 
    document.body.appendChild(texto); 
    texto.style.textAlign = "center"; // document of the body site , add the text on text 
}

function add(){
    var add = document.createElement("input"); // create a element input 
    add.setAttribute("type","text"); // add the attribute : type a text datebase
    add.setAttribute("placeholder","Digte algo");  // digite algo user viewer 
    document.body.appendChild(add); 
}


