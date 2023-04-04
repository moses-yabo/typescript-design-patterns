import {  Chair,Dimension} from "./chair";

export class SmallChar extends Chair {
    width: number = 19;
    height:number = 23;
    depth:number = 43;
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

    export class XsmallChar extends Chair {
        width: number = 34;
        height:number = 54;
        depth:number = 43;
    
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