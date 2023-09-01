const apikey="53270a4bce9cf64af39dc31fa26c4d13";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkweather(city){
    const response=await fetch(apiurl +city+ `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
    var data=await response.json();
    console.log(data);
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
     document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed+"Km/h";


    //updating the image according to weather
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png";
    }



     document.querySelector(".weather").style.display="block";

}
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


