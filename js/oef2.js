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
       
        this.nR = r;
        this.nG = g;
        this.nB = b;
    }


};

color.setColor(12, 34, 56);
color.showColor(); // 
color.setColor(255, 124, 56);
color.showColor(); 
color.setColor(255, 0, 100);
color.showColor(); 