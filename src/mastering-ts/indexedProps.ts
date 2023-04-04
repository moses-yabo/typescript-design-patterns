
interface IErrorContainer{
    [msg:string]:string;
}


export class ErrorContainer {
error:ErrorContainer
constructor(errorMessage:ErrorContainer){
this.error = errorMessage;
}
    static showErrorMsg(errMsg:IErrorContainer | string){
         Error(errMsg as string);
        
      
    }
}
interface Err{
    
    [prop:string]:string
}
const err:Err = {
    email:"",
    phone:""
 }