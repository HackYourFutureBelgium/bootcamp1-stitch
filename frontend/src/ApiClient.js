import axios from 'axios';
const baseUrl = 'https://localhost/4000';




class ApiClient {
     getUserCredentials = (data)=>{
         axios.post(`${baseUrl}/api/user/signup`, {
         body: JSON.stringify({
                      data
         })
     });
     }
     
     logIn = (data) => {
         console.log('logging in')
         axios.post(`${baseUrl}/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                         data
            })
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
     };
}
 
export default ApiClient;