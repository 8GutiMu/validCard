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
