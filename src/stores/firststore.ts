import type { GeoLocation, LatLong, SingleWeather, StoredWeather } from '@/types/types'
import { defineStore } from 'pinia'
import { useFirst } from '@/composables/useFirst'
const { getGeoLocationFromName, getWeatherFromLocation } = useFirst()

export const useFirstStore = defineStore('useFirstStore', {
  state: () => ({
    searchText: '' as string,
    geoLocation: [] as GeoLocation[],
    geoWeatherByLocation: null as null | SingleWeather,
    storedWeathers: [] as StoredWeather[],
    currentWeather: null as null | StoredWeather,
    loader: false as boolean,
    errorMessage: null as null | string,
  }),
  actions: {
    async checkWeatherList() {
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
        getGeoLocationFromName(this.searchText).then((res: any) => {
          //cb(res)
          console.log(res, 'hgff')
          this.geoLocation = res
        })
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
    async callWeatherFromLocation() {
      console.log('dadasdkjhdsj', this.geoLocation[0])
      const latlong: LatLong = {
        lat: this.geoLocation[0].lat,
        lon: this.geoLocation[0].lon,
      }
      try {
        const data = await getWeatherFromLocation(latlong)
        console.log('weather', data)

        this.storedWeathers.unshift({
          name: this.geoLocation[0].name,
          lat: this.geoLocation[0].lat,
          lon: this.geoLocation[0].lon,
          weatherDetail: data,
        })
        console.log(this.storedWeathers)
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.errorMessage = err.message
        } else {
          const stringFix = String(err)
          this.errorMessage = stringFix
        }
      } finally {
        this.searchText = ''
      }
    },
  },
  getters: {},
})
