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
        "<p class='transient'></br><em>????? - ¡Hey! ¿Vas a venir hoy a ver los fuegos al final? </em>." +
        "</br> Te percatas de que es tu amigo Pedro así que respondes:</br>" +
        "<em>¿Estará también...</em>" +
        "<p class='transient'><em><a href='llamada2'>Manolo?.</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada2'>Lucía?.</a></em></br></p>" +
        "<p class='transient'><em><a href='llamada2'>Jose?.</a></em></br></p>" +
        "<p class='transient'> <em><a href='llamada2'>María?.</a></em></br></p>"
        , {
            actions: {
                "op1": "<p><em>Yo - ¿Estará también Manolo?</em></p>",
                "op2": "<p><em>Yo - ¿Estará también Lucía?</em></p>",
                "op3": "<p><em>Yo - ¿Estará también Jose?</em></p>",
                "op4": "<p><em>Yo - ¿Estará también María?</em></p>"
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
                "opc2": "<br><p class='transient'><em>Yo - No tengo muchas ganas hoy la verdad....</em></p>" +
                    "<p class='transient'><em>Pedro - No te creo. Con lo que tu eras... Además hay comida rica.</em></p>" +
                    "<p class='transient'> La respuesta no ha convencido lo suficiente...</br></p>",
                "opc3": "<br><p class='transient'><em>Yo - Es que tengo que....</em></p>" +
                    "<p class='transient'><em>Pedro - ¡Venga ya, si te lo vas a pasar genial!.</em></p>" +
                    "<p class='transient'> La respuesta no ha convencido lo suficiente...</br></p>"
            }
        }
    ),
    llamada3: new undum.SimpleSituation(
        "<p></br> <em>Pedro - ¡Perfecto!. Te veo a la hora de cenar en la plaza donde se hará la hoguera. ¡Chao!</em> </p>" +
        "<p class='transient'>Piensas '<em>Este Pedro es de lo que no hay. Debe de estar en peligro de extinción..</em>. </br></br> " +
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
        ,{
            actions: {

            }
        }
    ),

    salir_casa_1: new undum.SimpleSituation(
        "<p class='transient'><br><em>Uf menos mal. La próxima tengo que estar más atento de que las tenía aquí</em> piensas, mientras abres la puerta para salir de casa. " +
        "<br><a href='volver_casa'>Continuar</a></p>"
        , {
            enter: function (character, system, action) {
                system.setQuality("suerte", character.qualities.suerte+1);
            }
        }
    ),
    salir_casa_2: new undum.SimpleSituation(
        "<p class='transient'><br>No están puestas. Te quedas buscando 15 minutos por todos lados pero resulta que lo tenías en los bolsillos de los pantalones."+
        "<br><a href='volver_casa'>Continuar</a></p>"
        , {
            enter: function (character, system, action) {
                system.setQuality("suerte", character.qualities.suerte-1);
            }
        }
    ),
    salir_casa_3: new undum.SimpleSituation(
        "<p class='transient'><br>Llevas algo de prisa y decides que sales sin las llaves. Pero te acuerdas que eres de esos que lo guardan bajo el felpudo."+
        "<br><a href='volver_casa'>Continuar</a></p>"
    ),

    <!-- SALIMOS DE CASA -->

    <!-- VOLVEMOS A CASA -->

    volver_casa: new undum.SimpleSituation(
        "<p><br>" +
        "Llegas a casa, dejas todas tus cosas en la mesita de noche y vas directamente a dormir, ya que ha sido un día muy largo.<br>" +
        "<br>Dejas que las sabanas te cobijen hasta quedarte dormido mientras piensas sobre todo el día de hoy.<br>" +
        "<a href='./final'>Tienes sueño...</a>" +
        "</p>"
        , {
            actions: {
                "final": function (character, system, from) {
                    if (character.qualities.secretos >= 6) {
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
        "<span title='Aquella extraña anciana tiró este objeto. Parece un amuleto con una cristal carmesí en el centro adornado con detalles de plata.'>Amuleto</span>",
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
        "<span title='Según tus respuestas en las conversaciones se podrán revelar otros detalles de la historia.'>Diálogos secretos</span>",
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
