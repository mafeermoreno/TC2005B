//La contraseña inicia como visible en false para se no se pueda ver
var is_visible = false;

//Función para ver/no ver la contraseña
function see()
{
    //Var para password
    var input = document.getElementById("password");
    //var para el ojito de ver
    var see = document.getElementById("see");
    
    //Si es visible es falso, ver formato password, o sea, puntitos
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='rgb(233, 157, 175)';
    }
    //De lo contrario, ver el texto de la password
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='rgb(189, 50, 82)';
    }
    
}

//Validar la contraseña
function check()
{
    var input = document.getElementById("password").value;
    
    //trim elimina los espacios en blanco en ambos extremos de un string
    input=input.trim();
    //getElementById selecciona un elemento del documento por medio del valor atributo id que se le haya asignado.
    document.getElementById("password").value=input;
    //innerText permite cambiar el contenido de texto de un elemento de texto o consultar su valor. Si se le asigna un string que contiene en su interior etiquetas HTML, luego no se generan nodos en el DOM sino que se muestran dichos caracteres en la página.
    document.getElementById("count").innerText="Longitud:" + input.length;

    //Si la contraseña es mayor a 5, la palomita de longitud mayor a 5 se pone en verde, validando este rubro, de lo contrario, se queda rojo.
    if(input.length>=5)
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red"; 
    }

    //Si la contraseña es menor a 10, , la palomita de longitud menor a 10 se pone en verde, validando este rubro, de lo contrario, se queda rojo
    if(input.length<=10)
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    
    //Si existe algún número ingresado en la contraseña, la etiqueta de número se pone verde, de lo contrario, permanece en rojo
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    
    //Si no existe alguna letra del alfabeto minúscula o mayúscula o algún número, es que existe un caracter especial, y se pone en verde esta etiqueta, sino, permanece en rojo
    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
    
    //Validar que si hay espacios en blanco entre los caracteres, poner la etiqueta en rojo, de lo contrario, ponerla en verde
    if(input.match(' '))
    {
        document.getElementById("check4").style.color="red";
    }
    else
    {
       document.getElementById("check4").style.color="green"; 
    }
    
}
