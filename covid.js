function getWorldData(){
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data =>{

        let worldData = `
        
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.NewConfirmed}</td>
       
        
        `
        document.querySelector('#worldData').innerHTML = worldData;
    })
}
getWorldData();


function getIndiaData(){
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data =>{

        let indiaData = `
        
        <td>${data.Countries[76].TotalConfirmed}</td>
        <td>${data.Countries[76].TotalDeaths}</td>
        <td>${data.Countries[76].NewConfirmed}</td>
       
        
        `
        document.querySelector('#indiaData').innerHTML = indiaData;
    })
}
getIndiaData();






































    // async function getCountryData(){
    //     var url = "https://api.covid19api.com/countries";
    //     $.get(url,function(individualCountryData){

    //         for(let noofCountries=0;noofCountries<=individualCountryData.length-1;noofCountries++)
    //         {

    //             $("#selectCountry").append("<option value = " +individualCountryData[noofCountries].Country+ ">"+individualCountryData[noofCountries].Country+"</option>")
    //         }
    //     });
    

    // }   
    // getCountryData();

// const selectElem = document.querySelector('select#select');
// function makenewoptionbox(data){
//     const title = data.title;
//     if(typeof title != "undefined"){
//         const optionBox = document.createElement('option');
//         optionBox.innerHTML = title;
//         selectElem.appendChild(optionBox);
//     }
// }

// function manipulationData(data){
//     for (eachItem in data.countryitems[0]) {
//         const singleData = data.countryItems[0][eachItem];

//         makenewoptionbox(singleData);
//     }
// }

// const fetchedData = fetch(
//     "https://api.thevirustracker.com/free-api?countryTotals=ALL"
// )
//  .then((response) => {
//     return response.json();
//  })
//  .then((data) => {
//     manipulationData(data);
//  });