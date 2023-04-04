// const never = {
//   item:[],
//   hey:0
// };
// never.item.push(3,6)

// // const results = never.item.reduce((prev , current)=>{
// //   return (prev + current);
// // },0);
// // console.log(results);


// const bj = {
//   0:"awets"
// };
// const bestPituresMap = new Map();
// bestPituresMap.set(0,"Parasite");
// bestPituresMap.set("2019","Green Book");
// bestPituresMap.set("2018","The Shape of Water");
// bestPituresMap.set("2017","Moonlight");
// bestPituresMap.set("2016","Spotlight");
// bestPituresMap.set("2015","Birdman");
// bestPituresMap.set("2014","12 Years Slave");
// bestPituresMap.set("2013","Argo");
// //console.log(bestPituresMap.get("2013"))

// bestPituresMap.forEach((key , value)=>{
//   if(key === "2015"){
//     console.log("ifikile kengoku ",value)
//   }else{
//     console.log("uuybhudile")
//   }
// });

// // const bestPicture2019 = bestPitureMap.entries();
// // bestPicture2019.forEach((key,values)=>{
// //   if(keys === 2015){
// //     console.log("And the best pitcure award in 2015 goes to....",values.next());
// //   }else{
// //     console.log("not found kesana");
// //   }
// // });


//arrays is a type of object 
//flexible
//list like
//arrray methods

//Sort array alphabetical a-z
const pets = ["dogs","cat","wolf","sheeps","goats"];
console.log("sorted",pets.sort());
console.log(pets);
// pets[0] = "chickee";
// const petsSize = pets.length === 5;
// console.log(petsSize);
// console.log(pets);
// pets.forEach((currentValue, index, array)=>{
//   console.log(currentValue);
// });


// Sort numbers numerically from the highest to the lowest
const scores = [50,60,70,80,90,100];
const sortedScores = scores.sort((a,b)=> b-a);
console.log("from highest to lowest",sortedScores);
const sortedScores2 = scores.sort((a,b)=> a-b);
console.log("from lowest to highest ",sortedScores2);
// const logScores = (score)=>{
//   console.log("Score over 65",score);
// };
// scores.forEach((currentValue,index,array)=>{
//   if(currentValue > 65){
//     console.log(currentValue);
//   }
// });

//Array reverse method
const condiments = ["ketchup","Carter","mustard","relish","Mayo"];
// Use reverse to change the order of this Array.
const reversedCondiments = condiments.reverse();
  console.log("reversed condimentse",reversedCondiments);
const employees = ["adams","Carter","Davis","Franklin","Zappa"];
// Use reverse to change the order of this array
//but keep the original array intact
const copyOfEmployees = [...employees];
console.log("copied version of ",copyOfEmployees);

const reversedEmployees = copyOfEmployees.reverse();

console.log("reversed Employees",reversedEmployees);

//find and findIndex => array methods
//find => return the first element that passes the testing funtion
// No match ? Return undefined
//findIndex => return the first index that passes the testing function No match ? returns -1

//return the first element or index that passes the testing function
// callback function => function(element , index , array)
// 
// Find the first grade that is less than 80.
const grades = [99,83,87,91,77];
const underEighty = grades.find((currentVal)=>{
 return currentVal < 80
});
console.log("under Eighty number",underEighty);
//find the index of the first grade that is over 80.
const overEighty = grades.findIndex((currentVal , index, array)=>{
  return currentVal > 80;
});
console.log("over eighty index",overEighty);

//asessment
const student = [
  {name:"john", grade:75 },
  {name:"jane", grade:93 },
  {name:"john", grade:90 },
  {name:"john", grade:94 }
];

const copyOfStudent = [...student];
//CHALLENGE NUMBER QUESTION NUMBER 1 
// SORT THE ARRAY OF STUDENT BASED ON THEIR GRADE
//IN DESCENDING ORDER (LARGEST TO SMALLEST)
const sortdStdntBsdOnGrd = copyOfStudent.sort((a,b)=>{
  return b.grade - a.grade
});

console.log("sortedArrayOfObj",sortdStdntBsdOnGrd);



//CHALLENGE QUESTION-2
//AFTER SORTING THE ARRAY , REVERSE THE ORDER OF THE ARRAY
const reverseTheOrder = sortdStdntBsdOnGrd.reverse();
console.log("reversedArray now from lowest to hi",reverseTheOrder);

//CHALLENGE QUESTION 3
//FIND THE STUDENT IN THE ARRAY WHO HAS A GRADE OVER 90
const findingStudent = sortdStdntBsdOnGrd.find((currentVal)=>{
  return currentVal.grade >  90;
});

console.log("found the student who has a grade over 90",findingStudent);
//includes method
const careers= ['teacher','doctor','engineer','nurse','scientist'];
const nurseInc = careers.includes('nurse');
console.log(nurseInc);

//SEARCHING FOR STRING ARRAYS WITH ARRAY OF STRING METHODS SOME & EVERY

const states = ["California","New York","New Jersey","Alaska","New Mexico","Montana"];
// some

const arrayStartsWith = states.some((currentVal)=>{
  return currentVal.startsWith("New");
});


// every
const arrayStartsWith1 = states.every((currentVal)=>{
  return currentVal.startsWith("New");
});

console.log('some of string arr',arrayStartsWith);
console.log('every strings',arrayStartsWith1);


//Does the array of bowling scores include a 300?
//challenge 1 passed

const bowlingScores = [154,204,300,184,286];
const doesInclude = bowlingScores.includes(300);
console.log("includes",doesInclude);

//challenge Question #2
const someIfthescr = bowlingScores.some((element)=>{
  return element< 150
});

//challenge Question 3

//Is every a event number
const isEvenNumber = bowlingScores.every((element)=>{
  return element  % 2 == 0;
  
});
console.log("include",doesInclude)
console.log("some",someIfthescr);
//challenge Question #3
console.log("every even(n)",isEvenNumber);

//Stacks and ques
//Push and pop

const seasons = ["coffee","tea","soda","water"];
console.log("before array",seasons);
seasons.push("wine");
console.log("after array",seasons);
//pop
const sports = ["springs","summer","fall","winter"];
console.log("before",sports);
sports.pop();
console.log("after",sports);

//unshift and shift ==>

//unshift() === push()
const ages = [18,33,71,29,65,62];
ages.unshift(36);
console.log("unshift",ages);
   //shift returns element removed
const holiday = ["labour day", "Christmas","Hanakkuh","Independency Day"];

const holidays = holiday.shift(el => el);
console.log("shiftedValue",holidays);
console.log("holiday",holiday);
 

//Push() pop() shift Unshift()

const foods = [
  {food:'rasberries', type:'fruit'},
  {food:'Orange', type:'fruit'},
  {food:'Broccoli', type:'vegetable'},
  {food:'quinoa', type:'grain'}
];

const blackBeans = { food:'black', type:'legume' };
const chiaSeeds = {food:'chai seeds', type:'seed' };

//challenge no 1
foods.pop();
console.log("removing last item ",foods);



//challenge no 2
foods.shift();
console.log(foods)

//challenge no 3
foods.unshift(chiaSeeds);
console.log("unshift insert beginning",foods);


//challenge no 4
foods.push(chiaSeeds);
console.log("push insert end",foods);

//Maps

const friends = [
              {firstName:'lindos', lastName:'Doe'},
              {firstName:'lindos', lastName:'Smith'},
              {firstName:'lindos', lastName:'Trekbek'}
                ];
const mappedArr = friends.map((el)=>{
  return el.firstName +" "+ el.lastName
});
console.log(mappedArr);
//filtered

const grocceries = [
  { item:'apples',type:'fruit' },
   { item:'apples',type:'pantry' },
   { item:'apples',type:'meat' },
   { item:'apples',type:'fruit' },
   { item:'apples',type:'vegetable' }
];
console.log(grocceries);
const filtered = grocceries.filter(item => item.type === "fruit");
console.log("filtered",filtered);

//reduce
const bills = [1200,29,65.93,17.32,44.67];
const billsCalc = bills.reduce((acc,currentVal)=> acc +currentVal);
console.log("calculated",billsCalc);

//flatMap()
const wordJumble = ['shampoo','conditioner','soap'];
const rey = wordJumble.flatMap((currentVal)=> currentVal.split(''));
console.log("flatenned",rey);

const movies = [
  {
    title:'Avatar',
    year:2009,
    rating:'PG-13'
  },
   {
    title:'I Am Legend',
    year:2007,
    rating:'R'
  },
   {
    title:'The Avengers',
    year:2012,
    rating:'PG-13'
  },
   {
    title:'The wolf of the wall street',
    year:2013,
    rating:'R'
  }
];


//Challenge1

const movie = movies.map((movies)=> movies.title);
console.log("titles",movie)
//Challenge2
const moviePg = movies.filter((movies)=> movies.rating === "PG-13");
console.log("pg",moviePg);
//Challenge3

const ratedRMovie = movies.reduce((acc,movie)=>{
  if(movie.rating === "R"){
    acc++
  };
  return acc;
},0);




 const names = new Map();
   names.set("SAD","reece");    
   names.set(1,"emtee");     
   names.set(2,"skop");
  // const del = names.delete(4);
  // console.log(del);
  // const output1 = names.size;
//   // console.log(output1);
// console.log("did my element with the key 0 get deleted?",names.delete(0));
// console.log("did my element with the key 0 get deleted?",names.delete(6));  
//accessing key in Map types

const namesKey = names.keys();
const firstKey = namesKey.next().value;

const namesIterated = names.values();
const secondValue = namesIterated.next().value;

console.log("first key",firstKey);
console.log("second key",secondValue);
 //entries
const namesEntries = names.entries();
namesEntries.next();
namesEntries.next();
console.log("third entries",namesEntries.next().value);

names.forEach((value,key)=>{
  // if(key === "SAD"){
  //   console.log("key is equal to",value)
  // }
  
  switch(value){    
    case "SAD" :
    console.log("lol");
  }
});