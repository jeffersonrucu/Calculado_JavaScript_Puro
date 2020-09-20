var clickObjeto = document.getElementById('calculator').querySelectorAll('.num'); console.log(clickObjeto);
clickObjeto.forEach(numberClick);

var clickOperador = document.getElementById('calculator').querySelectorAll('.operador'); console.log(clickOperador);
clickOperador.forEach(numberClick);

var numerosLista = [];
var resultTotal =0;
console.log("numeros", numerosLista);

//captura o click e o valor
function numberClick(item) {
    item.addEventListener("click", function(){ 
    
        display(item); 
    }); 
}

//separa os numeros das sinais de somas e quarda o valor da soma
function display(displayNumber)
{
    var clickOBjetic = Number.parseInt(displayNumber.innerText);
    console.log(clickOBjetic);
    
    if(Number.isInteger(clickOBjetic) === true)
    {
        numerosLista.push(clickOBjetic);
    }
    
    else
    {
        numerosLista.push(displayNumber.innerText);
    }

    if(displayNumber.innerText == '=')
    {
        resultado();
        numerosLista = [];
        alert('result');
    }

    else if(displayNumber.innerText == 'C')
    {
        document.getElementById('display').value = "";
        numerosLista = [];
    }

    else{
        document.getElementById('display').value += displayNumber.innerText ;
    }
}

function resultado()
{

    var ultimoNumeros = 0;
    var numeros = 0;
    var operador = "";

    if(numerosLista.length > 0)
    {
        numerosLista.forEach( (num) => 
        {
            if(Number.isInteger(num) === true)
            {
                

                if(operador != "")
                {
                    
                    if(operador == '-')
                    {
                        console.log("numeroChega: ", numeros);

                        numeros = ultimoNumeros - num;
                        
                        console.log("numerouUlt: ", ultimoNumeros);

                        ultimoNumeros = 0;
                        console.log("numeros: ", numeros);
                    }
                
                    else if(operador == '+')
                    {
                        numeros = ultimoNumeros + num;
                        ultimoNumeros = 0;
                        console.log("numeros: ", numeros);
                    }
                
                    else if(operador == '*')
                    {
                        numeros = ultimoNumeros * num;
                        ultimoNumeros = 0;
                        console.log("numeros: ", numeros);
                    }
                
                    else if(operador == '/')
                    {
                        numeros = ultimoNumeros / num;
                        ultimoNumeros = 0;
                        console.log("numeros: ", numeros);
                    }
                }
                ultimoNumeros = Number.parseInt(num);
            }
            else
            {
                operador = num;
            }
        });    

        document.getElementById('display').value = numeros;
    }
}
