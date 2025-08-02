import React, { useEffect, useState } from 'react'

const Weather = () => {
    const[weather,setWeather] = useState(null)
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>{
        const city = "Vijayawada"
        const apiKey = "540241a88e302f6260cae19ca1fa3305"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error("failed to fetch weather data")
        }
        return response.json()
    })
    .then(data =>{
        setWeather(data)
        setLoading(false)
    })
    .catch(err => {
        setError(err.message)
        setLoading(false)
    })
    },[])
    if(loading) return <p>Loading weather...</p>
    if(error) return <p>Error....</p>
  return (
    <div>
        <h2>Weather in {weather.name}</h2>
        <p>Temperature: {weather.main.temp}</p>
        <p>Humidity: {weather.main.humidity}</p>
        <p>Description: {weather.weather[0].descriptiom}</p>
        <p>Wind Speed: {weather.wind.speed}</p>
    </div>
  )
}

export default Weather