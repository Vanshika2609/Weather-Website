var loc=document.getElementById("location");
var tempicon=document.getElementById("temp-icon");
var tempvalue=document.getElementById("temp-value");
var climate=document.getElementById("climate");
var iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

/* FOR CURRENT LOCATION*/
window.addEventListener("load",()=>{

  var lon;
  var lat;

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      lon=position.coords.longitude;
      lat=position.coords.latitude;

        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72c49fe9bfa5e8515ac8017d6c87a7aa`
        fetch(api).then((response)=>{
          return response.json();
        })
        .then((data) =>
          {
              const{name}=data;
              const{feels_like}=data.main;
              const{id,main}=data.weather[0];

              loc.textContent=name;
              climate.textContent=main;
              tempvalue.textContent=Math.round(feels_like-273);
              console.log(data);
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
          })
}
    )}
});
