getJSON = false;

function nextQ() {

}

function start() {
    $("#chene").text("Check");
    questionsJSON = JSON.parse(localStorage.getItem("urlJSON"));
    console.log(questionsJSON.questionNO + " " + typeof(questionsJSON.questionNO));
    randomNumber = Math.round(Math.random()*(questionsJSON.questionNO-1));
    console.log(randomNumber + " " + typeof(randomNumber));
    console.log(questionsJSON.questions[randomNumber].question);
    concontent = "<p>" + questionsJSON.questions[randomNumber].question + "</p><form>"
    noanswers = questionsJSON.answersNO;
    charAns = 'a';
    for(i=0; i<noanswers; i++) {
        concontent += '<input type="checkbox" id="ans'+i+'" value="'+i+'">'+ questionsJSON.questions[randomNumber].answers[i] +'</br>'
        console.log(concontent);
    }
    $("#content").html(concontent)
}

function showInput() {
    if(getJSON == false) {
        $("#sourceURL").css("display", "block");
        $("#customQuiz").text("Start!");
        getJSON = true;
    }
    else {
        url = $("#sourceURL").val();
        localStorage.setItem("jsonURL", url);
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", url, false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText);
        localStorage.setItem("urlJSON", JSON.stringify(jsonObject))
        window.location.href = "customQuiz.html";
    }
}




// function init() {
//     $.getJSON( "https://api.myjson.com/bins/ic400", function( json ) {
//         pokemonData = json;
//         for(i=0; i<18; ++i) {
//             type[i] = String(json.types[i]);
//             for(j=0; j<18; ++j) {
//                 multipliers[i][j] = Number(json.TypeStrength[i][j]);
//             }
//         }
//         })
//         .done(function() {
//             $("#firstTime").css("visibility", "visible");
//             $("#firstTime").attr("onclick","start()");
//             $("#firstTime").attr("value","Start!");

//           });
//    }

// function check() {
//     var attack = $("input[name=multiplier]:checked", "#Answer").val();
//     if(multipliers[offensiveType][defensiveType]==attack) {
//         score++;
//     }
//     tries ++;
//     if(tries == questionsNO) {
//         alert("Twój wynik to: " + (score) + "/" + (questionsNO));
//         score = 0;
//         tries = 0;
//     }
//     start();
//     $("#default").prop("checked", true);
// }

// function main() {
//     init();
// }

// window.onload = main