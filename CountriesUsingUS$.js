/*
    Print the country which use US Dollars as currency. 
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
    let countriesUsingUSD = data.filter((item)=>{
        return item['currencies'][0]['code'] === 'USD';
    })

    console.log("Countries which are using USD as their currency are as follows.: ");
    for(let i in countriesUsingUSD){
        let subObject = countriesUsingUSD[i];
        let countriesArray = [];
        for(let values of Object.values(subObject)){
            countriesArray.push(values);
        }
    console.log(countriesArray[0]);
    }
}