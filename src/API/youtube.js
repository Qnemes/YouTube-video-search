import axios from "axios"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 4,
        key: process.env.API_KEY
    }
})
