// IUser interface
interface IUser{
    name:string
}

// concrete Implementation  Implements IUser interface
class ConcreteUser implements IUser {
    name = "";
};
// concreteUserA extends base class Concrete User
class ConcreteUserA extends ConcreteUser{
    constructor() {
        super()
        this.name = " Concrete User A"
    }
}
// concreteUserB extends base class Concrete User
class ConcreteUserProductB extends ConcreteUser{
    constructor() {
        super()
        this.name = " Concrete User B"
    }
}

// concreteUserC extends base class Concrete User
class ConcreteUserProductC extends ConcreteUser{
    constructor() {
        super()
        this.name = " Concrete User C"
    }
}

// concreteUserD extends base class Concrete User

class ConcreteUserProductD extends ConcreteUser{
    constructor() {
        super()
        this.name = " Concrete User D"
    }
}

// Real  Factory  consumred by application

export class Creator {
    static createObject(someProperty:string):IUser{
        try {
            if (someProperty === "a") {
                return new ConcreteUserA();
            }else if(someProperty === "b"){
                return new ConcreteUserProductB();
            }else if(someProperty === "c"){
                return new ConcreteUserProductC();
            }
            else if(someProperty === "d"){
                return new ConcreteUserProductD();
            }
            else{
                throw new Error("No Product of such in our product list");
                
                
            }
         
        } catch (error) {
            console.log(error);
            
        }
       return new ConcreteUser();
    }
};


const users =  Creator.createObject('d');
console.log(users);
interface IProductA{
    name:string
}
class ConcreteProduct implements IProductA{
    name = '';

}
class ConcreteProductA extends ConcreteProduct{
    constructor(){
        super()
        this.name = 'igamala ndingu factory C Admin';
        this.igama();
    }
     igama(){
        console.log(this.name);
    }

}
class ConcreteProductB extends ConcreteProduct{
    constructor(){
        super()
    this.name = 'igamala ndingu factory B Agent';
    this.igama();
    }
     igama(){
        console.log(this.name);
    }

}
class ConcreteProductC extends ConcreteProduct{
    constructor(){
        super()
        this.name = 'igamala ndingu factory C i teamleader';
        this.igama()
    }
    igama(){
        
        console.log(this.name);
    }
}
class ConcreteProductD extends ConcreteProduct{
    constructor(){
        super()
        this.name = 'igamala ndingu factory D Super Admin';
        this.igama()
    }
 igama(){
        console.log(this.name);
    }
}
class ConcreteProductE extends ConcreteProduct{
    constructor(){
        super()
        this.name = 'igamala ndingu factory E i Q & A';
        this.igama()
    }
    igama(){
        console.log(this.name);
    }

}

//Abstract FACTORY VERY USEFULL
class FactoryA{
    static getObject(some_property:string):IProductA{
        some_property = some_property.toLowerCase();
        try{
            if(some_property === 'admin'){
                return new ConcreteProductA();
            }
            else if(some_property === 'agent'){
                return new ConcreteProductB();
            }
            else if(some_property === 'teamleader'){
                return new ConcreteProductC();
            }
            else if(some_property === 'superadmin'){
                return new ConcreteProductD();
            }
            else if(some_property === 'qualityassurance'){
                let a = new ConcreteProductE();
                a.name = "ndingumzo mna madoda"
                console.log(a.name)
                return this;
            }
            else {
                throw new Error('Class not found');
            }
        }catch(error){
            console.error(error)
        }
        return new ConcreteProduct()
    }
}


// Abstact Factory2
interface IProductB{
    name:string
}

class ConcreteProd implements IProductB{
name = "";
}
class ConcreteProdA extends ConcreteProd{
constructor(){
    super()
    this.name = "Factory Number 2:ConcreteProdA"
    this.chaza()
}
chaza(){
    console.log(this.name)
}
}
class ConcreteProdB extends ConcreteProd{
constructor(){
    super()
    this.name = "Factory Number 2:ConcreteProdB";
    this.chaza()
}
chaza(){
    console.log(this.name)
}
}
class ConcreteProdC extends ConcreteProd{
constructor(){
    super()
    this.name = "Factory Number 2:ConcreteProdC"
    this.chaza();
}
chaza(){
    console.log(this.name)
}
}
class ConcreteProdD extends ConcreteProd{
constructor(){
    super()
    this.name = "Factory Number 2:ConcreteProdD"
    this.chaza();
}
chaza(){
    console.log(this.name)
}
}
//Factory Abstract Factory
class FactoryB{
    static getObject(some_property:string){
        some_property =some_property.toLowerCase();
       try{
            if(some_property === 'ceo'){
                return new ConcreteProdA();
            }
            else if(some_property === 'mentalhealthproffesionals'){
                return new ConcreteProdB();
            }
            else if(some_property === 'socialworkers'){
                return new ConcreteProdC();
            }
            else if(some_property === 'sponser'){
                return new ConcreteProdD();
            }
            else if(some_property === 'youth'){
                let a = new ConcreteProd();
                a.name = "ayakha"
                console.log(a.name)
                return new ConcreteProdD();
            }
            else {
                throw new Error('Class not found');
            }
        }catch(error){
            console.error(error)
        }
        return new ConcreteProd();
    }
}
FactoryB.getObject("socialworkers");