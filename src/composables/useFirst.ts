import { BASE_URL } from '@/constants/constants'
import type { allData, GeoLocation, LatLong, SingleWeather } from '@/types/types'

export function useFirst() {
  const getGeoLocationFromName = async (name: string) => {
    const url = `${BASE_URL}/geo/1.0/direct?q=${name}&limit=1&appid=463e0cb3849610ae2dd297f17b71688d`
    const response = await fetch(url)
    if (!(await response.ok)) throw new Error('getGeoLocationFromName fail')
    console.log(response)
    return response.json()
  }
  const getWeatherFromLocation = async (latong: LatLong) => {
    const url = `${BASE_URL}/data/2.5/weather?lat=${latong.lat}&lon=${latong.lon}&appid=463e0cb3849610ae2dd297f17b71688d`
    console.log(url, latong)
    const response = await fetch(url)
    if (!(await response.ok)) throw new Error('getWeatherFromLocation fail')
    return response.json()
  }
  return { getGeoLocationFromName, getWeatherFromLocation }
}
