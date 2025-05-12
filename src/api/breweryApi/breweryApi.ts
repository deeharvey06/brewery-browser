import api from '../api'

const URLS = {
  fetchBreweryUrl: 'breweries?per_page=200',
}

export type Brewery = {
  id: string
  name: string
  country: string
  brewery_type: string
}

export const fetchBreweries = () => {
  return api.get<Brewery[]>(URLS.fetchBreweryUrl, {
    baseURL: 'https://api.openbrewerydb.org/v1/',
  })
}
