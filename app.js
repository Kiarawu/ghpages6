const displayWeather = userInput =>{
    let weather ={}
       document.getElementById('searchCity').addEventListener('click', event => {
           event.preventDefault()
       fetch.(`api.openweathermap.org/data/2.5/weather?q=${document.getElementById("city name")}`)
   .then(r => r.json())
       .then(data => {
         console.log(data[0].weather)
         const (weather,main,visibility,name) = data 
         
        }) 
   }) 
   }
   