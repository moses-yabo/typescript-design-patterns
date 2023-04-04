export type Dimension<T> ={
    height:T,
    width:T,
    depth:T
    }
export interface IChair <T,N>{
    height:T,
    width:T,
    depth:T,
    getDimension():N
}

export  class Chair implements IChair<number,Dimension<number>> {
    height: number = 0;
    width:number = 0;
    depth:number = 0;
      getDimension():Dimension<number>{
        return{
            height:this.width,
            width:this.width,
            depth:this.depth
        }
    }
    }
    
