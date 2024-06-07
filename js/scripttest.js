window.onload = function(){
        // window is een (script uitvoeren als de pagina geladen is)

    let obj ={
        prop1: "This is a test",
        prop2: 5,
        methode1(param){
        return param;

        }   
    }

    obj.methode1("Sasuke");

}



class Person {
    constructor(){
        this.name = "Coco";
        this.power="fire";
        this.grade= "Genin";
            this.sensei = {
                firstname:"Kakashi",
                power: "Thunder",
            }      
    };

    SayMyName(){
        return this.name;

}

}

let a = new Person(); // heeft al een naam
console.log(bb);

