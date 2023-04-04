type ford = {
    model:string,
    year:Date | string | number
};
type BMW = {
    model:string,
    year:Date | string | number,
    realesed: Date| string | number
};
type SUV = {
    model:string,
    year:Date | string | number;
};


type Cars = BMW & ford & SUV;
interface IFord{
    model:string,
    year:Date | string | number;
};
interface IBMW {
    model:string,
    year:Date | string | number,
    realesed: Date| string | number;
};
interface ISUV  {
    model:string,
    year:Date | string | number;
};


export interface ICars extends IBMW , IFord , ISUV{};
export type Combinable = string | number;
export  type Numeric = number | boolean;

