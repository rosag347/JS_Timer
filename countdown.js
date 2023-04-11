// Count Down
function countDown(time) {
    let timer = setInterval(function(){
        time--;
        if (time <= 0) {
            clearInterval(timer);
            console.log("Done!");
        }
        else {
            console.log(time);
        }
    }, 1000)
}


// Random Game

function randomGame() {
    let num;
    let times = 0;
    let timer = setInterval(function(){
        num = Math.random();
        times++
        if(num >.75){
            clearInterval(timer);
            console.log("It took " + times + " try/tries")
        }
    }, 1000)
}
