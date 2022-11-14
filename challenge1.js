// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// Challenge 1- Given an array of strings, return only the strings that have exactly 4 characters.

// 1. Restate the goal- the goal is to print to the console only the strings that have exactly 4 characters. 
// 2.Consider the data.- In this problem there is a string of data labeled foods. I am using a for statement to work through each word in the array in order to print only those with exactly 4 characters.  
// 4. In my for statement, I will first state the initialization that shows the loop is starting at index number 0, the condition is to check each element in the array and stop at the length of the array. While running the loop after each string element it will increase by one.  If the string element is exactly equal to 4 characters, then the console will print out the name of that string. 
// 5. I referenced back to my notes in order to find how the code should be written. 




var foods = ["tacos", "eggs", "pizza", "milk", "bread", "cake"]

for (var i = 0; i < foods.length; i++) {
    if (foods[i].length === 4) {
        console.log(foods[i])
    }
}


