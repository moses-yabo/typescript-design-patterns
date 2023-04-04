//Adapter
interface IA{
methodA():void    
}
interface IB{
    methodB():void
}
interface IC{
    methodC():void
}

class ClassA implements IA{
    methodA(): void {
        console.log(`aweyasin A`)
    }
}

class ClassB implements IB {
    methodB(): void {
        console.log(`aweyasin B`)
    }
}

class ClassC implements IC {
    methodC(): void {
        
    }
}

class ClassAdapter  implements IA{
    private classB:ClassB
    constructor() {
        this.classB = new ClassB();
    }
    methodA(): void {
        console.log(`aweya`);
        
        this.classB.methodB()
    }
}

const clasrays = [ClassA,ClassB,ClassC];
clasrays.forEach((item)=>{
    if (item instanceof ClassB) {
        item.methodB()
    }else if(item instanceof ClassA){
        item.methodA()
    }else if(item instanceof ClassC){
        item.methodC()
    }
});

const Adapter = [new ClassA(),new ClassAdapter()];
Adapter.forEach((item)=>{
    item.methodA();
    
    
})


interface IVehicle<T,N>{
    wheels:N,
    door:N,
    model:[N,T],
    realese_year:T
    manufacture:(width:N,height:N)=> {height:N,width:N}
}

interface ITruck<T,N>{
    wheels:[N,T];
    door:N;
    model:[N,T];
    realese_year:T;

}


class Ivehicle implements IVehicle<string,number> {
wheels: number;
door:number;
model:[number,string];
realese_year:string;

    constructor(wheels:number,door:number,model:[number,string],realese_year:string) {
        this.wheels =wheels;
        this.door = door;
        this.model = model;
        this.realese_year = realese_year
    }
    manufacture(width: number, height: number):{width:number,height:number}{
        return {
            height:height as number,
            width:width as number
        }
    }
}



//combining multiol 