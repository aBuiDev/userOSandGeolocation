let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
function success(position) {
    let coords = position.coords;

    const button = document.querySelector('.button');
    const longitudeOutput = document.querySelector('.longitudeOutput');
    const latitudeOutput = document.querySelector('.latitudeOutput');
    const OSOutput = document.querySelector('.OSOutput');
    const appVersion = window.navigator.appVersion;

    

    button.addEventListener('click', (event) => {
        longitudeOutput.innerText = ` ${coords.longitude}`;
        latitudeOutput.innerText = ` ${coords.latitude}`;
        if (appVersion.includes("Windows")) {
            OSOutput.innerText = ` Windows`;
        } else if (appVersion.includes("Mac")) {
            OSOutput.innerText = ` Mac`;
        }
    });


    // console.log(coords);

    // console.log('Your current position is:');
    // console.log(`Latitude : ${coords.latitude}`);
    // console.log(`Longitude: ${coords.longitude}`);
    // console.log(`More or less ${coords.accuracy} meters.`);
}

function error(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);





