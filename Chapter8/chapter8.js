/* Creating a function

var ourFirstFunction = function ()
{
    console.log("Hello world!");
};

ourFirstFunction();
*/

/* passing an argument

var sayHelloTo = function (name)
{
    console.log("Hello " + name + "!");
};

sayHelloTo("Jake");
sayHelloTo("Daniel");
*/

/* Multiple arguments 

var printMultipleTimes  = function (howManyTimes, whatToDraw)
{
    for (var i = 0; i < howManyTimes; i++)
    {
        console.log(i + " " + whatToDraw);
    }
    
};

printMultipleTimes(5, "$");
*/

/* retun value

var double = function (number)
{
    return number *2;
};

console.log(double(10));
console.log(double(5) + double(6));
console.log(double(double(3)));
*/

/* simplifying code with fucntions

var pickRandomWord = function (words)
{
    return words[Math.floor(Math.random() * words.length)];
};

var randomWords = ["Planet", "Worm", "Flower", "Computer"];

console.log(pickRandomWord(randomWords));

pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);
*/
/* Improving random insult generator

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid", "Ugly", "Putrid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// Join all the random strings into a sentence:

var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

console.log(randomString);
*/

/*

generateRandomInsult = function () {
 var randomBodyParts = ["Face", "Nose", "Hair"];
 var randomAdjectives = ["Smelly", "Boring", "Stupid", "Ugly", "Putrid"];
 var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//  Join all the random strings into a sentence:
 
 var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
 return randomString;
};


console.log(generateRandomInsult());
*/

// Leaving a function via return

var fifthLetter = function (name)
{
    if(name.length < 5)
    {
        return;
    }
    return "The fifth letter of your name " + name[4] + ".";
};

console.log(fifthLetter("Malcom"));
console.log(fifthLetter("Neo"));

// Mutiple returns 

/*

var medalForScore = function (score)
{
    if (score < 3)
    {
        return "Bronze";
    }
    if (score < 7)
    {
        return "Silver";
    }
    return "Gold"
};

console.log(medalForScore(8));
*/

var medalForScore = function (score)
{
    if (score < 3)
    {
        return "Bronze";
    }
    else if(score < 7)
    {
        return "Silver";
    }
    else
    {
        return "Gold"
    }
    
};

console.log(medalForScore(1));

// short hand: function declaration

function double(number)
{
    return number * 2;
};

console.log(double(3));

//  programming challenges

function add(a, b)
{
    return sum = a + b;
};

function multiply(x, y)
{
    return product = x * y;
};


function areArraysSame(array1, array2)
{
    if (array1.length !== array2.length)
    {
        return false;
    }
    for (var i = 0; i < array1.length; i++)
    {
        if (array1[i] !== array2[i])
        {
            return false;
        }
    }
    return true;
};

console.log(areArraysSame([1, 2, 3], [1, 2, 3]));