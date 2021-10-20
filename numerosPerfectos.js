let numerosPerfectos = [];
let suma = 0;
// let num = 30;

function validarTecla(evt) // Validacion de ingreso de solo numeros
{ 
    
    // codigo es la representacion decimal del codigo ascii al presionar una tecla
    var codigo = (evt.which) ? evt.which : evt.keyCode;
    
    if(codigo>=48 && codigo<=57) { // solo numeros
      return true;
    } else{ // otras teclas.
      return false;
    }
}

function perfect ()
{
    let num = document.getElementById('inputDataPerfectos').value;
    
    for(let j = num; j > 0; j--)
    {
        // debugger; 
        suma = 0;

        
        for(let i = 0; i < j; i++) 
        {
            if(j % i == 0)
            {
                suma = suma + i;
            }       
        }
        
        if(suma == j)
        {
            numerosPerfectos.push(j);
            // console.log(numerosPerfectos);
            // document.write(`<br> ${numerosPerfectos} Perfecto!!!, `);
        }
        
        else
        {
            // document.write(`<br> ${j} NO perfecto, `);
        }
    }
    
    
    if(num != 0)
    {
        resultadoTAPerfectos.innerText = `Números Perfectos: ${numerosPerfectos}`;
        numerosPerfectos = [];
    }
    
    if( num < 6)
    {
        resultadoTAPerfectos.innerText = `El número más pequeño a ingresar debe ser 6!`;
        numerosPerfectos = [];
    }
}


