'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')


function logger() []
console.log('My name is Mico');
}

//calling or running or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges, lemon) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges and ${lemon} lemon juice.`;
    return juice;
}

const appleJuice = fruitProcessor(10, 0, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4, 3);
console.log(appleOrangeJuice);

const appleOrangeLemonJuice = fruitProcessor(3, 15, 2);
console.log(appleOrangeLemonJuice);


//Function declaration ///////////////////////////////////////////////
const age1 = calcAge1(1995);

function calcAge1(birthYeah) {
    return (new Date()).getFullYear() - birthYeah;
}

//Function expression ///////////////////////////////////////////////
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

//Arrow function ///////////////////////////////////////////////////
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetiremet = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} year's`;
}

console.log(yearsUntilRetiremet(1991, 'Mico'));
console.log(yearsUntilRetiremet(1980, 'Jonas'));

///////////////////////////////////////////////////////////////////
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges,) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces apples and ${orangePieces} pieces oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 3));
///////////////////////////////////////////////////////////////////////
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetiremet = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} year's`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} year's`;
}

console.log(yearsUntilRetiremet(1991, 'Jonas'));
console.log(yearsUntilRetiremet(1950, 'Mico'));




const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log('No one wins...');
    }
}
checkWinner(dolphinScore, koalaScore);

dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalaScore);
checkWinner(dolphinScore, koalaScore);


//ARRAYS ///////////////////////////////////////////////////////
const frined1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ["Michael", "Steven", "Peter",];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//Basic Array Operations (Methods) ////////////////////////////////////

const friends = ["Michael", "Steven", "Peter",];

//Add Elements ///////////////////////////////////////////////////////
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements ///////////////////////////////////////////////////
friends.pop(); //Removes the last element of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //Removes the first element of the array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Stevens')) {
    console.log('You have a friend called Steven')
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

//Arrow Function ///////////////////////////////////////////////////////
//const caclTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


//Objects ///////////////////////////////////////////////////////
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const insterestedIn = prompt('What do want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


if (jonas[insterestedIn]) {
    console.log(jonas[insterestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@micoco';
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his bestfriend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}.`)

//Object Method ///////////////////////////////////////////////////////

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,


    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }

        calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYear;
    }
            calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a/no drivers liicense"


console.log(jonas.getSummary());

//Coding challenge 3 ///////////////////////////////////////////////
const calculateBMI = (mass, height) => {
    return Number((mass / height ** 2).toFixed(2));

}
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,


    calcBMI1: function () {
        this.bmi = calculateBMI(this.mass, this.height);
        return this.bmi;
    }
};




const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI2: function () {
        this.bmi = calculateBMI(this.mass, this.height);
        return this.bmi;
    }

};


mark.calcBMI1();
john.calcBMI2();
john.bmi = Number(john.bmi.toFixed(2));
mark.bmi = Number(mark.bmi.toFixed(2));

console.log(john.bmi, mark.bmi);
//arrow function /////////////////////////////////////////////////
console.log(`${mark.bmi > john.bmi ? "Mark Miller's" : "John Smith's"} BMI ${mark.bmi > john.bmi ? `(${mark.bmi})` : `(${john.bmi})`} is higher than ${mark.bmi > john.bmi ? "John's" : "Mark's"} ${mark.bmi > john.bmi ? `(${(john.bmi)})` : `(${(mark.bmi)})`}`);

//or/////////////////////////////////////////////////////////////
if (mark.bmi > john.bmi) {
    console.log(`Mark Miller's BMI (${mark.bmi} is higher than
        John Smith's (${john.bmi})! )`)
} else {
    console.log(`John Smith's BMI (${john.bmi} is higher than
            Mark Miller's (${mark.bmi})! )`)
}
iteretion: The for Loop /////////////////////////////////////////////
    - allow us to animate repetetive task

console.log('Lifting weights repeition 1');

for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repeition ${rep}`);
}

    Looping arrays, Breaking and Continuing ///////////////////////////////

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true

];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}
/////////////////////////////////////////////////////////////////
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
///////////////////////////////////////////////////////////
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

////////////////////////////////////////////////////////////
const years2 = ['Mico', 'Orinion', 2002];
const types = [];

for (let i = 0; i < years2.length; i++) {
    // console.log(years2[i], typeof years2[i]);

    types[i] = typeof years2[i];
}
console.log(types);
////////////////////////////////////////////////////////////
const siblings = [
    'Harver',
    24,
    'Rhelinda',
    23,
    'Avery',
    21,
    'Hannah Mae',
    18
];
const types2 = [];

for (let i = 0; i < siblings.length; i++) {
    console.log(siblings[i], typeof siblings[i]);

    types2[i] = typeof siblings[i];
}
console.log(types2);

//Continue and Break ////////////////////////////////
//continue
const jonas = ['Jonas', 'Schmedtmann', 22, 'teacher',]
console.log('-----ONLY STRINGS-----')

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

//break
console.log('-----BREAK WITH NUMBER-----');

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
//Looping Backwards and Loops in Loops //////////////////////////
//Looping backwards
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//Loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise${exercise}: Lifting weights repetition ${rep}`);
    }
}
//The while loop ////////////////////////////////////////////////////
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} `);
    rep++;
}
/////////////////////////////////////////////////////////////////////

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end....');
}
//Final Coding Challenge///////////////////////////////////////////////
//my answer///////////////////////////////////////////////////////////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(bills[i] >= 50 && bills[i] <= 300 ? bills[i] * .15 : bills[i] * .20)
}

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}

//answer////////////////////////////////////////////////////////
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
//bonus////////////////////////////////////////////////////////
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i] or
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7])) // = arr
console.log(calcAverage(totals))
console.log(calcAverage(tips))
*/
/////////////////////////////////////////////////////////////////////////////////
//PART 2 JavaScript Fundamentals Assignment ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//functions
// function describeCountry(country, population, capitalCity) {
//     return console.log(`${country} has ${population} million people
// and its capital city is ${capitalCity}.`)
// }

// const country =  'Phillippines'; 
// let population =  17;
// const capitalCity = 'Manila'; 

// console.log(describeCountry(country, population, capitalCity));

//Function Declaration vs Expressions 

// function calcPercentage(population) {
//     return parseFloat(population / worldPopulation * 100).toFixed(2)
// }

// // // //Function Declaration
// function precentageOfWorld1(population) {
//     return calcPercentage(population); // <==== Declaration uses Function
// }

// let worldPopulation =  7900;
// let phPopulation = 570;
// let koreaPopulation = 400;
// let usPopulation = 1150;

// console.log(precentageOfWorld1(phPopulation), precentageOfWorld1(koreaPopulation), precentageOfWorld1(usPopulation));
// //Function Expression 
// const precentageOfWorld2 = function(population) {
//     return calcPercentage(population); //<==== Expression uses Variables
// }

// let worldPopulation2 =  7900;
// let phPopulation2 = 5700;
// let koreaPopulation2 = 4000;
// let usPopulation2 = 11500;

// console.log(precentageOfWorld2(phPopulation2), precentageOfWorld2(koreaPopulation2), precentageOfWorld2(usPopulation2));

// //Arrow functions 
// const precentageOfWorld3 = population => (population / 7900 * 100);

// const percPhillippines = precentageOfWorld3(400);
// const percKorea = precentageOfWorld3(300);
// const percCanada = precentageOfWorld3(200);

// console.log(percPhillippines, percKorea, percCanada);

//Functions Calling other Functions
// function calcPercentage(population) {
//       return parseFloat(population / worldPopulation * 100).toFixed(2)
// }

// function describePopulation(country, population) { 
//     return console.log(`${country} has ${population} million people, which
// is about ${calcPercentage(population)}% of the world.`);
// }

// const worldPopulation = 7900;
// const country = "Phillippines";
// let population = 600;
// console.log(describePopulation(country, population));

//Introduction to Arrays

// const population1 = [569, 469, 369, 269];
// const percentagesOfWorld = [];

// const elements = population1.length >= 4 ? 'True' : 'False';
// console.log(elements);

// for(let i = 0; i < population1.length; i++) {
//     percentagesOfWorld.push(parseFloat(population1[i] / 7900 * 100).toFixed(2));
// }

//  console.log(percentagesOfWorld);

//Basic Array operation (methods) 
// const neighbours = [
//     'Korea',
//     'China',
//     'Singapore'
// ]

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if(neighbours.indexOf('Germany')) {
//     console.log('Probaly not a central European country :D');
// }

// neighbours[neighbours.indexOf('China')] = 'Republic of China';
// console.log(neighbours);

//Introduction to Objects
// const myCountry = {
//     country: 'Phillippines',
//     capital: 'Manila',
//     language: 'Tagalog',
//     population: 569,
//     neighbours: ['Japan', 'Singapore', 'korea'],
//     describe: function() {
//         return console.log(`${this.country} has ${this.population} million ${this.language}-speaking
//         people, ${this.neighbours.length + 1} neighbouring countries and a capital ${this.capital}.`)
//     }
// };

// console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
//  ${myCountry.neighbours.length + 1} neigbhouring countries and a capital ${myCountry.capital}.`);

//Dot vs Bracket Notation
//Dot notation
// let populationIncrease1 = myCountry.population + 200;
// console.log(populationIncrease1);

// Bracket notation 
// let populationIncrease2 = myCountry['population'] + 300;
// console.log(populationIncrease2)

//Object Methods 
// const myCountry = {
//     country: 'Phillippines',
//     capital: 'Manila',
//     language: 'Tagalog',
//     population: 569,
//     neighbours: ['Japan', 'Singapore', 'korea'],
    
//     describe: function() {
//          console.log(`${this.country} has ${this.population} million ${this.language}-speaking
//         people, ${this.neighbours.length + 1} neighbouring countries and a capital ${this.capital}.`)
//     },

//     checkIsland: function() {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

//The for Loop

// for(let i = 0; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting.`)
// }

//Looping Array,Breaking and Continuing
// const population1 = [100,200,300,400];
// const percentages2 = [];

// for(let i = 0; i < population1.length; i++) {
//        percentages2.push(parseFloat(population1[i] / 7900 * 100).toFixed(2))
// }

// console.log(percentages2);

//Looping Backwards and Loops in loops
// const listOfNeighbours = [['Canada', 'Mexico'],
//  ['Spain'],
//  ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)

// console.log(`Neighbour: ${listOfNeighbours[i] [y]}`);

//The While loop

// function percentageOfWorld(populations) {
//     populations / 7900 * 100;
// }

// const populations = [100, 200, 300];
// const percentages3 = [];

// function percentageOfWorld(populations) {
//    return (populations/ 7900) * 100 
// };  
 
// let i = 0; 
// while (i < populations.length) {
//  const perc = percentageOfWorld(populations[i]);
//  percentages3.push(perc);
//  i++;
//  }
 
// for (let i = 0; i < populations.length; i++){
//     percentages3.push(percentageOfWorld(populations[i]))
// }

// console.log(percentages3);

