import axios from 'axios';

let token;

if (localStorage.getItem('authentication_key')) {
  token = localStorage.getItem('authentication_key');
}

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: token,
    "access-control-allow-origin": "*",
  },
});


/**
 * authentication APi
 */
export const authAxios = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    Authorization: token,
    "access-control-allow-origin": "*",
    // "Content-Type": "json" 
  }
})


/**
 * CLOUDYNARY UPLOAD  
 */

 export const cloudyUpload = axios.create({
   baseURL: 'https://api.cloudinary.com/v1_1/camveni/image',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
   }
 })

/**
 * online auth https://keetela-auth.herokuapp.com/api
 * online shop https://keetela-shop.herokuapp.com/api
 */