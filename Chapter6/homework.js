// Try it out 1

var name = "Mello";

if (name === "Malcom")
{
    console.log("Hello me!");
}else if (name === "Doctor")
   { 
    console.log("Hello dad!");
   }else if (name === "Marcia")
   {
    console.log("Hello mom!");
   }else 
   {
    console.log("Hello stranger");
   };

// loop

var base = 3;
 var y = 1;

while ( base ** y < 10000)
 {
     console.log(base ** y);
     y++;
     
 };

// Awesome animals

var animals = ["Cat", "Fish","Lemur", "Komodo Dragon"];

for (var i = 0, len = animals.length; i < len; i++)
{
    animals[i] = "Awesome " + animals[i]; 
};

console.log(animals);

// random string

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";


while (randomString.length < 6)
{
    randomLetter = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomLetter];

};

console.log(randomString);

// Hacker Speak
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    var letter = input[i];

    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    } else {
        output += letter; 
    }
}

console.log(output);

