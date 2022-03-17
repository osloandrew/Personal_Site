var dictionary = [
    {
        word:"abstrakt",
        def:"abstract",
        rel:"adjective"
    },
    {
        word:"aktiv",
        def:"active",
        rel:"adjective"
    },
    {
        word:"album",
        def:"album",
        rel:"noun ⚲"
    },
    {
        word:"aldri",
        def:"never",
        rel:"adverb"
    },
    {
        word:"bake",
        def:"bake",
        rel:"verb"
    },
    {
        word:"bakeri",
        def:"bakery",
        rel:"noun ⚲"
    },
    {
        word:"bank",
        def:"bank",
        rel:"noun ♂"
    },
    {
        word:"barn",
        def:"child",
        rel:"noun ⚲"
    },
    {
        word:"bål",
        def:"bonfire",
        rel:"noun ⚲"
    },
    {
        word:"det",
        def:"it, that",
        rel:"pronoun ⚲"
    },
    {
        word:"ende",
        def:"end",
        rel:"verb"
    },
    {
        word:"film",
        def:"movie, film",
        rel:"noun ♂"
    },
    {
        word:"gjerne",
        def:"gladly",
        rel:"adverb"
    },
    {
        word:"han",
        def:"he",
        rel:"pronoun ♂"
    },
    {
        word:"hun",
        def:"she",
        rel:"pronoun ♀"
    },
    {
        word:"i",
        def:"in",
        rel:"preposition"
    },
    {
        word:"jern",
        def:"iron",
        rel:"noun ⚲"
    },
    {
        word:"kvinne",
        def:"woman",
        rel:"noun ♀"
    },
    {
        word:"ledig",
        def:"available",
        rel:"adjective"
    },
    {
        word:"mann",
        def:"man",
        rel:"noun ♂"
    },
    {
        word:"ny",
        def:"new",
        rel:"adjective"
    },
    {
        word:"optimist",
        def:"optimist",
        rel:"noun ♂"
    },
    {
        word:"ord",
        def:"word",
        rel:"noun ⚲"
    },
    {
        word:"sortere",
        def:"sort",
        rel:"verb"
    },
    {
        word:"student",
        def:"student",
        rel:"noun ♂"
    },
    {
        word:"tre",
        def:"tree",
        rel:"noun ⚲"
    },
    {
        word:"tunge",
        def:"tongue",
        rel:"noun ♀"
    },
    {
        word:"uenig",
        def:"in disagreement",
        rel:"adjective"
    },
    {
        word:"ulv",
        def:"wolf",
        rel:"noun ♂"
    },
    {
        word:"ærlig",
        def:"honest",
        rel:"adjective"
    },
    {
        word:"øre",
        def:"ear",
        rel:"noun ⚲"
    },
    {
        word:"øy",
        def:"island",
        rel:"noun ♀"
    },
    {
        word:"øye",
        def:"eye",
        rel:"noun ⚲"
    },
    {
        word:"årstid",
        def:"season",
        rel:"noun ♀"
    },
];


// fill dictionary with words
init = function(){
    for (var i = 0; i < dictionary.length; i++){
    document.getElementById('word_list').innerHTML += "<li onClick='show(" + i + ")'>"
    + dictionary[i].word + "</li>";
    }
}

// call the init function when the page loads
init();

// display the word, its definition, and additional information
show = function(i){
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].def;
    document.getElementById('related').innerHTML = dictionary[i].rel;

    /*
    var list = "";
    for (var j = 0; j < dictionary[i].rel.length; j++) {
        list += "<li>" + dictionary[i].rel[j] + "</li>";
        document.getElementById('related').innerHTML = list;
    }
     */

}

show(0);

search = function (){
    query = document.getElementById('search').value;

    if (query == "") {
        return;
    }

    found = -1; // initialize found to false

    for (var i = 0; i < dictionary.length; i++) {
        if (query == dictionary[i].word){
            found = i;
            break;
        } else {
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = "";
            document.getElementById('related').innerHTML = "";
        }
    }
    if (found >= 0) {
        show(found);
    }
}

// Execute a function when the user releases a key on the keyboard
query = document.getElementById('search');

query.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchButton").click();
    }
});
