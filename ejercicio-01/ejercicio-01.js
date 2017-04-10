function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if (creditCardNumber === undefined){
      return "Ingresa un numero";
    }
    if (typeof creditCardNumber  != 'number'){
      return "Error de dato";
    }
    if (creditCardNumber.toString().length < 17){
      return "Faltan numeros";
    }

    var resultado = validacion(creditCardNumber);
    return resultado;
}

function validacion(creditCardNumber){
  var stringTarjeta = creditCardNumber.toString();
  console.log(stringTarjeta);

  var numeros= stringTarjeta.split("");
  var par =[];
  var impar =[]

  for (var i=0; i<16;i++){
    if(i%2==0){
        par.push(numeros[i]);
    }else{
        impar.push(numeros[i]);
    }
   }

   var sumaPar =0;
   var sumaImpar =0;

   for(var i=0; i<6; i++){
     var temporal = par[i]*2;
     var unidades = Math.floor(temporal/10);
     var decenas = temporal%10;
     sumaPar+=(unidades+decenas);
   }

   for(var i=0; i<6; i++){
     sumaImpar += impar[i];
   }

   if (sumaPar/sumaImpar%10 ==0){
     return true;
   }else{
     return false;
   }

}

function primerInento(creditCardNumber){
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



/*
function isANumber(creditCardNumber){
  var isNumber = creditCardNumber;
  if (isNumber === undefined){
    return "Ingresa un numero";
  }

}

function isNothing(creditCardNumber){
  var cardNumber = creditCardNumber;
  if (typeof cardNumber  != 'number'){
    return "Error de dato";
  }
}

function correctLength(creditCardNumber){
  var isCardLength = creditCardNumber;
  if (isCardLength.toString().length < 17){
    return "Faltan numeros";
  }
}*/

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
