//optional chaining
const fetched = {
    id:'u1',
    name:"yoyo",
    jobL:{
        title:'Ceo',
        descri:"runns the show"
    }
}
console.log(fetched?.jobL?.title);
//nullish coealescing
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

