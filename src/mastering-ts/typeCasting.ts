import { ErrorContainer } from "./indexedProps";
// const userInput =<HTMLInputElement> document.getElementById("user-input")!;
// const userInput =document.getElementById("user-input") as HTMLInputElement ;
const userInput = document.getElementById("user-input");
if (!userInput) {
    (userInput! as HTMLInputElement).value = "hi there";    
}else{
ErrorContainer.showErrorMsg("no err")
}
    
