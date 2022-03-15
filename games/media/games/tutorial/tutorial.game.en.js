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

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<a href='./sin-moneda'>pincha aqui</a>\
        <br>\
        <a href='last'>siguiente</a>",
        {
            actions: {
                sinmoneda: function (character, system, action) {
                    system.setQuality("moneda_antigua", 0);
                }
            }
        }
    ),
    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function (character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )

}
// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    moneda_antigua: new undum.OnOffQuality(
        "<span title='Moneda antigua. Te la dio tu vecino Eusebio como obsequio.'>Moneda antigua</span>",
        {priority: "0010", group: 'objeto'},
    ),
    skill: new undum.IntegerQuality(
        "Skill", {priority: "0001", group: 'estadisticas'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority: "0002", group: 'estadisticas'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='blabla'>Suerte</span>",
        {priority: "0003", group: 'estadisticas'}
    ),
    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority: "0001", group: 'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority: "0002", group: 'progress', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    estadisticas: new undum.QualityGroup(null, {priority: "0001"}),
    objeto: new undum.QualityGroup('Objetos', {priority: "0002"}),
    progress: new undum.QualityGroup('Objetos', {priority: "0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.luck = 0;
    character.qualities.moneda_antigua = 1;
    system.setCharacterText("<p>¡Ten en cuenta tus habilidades!</p>");
};
