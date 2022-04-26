import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=4ACCzXTEyfhX0nRDwKy6m9AoRmwj1Zet6BhzEEO7',
  timeout: 8000
})
