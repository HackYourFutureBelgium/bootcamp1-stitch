const baseUrl = 'https://localhost/4000';
const init = {
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};

class ApiClient {
     getUserCredentials =  async (data) => {
        console.log('history api')
        const response= await fetch(`${baseUrl}/signup`);
        console.log(response)   
    };
}
 
export default ApiClient;