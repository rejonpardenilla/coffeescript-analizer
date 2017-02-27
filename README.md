# CoffeeScript

## CoffeeScript es un pequeño lenguaje que compila en JavaScript

Por Daniel Rejón, Victor Medina y Rolando Valencia para el curso **Teoría de Lenguajes de Programación** con el profesor Edwin León Bojorquez.

----------
## ¿Por qué es importante estudiar Teoría de Lenguajes de Programación?

Porque se encarga de diseñar, analizar, implementar y clasificar los diferentes lenguajes de programación y para ello emplea diferentes herramientas de análisis sintáctico y semántico (Jerarquía de Chomsky, árboles de análisis sintáctico, forma Backus-Naur, etc).
En el campo de la ingeniería de software es importante debido a la gran gama de lenguajes de programación que existen hoy en día, se debe tener una buena noción de los tipos de lenguajes que existen y cómo funcionan para poder escoger el que mejor se adapte a las necesidades de nuestro proyecto (ya sea de pequeña o gran escala).


----------
## Describe el lenguaje de programación con base en las siguientes características:

**Dominio de la programación**
Lenguaje de Script.
Un lenguaje de script es un lenguaje de programación que permite el control de otros
programas o aplicaciones.

**Paradigma de programación**
Ya que CoffeeScript compila en JavaScript se considera principalmente lenguaje de scripting, pero también comparte con éste su multi-paradigma:

- Scripting
- Orientado a objetos basado en prototipos
- Imperativo
- Funcional
- Orientado a eventos

**Método de implementación**
Lenguaje trascompilado; es decir, un lenguaje compilado pero que en vez de compilar a código máquina lo hace hacia otro lenguaje de programación, en este caso JavaScript.
Los lenguajes trascompilados, o source-to-source, por lo general se usan para reducir la complejidad de un lenguaje de programación y hacer su código mas legible y depurable.

**Año y autor de creación**
En el año 2009 por Jeremy Ashkenas.
CoffeeScript tuvo su primer commit el 24 de diciembre de ese año.

**Características de diseño del lenguaje de programación**
Coffeescript fue diseñado sobre la filosofía de “escribe menos, haz mas”, lo cual hace mas acelerado el desarrollo de proyectos en este lenguaje, en comparación con el Javascript puro.
No requiere del uso de ‘var’ para inicializar una variable, o el uso de punto y coma para terminar una sentencia.
Este lenguaje permite realizar comparaciones encadenadas(Chained Comparisons); es decir, comparar una variable con mas de un parámetro.
Permite asignaciones paralelas(Parallel Assignments); es decir, crear varias variables basadas en la misma estructura, en la misma línea.


----------
## Selecciona una gramática sencilla del lenguaje (no menos de 5 producciones) y realiza lo siguiente:

**Describe formalmente la gramática**
La siguiente gramática libre de contexto tiene el siguiente cuádruplo:

    S = {Assignment}
    Vn = {Assignment, Expression, Value}
    Vt = {variable, number, (condition), =, if, then, else}
    P = {
          Assignment  -> variable = Expression
          Expression  -> Value  |
                        Value if (condition)  |
                        if (condition) then Value  |
                        if (condition) then Value else Value
          Value  ->  variable  |  number
        }      

Donde **variable** puede ser cualquier variable definida por el programador, **number** es cualquier número del 0 al 9 (o una combinación de varios de ellos) y **(condition)** es cualquier condición lógica.

**Define una sentencia y realiza el árbol de análisis sintáctico correspondiente, la derivación por la izquierda y la derivación por la derecha**
Sentencia:  date = if (condition) then sue else jill
Árbol de análisis sintáctico:

![Sin titulo](https://d2mxuefqeaa7sj.cloudfront.net/s_F3AB5309FE933345FC8F4BA756FC1A105EDA0A8A8219901D2C5A93112BB222F3_1488186617107_Screen+Shot+2017-02-27+at+03.09.49.png)

Derivación por la izquierda:

**Assignment**  ->  variable = **Expression**
                               variable = if (condition) then **Value** else **Value**
~~~
variable = if(condition then variable else **Value**
variable = if(condition then variable else variable
~~~

Derivación por la derecha:

**Assignment**  ->  variable = **Expression**
                               variable = if (condition) then **Value** else **Value**
~~~
variable = if (condition) then **Value** else variable
variable = if (condition) then variable else variable
~~~

**Selecciona un tipo de análisis sintáctico y desarrolla un programa que acepte o rechace una sentencia de entrada proporcionada**
Se desarrolló un programa de análisis sintáctico por el método descendente sin retroceso para la gramática definida arriba.
El core del programa se realizó en JavaScript y se describe brevemente a continuación.
De igual manera se puede encontrar el código fuente en el siguiente [enlace](https://github.com/rejonpardenilla/coffeescript-analizer) y para probarlo se puede ir a éste [enlace](http://rejonpardenilla.heliohost.org/coffee-analizer/).


----------
## Referencias
- Flanagan, David (2011). *JavaScript: The Definitive Guide* (6th ed.). O’Reilly & Associates.
- MacCaw, Alex (2012). The little book of Coffeescript (1th ed.). O’Reilly & Associates.
- Lee, Patrick (2014). Coffeescript in Action (1th ed.). Manning Publications.
- Burnham, Trevor (2011). Coffeescript: Accelerated Javascript development (1th ed.) Pragmatic Bookshelf.
- Primer commit en github https://github.com/jashkenas/coffeescript/tree/0.1.0
