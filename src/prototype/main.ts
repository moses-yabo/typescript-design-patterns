//Prototyoe

interface IPrototype{
    clone():this
}
class MyClass implements IPrototype{
    field:number[];
    
    constructor(field:number[]){
        this.field = field; //any value of any type
    }
    clone(): this {
        
        // return Object.assign({},this); //shallow Copy
        return  JSON.parse(JSON.stringify(this)); //DEEP COPY
    }
}


const Object1 = new MyClass([1,2,3,4,5]);
console.log(`OBJECT 1IS : ${JSON.stringify(Object1)}`);

const Object2 = Object1.clone(); //clone

console.log(`OBJECT2 clone: ${JSON.stringify(Object2)}`);
//change the valu8e of one of the array elements in OBJECT2
Object2.field[1] = 101;
console.log(`OBJECT2 ${JSON.stringify(Object2)}`);
console.log(`OBJECT1 ${JSON.stringify(Object1)}`);

//Prototype use cases

//shallow copy copies and create a refference one level deep
// interface Iclone {
//     clone():this
// }
class myObcClass implements Iclone{
    field:string[] = []
    constructor(field:string[]){
        this.field = field;
    }
    
    clone(){
        // return Object.assign({},this)
        return JSON.parse(JSON.stringify(this))
    }

}

const myClass = new myObcClass(["mbatha","bambo","eyshe","aweza","sobonkele"]);

console.log("BEfore",JSON.stringify(myClass))
const ObjClone = myClass.clone();
console.log("BEfore Clone",JSON.stringify(ObjClone))


// A deep copy copies and create new refference for all levels
myClass.field[0] = "liveni";

console.log("AFTER",JSON.stringify(myClass));
console.log("CLONE VERSION",JSON.stringify(ObjClone));


//PROTOTYPE
interface Iclone{
    clone(mode:number):Documents
}

class Documents implements Iclone{
    name:string;
    array:[number[],number[]];
    constructor(name:string,array:[number[],number[]]){
        this.name = name;
        this.array = array
}

clone(mode:number):Documents{
let array;
if(mode === 2){
    array = JSON.parse(JSON.stringify(this.array))

}
else{
    array = Object.assign([],this.array)
}

return new Documents(this.name,array)
}
}


const ORIGINAL = new Documents("ORIGINAL",[
    [1,2,3,4,5,7],
    [3,6,9,12,15,18]
]);
console.log(ORIGINAL);

const CopyDoc = ORIGINAL.clone(1);
CopyDoc.name =  "ivovo";
CopyDoc.array[1][2] = 200;
console.log("copy",CopyDoc);
console.log("original",ORIGINAL);
