// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// Challenge 6-Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// 1. Restate the goal. - For this challenge my goal is to change the first letter of each string element to a capital letter and print out that sentence. 
// 2.Consider the data. What data types are you working with? Will you use parameters and arguments?
// 3. Ask clarifying questions. If anything is still unclear, pause for a moment to get clarification. You’ll need to have a clear idea of both what you’re hoping to accomplish and the data you’re working with before you begin.
// 4. I need to first find the first letter of each word.  If that letter is not capitalized then I will need to capitalize that letter and return it to the string position it is in. Once that is done then console.log print to the console the entire sentence with the first letter of each word capitalized. 
// 5. I did struggle with this one and finding a simpler solution. The solution I found does work but I am a little confused on what the statement str[i] = .... is actually doing. 



var sentence = `i am excited about seeing my family for christmas!`;

function capitalWord(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    
    }
    return str.join(" ");
}
console.log(capitalWord("i am excited about seeing my family for christmas!"))


// var sentence = ["i am excited about seeing my family for christmas!"];
// var words = sentence.split(" ");

// for(var i = 0; i < sentence.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// words.join(" ");