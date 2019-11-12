const baseUrl = 'https://randomuser.me/api/';
const init = {
    headers:{
        'Content-Type': 'application/json'
    },
    mode: 'cors',
};

class ApiClient {
     getUser =  async (data) => {
        console.log('history api')
        const response= await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {"Accept": "application/json"},
            mode: 'cors',
        });
        return response.json();    
    };
}
 
export default ApiClient;