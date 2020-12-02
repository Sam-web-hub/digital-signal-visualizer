function uniPolarNRZ(c,BINARY,HEIGHT,WIDTH) {
    c.beginPath();
    c.lineWidth = 2
    c.setLineDash([0, 0])
    c.strokeStyle='red';
    c.moveTo(50, (HEIGHT / 2 ))
    for (let i = 50,j=0; j <BINARY.length; i += 50,j++) 
    {
        
        if(BINARY.charAt(j) == 1){
            
            c.lineTo(i, (HEIGHT / 2 )-50);
            c.lineTo(i+50,(HEIGHT / 2 )-50);
            
        }
        else{
            c.lineTo(i,(HEIGHT / 2 ));
            c.lineTo(i+50,(HEIGHT / 2 ))
        }

    }
    c.stroke();
    c.closePath();
}

function NRZI(c,BINARY,HEIGHT,WIDTH) {
    let inverse = true;
    let currentlvl = HEIGHT/2;
    c.beginPath();
    c.lineWidth = 2
    c.setLineDash([0, 0])
    c.strokeStyle='red';
    c.moveTo(50, (HEIGHT / 2 ))

    for (let i = 50,j=0; j <BINARY.length; i += 50,j++) 
    {
        
        if(BINARY.charAt(j) == 1 && inverse){
            
            c.lineTo(i, (HEIGHT / 2 )-50);
            c.lineTo(i+50,(HEIGHT / 2 )-50);
            inverse =false;
            currentlvl = (HEIGHT / 2 )-50
            
        }
        else if(BINARY.charAt(j) == 1 && !inverse){
            c.lineTo(i, (HEIGHT / 2 )+50);
            c.lineTo(i+50,(HEIGHT / 2 )+50);
            inverse = true;
            currentlvl = (HEIGHT / 2 )+50;
        }
        else{
            c.lineTo(i+50,currentlvl);
        }
        

    }
    c.stroke();
    c.closePath();
}

module.exports = { uniPolarNRZ , NRZI }
  