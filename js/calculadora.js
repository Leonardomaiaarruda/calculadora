

 function calcular(tipo, valor){
    if(tipo == 'acao'){

        if(valor === 'c'){
            document.querySelector('.resultado').value = '';
        }
        if(valor === 'xapagar'){
           let apagar =  document.querySelector('.resultado') ;
           let inputText = apagar.value;
           apagar.value = inputText.substring(0, inputText.length-1);
        }
        
        if(valor === '/' || valor === '*' || valor === '-' || valor === '+'  || valor === '.' || valor === '(' || valor === ')' || valor === '%'){
             document.querySelector('.resultado').value += valor
        }

        if(valor === '='){
           let valorCampo = eval(document.querySelector('.resultado').value);
           let valorFinal = document.querySelector('.resultado').value = valorCampo;
            console.log(valorFinal)
        }
    }else if(tipo == 'valor'){
        document.querySelector('.resultado').value += valor;
    }


}

