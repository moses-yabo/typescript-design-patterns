interface Itracker<TStrng,TNmbr,TBool,TDate>{
noOfStdnt: TNmbr,
destination:TStrng,
departure:TStrng,
time:TDate | TNmbr | TStrng,
arrived:TBool

}
type Destination = Omit<Itracker<string,number,boolean,Date>,"noOfStdnt"|"departure"|"time"|"arrived">;
const masambe:Destination = {
    destination:"aweya"
}

const tripsTracks = (id:number,trpInfo:Partial<Itracker<string,number,boolean,Date>>)=>{
    id = id ++;
    
    
    return {
        id,
        trpInfo
    }
}

const trpInfo = {
    noOfStdnt:27,
    departure:"Kaapstad",
    arrived:true,
    time:  new Date("2023/4/2")
}


console.log(tripsTracks.call(false,1,trpInfo));





