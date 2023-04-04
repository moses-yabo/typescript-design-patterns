import {  Combinable} from "./intersection";

function add(a:number,b:number,c:number):number;
function add(a:string,b:string,c:string):string;


function add(a:Combinable , b:Combinable,c:Combinable) {
    if (typeof a === "string" || typeof b === "string" || typeof c === "string") {
        return a.toString() + b.toString() + c.toString()
    }
    return a + b + c;
}
const res = add("leo","h","oook");
const awe = res.length > 0? res.slice(0,5).concat("...").split('').join("-").concat("") : res;
console.log(awe);

console.log(res.length);
