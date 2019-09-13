import axios from 'axios';
const KEY = '';  // Please insert yours google youtube api key 

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})
