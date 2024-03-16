// Get the element with the id "date_time"

let date=document.getElementById("date_time");
// Function to get the current date and time in a specific format
function getDate(){
    let now=new Date(),
    hour=now.getHours(),
    minute=now.getMinutes();
    let days=[
        "sunday","monday","tuesday","wednesday","thursday","friday","saturday"
    ]
       // Convert hour to 12-hour format and add leading zero if less than 10
    hour=hour%12;
    if(hour<10){
        hour="0"+hour
    }
    // Add leading zero to minute if less than 10
    if(minute<10){
        minute="0"+minute;
    }
        // Get the day of the week
    let dayString=days[now.getDay()]
    return  `${dayString},${hour}:${minute}`;
}
// Set the text content of the "date_time" element to the current date and time
date.innerText=getDate();
let location1=document.querySelector(".location_name")
let saturday=document.getElementById("saturday")
let sunday=document.getElementById("sunday")
let monday=document.getElementById("monday")
let tuesday=document.getElementById("tuesday")
let wednesday=document.getElementById("wednesday")
let thursady=document.getElementById("thursday")
let friday=document.getElementById("friday")

// Fetch weather data from an API
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$%7Bcity%7D?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json").then((res)=>{
    return res.json()})
    .then((data)=>{
        location1.innerText=data.resolvedAddress

 // Call functions to display weather information
weekTemperature(data.days)   
getUVIndex(data)
getWindStatus(data)
getSunsetSunrise(data)
getHumidity(data)
getVisibility(data)
getVisibility(data)

document.querySelector(".today").addEventListener("click",()=>{
    getHoursTemperature(data.days[0].hours)
    //console.log("hi")
})

weekTemperature(data.days);
console.log(data)
    })
.catch((error)=>{
    console.log("hi")
 })

// Function to display weekly temperature
 function weekTemperature(week){
    
    let saturday=document.getElementById("saturday")
    let sunday=document.getElementById("sunday")
    let monday=document.getElementById("monday")
    let tuesday=document.getElementById("tuesday")
    let wednesday=document.getElementById("wednesday")
    let thursday=document.getElementById("thursday")
    let friday=document.getElementById("friday")
    let day=week.map((temp)=>{
     return temp.temp
 })

 // to Set text content of each day element to the corresponding temperature

 saturday.innerText=day[0]
 sunday.innerText=day[1]
 monday.innerText=day[2]
 tuesday.innerText=day[3]
 wednesday.innerText=day[4]
 thursday.innerText=day[5]
 friday.innerText=day[6] 

  // Map weather icon URLs to days of the week and set the src attribute of the corresponding image elements
 let icon=week.map((icon=>{
    let name=icon.icon
    if(name=="partly-cloudy-day"){
        return "https://i.ibb.co/PZQXH8V/27.png"
    }
    else if(name=="partly-cloudy-night"){
        return  "https://i.ibb.co/Kzkk59k/15.png"
        }
    else if(name=="rain") {
        return "https://i.ibb.co/kBd2NTS/39.png"
    } 
    else if(name=="clear-day"){
        return "https://i.ibb.co/rb4rrJL/26.png"
    } else if(name=="clear-night"){
        return "https://i.ibb.co/1nxNGHL/10.png"
    }
    else{
        return "https://i.ibb.co/PZQXH8V/27.png"
    }
 }))
 document.getElementById("day1").src=icon[0]
 document.getElementById("day2").src=icon[1]
 document.getElementById("day3").src=icon[2]
 document.getElementById("day4").src=icon[3]
 document.getElementById("day5").src=icon[4]
 document.getElementById("day6").src=icon[5]
 document.getElementById("day7").src=icon[6]
 }

 // Function to display UV index information
 function getUVIndex(data){
    let uvindex=document.getElementById("uvIndex")
    let specification=document.querySelector(".uvIndex")
     let index=data.days[0]["uvindex"]
 uvindex.innerText=index
 if(index<3){
   specification.innerText="low"
 }
 else if(index>=3 && index<=6){
    specification.innerText="moderate"
 }
 else{
    specification.innerText="high"
 }
 }
 // Function to display windstatus
 function getWindStatus(data){
    let windStatus=document.getElementById("windStatus")
    windStatus.innerText=data.days[0]["windspeed"]
    
 }
 // Function to display sunsetsunrise
 function getSunsetSunrise(data){
    let suunset=document.getElementById("sunset")
    let sunrise=document.getElementById("sunrise")
    sunrise.innerText=data.days[0]["sunrise"]
    suunset.innerText=data.days[0]["sunset"]
 }
 // Function to display humidity
 function getHumidity(data){
    let humidity=document.getElementById("humidity")
    let specification=document.querySelector(".humidity")
     let humidityLevel=data.days[0]["humidity"]
    humidity.innerText=humidityLevel
    if(humidityLevel<=60){
        specification.innerText="low"

    }else{
        specification.innerText="high"
    }

 }
 // Function to display visibility
 function getVisibility(data){
    let visibility=document.getElementById("visibility")
    let specification=document.querySelector(".visibility")
    let visibilityRange=data.days[0]["visibility"]
    visibility.innerText=visibilityRange
    if(visibilityRange<0.03){
        specification.innerText="Dense Fog"
    }
    else if(visibilityRange>=0.04 && visibilityRange<=0.16){
        specification.innerText="Moderate Fog"
    }
    else if(visibilityRange>=0.17 && visibilityRange<=0.35){
        specification.innerText="LightFog"
    }
    else if(visibilityRange>=0.36 && visibilityRange<=1.13){
        specification.innerText="very Light fog"
    }else if(visibilityRange>=1.14 && visibilityRange<=2.16){
        specification.innerText="Light Mist"
    }
    else if(visibilityRange>=2.17 && visibilityRange<=5.4){
        specification.innerText="very Light Mist"
    }
    else if(visibilityRange>=5.41 && visibilityRange<=10.8){
        specification.innerText="clear Air"
    }
    else {
        specification.innerText="very Clear Air"
    }
 }
//  function updateAirQualityStatus(airquality) {
    function getAirQuality(airquality){
    if (airquality <= 50) {
      airQualityStatus.innerText = "Good👌";
    } else if (airquality <= 100) {
      airQualityStatus.innerText = "Moderate😐";
    } else if (airquality <= 150) {
      airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
    } else if (airquality <= 200) {
      airQualityStatus.innerText = "Unhealthy😷";
    } else if (airquality <= 250) {
      airQualityStatus.innerText = "Very Unhealthy😨";
    } else {
      airQualityStatus.innerText = "Hazardous😱";
    }
  }
 function getHoursTemperature(data){
    let temp=data.map((temp)=>{
        return temp.temp
    })
    console.log(temp)
    document.querySelector("#hour1 p").innerText=temp[0]
    document.querySelector("#hour2 p").innerText=temp[1]
    document.querySelector("#hour3 p").innerText=temp[2]
    document.querySelector("#hour4 p").innerText=temp[3]
    document.querySelector("#hour5 p").innerText=temp[4]
    document.querySelector("#hour6 p").innerText=temp[5]
    document.querySelector("#hour7 p").innerText=temp[6]
    document.querySelector("#hour8 p").innerText=temp[7]
    document.querySelector("#hour9 p").innerText=temp[8]
    document.querySelector("#hour10 p").innerText=temp[9]
    document.querySelector("#hour11 p").innerText=temp[10]
    document.querySelector("#hour12 p").innerText=temp[11]
    document.querySelector("#hour13 p").innerText=temp[12]
    document.querySelector("#hour14 p").innerText=temp[13]
    document.querySelector("#hour15 p").innerText=temp[14]
    document.querySelector("#hour16 p").innerText=temp[15]
    document.querySelector("#hour17 p").innerText=temp[16]
    document.querySelector("#hour18 p").innerText=temp[17]
    document.querySelector("#hour19 p").innerText=temp[18]
    document.querySelector("#hour20 p").innerText=temp[19]
    document.querySelector("#hour21 p").innerText=temp[20]
    document.querySelector("#hour22 p").innerText=temp[21]
    document.querySelector("#hour23 p").innerText=temp[22]
    document.querySelector("#hour24 p").innerText=temp[23]
    let icon=data.map((icon=>{
        let name=icon.icon
        if(name=="partly-cloudy-day"){
            return "https://i.ibb.co/PZQXH8V/27.png"
        }
        else if(name=="partly-cloudy-night"){
            return  "https://i.ibb.co/Kzkk59k/15.png"
            }
        else if(name=="rain") {
            return "https://i.ibb.co/kBd2NTS/39.png"
        } 
        else if(name=="clear-day"){
            return "https://i.ibb.co/rb4rrJL/26.png"
        } else if(name=="clear-night"){
            return "https://i.ibb.co/1nxNGHL/10.png"
        }
        else{
            return "https://i.ibb.co/PZQXH8V/27.png"
        }
     }))
    document.querySelector("#hour1 img").src=icon[0]
    document.querySelector("#hour2 img").src=icon[1]
    document.querySelector("#hour3 img").src=icon[2]
    document.querySelector("#hour4 img").src=icon[3]
    document.querySelector("#hour5 img").src=icon[4]
    document.querySelector("#hour6 img").src=icon[5]
    document.querySelector("#hour7 img").src=icon[6]
    document.querySelector("#hour8 img").src=icon[7]
    document.querySelector("#hour9 img").src=icon[8]
    document.querySelector("#hour10 img").src=icon[9]
    document.querySelector("#hour11 img").src=icon[10]
    document.querySelector("#hour12 img").src=icon[11]
    document.querySelector("#hour13 img").src=icon[12]
    document.querySelector("#hour14 img").src=icon[13]
    document.querySelector("#hour15 img").src=icon[14]
    document.querySelector("#hour16 img").src=icon[15]
    document.querySelector("#hour17 img").src=icon[16]
    document.querySelector("#hour18 img").src=icon[17]
    document.querySelector("#hour19 img").src=icon[18]
    document.querySelector("#hour20 img").src=icon[19]
    document.querySelector("#hour21 img").src=icon[20]
    document.querySelector("#hour22 img").src=icon[21]
    document.querySelector("#hour23 img").src=icon[22]
    document.querySelector("#hour24 img").src=icon[23]
     

 }





    







