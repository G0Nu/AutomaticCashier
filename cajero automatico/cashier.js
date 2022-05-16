class Billete
{
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;

    }
}
var caja = [];
var entregado = [];
caja.push( new Billete(50,10));
caja.push( new Billete(20,20));
caja.push( new Billete(10,10));
caja.push( new Billete(5,10));
var div = 0;
var dinero = 0;
var papeles = 0;

var btn = document.getElementById("retirar");
btn.addEventListener("click",entregarDinero);

function entregarDinero ()
{
    var money = document.getElementById("dinero");
    dinero = parseInt(money.value);

    for(b of caja)
    {
        if (dinero > 0 ) {
    
            div = Math.floor(dinero/b.valor)
            if (div > b.cantidad) {
                papeles = b.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(b.valor, papeles));
            dinero = dinero - (b.valor * papeles);
        }
    }
    if (dinero > 0 )
    {
       
        resultado.innerHTML = "No tengo los suficientes billetes para tu cantidad :( ";
    }
    else{

        for (i of entregado){
            resultado.innerHTML = resultado.innerHTML + "Billetes de "+i.valor+": "+i.cantidad+"<br />"
            console.log(i.valor+": "+i.cantidad);
        }
    }
}

var resultado = document.getElementById("resultado");


