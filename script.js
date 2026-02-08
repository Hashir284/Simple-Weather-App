let city
function get() {
    let city = document.getElementById('search').value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=f81d0f8072c84e4cb3553800262601&q=${city}`).then(function (response1) {
        return response1.json();
    }).then(function (response2) {
        document.getElementById("weather").className = "weather"
        console.log(response2);

        let cityName = response2.location.name;
        let countryName = response2.location.country;
        let centigrade = response2.current.temp_c;
        let wind = response2.current.wind_kph;
        let humidity = response2.current.humidity;
        let condition = response2.current.condition.text;
        let icon = response2.current.condition.icon;

        console.log("City:", cityName);
        console.log("Country:", countryName);
        console.log("Temperature:", centigrade);
        console.log("Wind:", wind);
        console.log("Humidity:", humidity);
        console.log("Condition:", condition);
        console.log("Icon:", icon);

        document.getElementById('weather').innerHTML = `
                <h2>${cityName}, ${countryName}</h2>
                <img src="${icon}" alt="${condition}">
                <p>Temperature: ${centigrade}°C</p>
                <p>Condition: ${condition}</p>
                <p>Wind: ${wind} kph</p>
                <p>Humidity: ${humidity}%</p>
            `;
    }).catch(function (err) {
            console.log('error', err);
            document.getElementById('weather').innerHTML = 'City not found!';
        });
}
