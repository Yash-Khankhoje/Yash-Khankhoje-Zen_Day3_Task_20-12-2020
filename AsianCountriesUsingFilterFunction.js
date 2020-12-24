/*
    Get all the countries from Asia continent /region using Filter function
*/

// Creating a request
var request = new XMLHttpRequest();

//Opening a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true);

//Sending the request
request.send();

//Loading the response
request.onload = function(){
    var data = JSON.parse(this.response)
    let asianCountries = data.filter((item)=>{
        return item.region === "Asia";
    })

    console.log("Asian countries are as follows.: ");
    for(let i in asianCountries){
        let subObject = asianCountries[i];
        let countriesArray = [];
        for(let values of Object.values(subObject)){
            countriesArray.push(values);
        }
    console.log(countriesArray[0]);
    }
}