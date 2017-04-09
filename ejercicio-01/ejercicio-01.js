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

    var tarjetita = creditCardNumber.toString();


    var stringTarjeta = creditCardNumber.toString();

    console.log(tarjeta,stringTarjeta);

    var numeros =stringTarjeta.split("");
    var par = numeros.filter(function (numero) {
        var posicion =(numeros.indexOf(numero));
        if (posicion%2 == 0){
          return parseInt(numero);
        };
      });



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
