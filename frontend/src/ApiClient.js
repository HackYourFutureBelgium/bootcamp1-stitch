const baseUrl = 'https://localhost/4000';
import axios from 'axios';



class ApiClient {
     getUserCredentials = (data)=>{
         axios.post(`${baseUrl}/api/user/signup`, {
         method: 'POST',
         body: JSON.stringify({
                      data
         })
     });
     } 
}
 
export default ApiClient;