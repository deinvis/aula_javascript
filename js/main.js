
var d = new Date();
alert(d.getDate());

var nome = "Davis";
var anonasci = 1998;
var anoatual = 2020;
alert(nome + " tem " + (anoatual - anonasci) + " anos");
var string = nome + " tem " + (anoatual - anonasci) + " anos";
console.log(string.replace("anos", "anos de vida"));
var lista = ["maça", "pêra", "laranja"];
console.log(lista.toString());
var pessoa = [{nomep : nome, idade : anoatual - anonasci, sexo : "M" }, {nomep: "Ereeny", idade: 21, sexo: "F"}];
console.log(pessoa[1].nomep);

for(var i = 0; i < pessoa.length; i++){
    if(pessoa[i].nomep === "Ereeny"){
        alert("gostosa");
    }
    else {
        alert("feio");
    }
}
