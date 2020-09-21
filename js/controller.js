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


        if(item == 'C'){
            document.getElementById('display').value = '';
        }
        else if(item == '='){
            var calcular = saveDisplay.replace(/[=]+/g, '');
            calc(calcular);
        }
    }

    function calc(saveNumber) {
        var x = saveNumber;
        var resultado = eval(saveNumber);
        document.getElementById('display').value = resultado;
      }
}
