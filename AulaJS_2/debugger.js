Window.onload = function(){
    alert("aló ha!")
    console.log("Se quiser me ver tem que precionar F12! console...");
    //contenação de strings com o símbolo + 
    console.log("a = " + a +" b = " + b);
    console.log("a + b = " + parseInt(a+b) );
    
};

//variavel global
var a = 10;
var b = 20;

let entradas = document.querySelectorAll('input');
let resposta = document.querySelector('.resposta');
let botão = document.querySelector('#btnSomar');




pegaNúmero1 = function(){
    return entradas[0].value;
}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVasias = function(){
    if(pegaNúmero1()===''|| pegaNúmero2()==='')
    return true;
    else
    return false;
}

somar = function(){
    if(testarEntradasVasias()){
        resposta.textContent = "Erro: Preencha os dois campos númericos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada'); 
        return false;
    }else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizaResposta = function(){
    let num1 = parseInt(pegaNúmero1());
    let num2 = parseInt(pegaNúmero2());
    var soma = num1 + num2;
    resposta.textContent = num1 + '+' + num2 + '=' + soma;
}

//monitoramento do clique no botão
//Quando o botão for clicaco a função somar sera chamada!
botão.addEventListener('click',somar);

