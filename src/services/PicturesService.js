import { AppState } from "../AppState.js"
import { Picture } from "../models/Picture.js"
import { api } from "./AxiosService.js"



// const params = {
//     api_key: '4ACCzXTEyfhX0nRDwKy6m9AoRmwj1Zet6BhzEEO7',
//     query: '',
// }
class PicturesService {

   async obtainPicture(){
const res = await api.get('')
console.log(res.data);
AppState.picture = res.data

   }


}

export const picturesService = new PicturesService()