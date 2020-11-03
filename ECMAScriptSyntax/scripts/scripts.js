let array = [0,5,10,18,30];
let secondArray = [54,68];
let thirdArray;
let multipliedArray;
let filteredArray;
let sum;
let sumEven;
let person=
    {
        voornaam:"trigi",
        achternaam:"Queen of shiba",
        leeftijd:21
    };
let personPlus;
//uses spread operator syntax to concat a new property to an object
const concatObjectProp = () => {
    personPlus = { ...person, geboorteplaats: "Wonderland"};
    printConsole(personPlus);
}
//uses destructuring syntax to display property of an object
const displayFirstname = () => {
    let {voornaam} = person;
    printConsole(voornaam);
}
//uses spread operator syntax to concat 2 arrays in a third
const concatArrays = () => {
    thirdArray = [ ...array, ...secondArray];
    thirdArray.forEach(printConsole);
}
//prints value on console
const printConsole = (value) =>{
    console.log(value);
}
//multiplies array by 5 and stores in the multiplied array object
const multiplyArray = () => {
    multipliedArray = array.map((n)=> n*5);
    multipliedArray.forEach(printConsole);
}
//filters the array on boolean function isBiggerThanThirty
const filterArray = () => {
    filteredArray = multipliedArray.filter(isBiggerThanThirty);
    filteredArray.forEach(printConsole);
}
//checks if a value is bigger than 30
const isBiggerThanThirty = (value) =>{
    return value > 30;
}
//gives the sum of all elements
const getSumAllElements = () => {
    sum = multipliedArray.reduce(function (total, value, i) {
        return total + value;
    });
    printConsole(sum);
}
//gives the sum of all even elements
const getSumEvenElements = () => {
    sumEven = multipliedArray.reduce(sumEvenElements);
    printConsole(sumEven);
}
//helper method to get sum all even elements
const sumEvenElements = (total, value) => {
    if(value % 2 ===0){
        return total+value
    }
    else
    {
        return total;
    }
}
//setup functions on load window
const setup = () => {
    //Array for each
    array.forEach(printConsole);
   multiplyArray();
   filterArray();
   getSumAllElements();
   getSumEvenElements();
   concatArrays();
   concatObjectProp();
   displayFirstname();
}
window.addEventListener("load", setup);