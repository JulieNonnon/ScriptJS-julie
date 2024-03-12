// Mot le plus long d’une phrase
let mySentence = "Supercalifragilisticexpialidocious , C'est vrai que ce mot trop long est parfaitement atroce"
let eachWord = mySentence.split(" "); // split pour décomposer la phrase en tableau de mot, chaque mot séparé par un espace " "
let longestWord = ""; // pour garder le mot le plus long
for (let i = 0; i < eachWord.length; i++) {
    if (eachWord[i].length > longestWord.length) {
      longestWord = eachWord[i];
    }
  }

console.log("Script 2 :")
console.log("Dans la citation : " +  mySentence)
console.log("le mot le plus long est " + longestWord)