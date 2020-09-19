window.onload = function(){

    var clickObjeto = document.getElementById('calculator').querySelectorAll('.num');
    clickObjeto.forEach(numberClick);


    //captura o click e o valor
    function numberClick(item) {
        item.addEventListener("click", function(){ 
            
            var clickOBjetic = item;
            display(clickOBjetic);
        }); 
    }

    //separa os numeros das sinais de somas e quarda o valor da soma
    function display(displayNumber){
        
        var item = displayNumber.innerText;
        var saveDisplay = document.getElementById('display').value += item;
        var saveValue = parseInt(saveDisplay);
        console.log(saveValue);
        
        
        if(item == '-'){
            alert('subtraction');
        }

        else if(item == '+'){
            alert('addition');
        }

        else if(item == '*'){
            alert('multiply');
        }

        else if(item == '/'){
            alert('share');
        }

        else if(item == '='){
            alert('result');
        }

        else if(item == 'C'){
            document.getElementById('display').value = "";
        }

        else{
            
        }
    }

    //indentifica o tipo de calculo e faz o calculo
    function calc(typeCalc){
        if(typeCalc == '+'){
            calculate(result);
        }
        else if(typeCalc == '*'){
            calculate(result);
        }
        else if(typeCalc == '/'){
            calculate(result);
        }
        else if(typeCalc == '-'){
            calculate(result);
        }
        else{
            
        }
    }

    //exibe no display o resultado
    function calculate(result){
        document.getElementById('display').value = result;
    }
}
