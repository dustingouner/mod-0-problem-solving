// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// Challenge 2- Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// 1. The goal of this challenge is to find any words that are not lowercase and print them to the console in all lowercase letters. 
// 2. I am working with an array that contains string elements. A for statement can be used to print to the console all elements in lowercase. 
// 4. I'll need to first create my for statement to show where the loop starts, for how long, and what number to increment by after each loop.  Then in order to print to the console, I'll want to create a code block stating that each index string to be printed in lowercase. 
// 5. During this step I used google to find methods on how to lowercase an array of string elements. 

// 8. Refactor. I did find one other solution that would print all lowercase but printed the array instead. 







var citiesVisited = ["denver", "Boston", "Chicago", "new Orleans", "tampa"]

for (var i = 0; i < citiesVisited.length; i++) {
    console.log(citiesVisited[i].toLowerCase())
}

// This was a second method I found that would provide a similar result but instead prints all elements in lowercase but in an array.  Still working to understand the difference. 
//     .map(function(v) {
//     return v.toLowerCase();
//     });
//     console.log(citiesVisited)  
    
    


