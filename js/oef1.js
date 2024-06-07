let color = {
    nR: 0,
    nG: 0,
    nB: 0,

    showColor: function() {
        console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
    }


    setColor: function(r, g, b) {
        this.nR = r;
        this.nG = g;
        this.nB = b;
    }
};