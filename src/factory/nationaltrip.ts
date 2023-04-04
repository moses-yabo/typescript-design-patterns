import { Trips } from "./trip";
import { Trip } from "./trip.interface";

export class NationalTrip extends Trips{

    constructor(private _Username:string, private _destination:string,public _ocassion:string,private _departure:string,  ){
        super()
        this.userName = _Username;
        this.departure = _departure;
        this.destination = _destination;
        this.bookaTrip();
         
         this.occassion = _ocassion



    }


    bookaTrip():Trip<string,number>{
        console.log(`the taxi depart in ${this._departure}`);
        console.log(`and it is going to ${this._destination}`);
        console.log(`and the drivers name is${this._Username}`);
        console.log(`and the occasion is ${this.occassion}`);
        return {
            departure: this.departure,
            destination:this.destination,
            driverName:this.userName,
            numberOfPassenger:this.noOfPassengers,
            occassion:this.occassion,
            userName:this.userName
        }
    }
}