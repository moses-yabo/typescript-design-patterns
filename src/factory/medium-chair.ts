import { Chair,Dimension } from "./chair";

export class MediumChar extends Chair {
    width: number = 42;
    height:number = 54;
    dept:number = 46;
     constructor() {
         super()
         
     }
     getDimension(): Dimension<number> {
         return {
             width:this.width,
             height:this.height,
             depth:this.depth
         }
     }
 }