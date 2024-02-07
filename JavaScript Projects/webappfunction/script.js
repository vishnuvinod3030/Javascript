// settimeout()
// setInterval(fuction,time) 




function generateRandomnumber(){

    console.log(Math.floor(Math.random()*10))  //generate numbers in 500 millisecond
    
    
}
let Interval = setInterval(generateRandomnumber,500)

function stop(){
    clearInterval(Interval)
}
setTimeout(stop,5000)