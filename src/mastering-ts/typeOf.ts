import { Combinable,ICars } from "./intersection";

//type gaurds beginner level = Typeof type guard
function awe(params:Combinable) {
    if (typeof params === "string") {
        console.log("Str",params);
    }else if (typeof params === "number") {
        console.log("NMBR",params);
        
    }
    return params;
};

//type gaurds
const cars:ICars = {
    model:"BMW 3 series",
    realesed:2012,
    year: 2021

} 
function printCarModel(cars:ICars) {
   
    if ("model" in cars) {
        console.log(cars.model);
        
    }
     if ("year" in cars) {
        console.log(cars.year);
        
    }
     if ("realesed" in cars) {
        console.log(cars.realesed);
        
    }
}
printCarModel(cars);


//type gaurds = Instanceof type guard
class Car {
    drive(){
        console.log("DRIVING.....");
        
    }
}
class Toyota extends Car {
    drive(){
        console.log("DRIVING... toyota");
        
    }
    parking(){
        console.log(" we are slowly parking our way to the field ");
        
    }
}
class Rover extends Car {
    drive(): void {
        console.log("DRIVE...rover");
        
    }
    parking(){
        console.log(" we are slowly parking our way to the bank ");
        
    }
}

type Vehicle = Car | Rover | Toyota;

function makeSound(car: Vehicle): void {
  if (car instanceof Toyota) {
    const toyota = new Toyota();
    toyota.drive();
    toyota.parking();
  } else if (car instanceof Rover) {
    const rov = new Rover();
    rov.drive();
    rov.parking();
  } else {
    console.log('Unknown caR');
  }
}

const toyota = new Toyota();
const rover = new Rover();

makeSound(toyota); 
makeSound(rover); 
function isString(input: unknown): input is string {
    return typeof input === 'string';
  }
  

  //Type predicate: An example of using a type predicate function to check if a variable is of a certain type
  function capitalize(input: string | string[]): string | string[] {
    if (isString(input)) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    } else {
      return input.map((str) => capitalize(str) as string);
    }
  }
  
  console.log(capitalize('hello world')); // outputs: "Hello world"
  console.log(capitalize(['hello', 'world'])); // outputs: ["Hello", "World"]
  
  // Discrimaneted unio types;

  interface Web{
    type:'dynamic';
    learningCurve:string;
    popular:boolean;
  }
  interface Backend{
    type:'static';
    learningCurve:string;
    popular:boolean;
  }
  interface Analysis{
    type:'dynamic' | 'static';
    learningCurve:string;
    popular:boolean;
  }


  type Language = Web | Backend | Analysis;

  function whichLang(languages:Language) {
    let learningCurve;
 
    switch (languages.type) {
        case 'static':
            learningCurve = languages.learningCurve = "hard";
            break;
        case 'dynamic':
            learningCurve = languages.learningCurve =  "here and there";
        default:
            break;
    }

    console.log("the learning curve",learningCurve);
    
  }

  whichLang({type:"static",learningCurve:"",popular:true})