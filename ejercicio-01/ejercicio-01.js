function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if (creditCardNumber == undefined){
      return "Ingresa un numero";
    }

    if (typeof creditCardNumber  != 'number'){
      return "Error de dato";
    }

    if (creditCardNumber.toString().length < 16){
      return "Faltan numeros"
    }


    var stringTarjeta = creditCardNumber.toString();

    console.log(tarjeta,stringTarjeta);

    var numeros =stringTarjeta.split("");
    var par = numeros.filter(function (numero) {
        var posicion =(numeros.indexOf(numero));
        if (posicion%2 == 0){
          return parseInt(numero);
        };
      });

      console.log(par)
    var impar = numeros.filter(function (numero) {
        var posicion =(numeros.indexOf(numero));
        if (posicion%2 != 0){
          return parseInt(numero);
          };
        });

        console.log(impar)
    var primeroPar = par.map(function(num){
        var unidades;
        var decenas;
        var numDoble =parseInt(num)*2
        decenas = Math.floor(numDoble/10);
        unidades = (numDoble %10);
        var newPar = (unidades + decenas);
        return newPar;
      })

    console.log(primeroPar);

    var sumaImpar = impar.reduce(function(total,numero){
      return parseInt(total) +parseInt(numero);
    })

    console.log(sumaImpar)
    var sumaPar = primeroPar.reduce(function(total,numero){
      return parseInt(total) + parseInt(numero);
    })
    console.log(sumaImpar)



}

function validateCreditCard(creditCardNumber){
  var cardNumber = creditCardNumber;
  console.log(cardNumber);

}

function isANumber(creditCardNumber){
  var isNumber = creditCardNumber;


}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
