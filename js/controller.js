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

    function calc(typeCalc){
        if(typeCalc == '+'){
            result = num1 + num2;
            calculate(result);
        }
        else if(typeCalc == '*'){
            result = num1 * num2;
            calculate(result);
        }
        else if(typeCalc == '/'){
            result = num1 / num2;
            calculate(result);
        }
        else if(typeCalc == '-'){
            result = num1 - num2;
            calculate(result);
        }
        else{
            
        }
    }

    function calculate(result){
        document.getElementById('display').value = result;
    }

    function display(displayNumber){
        
        var item = displayNumber.innerText;
        document.getElementById('display').value += item;


        if(item == '-'){
            alert('subtração');
        }
        else if(item == '+'){
            alert('adição');
        }
        else if(item == '*'){
            alert('multiplicar');
        }
        else if(item == '/'){
            alert('dividir');
        }
        else if(item == 'C'){
            alert('limpar');
        }
        else if(item == '='){
            alert('somar');
        }
        else{
            alert('numero');
        }
    }
}
