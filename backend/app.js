const axiosRequest = require('axios');
const url = 'https://catfact.ninja/fact';
const errorUrl = 'https://httpstat.us/404';

// axiosRequest
//     .get(errorUrl)
//     .then((response, error) => {
//         if(response){
//             console.log(response.data)
//         } else {
//             console.log("error", error);
//         }
//     })

async function getActivity(){
    try {
        let response = await axiosRequest.get(errorUrl);
        console.log('You could ', response.data)
        
    } catch(error) {
        console.error(error);
        
    }
}

getActivity();

console.log('Do this ASAP');