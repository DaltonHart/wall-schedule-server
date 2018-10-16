console.log('Sanity. I has it.')

let toWorkApi = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=dubl&key=MW9S-E7SL-26DU-VV8V&json=y`
let toHomeApi = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=mont&key=MW9S-E7SL-26DU-VV8V&json=y`


const bartSucc = (res) => {
    let station = res.root.station[0]
    let departures = station.etd[0].estimate
    $('#departwork').empty()
    $('#bartwork').empty()
    console.log(station)
    console.log(departures)
    $('#bartwork').text(`${station.name} to ${station.etd[0].destination}`)
    departures.forEach(departure => {
        $('#departwork').append(`<li>Arriving in : ${departure.minutes}</li>`)
    });
 }

 const homeSucc = (res) => {
    let station = res.root.station[0]
    let departures = station.etd[3].estimate
    $('#departhome').empty()
    $('#barthome').empty()
    console.log(station)
    console.log(departures)
    $('#barthome').text(`${station.name} to ${station.etd[3].destination}`)
    departures.forEach(departure => {
        $('#departhome').append(`<li>Arriving in : ${departure.minutes}</li>`)
    });
 }

const errorLog = (err,err2,err3) =>{
    console.log(err2);
}

setInterval(() => { 
     getStation();
  }  , 60000 );

const getStation = () => {
    $.ajax({
        method: 'GET',
        url: toWorkApi,
        success: bartSucc,
        error: errorLog
     });

     $.ajax({
        method: 'GET',
        url: toHomeApi,
        success: homeSucc,
        error: errorLog
     });
}

getStation();