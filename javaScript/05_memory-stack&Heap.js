//? Memory 2Types
//     - Stack (Primitive)
//     - Heap (Non-Primitive)

//? Stack, gets the copy of a variable.
//? Heap, gets reference of the original value. => change occurs in original value


let myMail = "abc@gmail.com"
let anotherMail = myMail    //- This creates the copy of the variable in the memory.

anotherMail = "xyz@gmail.com"

console.log(myMail);
console.log(anotherMail); //- Magic.., it changed the copy value of the variable.

//- keeps variable name in stack, and moves the objet{} to heap memory.
let userOne = {      
    email : 'user@gmail.com',
    upi : 'user@ybl'
}

let userTwo = userOne
userTwo.email = 'Abc'

console.log(userTwo.email);  //- gets the new value, as it refrences to the original value, such that if we make change in one variable, it changes for all.
console.log(userOne.email);  //- gets the new value, as it refrences to the original value, such that if we make change in one variable, it changes for all.