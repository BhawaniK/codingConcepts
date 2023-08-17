//* Array, which stores a collection of multiple items in single variable
    //* resizeable
    //* contain mix of different dataType
    //* JS arraya are not associative array.
    //* starts the indexing from 0
    //* Array copy operation, creates shallowCopies
        //? ShallowCopy : is a copy whose properties share the same references, it changes in the original Array Object.
        //? DeepCopy : donot share the same refrence.

//- Declaration

const myArr = [1, 2, 3, 4, 5, "Abc"];
// console.log(myArr[2]);

const Arr = new Array(1,5,7,9)
// console.log(Arr[1]);

//- Methods

// myArr.push(6)  //? appends newElements to the end of the Array, Returns NewArray.
// myArr.push('xyz')

// myArr.pop() //! removes lastEle from the Array, returns the Array.
//     //* if Array is empty, returns undefined
//     //* Array is not modified

// myArr.unshift(789)  //! inserts newEle(789), in start of Array. returns newArray
//     //* can be used in to-do project
//     //* not recommended, as it shifts the indexes of all the elements. If larger response, might take large timeconsuming & gets much load in CPU resulting in slower.

// myArr.shift() //! removes the 1stEle, returns the array.
//     //* if Array is empty, returns undefined
//     //* Array is not modified

// console.log(myArr.includes(9)); //! false, checks if array has certain element, returns boolean dataType

// console.log(myArr.indexOf(9));  //! returns the index of the 1st occurrence of the value in an Array
//     //* returns "-1", if ele is notPresent.

// const newArr = myArr.join() //! binds & changes the dataType of the Array

// console.log(myArr);
// console.log(newArr)


// console.log('A ', myArr);
// const myNewArr = myArr.slice(1,5)  //? takes 2 args, startPt & endPt. doesnt includes the last range
// console.log(myNewArr);
// console.log(myArr);

// const splicemethod = myArr.splice(1,5) //? indludes the last range, Removes the splice part from the Original Array & Modifies the Original Array.
// console.log(myArr); //- [1] Modified the array, extracted the elements from the original Array.
// console.log(splicemethod);  //[2, 3, 4, 5, 'Abc']



