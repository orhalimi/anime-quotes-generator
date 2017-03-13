var tweeterURL="https://twitter.com/intent/tweet?hashtags=anime_quotes&text=";
var anime;
var character;
var quote;
var quotes = {
  
  "Fullmetal Alchemist":{
     "Edward Elric":["The next time I make you cry, they'll be tears of joy!",
                     "Shorty?! Could a shorty do this?! What else you want to call me: a half-pint bean-sprout midget?! I'm still growing you backwater desert idiots!", 
                     "It’s like a book. Just because you’re mad and stop reading, doesn’t change the way it ends."                                
     ],
    "Alphonse Elric":["To obtain, you have to give up something of equal value. People say Ed’s a prodigy, but that’s just because he paid with enough effort."]
  },
  "steins gate":{
  "Okabe Rintarou":["Deceive your other self. Deceive the world. That is what you must do to reach the Steins Gate. Good Luck. El Psy Congroo.",
                   "Remembering something that no one else can is a painful thing. You can't talk to anyone about it. No one will understand you. You'll be alone.",
                    "What kind of mad scientist worries about not getting enough vegetables?",
                    "Screw you, future me!"
                   ],
    "Suzuha Amane":[ "Everyone gets help from someone else at some point in their lives. So someday, you should help someone too."
    ],
    "Kurisu Makise":["Who'd eat a pervert's banana?"]
}
};


function generateNewColor(){
  var min = 0;
  var max = 190;
  var red = Math.floor(Math.random() * (max - min) + min);
  var green = Math.floor(Math.random() * (max - min) + min);
  var blue = Math.floor(Math.random() * (max - min) + min);
  setColor("rgb("+ red + "," + green + "," + blue + ")");
}

function setColor(color){
  $(".random-background-color").animate({ backgroundColor: color });
    $(".random-text-color").css("color",color);
  
}

function selectRandomKey(obj){
    var keys = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
          keys.push(prop);
     } 
  }
  return keys[Math.floor(Math.random() * keys.length)];
}

function generateRandomQuote(){
anime = selectRandomKey(quotes);
character = selectRandomKey(quotes[anime])
quote = quotes[anime][character][Math.floor(Math.random() * quotes[anime][character].length)];
$(".quote").html("<span>❝</span> "+quote);
$(".quoter").text("- " + character + ", " + anime);
}
  
$(document).ready(function(){
  generateNewColor();
  generateRandomQuote();
  $(".new-quote").click(function(){
    generateNewColor();
    generateRandomQuote();
  });
  $(".twitter").click(tweet);
});

function tweet(){
  var URI = tweeterURL + "\""+ quote + "\" -" + character + ", " + anime;
  var win = window.open(URI, '_blank');
  win.focus();
}