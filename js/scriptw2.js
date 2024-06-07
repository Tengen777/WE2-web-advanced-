'use strict'; 
//Oefening 5-6 
    //copy paste van scrip 3 voor deze oefening
//Herwerk oefening 6. Het moet mogelijk zijn om meerdere studenten aan te maken. We passen de volgende zaken aan:
//DONE 1.We maken op onze html pagina een knop met de naam: Create Student
//DONE 2.We voegen een eventlistener toe. We luisteren naar het event click. helemaal in het begin, verkorte schrijfwijze 
    //DONE createStudent is de functie, moet uitgevourd worden wanner er geclickt wordt op 'create'
//DONE 3.Wanneer we klikken op de knop, vragen we alle data op met behulp van de prompts. Net zoals in de vorige versie van de oefening.
    //DONE Op het einde van de bevraging, maken we een nieuw studentenobject aan. Ditmaal gebruiken we een constructor functie. Het object slagen we op in een lijst van studenten. 
    //DONE We kunnen op de knop van Create student nogmaals klikken voor het process te herstarten. 
    //DONE We voegen een knop toe aan onze html pagina met de naam: Show students. Wanneer we hierop klikken printen we de huidige lijst met studenten af op de html pagina. 

console.log('script linked!');

    document.getElementById('create').addEventListener('click', createStudent); 
    document.getElementById('show').addEventListener('click', showStudents);

let listOfStudents= [];


//constructor
function Student (name, age, degree){
    
    this.name=name;
    this.age= age; 
    this.degree= degree;
    this.courses= []; 
    this.setPersonalDetails = function (details){
        [this.name, this.age, this.degree] = details;
    }
    this.addCourse = function (...courses){
        this.courses = [...this.courses, ...courses]; 


    }
    this.showStudent = function (){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        return txt;
    }

}

function createStudent() {  
    // geen parameters 
    let data = [];
    //Using an array, we are storing all the answers as new elements of that array.
    data.push(prompt('Name?'));
    data.push(prompt('Age?'));
    data.push(prompt('Degree?'));
     
   
    let student= new Student(); // nieuw student met de waarden die daar nu zijn (kan ook leeg)
    student.setPersonalDetails(data);
    
    
    while(true){
        let c = prompt('Course?');
        if(c){
            student.addCourse(c);
        }else{         
            break;
        }
    }
// add to list of students
    listOfStudents.push(student); 
   

    console.log(listOfStudents);

}

function showStudents (){

    for(let s of listOfStudents){
        //create paragraph fill 
       let p = document.createElement ('p');
        // with content 
        p.innerHTML = s.showStudents();       
       //and add to div 
       document.getElementById('content').appendChild(p);
    }

}