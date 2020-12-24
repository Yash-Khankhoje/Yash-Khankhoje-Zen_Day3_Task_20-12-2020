/*
    Get all the countries with population of less than 2 lacs using Filter function
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
    let lessPopulatedCountries = data.filter((item)=>{
        return item.population <= 200000;
    })

    console.log("Countries having population less than 200k are as follows.: ");
    for(let i in lessPopulatedCountries){
        let subObject = lessPopulatedCountries[i];
        let countriesArray = [];
        for(let values of Object.values(subObject)){
            countriesArray.push(values);
        }
    console.log(countriesArray[0]);
    }
}