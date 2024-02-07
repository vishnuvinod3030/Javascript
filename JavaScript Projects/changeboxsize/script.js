let interval;
function start(){
    interval=setInterval(getRandomSizes,500)
}


function getRandomSizes(){
    
    // console.log(height);
    let boxes = document.querySelectorAll(".box")
    for(let b of boxes){
        let height=Math.floor(Math.random()*100)+50
        b.style.height =`${height}px`;
    }
}

function stop(){
clearInterval(interval)
}