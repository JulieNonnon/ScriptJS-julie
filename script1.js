// Plus grand nombre d'un tableau:
let myArray = [1, 2, 32, 5, 8, 56, 21, 16];
let biggestNumber = myArray[0];

for (var i = 1; i < myArray.length; i++) {
  if (myArray[i] > biggestNumber ) {
    biggestNumber = myArray[i];
  }
}
console.log("Script 1 :")
console.log(myArray)
console.log("le nombre le plus grand est : " + biggestNumber);