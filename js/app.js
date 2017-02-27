(function() {
  
$('#input-expr').focus();

$('#input-expr').keyup(function() {

  var expression = $(this).val();

  if (isValid(expression)) {
    applyValidExpressionStyles();
  } else {
    applyInvalidExpressionStyles();
  }

});



function isValid(expr) {
  var words = expr.split(' ');
  return assignmentRule(words);

}

/*
  Assignment -> variable = Expression
*/
function assignmentRule(words) {
  if (empty(words)) return false;
  if (words.length < 3) return false;

  if ( !isReserved(words[0]) ) {
    words.shift();
  } else {
    return false;
  }

  if ( words[0] == '=') {
    words.shift();
  } else {
    return false;
  }

  return expressionRule(words);

}


/*
Expression
       -> Value | 
          Value if condition |
          if (condition) then Value |
          if (condition) then Value else Value
*/
function expressionRule(words) {
  // Caso: Value
  if (words.length == 1) {
    var firstWord = words.shift();
    return isValue(firstWord);
  }

  // Caso: Value if (condition)
  if (words.length == 3) {
    var firstWord = words.shift();
    if ( !isValue(firstWord) ) return false;
    var secondWord = words.shift();
    if ( secondWord != 'if') return false;

    if ( areCondition(words) ) return true;
    else return false;
  }

  // Caso: if (condition) then Value
  var nextWord = words.shift();
  if (nextWord != 'if') return false;
  if ( !areCondition(words) ) return false;
  nextWord = words.shift();
  if (nextWord != 'then') return false;
  nextWord = words.shift();
  if ( !isValue(nextWord) ) return false;
  if ( empty(words) ) return true;

  // Caso: if (condition) then Value else Value
  nextWord = words.shift();
  if (nextWord != 'else') return false;
  nextWord = words.shift();
  if ( !isValue(nextWord) ) return false;
  if ( empty(words) ) return true;

  // Por defecto se rechaza la sentencia
  return false;
}

// Verifica si una condición es válida
function areCondition(words) {
  var condWord = words.shift();
  if ( condWord == 'condition'
    || condWord == '(condition)'
    || condWord == 'cond' ) {

    return true;
  } else {
    return false;
  }

}


/*
  Value -> variable | number
*/
function isValue(word) {
  // variable y number son palabras no reservadas asi que
  if ( !isReserved(word) ) return true;
}

function empty(array) {
  if (array.length == 0) return true;
  if (array[0] == '') return true;
}

function isReserved(word) {
  var reservedWords = ['if', 'else', 'then', '='];
  var reserved = false;

  reservedWords.forEach(function(reservedWord) {
    if (reservedWord === word) {
      reserved = true;
    }
  });

  return reserved;
}



/*
  Applying styles
*/
function applyValidExpressionStyles() {
  $('#input-expr').removeClass('reject');
  $('#input-expr').addClass('accept');
  $('#label-expr').text('Aceptada');
  $('#label-expr').css('color', 'green');
}

function applyInvalidExpressionStyles() {
  $('#input-expr').removeClass('accept');
  $('#input-expr').addClass('reject');
  $('#label-expr').text('Rechazada');
  $('#label-expr').css('color', 'red');
}


}());