var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
 
var c =canvas.getContext("2d");
// c.fillRect(100,100,100,100);

// var l=canvas.getContext("2d");
// l.beginPath();
// l.moveTo(200,300);
// l.lineTo(400,500)
// l.strokeStyle="red";
// l.stroke();

// for(var i=0;i<8;++i){
// var x=Math.random() * window.innerWidth;
// var y=Math.random() * window.innerWidth;
// c.beginPath();
// c.moveTo(200,y);
// c.lineTo(x,300);
// c.strokeStyle="green";
// c.stroke();
// }
 
// for (let i = 0; i < 4; i++) {
//      var x=Math.random()*innerWidth;
//      var y=Math.random()*innerHeight;
//     c.fillRect(x,y,100,100);
//     c.fillStyle="yellow"
    
// }


// for (let i = 0; i <8; i++) {
//     var x=Math.random()*innerWidth;
//     var y=Math.random()*innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle="red"
//     c.stroke()
// }
// c.fillStyle="tomato"

c.arc(400,300,30,0,Math.PI*2,false);
    c.fillStyle="red"
    c.stroke()

function anime() {
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(anime)
    var x=Math.random()*(innerWidth-0.5);
    var y=Math.random()*(innerHeight-0.5);
    var h=Math.random();
    var k=Math.random();
    // c.beginPath();
    // c.arc(x,y,30,0,Math.PI*2,false);
    // c.strokeStyle=`rgb(28,${k},70,${h})`
    // c.stroke()
    // c.beginPath();
    // c.moveTo(600,y);
    // c.lineTo(x,0)
    // c.strokeStyle=`rgb(40,${k},60,${h}`;
    // c.stroke();
    c.fillRect(x,y,5,5);
    c.fillStyle="white";
}
anime()

