import axios from 'axios';


export const getImagesService=(page,size)=>{

   return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${size}`)
}
