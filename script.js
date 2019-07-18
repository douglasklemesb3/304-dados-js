

// let nome = prompt("digite seu nome");
// let DataDeNascimento = Number(prompt("digite seu ano de nascimento"));
// let ano = 2019;

// idade = ano - DataDeNascimento;

// console.log("Olá, eu me chamo " + nome + " eu tenho " + idade + " ano,  e estou estudando jasvascript")


let nomeAluno=  prompt("digite seu nome");

let matricula =  Number (prompt("digite seu numero de matricula"));

let nota1  = Number (prompt("digite nota1"));

let nota2  = Number (prompt("digite nota2"));

let media = (nota1 + nota2)/2;

if(media > 0 &&|media <= 10)  {
    alert("O aluno(a) " + nomeAluno + " matriculada " + matricula + " obteve a media final " + media );
} 
else if( media === 0){
    alert( "A Media Não Pode Ser 0")
}
else {
    alert('A Media Não Pode Ser Maior Que 10');
}




