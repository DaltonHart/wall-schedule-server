console.log('Sanity. I has it.')

let bartApi = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=dubl&key=MW9S-E7SL-26DU-VV8V&json=y`


const bartSucc = (res) => {
    let station = res.root.station[0]
    let departures = station.etd[0].estimate
    $('#depart').empty()
    $('#bart').empty()
    console.log(station)
    console.log(departures)
    $('#bart').text(`${station.name} to ${station.etd[0].destination}`)
    departures.forEach(departure => {
        $('#depart').append(`<li>${departure.minutes}</li>`)
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
        url: bartApi,
        success: bartSucc,
        error: errorLog
     });
}

getStation();