//singleton
class Singleton{
    static instance :Singleton;
    id:number;

    constructor(id:number){
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance
        }

        Singleton.instance = this;
    }
}
const zainObj = new Singleton(101);
const zainObj2 = new Singleton(2);

console.log(zainObj === zainObj2);
console.log(zainObj.id);
console.log(zainObj2.id);





class Database {
    private static instance:Database; 
    private isConnected:boolean = false;
     private constructor() {
        
    }
    public static getInstance():Database{
        if (!Database.instance) {
            Database.instance = new Database();   
        }
        return Database.instance
    }

public connect():void{
if (this.isConnected) {
    console.log(`Already Connected `);
    return;
}

console.log("Connecting to the database ....");

}
public disconnect():void{
if (!this.isConnected) {
    console.log(`Already Connected `);
    return;
}

console.log("Connecting to the database ....");

}

}


interface Igame{
    addWinner:(position:number,name:string)=>void
} 

class Leaderboard {
    private static instance:Leaderboard;
    table:{[id:number]:string} = {};
    constructor(){
        if (Leaderboard.instance) {
            return Leaderboard.instance
        }
        Leaderboard.instance = this;
    }


    print(){
        console.log('-----------Leaderboard-----------')
        for (const key in this.table) {
            console.log(`|\t${key}\t|\t${this.table[key]}\t|`)
        }
    }


addWinner(position: number, name: string):void{
   this.table[position] = name;
}

}


class Game1 implements Igame{
    leadership:Leaderboard;
   
    constructor(){
       
        this.leadership = new Leaderboard();

    }


    

addWinner(position: number, name: string):void{
    this.leadership.addWinner(position,name)
}


}

class Game2 implements Igame{
    leadership:Leaderboard;
   
    constructor(){
       this.leadership = new Leaderboard()
    }

addWinner(position: number, name: string):void{
    this.leadership.addWinner(position,name);
}

}

class Game3 implements Igame{
    leadership:Leaderboard;
    
    constructor(){
   this.leadership = new Leaderboard()
    }

addWinner(position: number, name: string):void{
    this.leadership.addWinner(position,name);
}

}
const leadership = new Leaderboard()
leadership.print()
const GAME1 = new Game1();
const GAME2 = new Game2();
const GAME3 = new Game3();

console.log(GAME1.addWinner(1,"LWANDILE"));
GAME1.leadership.print()
console.log(GAME2.addWinner(2,"STUNNER"));
GAME2.leadership.print()
console.log(GAME3.addWinner(3,"lINDILE"));
GAME3.leadership.print()

