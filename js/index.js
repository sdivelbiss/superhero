
// --------------------------- My JavaScript -----------------------------------

var characterList = [
      {
        name: "Batman",
        image: "img/batman1.png",
        answer: "a"
      },
      {
        name: "Captin America",
        image: "img/captinamerica1.png",
        answer: "b"
      },
      {
        name: "Captin America",
        image: "img/captinamerica1.png",
        answer: "o"
      },
      {
        name: "Cyclops",
        image: "img/cyclops1.png",
        answer: "c" 
      },
      {
        name: "Cyclops",
        image: "img/cyclops1.png",
        answer: "d"
      },
      {
        name: "Dare Devil",
        image: "img/daredevil1.png",
        answer: "j"
      },
      {
        name: "Dare Devil",
        image: "img/daredevil1.png",
        answer: "k"
      },
      {
        name: "Dr. Doom",
        image: "img/drdoom1.png",
        answer: "e"
      },
      {
        name: "The Human Torch",
        image: "img/flame1.png",
        answer: "h"
      },
      {
        name: "The Human Torch",
        image: "img/flame1.png",
        answer: "q"
      },
      {
        name: "Flash",
        image: "img/flash1.png",
        answer: "u" 
      },
       {
        name: "Flash",
        image: "img/flash1.png",
        answer: "t" 
      },
      {
        name: "Hulk",
        image: "img/hulk1.png",
        answer: "v"
      },
      {
        name: "Hulk",
        image: "img/hulk1.png",
        answer: "g"
      },
      {
        name: "Ironman",
        image: "img/ironman1.png",
        answer: "n"
      },
       {
        name: "Ironman",
        image: "img/ironman1.png",
        answer: "y"
      },
      {
        name: "The Joker",
        image: "img/joker1.png",
        answer: "m"
      },
      {
        name: "Lex Luther",
        image: "img/lexluther1.png",
        answer: "i"
      },
      {
        name: "Magneto",
        image: "img/magneto1.png",
        answer: "l"
      },
      {
        name: "The Punisher",
        image: "img/punisher1.png",
        answer: "s"
      },
       {
        name: "The Punisher",
        image: "img/punisher1.png",
        answer: "x"
      },
      {
        name: "Red Skull",
        image: "img/redskull1.png",
        answer: "p"
      },
      {
        name: "Spiderman",
        image: "img/spiderman1.png",
        answer: "r"
      },
      {
        name: "Superman",
        image: "img/superman1.png",
        answer: "z"
      },
      {
        name: "Superman",
        image: "img/superman1.png",
        answer: "c"
      },
      {
        name: "Venom",
        image: "img/venom1.png",
        answer: "w"
      },
      {
        name: "Wolverine",
        image: "img/wolverine1.png",
        answer: "x"
      },
      {
        name: "Wolverine",
        image: "img/wolverine1.png",
        answer: "f"
      }
]

var easterEgg = [
      {
        name: "That's a terrible name, please try again",
        image: "img/trump1.png",
        answer: "trump"
      }
]

document.getElementById("villian").addEventListener("keypress", enterKey);

function enterKey (e) {
  if(e.keyCode == 13) {
    getInfo();
  }
} false;


function getInfo() {
  var lowerCase = document.getElementById("villian").value.toLowerCase(); 
  var firstLetter = lowerCase.charAt(0);
  var superheros = firstLetter;
  
  for (var i = 0; i < characterList.length; i++) {
      if (superheros == characterList[i].answer) {
        document.getElementById("name").textContent = characterList[i].name
        document.getElementById("image").src = characterList[i].image
        document.getElementById("display").className = "display"
      }
      
    }  
    for (var i = 0; i < easterEgg.length; i++) {
      if (villian == easterEgg[i].answer) {
        document.getElementById("name").textContent = easterEgg[i].name
        document.getElementById("image").src = easterEgg[i].image
        document.getElementById("display").className = "display"
      }
      
    }  
}











































