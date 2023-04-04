//built in generics
const ngcosi:Array<any> = [""];

const promise:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("this is doneee")
    }, 1000);
});
promise.then((value)=>{

});


// custome generics


function merge<T extends object,U extends object>(a:T,b:U) {
    return Object.assign({},a,b)
}
const mergedObj = merge({Fname:"lie"},{age:0});
const mergedObj2 = merge({month:"jan"},{gay:true},);
console.log(mergedObj2.gay);


//working arround constraints1
interface Length{
    length:number
}
function countAndPrint<T extends Length>(element:T):[T,string] {
    let descr = "got no val";
    if (element.length === 1) {
        descr  = " Got 1 element";
    }

    else if(element.length > 1){
        descr = `Got ${element.length} elements`
    }
 return [element,descr]   
}
// console.log(countAndPrint([]));

//working arround constraints2 key of

function extractAndConvert<T extends Object, U extends keyof T>(
    obj:T,
    key:U
    ) {
    return "VALUE" + obj[key]
}
extractAndConvert({age:5,cart:"none",rich:false},'cart');

interface Iuser<Tstr>{
name:Tstr,
email:Tstr,
password:Tstr
}

const userInfo:Iuser<string> = {
    name:"mbatha",
    email:"mbathekile@ymail.com",
    password:"46567897863yhbcdsgd"
}
function signUpAndLogin<T extends Iuser<string>,U extends keyof Iuser<string>, P extends keyof Iuser<string>>(user:T,key1:U,key2:P){

return {email:user[key1],password:user[key2]}

}
// console.log(signUpAndLogin(userInfo,"email","password"));


class Storages<T> {
    private data:T[] = [];
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        if (this.data.indexOf(item) === -1 ) {
            return;
        }
this.data.splice(this.data.indexOf(item),1)
    }

    getItems(){
        return [...this.data]
    }
}

const store = new Storages<string>();
store.addItem("lindile yaboo");
store.addItem("luyanda potwana");
store.addItem("lizard");
store.removeItem("lindile yaboo");
console.log("jjj",store.getItems());

// utilty generic types

interface CourseGoal{
    tittle:string;
    descr:string,
    completeUntil:Date

}

function createCourseG(
    title:string,
    description:string,
    completedUntil:Date):CourseGoal {
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.tittle = title;
    courseGoal.descr = description;
    courseGoal.completeUntil = completedUntil;
    return courseGoal as CourseGoal
}
const list:Readonly<string[]> = ["mik","qw"];
// list.push("ary");
// list.pop()