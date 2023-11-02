const url='https://api.weatherapi.com/v1/current.json'
const key='a0edc6b5af8749b3a8b164009230111'
let pure_url
const val=document.querySelector('#search')
const temp=document.querySelector('#temp')
document.querySelector('#btn').addEventListener("click",function(){
   pure_url=`${url}?key=${key}&q=${val.value}`
   fetch(pure_url).then(function(response){
       return response.json()
   }).then(function(resp1){
        temp.innerHTML=`temp is ${resp1.current.temp_c}'c`
   }).catch(function(error){
        console.log(error);
   })
})