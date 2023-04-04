interface TODO{

    id:number,
    tittle:string,
    status:Progress,
    completedOn?:Date
}

enum  Progress{
    DONE="DONE",
    IN_PROGRESS="IN_PROGRESS",
    TODO="TODO",
}
const todoItem:TODO[] = [ 
    {
        id:1,tittle:"Learn HTML",status:Progress.DONE,completedOn:new Date("2023-03-23")
    },
    {
        id:1,tittle:"Learn HTML",status:Progress.IN_PROGRESS,completedOn:new Date("2023-03-23")
    },
    {
        id:1,tittle:"Learn HTML",status:Progress.TODO,completedOn:new Date("2023-03-23")
    },
    {
        id:1,tittle:"Learn DESIGN PATTERNS",status:Progress.IN_PROGRESS
    }
];
function addTodoItem(todo:string):TODO {
    const id:number = getNextId(todoItem);
    const newTodo:TODO = {
        id:id,
        tittle:todo,
        status:Progress.TODO


    }
    return newTodo
}

function getNextId<T extends {id:number}>(items:T[]):number {
return  items.reduce((max,x)=> x.id > max ? x.id : max,0)

}


const newTodo:TODO =  addTodoItem("buying ilegal intoxicants")