var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const weatherforecast1 = document.getElementById('weather-forecast');

apik = "3045dd712ffe6e702e3245525ac7fa38"
const API_KEY = 'cbc8c0e52e5ad58fe47e98269835e538'

function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  .catch(err => alert('You entered Wrong city name'))
})


// New JS starts -----------------

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();

  timeEl.innerHTML = hour + ':' + minute;

  dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]


},1000);

var input = document.getElementById("ans");


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("fuck").click();
  }
});


function getinfo(){
    var city=document.getElementById("ans").value;
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=404876b6b74fa78626ae9ee072d36f8a')
.then(response=>response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"min").innerHTML=Number(data.list[7+(i*7)].main.temp_min)+"°C"
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"max").innerHTML=Number(data.list[7+(i*7)].main.temp_max)+"°C"
    }
    for(i=0;i<6;i++){
        document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png"
    }
    const time = new Date();
    const day = time.getDay();
    document.getElementById("day1").innerHTML=days[day]
    document.getElementById("wind").innerHTML=Number(data.list[0].wind.speed)+"m/s"
    document.getElementById("humi").innerHTML=Number(data.list[0].main.humidity)+"%"
    document.getElementById("pres").innerHTML=Number(data.list[0].main.pressure)+" inHg"
    document.getElementById("te").innerHTML=Number(data.list[0].main.temp)+"°C"
    document.getElementById("min1").innerHTML=Number(data.list[0].main.temp_min)+"°C"
    document.getElementById("max1").innerHTML=Number(data.list[0].main.temp_max)+"°C"
    document.getElementById("sex").innerHTML=city;
    document.getElementById("lelo").innerHTML=data.city.country;
})

}

fetch('https://api.openweathermap.org/data/2.5/forecast?q=delhi&units=metric&appid=404876b6b74fa78626ae9ee072d36f8a')
.then(response=>response.json())
.then(data=>{
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"min").innerHTML=Number(data.list[7+(i*7)].main.temp_min)+"°C"
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"max").innerHTML=Number(data.list[7+(i*7)].main.temp_max)+"°C"
    }
    for(i=0;i<6;i++){
        document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png"
    }
    const time = new Date();
    const day = time.getDay();
    document.getElementById("day1").innerHTML=days[day]
    document.getElementById("wind").innerHTML=Number(data.list[0].wind.speed)+"m/s"
    document.getElementById("humi").innerHTML=Number(data.list[0].main.humidity)+"%"
    document.getElementById("pres").innerHTML=Number(data.list[0].main.pressure)+" inHg"
    document.getElementById("te").innerHTML=Number(data.list[0].main.temp)+"°C"
    document.getElementById("min1").innerHTML=Number(data.list[0].main.temp_min)+"°C"
    document.getElementById("max1").innerHTML=Number(data.list[0].main.temp_max)+"°C"
})



//day
var d = new Date();
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<6; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }