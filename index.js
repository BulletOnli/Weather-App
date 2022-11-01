import inputCity from "./components/app.js"

document.getElementById('search').addEventListener('click', () => {
    inputCity()
    input.value = ''
    document.querySelector('.gridContainer').style.display = 'grid'
})

manilaWeather()
async function manilaWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=af2d62810fab0531012423f0fd639cdc`)
        if (!response.ok) throw new Error(err)
        const data = await response.json()

        const { feels_like, humidity, temp, pressure } = data.main
        const wind = data.wind.speed
        const cityName = data.name
        const country = data.sys.country

        const getCelsius = Math.ceil(temp - 273.15)
        const getFahren = Math.ceil((data.main.temp - 273.15) * (9/5) + 32)
        const feelsLike = Math.ceil(feels_like - 273.15)
        
        document.querySelector('.city').textContent = `${cityName}`
        document.querySelector('.country').textContent = country
        document.querySelector('.celsius').textContent = `${getCelsius}°C`
        document.querySelector('.fahren').textContent = `${getFahren}°F`
        document.querySelector('.feels').textContent = `${feelsLike}°C`
        document.querySelector('.humidity').textContent = `${humidity}%`
        document.querySelector('.wind').textContent = `${wind} km/h`
        document.querySelector('.pressure').textContent = `${pressure} hPa`

        console.log(data)
    } catch (err) {
        document.querySelector('.city').textContent = `Error`
        document.querySelector('.celsius').textContent = ''
        document.querySelector('.fahren').textContent = ''

        document.querySelector('.gridContainer').style.display = 'none'
    }
}