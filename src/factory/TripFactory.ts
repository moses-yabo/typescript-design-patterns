
import { Trips } from "./trip";
import { TripTypes,Trip } from "./trip.interface";
import { QuanterDeliver } from "./enums";
import { LocalTrip } from "./localtrip";
import {NationalTrip } from "./nationaltrip";

class TripFactory {
    static getTrips(trip:QuanterDeliver):TripTypes{
        try{
            switch(trip){
                case  QuanterDeliver.LOCAL_TRIP:
                    const localTrip = new LocalTrip("Lindile","Site B Khayelitsha","Cape town",2,"Work")
                    return {
                        departure: localTrip.departure,
                        destination:localTrip.destination,
                        driverName:localTrip.userName,
                        noOfPassengers:localTrip.noOfPassengers,
                        occassion:localTrip.occassion,
                        userName:localTrip.userName
                    };
                    case QuanterDeliver.NATIONAL_COURIER:
                 const nationalTrip = new NationalTrip("Ayanda Yabo","Eastern Cape","Funeral","Zimbabwe")
                    return {
                        departure: nationalTrip.departure,
                        destination:nationalTrip.destination,
                        driverName:nationalTrip.userName,
                        noOfPassengers:nationalTrip.noOfPassengers,
                        occassion:nationalTrip.occassion,
                        userName:nationalTrip.userName
                    }?? undefined;
                    default:
                    throw Error("no Trip like that is available")
            }
        }catch(error){
        console.log(error)
    }
    
    return {
        departure: new Trips().departure,
        destination: new Trips().destination,
        driverName:new  Trips().userName,
        noOfPassengers:new Trips().noOfPassengers,
        occassion: new Trips().occassion,
        userName: new Trips().userName
    }
    
    }
    
}
const tripProduct = TripFactory.getTrips(QuanterDeliver.NATIONAL_COURIER);
console.log(tripProduct)
// Rentals Factory
type Rental<T,N> = {
driverName:T;
duration:T,
fleetNo:T,
trailerSize:T,
numberOfItems:N
}
interface IRentals<T,N>{
    userName:T;
    duration:T;
    registrationNo:T;
    occassion:T;
    noOfItems:N;
    rentAtrailer:(rentObject:Rental<string,number>)=> Rental<string,number>
}

class Rentals implements IRentals<string,number>{
    userName:string = "";
    duration:string = "";
    noOfItems:number = 0;
    occassion:string = "";
    registrationNo:string = "";
    rentAtrailer():Rental<string,number>{
        return {
            driverName:"",
            duration:"",
            fleetNo:"",
            numberOfItems:0,
            trailerSize:""
        }
    }
}

class LocalRentals extends Rentals{
    userName:string = "";
    duration:string = "";
    noOfItems:number = 0;
    occassion:string = "";
    registrationNo:string = "";
    rentAtrailer():Rental<string,number>{
        return {
            driverName:"",
            duration:"",
            fleetNo:"",
            numberOfItems:0,
            trailerSize:""
        }
    }
}
class NationalRentals extends Rentals{
    userName:string = "";
    duration:string = "";
    noOfItems:number = 0;
    occassion:string = "";
    registrationNo:string = "";
    rentAtrailer():Rental<string,number>{
        return {
            driverName:"",
            duration:"",
            fleetNo:"",
            numberOfItems:0,
            trailerSize:""
        }
    }
}





// Couriers Factory
type Courier<T,N> = {
userName:T;
dropOffPoint:T,
pickUpPoint:T,
fleetNo:T,
numberOfItems:N
}

interface ICourier<T,N>{
userName:T;
fleetNo:T;
numberOfItems:N;
dropOffPoint:T;
pickupPoint:T;
courierProduct:()=>Courier<string,number>
}


class Couriers implements ICourier<string,number>{
userName = "";
fleetNo ="";
numberOfItems = 0;
dropOffPoint = "";
pickupPoint = "";
courierProduct():Courier<string,number>{
    return {
        userName:"",
        dropOffPoint:"",
        fleetNo:"",
        pickUpPoint:"",
        numberOfItems:0
    }
}


}