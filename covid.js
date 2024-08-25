var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

// Fetch global COVID-19 data
function getWorldData() {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      let worldData = `
            <td>${data.cases}</td>
            <td>${data.deaths}</td>
            <td>${data.todayCases}</td>
        `;
      document.querySelector("#worldData").innerHTML = worldData;
    })
    .catch((error) => console.error("Error fetching world data:", error));
}

// Fetch COVID-19 data for India
function getIndiaData() {
  fetch("https://disease.sh/v3/covid-19/countries/India")
    .then((response) => response.json())
    .then((data) => {
      let indiaData = `
            <td>${data.cases}</td>
            <td>${data.deaths}</td>
            <td>${data.todayCases}</td>
        `;
      document.querySelector("#indiaData").innerHTML = indiaData;
    })
    .catch((error) => console.error("Error fetching India data:", error));
}

// Fetch COVID-19 data for Maharashtra
function getMaharashtraData() {
  fetch("https://disease.sh/v3/covid-19/nyt/states/Maharashtra")
    .then((response) => response.json())
    .then((data) => {
      let maharashtraData = `
            <td>${data[0].cases}</td>
            <td>${data[0].recovered}</td>
            <td>${data[0].todayCases}</td>
        `;
      document.querySelector("#maharashtraData").innerHTML = maharashtraData;
    })
    .catch((error) => console.error("Error fetching Maharashtra data:", error));
}

// Fetch COVID-19 data for Pune
function getPuneData() {
  fetch("https://disease.sh/v3/covid-19/jhucsse/counties/Pune")
    .then((response) => response.json())
    .then((data) => {
      let puneData = `
            <td>${data[0].stats.confirmed}</td>
            <td>${data[0].stats.recovered}</td>
            <td>${data[0].stats.confirmed}</td>
        `;
      document.querySelector("#puneData").innerHTML = puneData;
    })
    .catch((error) => console.error("Error fetching Pune data:", error));
}

// Call functions to fetch and display the data
getWorldData();
getIndiaData();
getMaharashtraData();
getPuneData();
