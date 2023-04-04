import { SmallChar,XsmallChar } from "./small-chair";
import { MediumChar } from "./medium-chair";

//Factory design pattern

class ChairFactory {
    static whatSize(size:string){
        if (size === 'MEDIUM') {
            console.log("medium");
            
            return new MediumChar().getDimension()
        }else if (size === 'SMALL') {
            console.log("small");

            return new SmallChar().getDimension()
        }else if(size === 'XSMALL'){
            console.log("xsmall");

            return new XsmallChar().getDimension()
        }
    }
}
ChairFactory.whatSize("XSMALL");
