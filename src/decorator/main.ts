//Decorator

interface IComponent{
method():string
}
class Component implements IComponent {
    method(): string {
        return "COMPONENT METHOD"
    }
}
class Decorator implements IComponent {
    
    obj:IComponent;
  constructor(object:IComponent){
        this.obj = object;
  }
    method(): string {
        return `Decorated1 Method(${this.obj.method()})`
    }
}
const COMP = new Component();
console.log("original compo",COMP.method());

const Decorated = new Decorator(COMP);
console.log("decorated",Decorated.method());

const Decorated2 = new Decorator(Decorated);
console.log("decorated2",Decorated2.method());


interface Ivalue{
    value:number
}

class _Value implements Ivalue {

    value: number;
    constructor(value:number) {
        this.value = value;
    }
}

function Value(value:number):Ivalue {
    return new _Value(value);
}

class _Add implements Ivalue{
    value: number;
    constructor(val1:Ivalue|number,val2:Ivalue|number) {
        const left = Object.prototype.hasOwnProperty.call(val1,"value")
        ? (val1 as Ivalue).value
        : (val1 as number);
        const right = Object.prototype.hasOwnProperty.call(val2,"value")
        ? (val2 as Ivalue).value
        : (val2 as number);
        this.value = left + right

    }
}
function Add(val1:Ivalue|number,val2:Ivalue|number):Ivalue {
    return new _Add(val1,val2)
}
class _Sub implements Ivalue{
    value: number;
    constructor(val1:Ivalue|number,val2:Ivalue|number) {
        const left = Object.prototype.hasOwnProperty.call(val1,"value")
        ? (val1 as Ivalue).value
        : (val1 as number);
        const right = Object.prototype.hasOwnProperty.call(val2,"value")
        ? (val2 as Ivalue).value
        : (val2 as number);
        this.value = left - right

    }
}

function Sub(val1:Ivalue|number,val2:Ivalue|number):Ivalue {
    return new _Sub(val1,val2)
};

console.log(Add(Value(3),Value(2)).value)
console.log(Sub(Value(1),Value(3)).value);

function Logger(logg:string) {
    return function(constrctor:Function){
        console.log(logg);
        console.log(constrctor);
        
        
    }
}
@Logger("Logger")
class Mntu{
    name = "max";
    constructor(){
console.log("creating a person ...");

}
}


console.log(new Mntu().name);

// function withTemplate(template:string,hookId:string){
//     return function (constructor:any) {
//         const hookEl:HTMLElement = document.getElementById(hookId)! ?? "";

//         const p = new constructor();

//         if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector("h1")!.textContent = p.name;
//         }
//     }
// }
// @withTemplate('<h1> kanti </h1>','app')
// class Home {
//     name = "maxwel";
//     constructor() {
        
//     }
// }



function withTemplate(template: string, hookId: string,documentObj:Document) {
    return function<T extends { new (...args: any[]): {} }>(constructor: T) {
      console.log("rendering template....");
      
        return class extends constructor {
        constructor(...args: any[]) {
          super(...args);
          const hookEl = documentObj.getElementById(hookId)
          if (hookEl) {
            hookEl.innerHTML = template;
            const h1El = hookEl.querySelector("h1");
            if (h1El) {
              h1El.textContent = this.constructor.name;
            }
          }
        }
      };
    };
  }
  
  @withTemplate(`<h1>Hello, ${this.constructor.name}</h1>`, "app",new Document())
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const person = new Person("A li c e");
  const appEl = document.getElementById("app");
  if (appEl) {
    appEl.innerHTML += `<h1> hey ${person.name} </h2>`;
  }
  