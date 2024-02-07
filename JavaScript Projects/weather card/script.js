
function displayWeather(data){
    let currentDate=new Date()
    let date=currentDate.getDate()
    let month=currentDate.toLocaleString("default",{month:`long`})
    let day=currentDate.getFullYear()

    let htmlData=`
    <div class="card">
        <div class="container">
          <div class="cloud front">
            <span class="left-front"></span>
            <span class="right-front"></span>
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <span class="left-back"></span>
            <span class="right-back"></span>
          </div>
        </div>
      
        <div class="card-header">
          <span><br>${data.name}</span>
          <span>${date}-${month}-${day}</span>
        </div>
      
        <span class="temp">${data.main.temp}</span>
      
        <div class="temp-scale">
          <span>Celcius</span>
          <div>
          <input type="text" placeholder="enter the place" id="box">
          <button type="submit" onclick="fetchdetails()">Fetch</button>
          
          </div>
        </div>
      </div>
     
`
document.querySelector("#result").innerHTML=htmlData
}
// displayWeather()
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=thrissur&appid=8f9164d0bb1a347b51a7d0e25e247b6c").then(res=>res.json()).then(data=>displayWeather(data))

function fetchdetails(){
  let city=box.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`).then(res=>res.json()).then(data=>displayWeather(data))

}