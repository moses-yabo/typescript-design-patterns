interface zain{
    glass:ContactName<string>;
    eyes?:string;
    loadshedd:string;
}
type BirthDate = Date | string | number;
interface dev {
birthDate:BirthDate
glass:ContactName<string>;
eyes?:string;
loadshedd:string;
}
const lola:dev = {
    glass:"yes",
    loadshedd:"yebo",
    birthDate: new Date("20-03-2023")
} 

type ContactName <T> = T;
type Developers =  dev & zain;

const g = {
    glass:"",
    eyes:"str",
    loadshedd:""
}
function clone<T,T2 extends T>(params:T):T2 {
    
    return Object.assign({},params) as T2
}
const ZAINE:zain = {
    glass:"",
    loadshedd:"",
    eyes:"red"
}
const aka =  clone<zain, dev>(ZAINE);
function getBirthDate(contact:dev){
if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate)
} else if(typeof contact.birthDate === "number"){
    return new Date(contact.birthDate)
}
else{
    return contact.birthDate
}
}

