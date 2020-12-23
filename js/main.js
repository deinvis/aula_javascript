function subtracao (a, b){
    return a - b;
}

function clicou (){
    document.getElementById("agradecimento").innerText = "Obrigado por clicar";
}

function redirecionar (){
    window.open("http://www.facebook.com");
}

function trocar(elemento){
    elemento.innerHTML = elemento.value.toString().toUpperCase();
}

function voltar(elemento){
    elemento.innerHTML = elemento.value;
}

function funcaochange(elemento){
    if (elemento.value === "sim") alert("tiamu");
    else alert("nojenta");
}

function testes(){
    var d = new Date();
    alert(d.getDate());
    var nome = "Davis";
    var anonasci = 1998;
    alert(nome + " tem " + subtracao(d.getFullYear(), anonasci) + " anos");
    var string = nome + " tem " + subtracao(d.getFullYear(), anonasci) + " anos";
    console.log(string.replace("anos", "anos de vida"));
    var lista = ["maça", "pêra", "laranja"];
    console.log(lista.toString());
    var pessoa = [{nomep : nome, idade : d.getFullYear() - anonasci, sexo : "M" }, {nomep: "Ereeny", idade: 21, sexo: "F"}];
    console.log(pessoa[1].nomep);
    for(var i = 0; i < pessoa.length; i++){
        if(pessoa[i].nomep === "Ereeny"){
            alert("gostosa");
        }
        else {
            alert("feio");
        }
    }
}