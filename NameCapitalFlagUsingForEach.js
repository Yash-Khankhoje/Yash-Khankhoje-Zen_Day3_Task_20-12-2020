/*
    Print the following details name, capital, flag using forEach function.
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
    let countriesData = data.forEach((item)=>{
        console.log("Country name = " + item.name + " | Capital = " + item.capital + " | Flag = " + item.flag);
    })
}