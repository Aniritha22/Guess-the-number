var randomNum=Math.ceil(Math.random()*100);
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){

var guessNum=parseInt(document.getElementById('inp').value);
attempts++;

if(randomNum===guessNum){
   display("Congragulations! You won the game in "+attempts+" attempts");
}

else if(randomNum<guessNum){
   display("Too High Try a Lower Number!");
}

else{
    display("Too Low Try a Higher Number!");
}
});

function display(info){
    var a=document.getElementById('info');
    a.textContent=info;
}