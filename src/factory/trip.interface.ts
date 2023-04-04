export type Trip<T,N> = {
    userName:T;
    driverName:T;
    occassion:T,
    departure:T,
    destination:T,
    numberOfPassenger:N
    };
    
     export interface ITrip<T,N>{
        userName:T;
        departure:T;
        destination:T;
        occassion:T;
        noOfPassengers:N
        bookaTrip:()=> Trip<string,number> | undefined
    };

    export interface ILocalTrip{
        passengerName?:string;
        destination?:string;
        noOfPassengers?:number;
        occassion?:string
    };

    export interface INationalTrip{
        userName:string;
        driverName:string
        departure:string;
        passengerName?:string;
        destination?:string;
        noOfPassengers?:number;
        occassion?:string
    };
    export interface TripTypes extends ILocalTrip, INationalTrip{};
