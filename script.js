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
           document.querySelector("#game").classList.remove("hide")
        }
    },1000)
}


// javascript code goes here
var p1 = "Player1"
var p2 = "Player2"
var aer = document.getElementsByClassName('row')
var count = 0
var player1 = 0
var player2 = 0
var arrplayer1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var arrplayer2 = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function check(arr) {
    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
        return true
    }
    else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) {
        return true
    }
    else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) {
        return true
    }
    else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) {
        return true
    }
    else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) {
        return true
    }
    else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) {
        return true
    }
    else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) {
        return true
    }
    else if (arr[2] == 1 && arr[4] == 1 && arr[6] == 1) {
        return true
    }
    else {
        return false
    }
}

for (var i = 0; i < aer.length; i++) {
    aer[i].onclick = function () {
        var g = this.id
        var b = Number(g)
        if (this.getAttribute("checked") != "true") {
            this.setAttribute("checked", "true")
            count++
            if (count % 2 == 0) {
                player1++
                this.innerHTML = "X"
                arrplayer1[b - 1] = 1
                if (player1 >= 3) {
                    if (check(arrplayer1)) {
                        alert('Congratulations! ' + p2 + ' wins')
                        window.location.reload(false);
                    }
                }
            }
            else {
                player2++
                this.innerHTML = "O"
                arrplayer2[b - 1] = 1
                console.log(arrplayer2)
                if (player2 >= 3) {
                    if (check(arrplayer2)) {
                        alert('Congratulations! ' + p1 + ' wins')
                        window.location.reload(false);
                    }
                }
            }
            if (count == 9) {
                alert('Draw!')
                window.location.reload(false);
            }
        }
    }
}



