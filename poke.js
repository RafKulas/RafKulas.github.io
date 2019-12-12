var type = new Array(18);

var offensiveType;
var defensiveType;

var tries = 0;
var score = 0;
var questionsNO = 15;

var multipliers = new Array(18);
for(i=0; i<18;i++) {
    multipliers[i] = new Array(18);
}

function init() {
    $.getJSON( "https://api.myjson.com/bins/ic400", function( json ) {
        pokemonData = json;
        for(i=0; i<18; ++i) {
            type[i] = String(json.types[i]);
            for(j=0; j<18; ++j) {
                multipliers[i][j] = Number(json.TypeStrength[i][j]);
            }
        }
        console.log(type);
        console.log(multipliers);
        });
   }

function start() {
    offensiveType = Math.round(Math.random()*17);
    console.log(type[offensiveType]);
    defensiveType = Math.round(Math.random()*17);
    console.log(type[defensiveType]);

    $("#Question").text("Jaki mnoznik ma atak typu "+type[offensiveType]+ " w pokemon'a typu "+type[defensiveType]+"?");
    $("#afterStart").css("display", "block");
    $("#firstTime").css("display", "none");
}

function check() {
    var attack = $("input[name=multiplier]:checked", "#Answer").val();
    if(multipliers[offensiveType][defensiveType]==attack) {
        score++;
    }
    tries ++;
    if(tries == questionsNO) {
        tries == 0;
        alert("Twój wynik to: " + (score/questionsNO*100) + "%");
    }
    start();
}

function main() {
    init();
}

window.onload = main