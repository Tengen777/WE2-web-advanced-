"user strict"
let color = {
    nR: 0,
    nG: 0,
    nB: 0,
    
    showColor: function() {
        console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
    },
    
    setColor: function(r, g, b) {
       
     if (r === invullen || g === invullen || b === invullen) {
            console.log("Alle waarden moeten aanwezig zijn.");
            return;
           
             }

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
                console.log("Geen enkele waarde mag groter zijn dan 255 of kleiner dan 0.");
                return;
             }

    this.nR = r;
    this.nG = g;
    this.nB = b;
    console.log("Succes");

};

"user strict"
let color = {
    nR: 0,
    nG: 0,
    nB: 0,
    
    showColor: function() {
        console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
    },
    
    setColor: function(r, g, b) {
       
     if (r === invullen || g === invullen || b === invullen) {
            console.log("Alle waarden moeten aanwezig zijn.");
            return;
           
             }

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
                console.log("Geen enkele waarde mag groter zijn dan 255 of kleiner dan 0.");
                return;
             }

    this.nR = r;
    this.nG = g;
    this.nB = b;
    console.log("Succes");

};

color.setColor(12, 34, 56);
color.showColor();
color.setColor(255, 124, 56);
color.showColor(); 
color.setColor(255, 0, 100);
color.showColor(); 