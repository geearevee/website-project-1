function func(){
   let startGame = document.querySelector('#startCount');
   startGame.setAttribute('disabled', '');
   startGame.style.border = "3px red solid";
   let i = 4; 
   let interval= setInterval(function(){
       console.log("running internal", i);
       let element = document.getElementById("timer");
       console.log(element);
       i--;
       element.textContent = i;
       console.log(i);
       if(i === 0){
           clearInterval(interval);
           document.getElementById("timer").innerHTML = "";
           startGame.removeAttribute('disabled')
           startGame.style.border = "none";
        }
    },1000)
}



