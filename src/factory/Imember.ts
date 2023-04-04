export default abstract class Animal {
    abstract name:string;
     abstract age:number;
    constructor(){
    }
    feed():string{
        return `Dog name is ${this.constructor.name} and it only is ${this.age} years old`;
    }
}
