const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");
const resultBox = document.querySelector("#result-box");

searchButton.addEventListener(
    "click",
    async () => {
        const cityName = cityInput.value;
        if (cityName != "") {
            resultBox.innerHTML = `
            <div class="spinner-border mx-auto text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            `
            cityInput.value = ""
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`);
            const data = await response.json();
            console.log(data);
            if (data.cod == "404") {
                resultBox.innerHTML = `
                    <h4> City not found! </h4>
                `;
                cityInput.value = cityName;
            } else if (data.cod == "200") {
                resultBox.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${cityName}</h5>
                    <p class="card-text">Temperature: ${data.main.temp} °C</p>
                    <p class="card-text">Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p class="card-text">Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                    <div class="d-flex justify-content-center align-items-center">
                    <h5> ${data.weather[0].main} </h5>
                    <img width="100" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                    <div>
                </div>
             `
            } else {
                resultBox.innerHTML = `
                <h4> Internal server error! </h4>
            `;
            }

        } else {
            cityInput.focus();
        }
    }
)
