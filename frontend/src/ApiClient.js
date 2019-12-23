import axios from 'axios';
const baseUrl = 'https://localhost/4000';




class ApiClient {
     getUserCredentials = (data)=>{
         console.log(data);
         axios.post(`${baseUrl}/api/user/signup`, {
         method: 'POST',
         body: JSON.stringify({
                      data
         })
     });
     }
     
     logIn = (data) => {
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