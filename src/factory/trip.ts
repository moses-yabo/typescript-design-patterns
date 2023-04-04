import { ITrip,Trip } from "./trip.interface";

export class Trips implements ITrip<string,number>{
    userName:string = "";
    departure:string = "";
    destination:string = "";
    occassion:string = "";
    noOfPassengers:number = 0;
    bookaTrip():Trip<string,number>{
        return {
            userName:"",
            driverName:"",
            destination:"",
            departure:"",
            numberOfPassenger:0,
            occassion:""
        }
    }

}