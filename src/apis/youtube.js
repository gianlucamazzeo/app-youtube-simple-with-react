import axios from 'axios';
const KEY = 'AIzaSyDFJFWImasvY8vnBbuFKUNneF6YSxlIS48';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})