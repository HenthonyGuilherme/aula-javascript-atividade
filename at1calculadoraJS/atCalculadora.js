var vazio = '';
var vazio2 = '';
var numero = [];
var rsv;

function valorNumerico(digito){

	numero.push(digito);

	if(numero.length != 1){
		vazio = '';
		document.getElementById('tela').innerHTML = vazio;		
	}


	for(i=0; i<numero.length ; i++){

		vazio = vazio + numero[i];				
		
	}

document.getElementById('tela').innerHTML = vazio;	

	
}


function resultado(){
	document.getElementById('tela').innerHTML = '';

	for(i=0; i<numero.length ; i++){

		vazio2 += numero[i];						
	}

	rsv = eval(vazio2);	

	document.getElementById('tela').innerHTML = rsv;		

	while(numero.length > 0){
    	numero.pop();				
	}

	numero.push(rsv.toString());	
}


function limparTela(){
	document.getElementById('tela').innerHTML = '';
	
	while(numero.length > 0){
    	numero.pop();			
	}

	vazio ='';	
	vazio2 ='';
}