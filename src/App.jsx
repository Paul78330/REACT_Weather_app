// Importation des hooks et des assets nécessaires
import {useEffect, useState} from "react"
import loader from "./assets/loader.svg"
import browser from "./assets/browser.svg"
import "./App.css"
// Importation de la clé API depuis les variables d'environnement
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

// Définition du composant App
function App() {
  // Définition des états pour les données météorologiques et les erreurs
  const [weatherData, setWeatherData] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

  // Utilisation de useEffect pour effectuer la requête API au chargement du composant
  useEffect(() => {//4
    // Requête à l'API AirVisual
    fetch(`http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${APIKEY}`)
    .then(response => {
      // Vérification du statut de la réponse
      if(!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`)
      // Conversion de la réponse en JSON
      return response.json()
    })
    .then(responseData => { //5
      // Mise à jour de l'état weatherData avec les données reçues
      setWeatherData({ //5
        city: responseData.data.city,
        country: responseData.data.country,
        iconId: responseData.data.current.weather.ic,
        temperature: responseData.data.current.weather.tp,
      })
    })
    .catch(err => { //6
      // En cas d'erreur, mise à jour de l'état errorInfo
      setErrorInfo(err.message)
    })
  }, []) // Le tableau vide signifie que useEffect ne s'exécute qu'une fois, au chargement du composant

  // Rendu du composant
  return (
    <main>
      {/* Affichage d'un loader tant que les données ne sont pas chargées et qu'il n'y a pas d'erreur */}
      <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
        <img src={loader} alt="loading icon" />
      </div>

      {/* 5 - Si les données météorologiques sont disponibles, elles sont affichées */}
      {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img src={`/icons/${weatherData.iconId}.svg`} className="info-icon" alt="weather icon" />
          </div>
        </>
        )}

    {/* 7 Si une erreur est survenue et qu'il n'y a pas de données météorologiques, l'erreur est affichée */}
    {(errorInfo && !weatherData) && (
      <>
        <p className="error-information">{errorInfo}</p>
        <img src={browser} alt="error icon" />
      </>
    )}
    </main>
  )
}

// Exportation du composant App pour qu'il puisse être utilisé ailleurs
export default App