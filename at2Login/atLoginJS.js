function minhaFuncao(){

    if(document.getElementById('txt').value == ''){
        document.getElementById("p").innerHTML = 'Usuário e/ou Senha estão inválidos';
    }
    else if(document.getElementById("senha").value == ''){
        document.getElementById("p").innerHTML = 'Usuário e/ou Senha estão inválidos';

    }
    else{
        document.getElementById("p").innerHTML = ' Você será direcionado para nossa página principa';
    }

}
