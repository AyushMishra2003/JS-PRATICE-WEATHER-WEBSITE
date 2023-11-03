
  console.log("ayush");
//  URL
const url='https://api.weatherapi.com/v1/forecast.json' 
const key='a0edc6b5af8749b3a8b164009230111'
 const val=document.querySelector('#search')

 //  EXRESS 
 const logo=document.querySelector('#logo')
 const temp=document.querySelector('#tempr')
 const far=document.querySelector('#far')
 const locati=document.querySelector('#location')
 const wind=document.querySelector('#wind')
 const humanity=document.querySelector('#hum')
 const time=document.querySelector('#time')
const sec=document.querySelector('.sec')
const search=document.querySelector('#search')
document.querySelector('#go').addEventListener("click",function(){
      
      const pure_url=`${url}?key=${key}&q=${val.value}&days=${3}`
      fetch(pure_url).then(function(response){
         return  response.json()
      }).then(function(resp1){
        console.log(resp1);
           temp.innerHTML=`${resp1.current.temp_c}${'&#176'}C`
           far.innerHTML=`${resp1.current.temp_f}${'&#176'}F`
           logo.src=resp1.current.condition.icon
           locati.innerHTML=`${resp1.location.name}|${resp1.location.region}`
           wind.innerHTML=`Wind ${resp1.current.wind_kph}kph`
           humanity.innerHTML=`Humidity ${resp1.current.humidity}%`
           time.innerHTML=`${resp1.location.localtime}`
           let i=0;
            resp1.forecast.forecastday.forEach(function(item){
              let day=new Date()
              document.getElementById('last').innerHTML+=`<div class="childlast"><p>${day.getDate()+i}-${day.getMonth()}</p> <p>${item.day.maxtemp_c}${'&#176'}C</p> <p>${item.day.mintemp_c}${'&#176'}C</p></div>`
              i++
            });
          }).catch(function(e){
            console.log(e);
          })
       document.getElementById('last').innerHTML="" 
      })