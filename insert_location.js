var loc=document.getElementById("location");
var tempicon=document.getElementById("temp-icon");
var tempvalue=document.getElementById("temp-value");
var climate=document.getElementById("climate");
var iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(searchInput.value);
  searchInput.value='';
});

const getWeather=async (city)=>
{

  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72c49fe9bfa5e8515ac8017d6c87a7aa`);
    const weatherData=await response.json();
    console.log(weatherData);
    const{name}=weatherData;
    const{feels_like}=weatherData.main;
    const{id,main}=weatherData.weather[0];
    loc.textContent=name;
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    if(id<300 && id>200){
                tempicon.src="icons/thunderstorm.png";
              }
              else if(id<500 &&id >300){
                tempicon.src="icons/drizzle.png";
              }
              else if(id<600 &&id >500){
                tempicon.src="icons/rain.png";
              }
              else if(id<700 &&id >600){
                tempicon.src="icons/snow.png";
              }
              if(id<800 &&id >700){
                tempicon.src="icons/clear.png";
              }
              else if(id>=800){
                tempicon.src="icons/clouds.png";
              }
  }
  catch{
    alert("City not found");
  }
};
