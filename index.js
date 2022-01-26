
//função para inserir os numeros do HTML 

function insert(num)
{
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

//função para limpar todos os numeros inseridos

function clean()
{
    document.getElementById('result').innerHTML = "";
}

//Função para apagar o ultimo numero inserido

function back()
{
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1 );
}

//Função para calcular

function calc(){
    var result = document.getElementById('result').innerHTML;
    if (result){
        document.getElementById('result').innerHTML = eval(result);
    }
}