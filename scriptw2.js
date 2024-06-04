'use strict'; 
//Oefening 5-6 //copy paste van scrip 3 voor deze oefening
//Herwerk oefening 6. Het moet mogelijk zijn om meerdere studenten aan te maken. We passen de volgende zaken aan:
//DONE 1.We maken op onze html pagina een knop met de naam: Create Student
//DONE 2.We voegen een eventlistener toe. We luisteren naar het event click. (helemaal in het begin, verkorte schrijfwijze)
//3.Wanneer we klikken op de knop, vragen we alle data op met behulp van de prompts. Net zoals in de vorige versie van de oefening.
    //Op het einde van de bevraging, maken we een nieuw studentenobject aan. Ditmaal gebruiken we een constructor functie. Het object slagen we op in een lijst van studenten. 
    //We kunnen op de knop van Create student nogmaals klikken voor het process te herstarten. 
    //We voegen een knop toe aan onze html pagina met de naam: Show students. Wanneer we hierop klikken printen we de huidige lijst met studenten af op de html pagina. 

console.log('script 3 linked!');

    document.getElementById(elementId, 'create').addEventListener('click', createStudent); //createStudent is de functie, moet uitgevourd worden wanner er geclickt wordt op 'create'


let student = {
    name: 'Default name',
    age: 29,
    degree: 'DigX',
    courses: [],
    setPersonalDetails(details){
        //The array on the right gets destructured into the variabels on the left
        //The place of the variabeles determines which data is assigned.
        //Position 0 in the array controls the name => this.name is set on first position and will take that value.
        [this.name,this.age,this.degree] = details;
    },
    addCourse(...courses){//REST operator catches all arguments and bundles them into an array
        this.courses = [...this.courses, ...courses]; //spread operator allows for easy concatenation of arrays.
    },
    showStudent(){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        console.log(txt);
    }

}

function createStudent () {  // () = geen parameters 
    let data = [];
    //Using an array, we are storing all the answers as new elements of that array.
    data.push(prompt('Name?'));
    data.push(prompt('Age?'));
    data.push(prompt('Degree?'));
    student.setPersonalDetails(data); // data doorgeven aan PersonalDetails
    
    while(true){
        let c = prompt('Course?');
        if(c){
            student.addCourse(c);
        }else{         
            break;
        }
    }

    console.log(student);

}




//example of using the rest operator: amount of arguments is not fixed


student.showStudent();