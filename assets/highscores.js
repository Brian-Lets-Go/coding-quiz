function displayHighScores(){
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    highscores =  highscores.sort(function (a, b) {return b.score - a.score});

    for(var i = 0; i < highscores.length; i++){

        var pTag = document.createElement('p');

        pTag.append( `score: ${highscores[i].score} - Initials: ${highscores[i].initials} `)
        
        document.getElementById('high-score-display').append(pTag)
    }
}

displayHighScores()