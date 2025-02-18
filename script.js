
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=50.08804&lon=14.42076&appid=e1b17ecec5125839094d43c4b44098bb`
const divWrapper = document.querySelector('.weather__wrapper');
divWrapper.style.margin = '0 auto';
divWrapper.style.display = 'flex';
divWrapper.style.justifyContent = 'space-around';
divWrapper.style.backgroundColor = 'lightblue';
divWrapper.style.maxWidth = '400px';
divWrapper.style.border = '2px solid blue';
divWrapper.style.fontSize = '20px';
divWrapper.style.color = 'blue';

const divEl = document.querySelectorAll('div');
divEl.forEach(el => { el.style.margin = '5px'; })
const divLeft = document.querySelector('.weather__left');
const divRight = document.querySelector('.weather__right');

const divContainer = document.querySelector('.conteiner');
divContainer.style.display = 'flex';
divContainer.style.justifyContent = 'center';

const btn = document.querySelector('.weather__btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'lightblue';
btn.style.writingMode = 'vertical-rl';
btn.style.textOrientation = 'upright';
btn.style.letterSpacing = '5px';
btn.style.cursor = 'pointer';



function weather() {


    fetch(myUrl)
        .then(resp => resp.json())
        .then(weather => {
            console.log(weather);

            divLeft.innerHTML = `
        <div style="margin: 5px;">Country:${weather.sys.country}</div>
        <div style="margin: 5px;">City:${weather.name}</div>
        <div style="margin: 5px;">Sunrise:${new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</div>
        <div style="margin: 5px;">Sunset:${new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</div>
        <div style="margin: 5px;">Lon:${weather.coord.lon}</div>
        <div style="margin: 5px;">Lat:${weather.coord.lat}</div>
        `;

            divRight.innerHTML = `
        <div style="margin: 5px;">Base:${weather.base}</div>
        <div style="margin: 5px;">Description:${weather.weather[0].description}</div>
        <div style="margin: 5px;">Wind:${weather.wind.speed}</div>
        <div style="margin: 5px;">Temp:${(weather.main.temp - 273.15).toFixed(1)} °C</div>
        <div style="margin: 5px;">Feels like:${(weather.main.feels_like - 273.15).toFixed(1)} °C</div>
        <div style="margin: 5px;">Pressure:${weather.main.pressure}</div>
        
        `;

        })

}
weather();
btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = 'violet';
    btn.style.color = 'blue';

});

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = 'blue';
    btn.style.color = 'lightblue';
});


btn.addEventListener('click', () => {
    btn.textContent = 'weit...';
    weather();
    setTimeout(() => {
        btn.textContent = 'Update';
    }, 1500);
});
