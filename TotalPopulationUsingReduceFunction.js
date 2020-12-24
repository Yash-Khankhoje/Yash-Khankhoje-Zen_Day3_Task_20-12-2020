/*
    Print the total population of countries using reduce function.
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
    let totalPopulation = data.reduce((sum, item)=>{
        return sum + item.population;
    },0)
    console.log("Total population of all the countries is ", totalPopulation);
}