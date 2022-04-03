/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "comienzo";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    comienzo: new undum.SimpleSituation(
        "<h1>En el balcón de mi casa</h1>" +
        "<p>Con un cielo despejado y junto a esa temperatura que sólo tiene el verano " +
        "te encuentras en el balcón de tu casa mirando el cielo como quién admira un paisaje. Todo está tranquilo en tu pueblo.</p>" +
        "</br></br>" + "<p class='transient'>De repente te llaman al teléfono móvil, así que contestas..</p>" +
        "<p class='transient'><em><a href='llamada1'>¿Diga?</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada1'>¡Hola!</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada1'>Hola ¿quién es?</a></em></br></p>"
        , {}
    ),
    llamada1: new undum.SimpleSituation(
        "<p class='transient'></br>????? - <em>¡Hey! ¿Vas a venir hoy a ver los fuegos al final? </em>." +
        "</br> Te percatas de que es tu amigo Pedro así que respondes:</br>" +
        "Yo - <em>¿Estará también...</em></p>"+
        "<p class='transient'><em><a href='llamada2'>Manolo?.</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada2'>Lucía?.</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada2'>Jose?.</a></em></br></p>" +
        "<p class='transient'> <em><a href='llamada2'>María?.</a></em></br></p>"
        , {
            actions: {
                "op1": "<p>Yo - <em>¿Estará también Manolo?</em></p>",
                "op2": "<p>Yo - <em>¿Estará también Lucía?</em></p>",
                "op3": "<p>Yo - <em>¿Estará también Jose?</em></p>",
                "op4": "<p>Yo - <em>¿Estará también María?</em></p>"
            }
        }
    ),
    llamada2: new undum.SimpleSituation(
        "<p class='transient'></br>Pedro - <em>Sí, también viene. Bueno, ¿qué me dices? que llevo dos días detras de tí jajaja</em></p>" +
        "<p class='transient'> <em><a href='llamada3'>Bueeeeeeeeeeeeno, me apunto.</a></em>" +
        "<p class='transient'> <a href='./opc2' class='once'><em>No tengo muchas ganas hoy la verdad....</em></a></p>" +
        "<p class='transient'> <a href='./opc3' class='once'><em>Es que tengo que....</em></a></p>"
        , {
            actions: {
                "opc2": "<br><p class='transient'>Yo - <em>No tengo muchas ganas hoy la verdad....</em></p>" +
                    "<p class='transient'>Pedro - <em>No te creo. Con lo que tu eras... Además hay comida rica.</em></p>" +
                    "<p class='transient'> La respuesta no ha convencido lo suficiente...</br></p>",
                "opc3": "<br><p class='transient'>Yo - <em>Es que tengo que....</em></p>" +
                    "<p class='transient'>Pedro - <em>¡Venga ya, si te lo vas a pasar genial!.</em></p>" +
                    "<p class='transient'> La respuesta no ha convencido lo suficiente...</br></p>"
            }
        }
    ),
    llamada3: new undum.SimpleSituation(
        "<p></br>Pedro - <em>¡Perfecto!. Te veo a la hora de cenar en la plaza donde haremos la hoguera. ¡Chao!</em></p>" +
        "<p class='transient'>Piensas: '<em>Este Pedro es de lo que no hay. Debe de estar en peligro de extinción..</em>'. </br></br> " +
        "Ahora que te has comprometido con la ilusión de Pedro tienes que <a href='salon'>prepararte para salir</a>.</p>"
        , {}
    ),

    salon: new undum.SimpleSituation(
        "<h1>Sala de estar</h1>"
        , {
            enter: function (character, system, from) {
                system.doLink('salon_opcs');
            },
        }
    ),

    salon_opcs: new undum.SimpleSituation(
        "<p>Te encuentras en tu sala de estar...</br></br>\
        Puedes <a href='./sala_tele' class='once sticky'>sentarte en el sofá y mirar la televisión.</a></br>\
        Puedes <a href='./sala_fotos' class='once sticky'>mirar las fotos de tus padres junto a ti de pequeño.</a></br>\
        Puedes <a href='sala_cuadro' class='once sticky'>mirar el cuadro que hay colgado en la pared.</a></br>\
        O bien puedes <a href='moverse_casa'class='sticky'>ir a otra habitación</a></p>", {
            actions: {
                "sala_tele":  "<p>Te sientas y tal, muy cómodo todo pero ¡es San Juan y has quedado!. Te levantas porque tienes que salir.</p>",
                "sala_fotos": "<p>Te acuerdas de tus padres cuando ibaís de vacaciones en verano. Qué buenos son.</p>",
            }
        }
    ),


    sala_cuadro: new undum.SimpleSituation(
        "<p class='transient'>Te fijas en el cuadro. Hay gente alrededor de una hoguera en una zona pequeña del cuadro " +
        "mientras que el resto del cuadro muestra un paisaje al amanecer. Recuerdas que el cuadro venía con " +
        "la casa y que lo pintó el anterior dueño.</br> Piensas...</p>" +
        "<p class='transient'><a href='moverse_casa' class='once'>Que cuadro más raro, tengo que cambiarlo algún día</a></p>" +
        "<p class='transient'><a href='./opc2' class='once'>No sé que tiene, pero la verdad es que me gusta</a></p>"
        , {
            actions: {
                "opc2": function (character, system, action) {
                    if (character.qualities.secretos >= 1) {
                        system.setQuality("secretos", character.qualities.secretos + 1);
                    } else {
                        system.setQuality("secretos", 1);
                    }
                }
            }
        }
    ),

    dormitorio_casa: new undum.SimpleSituation(
        "<p>Te encuentras en tu dormitorio...</br></br>\
        Puedes <a href='./dorm_cama' class='once sticky'>Hacer la cama.</a></br>\
        Puedes <a href='dorm_siesta' class='once sticky'>Echar una siesta.</a></br>\
        Puedes <a href='./dorm_pein' class='once sticky'>Vas al baño del dormitorio para peinarte.</a></br>\
        O bien puedes <a href='moverse_casa'class='sticky'>volver a la Sala de Estar</a></p>"
        , {
            actions: {
                'dorm_cama': "<p>No es el momento adecuado, pero aún así lo haces. Es mejor tenerla hecha.</br></p>"
                ,
                'dorm_pein': "<p>Sabes que eres guapo porque te lo dice tu madre, pero siempre se puede mejorar.</br></p>"
            },
            tags: ["hogar"],
            optionText: "Ir al dormitorio",
            displayOrder: 1
        }
    ),

    dorm_siesta: new undum.SimpleSituation(
        "<p>Crees que estas cansado (como siempre) y te hechas un rato, pero resulta que pones una mala postura y te duele el hombro." +
        " Suficiente dormitorio por hoy (sales del dormitorio).</br></p>"
        , {
            enter: function (character, system, from) {
                system.setQuality('suerte', character.qualities.suerte - 1);
                system.doLink('moverse_casa');
            },
        }
    ),

    cocina_casa: new undum.SimpleSituation(
        "<p>Te encuentras en tu cocina...</br></br>\
       Puedes <a href='./notas' class='once sticky'>mirar las notas puestas del frigorífico.</a></br>\
       Puedes <a href='./encimera' class='once sticky'>mirar la encimera de la cocina.</a></br>\
       O bien puedes <a href='./mov'class='sticky'>volver a la Sala de Estar</a></p>"
        , {
            actions: {
                'notas': "<p>Hay una lista: Manzanas, Pan, Arroz y algo que ni siquiera sabes qué pone.</br></p>",
                'encimera': "<p>La limpiaste ayer, aunque siempre está la maldita mancha esa que no se va con nada.</br></p>",
                "mov": function (character, system, action) {
                    system.doLink('moverse_casa');
                },
            },
            tags: ["hogar"],
            optionText: "Ir a la cocina",
            displayOrder: 2
        }
    ),

    pasillo_casa: new undum.SimpleSituation(
        "<p>Te encuentras en el pasillo de tu casa...</br></br>\
       Puedes <a href='./perchero' class='once sticky'>mirar el perchero.</a></br>\
       Puedes <a href='salir_casa' class='once'>salir de tu casa.</a></br>\
       O bien puedes <a href='./mov'class='sticky'>volver a la Sala de Estar.</a></p>"
        , {
            actions: {
                'perchero': "<p>Observas mejor y se aprecian varias cosas que deberías replantearte " +
                    "guardar mañana u otro día como ese abrigo de piel (aunque seas más de invierno).</br></p>",
                "mov": function (character, system, action) {
                    system.doLink('moverse_casa');
                },
            },
            tags: ["hogar"],
            optionText: "Ir al pasillo",
            displayOrder: 3
        }
    ),

    salir_casa: new undum.SimpleSituation(
        "<p class='transient'><br>Decides salir de tu hogar pero justo antes de salir te palpas los bolsillos. " +
        "<em>¡Será posible!</em> Maldices mientras ya no notas las llaves por ningún lado...<br>" +
        "<em><a href='salir_casa_1'>¿Miro en el bolsillos de los pantalones?</a></em></br>" +
        "<em><a href='salir_casa_2'>¿Miro en el cerrojo de la puerta?</a></em><br>" +
        "<em><a href='salir_casa_3'>¿Y si salgo sin llaves?</a></em><br>" +
        "</p>"
        ,{}
    ),

    salir_casa_1: new undum.SimpleSituation(
        "<p class='transient'><br><em>Uf menos mal. La próxima tengo que estar más atento de que las tenía aquí</em> piensas, mientras abres la puerta para salir de casa. " +
        "<br><a href='anciana'>Continuar</a></p>"
        , {
            enter: function (character, system, action) {
                system.setQuality("suerte", character.qualities.suerte+1);
            }
        }
    ),
    salir_casa_2: new undum.SimpleSituation(
        "<p class='transient'><br>No están puestas. Te quedas buscando 15 minutos por todos lados pero resulta que lo tenías en los bolsillos de los pantalones."+
        "<br><a href='anciana'>Continuar</a></p>"
        , {
            enter: function (character, system, action) {
                system.setQuality("suerte", character.qualities.suerte-1);
            }
        }
    ),
    salir_casa_3: new undum.SimpleSituation(
        "<p class='transient'><br>Llevas algo de prisa y decides que sales sin las llaves. Pero te acuerdas que eres de esos que lo guardan bajo el felpudo."+
        "<br><a href='anciana'>Continuar</a></p>"
    ),

    <!-- SALIMOS DE CASA -->

    anciana: new undum.SimpleSituation(
        "<h1>Un encuentro inesperado</h1>" +
        "<p class='transient'>Entusiasmado, sales de tu casa pensando en tus cosas (como siempre), pero justo al salir te chocas con alguien. Respondes: </p>" +
        "<p class='transient'><em><a href='./disculpas'>Perdone, ha sido culpa mía.</a></em></p>" +
        "<p class='transient'><em><a href='anciana2'>Oiga, mire por donde va.</a></em></p>" +
        "<p class='transient'><a href='./grito'>Te sale un grito pequeño porque te asustas un poco.</a></p>" ,{
            actions: {
                'grito': function (character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                    system.doLink('anciana2');
                },
                'disculpas': function (character, system, action) {
                    system.setQuality("secretos", character.qualities.secretos+1);
                    system.doLink('anciana2');
                }
            }
        }
    ),

    anciana2: new undum.SimpleSituation(
        "<p>Te das una cuenta que es una anciana que es de estatura baja, viste de negro y lleva un velo que no deja ver su rostro. Te dice: </p>" +
        "<p></br>Anciana - <em>Sub nocte . . .</em></br>Anciana - <em>Sub nocte Ioannis . . .</em></br></br></p>" +
        "<p>Te lanza un objeto que consigues atrapar con el pectoral, mientras te aseguras con las manos que no se ha caído.</br></br></p>" +
        "<p class='transient'>Al levantar la cabeza ves que ya no está allí. Así que <a href='llamada'>prosigues con tu camino</a> para llegar allí.</p>", {
            enter: function (character, system, action) {
                system.setQuality("amuleto", 1);
            }
        }
    ),

    llamada: new undum.SimpleSituation(
        "<p>Mientras llegas al destino, justo en mitad del camino te llama Pedro y contestas:</p>" +
        "<p class='transient'>Yo - <em>Díme Pedro</em></p>" +
        "<p class='transient'><em> . . . </em></p>" +
        "<p>Nadie responde al teléfono y se corta la llamada. Te extraña mucho lo sucedido pero <a class='once' href='callecortada'>sigues adelante</a>.</br></br></p>"
    ),

    callecortada: new undum.SimpleSituation(
        "<p class='transient'>Ya estás casi a punto de llegar pero parece que la calle está cortada. Hay una mujer mayor cerca del bloqueo:</p>" +
        "<p class='transient'>Mujer - <em>Oye el camino esta cortado por aquí ¿quieres atajar por mi casa?</em></br> Respondes:</p>" +
        "<p class='transient'>Yo - <em><a href='./opc1'>¡Oh! Muchas gracias</a></em></br></p>" +
        "<p class='transient'>Yo - <em><a href='./opc2'>No la conozco, ¿cómo es que se fía de mi?</a></em></br></p>" +
        "<p class='transient'>Yo - <em><a href='./opc3'>Yo ahí no entro. Seguro que me rapta o algo peor</a></em></br></p>",{
            actions: {
                'opc1': function (character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                    system.doLink('pasillomujer');
                },
                'opc2': function (character, system, action) {
                    system.setQuality("secretos", character.qualities.secretos+1);
                    system.doLink('pasillomujer');
                },
                'opc3': function (character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte-1);
                    system.doLink('pasillomujer');
                },
            }
        }
    ),

    pasillomujer: new undum.SimpleSituation(
        "<h1>Una amable paisana</h1>" +
        "<p class='transient'>Ella te abre la puerta y puedes ver que es una casa bastante normal. La chica, que va detrás de ti, cierra la puerta y te pide educadamente que la sigas.</p>" +
        "<p class='transient'>Pasas por el pasillo de su casa hasta la sala principal y al parecer la llaman por telefono.</br></p> " +
        "<p class='transient'>Mujer - <em>Volveré en cuanto pueda. Por favor espere aquí</em></p>" +
        "<p class='transient'>Se marcha a otra parte de la casa y tienes que esperar allí, por lo que decides <a href='hbtcnmujer'>echar un vistazo a la habitación</a>.</p>"
        ,{}
    ),

    hbtcnmujer: new undum.SimpleSituation(
        "<p class='transient'>Estás investigando un poco la sala principal, en concreto...</p>" +
        "<p class='transient'><a class='once' href='./techo'>El techo</a></p>" +
        "<p class='transient'><a class='once' href='./paredes'>Las paredes</a></p>" +
        "<p class='transient'><a class='once' href='./suelo'>El suelo</a></p>" +
        "<p class='transient'><a class='once' href='./retratos'>Unos retratos</a></p>" +
        "<p class='transient'><a class='once' href='./cuadro'>Un cuadro pintado</a></p>" +
        "<p class='transient'><a class='once' href='./estanteria'>Una estantería</a></p>",{
            actions: {
                "techo" : "<p class='transient'></br>Te fijas en que el techo es liso pero tiene un lindo patrón con líneas paralelas. No parece que haya nada más de interés.</p>",
                "paredes": "<p class='transient'></br>Las paredes tienen un gotelé clásico español con todo pintado en un color de tonos ocres que casan muy bien con los muebles de la habitación." +
                    " Además, las columnas que puedes ver de la casa parecen de muy buena calidad.</p>" +
                    "<p class='transient'>Por el resto no notas nada que te llame la atención.</p>",
                "suelo": "<p class='transient'></br>El suelo es de ceramica con patrones rayados y una figura en forma de rombo.</p>",
                "retratos": "<p class='transient'></br>Aparece la mujer de la casa con un señor, una niña y un niño. Probablemente sea su familia.</p>",
                "cuadro": "<p class='transient'></br>Te fijas en lo que parece ser un cuadro del pueblo visto desde lejos. Tiene bastantes detalles y está hecho al óleo.</p>",
                "estanteria": "<p class='transient'></br>Entre los objetos de la estantería parece que está el mismo amuleto que te dió hoy la anciana al salir de casa.</p>" +
                    "<p class='transient'></br> Piensas: <em>¿Cómo es que esta mujer tiene otro amuleto igual al de aquella anciana?. ¿Son familia?</em></br></br></p>" +
                    "<p class='transient'>Justo entonces parece que la mujer <a href='hbtcnmujer2' >ha terminado su llamada . . .</a></p>"
            }
        }
    ),

    hbtcnmujer2: new undum.SimpleSituation(
        "<p class='transient'></p>" +
        "<p class='transient'>Yo - <em>Oiga, ¿ese amuleto es suyo?</em></br></p>" +
        "<p class='transient'>Mujer - <em>Creo que sirve para evitar la supuesta maldición que corre por el pueblo. ¿Sabes cúal te digo, verdad?</em></br></p>" +
        "<p class='transient'>Yo - <em>No la conozco.</em></br></p>" +
        "<p>Mujer - <em>'Si en la noche de San Juan no te desprendes de tus problemas, el mismo Juan mandará a San Pedro que te envíe al mismo infierno en el mismísimo momento'</em>.</p></br>" +
        "<p class='transient'>Ahora tienes más preguntas que antes...</p>" +
        "<p class='transient'><em><a href='hbtcnmujer3'>¿Ha tenido algún suceso extraño a causa de ese amuleto?</a></em></p>" +
        "<p class='transient'><em><a href='./ff'>Perdone pero, ¿cómo consiguió ese amuleto?</a></em></p>",{
            actions: {
                'ff': function (character, system, action) {
                    system.setQuality("secretos", character.qualities.secretos+1);
                    system.doLink('hbtcnmujer3');
                },
            }
        }
    ),

    hbtcnmujer3: new undum.SimpleSituation(
        "<p class='transient'>Mujer - <em>Te cuento. Me lo encontre hará un par de días por la calle cuando estaba volviendo a mi casa. Junto al amuleto había una nota que aún guardo por si apareciese el dueño.</em></p>" +
        "</br><p class='transient'>Ansioso por conocer de la existencia de esa nota le preguntas.</p></br>" +
        "<p class='transient'>Yo - <em>¿Podrías mostrarme la nota, porfavor?</em></br>Mujer - <em>Claro, aquí está.</em></p></br>" +
        "<p>En la nota pone: <em>Sub nocte Ioannis veritas in tenebris lucet</em></p></br>" +
        "<p class='transient'>Mujer - <em>Traducido es 'En la noche de Juan la verdad brillará en la oscuridad'</em>" +
        "</br>Yo - <em>la verdad brillará en la oscuridad... Hmm..</em>" +
        "</br>Mujer - <em>Veo que estás muy interesado en todo este asunto así que te la puedes quedar, aunque creo que el amuleto sí que lo guardaré para mi.</em>" +
        "</br>Mujer - <em>Ven, la salida está por aquí.</em></p></br>" +
        "<p class='transient'>Te acompaña hasta otra parte de la casa y sales por una puerta que da a una calle. Te despides de ella agradeciéndole su amabilidad y <a href='hoguera1'>te apresuras por llegar</a>.</p></br>",{
            enter: function (character, system, action) {
                system.setQuality("nota", 1);
            }
        }
    ),

    hoguera1: new undum.SimpleSituation(
        "<h1>La hoguera</h1>" +
        "<p>Al llegar, ves que tus amigos miran fijamente a Pedro teniendo dolores en el suelo. Intentas hablar con él pero es imposible, delira mucho y empieza a respirar bastante mal.</p>" +
        "</br><p>Preguntas si viene una ambulancia pero parece que ya llamaron y no llegan todavía. Que el tráfico se lo impide.</p>",{
            enter: function (character, system, action) {
                if (character.qualities.secretos >= 5){
                    system.doLink('./pedro1');
                }else{
                    system.doLink('./pedro2');
                }
            },
            actions: {
                "pedro1": "</br><p>Pedro empieza a agonizar con el delirio. Nadie se atreve a hacer nada pero en un último acto" +
                    " empiezas a orar la anotación de la chica de antes sin efecto alguno sobre Pedro, pero de repente aparece la anciana del principio, colocando a Pedro su amuleto, el cuál" +
                    "trelucía con intensidad. </br></br> Ahora la anciana sufre los delirios de Pedro, lo cuál le provoca un infarto y fallece delante de todos. </br></br> Los allí presentes se alejan de la escena hasta" +
                    "que lleguen la policía o la ambulancia.</p>" +
                    "<p></br>Finalmente, llega una ambulancia y la policía. Te ofrecen llevarte en coche hasta tu casa pero prefieres <a href='volver_casa'>ir andando</a>.</p>",
                "pedro2": "</br><p>Pedro empieza a agonizar con el delirio. Nadie se atreve a hacer nada pero en un último acto" +
                    " miras a la hoguera y ves en ella una figura angelical que te asiente con la cabeza. Con esperanzas pones tu amuleto a Pedro y recitas la anotación que te dió la chica de antes.</br></br>" +
                    "Él empieza ponerse mejor. </br> Juntos entablaís conversación donde te explican que Pedro empezó a ver alucinaciones, pues, creían que intentaba convencer a San Pedro de que juraba no haberle robadoç" +
                    "el dinero a la anciana de su vecina, la cuál salía muchas veces de casa y cuando estaba descansando en ella la oía recitar devotamente.</p>" +
                    "</br><p>Finalmente, llega una ambulancia y la policía. Te ofrecen llevarte en coche hasta tu casa y <a href='volver_casa'>aceptas que te lleven</a>.</p>"
            }
        }
    ),

    <!-- VOLVEMOS A CASA -->

    volver_casa: new undum.SimpleSituation(
        "<h1>Vuelta a casa</h1>" +
        "<br><p> Llegas a casa, dejas todas tus cosas en la mesita de noche y vas directamente a dormir, ya que ha sido un día muy largo.<br>" +
        "<br>Dejas que las sabanas te cobijen hasta quedarte dormido mientras piensas sobre todo el día de hoy.<br>" +
        "<a href='./final'>Tienes sueño...</a></p></br>"
        , {
            enter: function (character, system, action) {
                system.setQuality("nota", 0);
                system.setQuality("amuleto", 0);
            },
            actions: {
                "final": function (character, system, from) {
                    if (character.qualities.secretos >= 5) {
                        system.doLink('fin2');
                    } else {
                        system.doLink('fin1');
                    }
                }
            }
        }
    ),

    fin1: new undum.SimpleSituation(
        "<p>Aparece San Juan en mitad de tus sueños, mostrando un figura angelical. Este santo te dice:<br>" +
        "<br>San Juan - <em>El mayor problema puede que esté en nosotros, pero, al igual que la bondad, también reside en nosotros actuar obrando de buena fe.</em></p>" +
        "<h1>FIN</h1>"
    ),
    fin2: new undum.SimpleSituation(
        "<p>Aparece San Pedro en mitad de tus sueños, mostrando un figura angelical. Este santo te dice:<br>" +
        "<br>San Pedro - <em>Hoy me han intentado traer a tu amigo a que le juzge por sus pecados, pero viendo tus actos de hoy, he presenciado que no es lugar ni el momento. Sigue obrando el bien, pues así" +
        "encontrarás la felicidad en ti mismo siempre que empeñes en buscarla.</em></p>" +
        "<h1>FIN</h1>"
    ),

    plantilla: new undum.SimpleSituation(
        "<p class='transient'></br> texto </p>" +
        "<p class='transient'><em><a href=''>X</a></em></p>" +
        "<p class='transient'><em><a href=''>X</a></em></p>" +
        "<p class='transient'><em><a href=''>X</a></em></p>"
        , {}
    ),

    funcionalidades: new undum.SimpleSituation(
        "<h1>FUNCIONALIDADES</h1>" +
        "<p><a href='fin'>FINALIZAR LA PARTIDA</a></p>"
        + "<br><p><a href='./con-moneda'>CON MONEDA</a></p>"
        + "<br><p><a href='./sin-moneda'>SIN MONEDA</a></p>"
        + "<br><p><a href='./con-nota'>CON NOTA</a></p>"
        + "<br><p><a href='./sin-nota'>SIN NOTA</a></p>"
        + "<br><p><a href='./con-amuleto'>CON AMULETO</a></p>"
        + "<br><p><a href='./sin-amuleto'>SIN AMULETO</a></p>"
        + "<br><p><a href='./fin-alt'>FIN ALT MOSTRAR</a></p>"
        + "<br><p><a href='./fin-alt-sin'>FIN ALT SIN MOSTRAR</a></p>", {
            actions: {
                "sin-amuleto": function (character, system, action) {
                    system.setQuality("amuleto", 0);
                },
                "con-amuleto": function (character, system, action) {
                    system.setQuality("amuleto", 1);
                },
                "sin-moneda": function (character, system, action) {
                    system.setQuality("moneda_antigua", 0);
                },
                "con-moneda": function (character, system, action) {
                    system.setQuality("moneda_antigua", 1);
                },
                "sin-nota": function (character, system, action) {
                    system.setQuality("nota", 0);
                },
                "con-nota": function (character, system, action) {
                    system.setQuality("nota", 1);
                },
                "fin-alt": function (character, system, action) {
                    if (character.qualities.secretos >= 1) {
                        system.setQuality("secretos", character.qualities.secretos + 1);
                    } else {
                        system.setQuality("secretos", 1);
                    }
                },
                "fin-alt-sin": function (character, system, action) {
                    character.qualities.secretos++;
                }
            }
        }
    ),

    fin: new undum.SimpleSituation(
        "<h1>FIN</h1>",
    ),

};

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    amuleto: new undum.OnOffQuality(
        "<span title='Aquella extraña anciana tiró este objeto. Parece un amuleto con un cristal carmesí en el centro, adornado con detalles de plata.'>Amuleto</span>",
        {priority: "0001", group: 'objeto'}
    ),
    moneda_antigua: new undum.OnOffQuality(
        "<span title='Moneda antigua. Te la dio tu vecino Eusebio como obsequio.'>Moneda antigua</span>",
        {priority: "0002", group: 'objeto'}
    ),
    nota: new undum.OnOffQuality(
        "<span title='Es la nota que te ha dado aquella mujer amable que te dejó pasar. El texto dice: SUB NOCTE IOANNIS VERITAS IN TENEBRIS LUCET'>Frase anotada</span>",
        {priority: "0003", group: 'objeto'}
    ),
    suerte: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Que la suerte te acompañe no sólo es una frase. También es un hecho.'>Suerte</span>",
        {priority: "0001", group: 'estadisticas'}
    ),
    secretos: new undum.IntegerQuality(
        "<span title='Según tus respuestas en el juego se podrá desbloquear un final alternativo.'>Diálogos secretos</span>",
        {priority: "0002", group: 'estadisticas'})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    estadisticas: new undum.QualityGroup('<span title="En toda historia siempre hay algo que se puede destacar.">Estadísticas</span>', {priority: "0001"}),
    objeto: new undum.QualityGroup('<span title="A lo largo de esta aventura tendrás objetos que podrás utilizar si lo permite la ocasión.">Objetos</span>', {priority: "0002"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.suerte = 0;
    character.qualities.secretos = 0;
    system.setCharacterText("<p>Coloca el ratón encima de lo que lleva tu personaje para ver más información.</p>");
};
