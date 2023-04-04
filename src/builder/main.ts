//builder pattern

type NationalTrip = {
    name:string,
    distance:string,
    time:string
}
type LocalTrip = {
    name:string,
    distance:string,
    time:string
}
type Rent = {
    name:string,
    distance:string,
    time:string
}

class Product{
    parts:string[] = [];
}
class NationalTrips {
    trips:NationalTrip[] = [];
}
class LocalTrips{
    trips:LocalTrip[] = [];
}
class Rentals{
    rents:Rent[] = [];
}

interface IBuilder{
    buildPartA():this
    buildPartB():this
    buildPartC():this
    getResults():Product
}
interface INational{
    buildPartA():this
    buildPartB():this
    buildPartC():this
    getResults():NationalTrips
}
interface ILocal{
    buildPartA():this
    buildPartB():this
    buildPartC():this
    getResults():LocalTrips
}


class Builder implements IBuilder {
    //concrete builder

    product:Product;
    constructor() {
        this.product = new Product()
    }

    buildPartA(){
        this.product.parts.push("bus the rhymes")
        return this;
    };
    
    buildPartB(){
        this.product.parts.push("lil wayne")
        return this;
    };
    
    buildPartC(){
        this.product.parts.push("izitayela")
        return this;
    };
    getResults(): Product {
        return this.product;
    }
}
class LocalTripBuilder implements ILocal {
    //concrete builder

    localTrips:LocalTrips;
    constructor() {
        this.localTrips = new LocalTrips()
    }

    buildPartA(){
        this.localTrips.trips.push({
            name:"rafeeq",
             time:"12",
             distance: "kwa ace"
        });
        return this;
    };
    
    buildPartB(){
        this.localTrips.trips.push({
            name:"Trist",
             time:"18",
             distance: "Rands"
        });
        return this;
    };
    
    buildPartC(){
        this.localTrips.trips.push({
            name:"Lindile",
             time:"12",
             distance: "Bandwith Barn"
        });
        return this;
    };
    getResults(): LocalTrips {
        return this.localTrips;
    }
}
class NationalTripBuilder implements INational {
    //concrete builder

    nationalTrips:NationalTrips;
    constructor() {
        this.nationalTrips = new NationalTrips()
    }

    buildPartA(){
        this.nationalTrips.trips.push({
            name:"Joel",
            distance:"31km",
            time:"13:30"
        })
        return this;
    };
    
    buildPartB(){
        this.nationalTrips.trips.push({
            name:"Joel",
            distance:"31km",
            time:"13:30"
        })
        return this;
    };
    
    buildPartC(){
        this.nationalTrips.trips.push({
            name:"Joel",
            distance:"31km",
            time:"13:30"
        })
        return this;
    };
    getResults(): NationalTrips {
        return this.nationalTrips;
    }
}


class Director {
   static construct() {
    return new Builder().buildPartA().buildPartB().buildPartC().getResults();        
    }
   static constructLocalTrips() {
    return new LocalTripBuilder().buildPartA().buildPartB().buildPartC().getResults();        
    }
   static constructNationalTips() {
    return new NationalTripBuilder().buildPartA().buildPartB().buildPartC().getResults();        
    }
}
const Product1 = Director.construct();
const nationalTrips = Director.constructLocalTrips();
const localTrips = Director.constructNationalTips();
console.log(Product1.parts);
console.log(nationalTrips.trips);
console.log(localTrips.trips);



type Tteacher<T,N> = {
    teachers:T[],
    grades:T[],
    studentsNumber:N[]
    }
    //BUILDER
    //PRODUCT TO BE BIULT
    class Teacher{
    teachers:string[] = [];
    grades:string[] = [];
    studentsNumber:number[] = [];
    
    }
    
    interface ITeacher{
        mathsTeacher():this
        scienceTeacher():this
        englishTeacher():this
        geographyTeacher():this
        getAllteachersInfo():Tteacher<string,number>
        
        
    }
    
    //CONCRETE BUILDER
    class Teachers implements ITeacher{
        teacher:Teacher;
        grades:Teacher;
        sudentsNumber:Teacher;
        constructor(){
            this.teacher = new Teacher();
            this.grades = new Teacher();
            this.sudentsNumber = new Teacher()
        }
        mathsTeacher(){
            this.teacher.teachers.push("mzazi");
            this.grades.grades.push("grade 7,8,9");
            this.sudentsNumber.studentsNumber.push(450);
            return this
        }
        scienceTeacher(){
            this.grades.grades.push("grade 5,6,7,8,9");
            this.sudentsNumber.studentsNumber.push(530);
            this.teacher.teachers.push("tshaka");
    
          return this;
        }
    
        englishTeacher(){
            this.teacher.teachers.push("Ms manzi");
            this.grades.grades.push("grade 7,8,9");
            this.sudentsNumber.studentsNumber.push(450);
            return this
        }
        geographyTeacher(){
             this.teacher.teachers.push("Gqobhana");
             this.grades.grades.push("grade 7,8,9");
            this.sudentsNumber.studentsNumber.push(450);
            return this
        }
        getAllteachersInfo():Tteacher<string,number>{
            return {
            grades:this.grades.grades,
            studentsNumber:this.sudentsNumber.studentsNumber,
            teachers:this.teacher.teachers
            }
    
        }
        
        }
    
        class BoardDirector{
            
            static construct(){
                const teachers= new Teachers()
                return teachers.englishTeacher().mathsTeacher().englishTeacher().scienceTeacher().geographyTeacher().getAllteachersInfo()
            }
        }
    
    const TEACHER =  BoardDirector.construct();
    
        console.log({
            teacher:TEACHER.teachers,
            students:TEACHER.studentsNumber.splice(0,2),
            grades:TEACHER.grades
        });
    
    