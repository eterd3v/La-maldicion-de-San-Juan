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
        "<h1>Comienzo</h1>" +
        "<p><a href='fin'>FINALIZAR LA PARTIDA</a></p>"
        + "<br><p><a href='./con-moneda'>CON MONEDA</a></p>"
        + "<br><p><a href='./sin-moneda'>SIN MONEDA</a></p>"
        + "<br><p><a href='./con-nota'>CON NOTA</a></p>"
        + "<br><p><a href='./sin-nota'>SIN NOTA</a></p>"
        + "<br><p><a href='./con-amuleto'>CON AMULETO</a></p>"
        + "<br><p><a href='./sin-amuleto'>SIN AMULETO</a></p>"
        + "<br><p><a href='./fin-alt'>FIN ALT MOSTRAR</a></p>"
        + "<br><p><a href='./fin-alt-sin'>FIN ALT SIN MOSTRAR</a></p>",{
            actions: {
                "sin-amuleto": function (character, system, action) {
                    system.setQuality("amuleto",0);
                },
                "con-amuleto": function (character, system, action) {
                    system.setQuality("amuleto",1);
                },
                "sin-moneda": function (character, system, action) {
                    system.setQuality("moneda_antigua",0);
                },
                "con-moneda": function (character, system, action) {
                    system.setQuality("moneda_antigua",1);
                },
                "sin-nota": function (character, system, action) {
                    system.setQuality("nota",0);
                },
                "con-nota": function (character, system, action) {
                    system.setQuality("nota",1);
                },
                "fin-alt": function (character, system, action){
                    if (character.qualities.secretos >= 1) {
                        system.setQuality("secretos", character.qualities.secretos+1);
                    } else {
                        system.setQuality("secretos", 1);
                    }
                },
                "fin-alt-sin": function (character, system, action){
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
        {priority:"0002", group: 'estadisticas'})
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
    system.setCharacterText("<p>Coloca el ratón encima de lo que lleva tu personaje para ver más información.</p>");
};
