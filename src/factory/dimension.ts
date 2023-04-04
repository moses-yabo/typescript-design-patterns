import Animal from "./Imember";
//value types

let nums:number;
nums = 0;
console.log("numbers",nums); 

let strings:string;
strings = "aweya";
console.log("string",strings);

let bool:boolean;
bool = true;
console.log("Booleans",bool)


//Ref types

//Object types
type objectify = {
    name:string,
    age:number,
    displayName:(arg:string,arg2:string)=>string
}
//type system
let objectifyType:objectify;
objectifyType = {
    name:"aweya",
    age:9,
    displayName:(arg:string,arg2:string)=>{
        return "";
    }
}
console.log("object type type system",objectifyType);

interface Iface <T>{
eyes:T
nose:T
mouth:T
jaws:T

}


let interIface:Iface<number>;
interIface = {
    eyes:1,
    nose:2,
    mouth:3,
    jaws:5
    
};
console.log("Generic type On interface",interIface)

type Users<S,B,N> = {
    name:S;
    married:B;
    age:N,
    lastname:S
}

let users:Users<string,boolean,number>;
users = {
    name:"Yabo Lindile mzondi",
    married:false,
    age:34,
    lastname:"shit ibuvakala lewey ngoku"
};

console.log("Generic type on type system and took three T",users)
//Array types
type  Reuse<T,U,V,K> = {
    anyType1:U,
    anyType2:V,
    anyType3:K,
    anyType4:T,

};
let girlsIzumed:string[] = [];
//Tuple 
let thingsToLookOut:[string,boolean,number];
thingsToLookOut = ["umculo",true,0,];
console.log("emazjongwe",thingsToLookOut.entries().next())
girlsIzumed.push("Lerato","khusta","wendy","sarai","avile","nontombi","mqhosti","zandile","gugs","asiphe","lfrnd","asphe","omnye wabo");
console.log("uzu,.",girlsIzumed.length);
console.log("arrays",girlsIzumed)
//Dictionary types

let dictionary:{[key:number]:string};
dictionary = {2018:"ndalahlwa",2019:"ndakhetsha",2020:"ndagowa"};
console.log("dictionary",dictionary[2020]);
let dictionari:{[key1:string]:number};
dictionari = {"name":0,"age":25};
console.log("dic",dictionari["age"]);
//Map types
let mapGrades = new Map<string,string[]>();
mapGrades.set("endabatyayo",girlsIzumed);
console.log("ndazitya ezi",mapGrades.get("endabatyayo"));
//Sets types
let izishumaneSets = new Set<string>();
izishumaneSets.add(girlsIzumed[girlsIzumed.length -4]);
console.log("Othina",izishumaneSets.entries().next());
//Records types




// // ... your code goes here and it should take the denoms and amounts and turn them into coin object and sum the amounts with the same denom ...
// type COIN = {
//     denom: string,
//     amount: number
//   }
  
//     const inputObj = {
//         denom:["uixo","uixo","uixo","uixo"],
//         amount: ["1200000","1200000","1200000","1200000"]
//   };
  
//   function generateCoins(denoms: string[], amounts: string[]): COIN[] {
//     const coinMap: Record<string, number> = {};
//     // Create a map of denominations and their total amounts
//     for (let i = 0; i < denoms.length; i++) {
//       const denom = denoms[i];
//       const amount = parseInt(amounts[i]);
//       if (coinMap[denom]) {
//         coinMap[denom] += amount;
//       } else {
//         coinMap[denom] = amount;
//       }
//     }
//     // Convert the map into an array of coin objects
//     const coins: COIN[] = [];
//     for (const [denom, amount] of Object.entries(coinMap)) {
//       coins.push({ denom, amount });
      
      
//     }
//     console.log(coins);
//     return coins;
//   }
  
// generateCoins(inputObj.denom,inputObj.amount);
 
 
 
 //sets
const sets:Set<string> =  new Set();
sets.add("nja");
sets.add("nkukhu");
sets.add("gusha");
sets.add("nkomo");
sets.add("nja");
interface Iuser{
     
    lName:string;
    idNo:number;
    age:number;
    introduce:(arg:string)=>string;
}
console.log(sets.size);
class User implements Iuser{
    private name:string = "";
    lName:string = "";
    idNo:number = 0;
     age:number = 0;
    constructor(private _name:string,private _lName:string,private _idNo:number,private _age:number){
        _name = this.name;
        _lName = this.lName;
        _age = this.age;
        _idNo = this.idNo;
    }
    introduce(arg:string){
        return `hello ${arg}`
    }
}

const superModel = new User("bantu","ntsara",20,980235284080,);
console.log("model",superModel.introduce("RICKY"));

interface Iumdoda<TStr,TNmbr,TBool,Tray>{
    name:TStr;
    age:TNmbr;
    dating:TBool;
    occupation:TStr;
    quetions?:(arg:Tray)=> Iumdoda<string,number,boolean,string[]>

}
class Umdoda implements Iumdoda<string,number,boolean,string[]>{
name:string = "";
age = 0;
dating = false;
occupation = ""
constructor(){

}
quetions(arg:string[]){
    arg.push(this.name,this.occupation);
    console.log(arg);

    return {
        name:this.name,
        age:this.age,
        dating:this.dating,
        occupation:this.occupation

    }
}
}

const Umdodaqha = new Umdoda();
Umdodaqha.name = "okati";
Umdodaqha.age = 19;
Umdodaqha.dating = true;
Umdodaqha.occupation = "yaspANA INJA";
Umdodaqha.quetions(["WHY KUFUNEKA KUJOLWE","KUM AYENZI SENSE ","KODWAA NOKO NDISE GRND","WHY ? WHY ?"])


// Abstract
class Amajita {
    private name: string = "";
    private place: string = "";
    private gayOrstraight: string = "";
    constructor(_name: string, _place: string, _gayOrstraight: string) {
        this.name = _name;
        this.place = _place;
        this.gayOrstraight = _gayOrstraight;
    }
    revealYourSelf(): string {
        
        return `igama likababa ngu ${this.name}  ubaba usuka e ${this.place}  ubaba udla ngaliphi icala ${this.gayOrstraight}`;
    }
}


class Asegugx extends Amajita{
 
    constructor(private _name:string,private _place:string, private _gayOrStraight:string){
        super(_name,_place,_gayOrStraight)
      

    }
    revealYourSelf():string{
     
        
        return `igama ngu :${this._name} wase ${this._place}  man ndingumntu ojola ne ${this._gayOrStraight}`
    }
}
class AseKhaltsha  extends Amajita{
constructor(private _name:string,private _place:string,private _gayOrStraight:string){
super(_name,_place, _gayOrStraight)
}

revealYourSelf():string{
return  `awe mdoda mna ndingu ${this._name} wase ${this._place} ${this._gayOrStraight}`
}
}


const gugs = new Asegugx("diplaza","Gugulethu","gay");
gugs.revealYourSelf();
console.log(gugs);
const Khaltsha = new AseKhaltsha("ndumiso ","Site B","yhuu ndiyncanywa kanye intsule mna");
Khaltsha.revealYourSelf();

console.log(Khaltsha);
//ABSTRACT CLASSSES 2


class Dog extends Animal{
    name:string;
    age:number;
    constructor( private _name:string, public _age:number){
        super();
        this.age = _age;
        this.name = this._name;
    }
    feed():string{
        return `name of this mf is ${this._name} and he is ${this._age} years old`;
    }
}

const injayam = new Dog("champion",7);
console.log("injayam,",injayam)
//Access modifiers
let enums = {
BOOK_TAXI_LOCAL : "BOOK_TAXI_LOCAL_PASSENGER_TRIP",
BOOK_TAXI_LOCAL_COURIER : "BOOK_TAXI_LOCAL_PASSENGER_COURIER",
BOOK_TAXI_LONG_DISTANCE : "BOOK_TAXI_LONG_DISTANCE_PASSENGER_TRIP",
BOOK_TAXI_LONG_COURIER : "BOOK_TAXI_LONG_DISTANCE_PASSENGER_COURIER",
} as const;


//Static members

class Members{
   static named:string ="injayakho";
 constructor(){}
    static method(){}

}

class AgesCalc {
    static currentYear:number = 2023;
    userYear:number = 0;
    name:string =  "";


    constructor( _userYear:number,_name:string) {
        this.userYear = _userYear;
        this.name = _name;
    }
    zithin(name:string,currYear:number){
        console.log(`${name} ${this.userYear - currYear } years old`)
    }
}

const ages = new AgesCalc(1982,"neliswa");
const age = new AgesCalc(1984,"Khululwa");
const ageD = new AgesCalc(1984,"Litha");

ages.zithin(ages.name,AgesCalc.currentYear);
age.zithin(age.name,AgesCalc.currentYear);
ageD.zithin(ageD.name,AgesCalc.currentYear);
console.log(ages);
console.log(age);
console.log(ageD);
// console.log(Date.now().toLocaleString(""));
