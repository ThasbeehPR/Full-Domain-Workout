// Define the callback function
function displayMsg(){
    console.log('How do you do');
}
// Define the main function that takes a callback
function greet (name,cb){
    console.log('hello '+name+'!');
    cb() // Execute the callback function
}
// Call the main function with a callback
greet('Boss',displayMsg)

// ****************************************************************************

//Example 2 sum
function display(sum){
    console.log('the sum is : ',sum);
}
function add (a,b,callback){
   let sum=a+b
    callback(sum)
}
add(1,2,display)












