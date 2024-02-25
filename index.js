

let url = "https://api.weatherapi.com/v1/current.json?key=d21d93f947c54a61914163524242402&q=Bangladesh";
let parent = document.getElementsByClassName("parent")[0];
fetch(url).then((response)=>{
    return response.json();
})
.then((result)=>{
    console.log(result);
        let card =document.createElement('div');
         card.classList.add('card');


      
         
         card.innerHTML = `
         <div class="card">
            <img src ="${result.current.condition.icon}"/>
            <h2>${result.location.country}</h2>
            <p>${result.location.name}</p>
            
            <p>${result.current.temp_c} C (Feels Like: ${result.current.feelslike_c} C)</p>

            <p>${result.current.temp_f} F (Feels Like : ${result.current.feelslike_f} F)</p>
            <p>Humidity : ${result.current.humidity} %</p>  
            <p class="time"></p>
          
        </div>
         `;
        
         parent.appendChild(card);
})
.catch((error)=>{
    console.log(error);
})

function updateTime(){
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
}
updateTime();
setInterval(updateTime,1000);
