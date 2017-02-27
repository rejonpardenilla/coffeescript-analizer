# CoffeeScript

# CoffeeScript es un pequeño lenguaje que compila en JavaScript
----------
###La siguiente gramática libre de contexto tiene el siguiente cuádruplo:

    S = {Assignment}
    Vn = {Assignment, Expression, Value}
    Vt = {variable, number, (condition), =, if, then, else}
    P = {
          Assignment  🡢 variable = Expression
          Expression  🡢 Value  | 
                        Value if (condition)  |
                        if (condition) then Value  |
                        if (condition) then Value else Value
          Value  🡢  variable  |  number
        }

Donde **variable** puede ser cualquier variable definida por el programador, **number** es cualquier número del 0 al 9 (o una combinación de varios de ellos) y **(condition)** es cualquier condición lógica.

Para probarlo se puede ir al siguiente [enlace](http://rejonpardenilla.heliohost.org/coffee-analizer/).

