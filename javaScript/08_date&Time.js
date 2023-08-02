// Date represents the single moment from Jan1,1970 UTC

let TodaysDate = new Date();
console.log(TodaysDate); //? Gets current date, nonreadable/comparable time
console.log(TodaysDate.toString()); //? better readble date
console.log(TodaysDate.toDateString()); //? fetches just Date, returns as string value
console.log(TodaysDate.toLocaleString());

console.log(typeof TodaysDate); //- Object

let createdDate = new Date(2023, 2, 15); //? months starts from 0, 2 => March
console.log(createdDate.toDateString()); //? Sat Apr 15 2023

let newDate = new Date();
console.log(newDate);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //? /1000, gets the time in seconds
console.log(newDate.getMonth() + 1);  //? As index starts from 0, +1 to avoid enduser confusion
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    // timeZone:'IN'
}));
