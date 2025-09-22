var words = 
      [
        "jesus",
        "monkey",
        "amazing",
        "cake",
        "gym",
        "theology",
        

      ];

      var word = words[Math.floor(Math.random() * words.length)]; // Picks random word from words array

      var answer =[];
      for (var i = 0; i < word.length; i++) // fills answer array with blank spaces = to word.length
      {
        answer[i] = "_";
      }
      
      var remainingLetters = word.length; // Tracks progress
      var buffer = Math.floor(word.length / 2);
      var numberOfGuesses = word.length + buffer;

      // Main Game Loop 
      alert("HangMan?");
      while ( remainingLetters > 0 && numberOfGuesses > 0)
      {
        
        
        alert(answer.join(" ")); // displays progress
        var guess = prompt("Guess a letter or press cancel quit"); // prompt the user to guess
        guess = guess.toLowerCase(); // Converts entered value to lowercase to factor for capital letters

        if (guess === null)
      {
        break;
      }
      else if ( guess.length > 1)
      alert("Please Pick a single letter");
     
    else
    {
        for (var j = 0; j < word.length; j++)
    {
        if (word[j] === guess)
    {
     if (answer[j] === "_")
     {
       answer[j] = guess;
      remainingLetters--;
     }
       
    }

    }
    numberOfGuesses--;


    }
  }
      
     if(remainingLetters === 0)
     {
      alert("Good job! The answer was " + word);
     }
     else if (numberOfGuesses === 0)
     {
      alert("Out of guesses! The answer was " + word);
     }