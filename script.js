
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

 const last=document.querySelector('.last')

 const  childlast=document.querySelector('childlast')
 const sec=document.querySelector('.sec')

//  EVENT LISTNER
const search=document.querySelector('#search')
document.querySelector('#go').addEventListener("click",function(){
      const pure_url=`${url}?key=${key}&q=${val.value}&days=${3}`
      fetch(pure_url).then(function(response){
         return  response.json()
      }).then(function(resp1){
        console.log(resp1);
           temp.innerHTML=`${resp1.current.temp_c}C|`
           far.innerHTML=`${resp1.current.temp_f}F`
           logo.src=resp1.current.condition.icon
           locati.innerHTML=`${resp1.location.name}|${resp1.location.region}`
           wind.innerHTML=`Wind ${resp1.current.wind_kph}kph`
           humanity.innerHTML=`Humidity ${resp1.current.humidity}%`
           time.innerHTML=`${resp1.location.localtime}`
            // for (let index = 0; index < 3; index++) {
            //     const childlast=document.createElement('div')
            //     childlast.id='lastchild'
            //    const para=document.createElement('p')
            //     para.innerHTML=resp1.forecast.forecastday[index].date;
            //    childlast.appendChild(para);
            //   const mint=document.createElement('p');
            //   mint.innerHTML=`${resp1.forecast.forecastday[index].day.mintemp_c}C`
            //   childlast.appendChild(mint)
            //   const maxt=document.createElement('p')
            //    maxt.innerHTML=`${resp1.forecast.forecastday[index].day.maxtemp_c}C`
            //   childlast.appendChild(maxt)
            //    console.log(childlast);
            //    last.appendChild(childlast) ;  
            // console.log("ayush");
            // }
            /*
            const childlast=document.createElement('div')
            childlast.id='lastchild'
            const para=document.createElement('p')
            para.innerHTML=item.date;
            childlast.appendChild(para);
            const mint=document.createElement('p');
            mint.innerHTML=`${item.day.mintemp_c}C`
            childlast.appendChild(mint)
            const maxt=document.createElement('p')
            maxt.innerHTML=`${item.day.maxtemp_c}C`
            childlast.appendChild(maxt)
            console.log(childlast);
            last.appendChild(childlast) ;  */  
      }).catch(function(error){
        console.log(error);
      })
})