
//  URL
const url='https://api.weatherapi.com/v1/forecast.json' 
const key='a0edc6b5af8749b3a8b164009230111'
 const val=document.querySelector('#searchval')
 console.log(val.value);

//  //  EXRESS 
//  const logo=document.querySelector('#logo')
//  const temp=document.querySelector('#tempr')
//  const far=document.querySelector('#far')
//  const locati=document.querySelector('#location')
//  const wind=document.querySelector('#wind')
//  const humanity=document.querySelector('#hum')
//  const time=document.querySelector('#time')
// const sec=document.querySelector('.sec')
// const search=document.querySelector('#search')
document.querySelector('#search').addEventListener("click",function(){
      console.log("Helllo brother");
      const pure_url=`${url}?key=${key}&q=${val.value}&days=${3}`
      fetch(pure_url).then(function(response){
         return  response.json()
      }).then(function(resp1){
        console.log(resp1);
        document.querySelector('#loc').innerHTML=`${resp1.location.name} ${resp1.location.region},${resp1.location.country}`
        document.getElementById('image').src=resp1.current.condition.icon
        document.getElementById('temperature').innerHTML=`${resp1.current.temp_c}${'&#176'}C`
        document.getElementById('contion').innerHTML=resp1.current.condition.text
        document.getElementById('datetime').innerHTML=resp1.current.last_updated
        document.getElementById('wind').innerHTML=`${resp1.current.wind_kph}${'Km/h'}`
        document.getElementById('cloud').innerHTML=`${resp1.current.cloud}${'%'}`
        document.getElementById('Humidity').innerHTML=`${resp1.current.humidity}${'%'}`
        document.getElementById('pressure').innerHTML=`${resp1.current.pressure_in}`

          //  temp.innerHTML=`${resp1.current.temp_c}${'&#176'}C`
          //  far.innerHTML=`${resp1.current.temp_f}${'&#176'}F`
          //  logo.src=resp1.current.condition.icon
          //  locati.innerHTML=`${resp1.location.name}|${resp1.location.region}`
          //  wind.innerHTML=`Wind ${resp1.current.wind_kph}kph`
          //  humanity.innerHTML=`Humidity ${resp1.current.humidity}%`
          //  time.innerHTML=`${resp1.location.localtime}`
          //  let i=0;
            resp1.forecast.forecastday.forEach(function(item){
              document.getElementById('last').innerHTML+=`<div class="childlast"><p>${item.date}</p>   <img  src="${item.day.condition.icon}" alt=""> <p>${item.day.maxtemp_c}${'&#176'}C</p> <p>${item.day.mintemp_c}${'&#176'}C</p></div>`
            });
          }); 
          document.getElementById('last').innerHTML="" 
          }).catch(function(e){
            console.log(e);
          })
     