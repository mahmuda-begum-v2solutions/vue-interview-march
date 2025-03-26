import type { allData, GeoLocation, LatLong, SingleWeather, StoredWeather } from '@/types/types'
import { defineStore } from 'pinia'
import { useFirst } from '@/composables/useFirst'
const { getGeoLocationFromName, getWeatherFromLocation } = useFirst()
// import { toast } from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'

export const useFirstStore = defineStore('useFirstStore', {
  state: () => ({
    searchText: '' as string,
    geoLocation: [] as allData[],
    geoWeatherByLocation: null as null | SingleWeather,
    storedWeathers: [] as StoredWeather[],
    currentWeather: null as null | StoredWeather,
    loader: false as boolean,
    errorMessage: null as null | string,
  }),
  actions: {
    checkWeatherList() {
      this.loader = true
      const findweather = this.storedWeathers.find((item) => item.name === this.searchText)
      if (findweather) {
        this.currentWeather = findweather
        this.loader = false
      } else {
        this.loader = true
        this.callGeoLocationFromName()
      }
    },
    async callGeoLocationFromName() {
      try {
        const data = await getGeoLocationFromName(this.searchText)
        console.log(data)
        //if (data) {
        console.log('location', data)

        //if(datatosend && Object(datatosend).keys.length){

        // this.dummy()
        // this.geoWeatherByLocation(data)
        // console.log(this.geoWeatherByLocation(data[0] || null))
        // }
        this.geoLocation = data
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.errorMessage = err.message
        } else {
          const stringFix = String(err)
          this.errorMessage = stringFix
        }
      } finally {
        this.loader = false
      }
    },
    // async dummy() {
    //   console.log('here')
    // },
    async callWeatherFromLocation(data: any) {
      console.log('dadasdkjhdsj', this.geoLocation)
      // const latlong: LatLong = {
      //   lat: data.lat,
      //   lon: data.lon,
      // }
      // try {
      //   const data = await getWeatherFromLocation(latlong)
      //   console.log('weather', data)
      // } catch (err: unknown) {
      //   if (err instanceof Error) {
      //     this.errorMessage = err.message
      //   } else {
      //     const stringFix = String(err)
      //     this.errorMessage = stringFix
      //   }
      // } finally {
      //   this.searchText = ''
      // }
    },
  },
  getters: {},
})
