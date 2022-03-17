var dictionary = [
    {
        word:"bil",
        def:"et kjøretøy",
        rel:["lastebil", "tog"]
    },
    {
        word:"datamaskin",
        def:"det du har",
        rel:["appelsin", "pære"]
    },
    {
        word:"eple",
        def:"mat du spiser",
        rel:["appelsin", "pære"]
    },
    {
        word:"menneske",
        def:"det du er",
        rel:["person", "folk"]
    },
    {
        word:"penger",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"tid",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"bil",
        def:"et kjøretøy",
        rel:["lastebil", "tog"]
    },
    {
        word:"datamaskin",
        def:"det du har",
        rel:["appelsin", "pære"]
    },
    {
        word:"eple",
        def:"mat du spiser",
        rel:["appelsin", "pære"]
    },
    {
        word:"menneske",
        def:"det du er",
        rel:["person", "folk"]
    },
    {
        word:"penger",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"tid",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"bil",
        def:"et kjøretøy",
        rel:["lastebil", "tog"]
    },
    {
        word:"datamaskin",
        def:"det du har",
        rel:["appelsin", "pære"]
    },
    {
        word:"eple",
        def:"mat du spiser",
        rel:["appelsin", "pære"]
    },
    {
        word:"menneske",
        def:"det du er",
        rel:["person", "folk"]
    },
    {
        word:"penger",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"tid",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"bil",
        def:"et kjøretøy",
        rel:["lastebil", "tog"]
    },
    {
        word:"datamaskin",
        def:"det du har",
        rel:["appelsin", "pære"]
    },
    {
        word:"eple",
        def:"mat du spiser",
        rel:["appelsin", "pære"]
    },
    {
        word:"menneske",
        def:"det du er",
        rel:["person", "folk"]
    },
    {
        word:"penger",
        def:"det du har",
        rel:["jobb", "arbeid"]
    },
    {
        word:"tid",
        def:"det du har",
        rel:["jobb", "arbeid"]
    }
    ];

// fill the dictionary with words
init = function(){
    for (var i = 0; i < dictionary.length; i++){
    document.getElementById('word_list').innerHTML += "<li onClick='show(" + i + ")'>"
    + dictionary[i].word + "</li>";
    }
}

// call the init function when the page loads
init();

// display a word, its definition, and related words
show = function(i){
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].def;

    var list = "";

    for (var j = 0; j < dictionary[i].rel.length; j++) {
        list += "<li>" + dictionary[i].rel[j] + "</li>";
        document.getElementById('related').innerHTML = list;
    }
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
            document.getElementById('definition').innerHTML = "Definition not found";
            document.getElementById('related').innerHTML = "No related words found";
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