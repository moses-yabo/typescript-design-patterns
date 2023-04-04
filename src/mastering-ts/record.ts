const tripRecords:Record<string,number|number[]|string|string[]> = {
    nationalTripsBooked:0,
    LocalTrips:0,
    rentedTrailers:[0,0],


};

tripRecords["0"] = 3;
console.log(tripRecords["rentedTrailers"]);
enum Roles {
ADMIN = "SYSTEM_ADMIN",
DRIVER = "TAXI_DRIVER",
OWNER = "TAXI_OWNER",
PASSENGER = "TAXI_PASSENGER",
TRAILER_OWNER = "TRAILER_OWNERS"
}

type Address<T,N> ={
physical:T,
Suburb:T,
Province:T,
postalCode:N|T
}

interface IUser<Tstr,Tnum,Tbool,Taddress>{
    fName:Tstr,
    lName:Tstr,
    age:Tnum | Tstr,
    email:Tstr,
    role:Roles
    address:Taddress

}
type PostalCode = Pick<Address<string,number>,"postalCode">; 
const postalAddress:PostalCode ={
    postalCode:7784
}
const users:Record<string,IUser<string,number,boolean,Address<string,number>>[]> = {
    passengers:[{
        fName: "mqpinqnq",
        lName:"sixolile",
        age:"26",
        email:"sixo@ymail.com",
        address:{
            physical:"site b p section",
            Suburb:"khayelistha",
            Province:"western cape",
            postalCode:7784
        },
        role: Roles.PASSENGER
    }],
    admins:[{
        fName: "LINDILE",
        lName:"YABO",
        age:"25",
        email:"YABO@ymail.com",
        address:{
            physical:"site b p section",
            Suburb:"khayelistha",
            Province:"western cape",
            postalCode:"7784"
        },
        role: Roles.ADMIN
    }],
    owners:[{
        fName: "malilwane",
        lName:"mtshilibe",
        age:"56",
        email:"maliwane@ymail.com",
        address:{
            physical:"site b p section",
            Suburb:"khayelistha",
            Province:"western cape",
            postalCode:"7784"
        },
        role: Roles.OWNER
    }],
    trailerHires:[{
        fName: "Thole",
        lName:"Lamandla",
        age:"13",
        email:"sixo@ymail.com",
        address:{
            physical:"site b Y section",
            Suburb:"khayelistha",
            Province:"western cape",
            postalCode:"7784"
        },
        role: Roles.TRAILER_OWNER
    }]
}
console.log(users);