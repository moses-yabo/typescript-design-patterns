import { Trips } from "./trip";
import { Trip } from "./trip.interface";

export class LocalTrip extends Trips{

    constructor(private _Username:string, private _destination:string,private _departure:string , _numberOfPassengers:number,public _ocassion:string ){
        super()
        this.userName = _Username;
        this.departure = _departure;
        this.destination = _destination;
        this.noOfPassengers = _numberOfPassengers;
        this.occassion = _ocassion
        this.bookaTrip();



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