var dictionary = [
    {
        word:"bil",
        def:"",
        rel:""
    },
    {
        word:"eple",
        def:"",
        rel:""
    }
    ]

init = function(){
    for (var i = 0; i < dictionary.length; i++){
    document.getElementById('word_list').innerHTML += "<li onClick='show(" + i + ")'>'"
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
        list += "<li>" + dictionary[i].rel[j];
        document.getElementById('related').innerHTML = list;
    }
}

show(0);

search = function (){
    query = document.getElementById('search');
    if(query == ""){
        return;
    }
    found = -1;
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

    }
}