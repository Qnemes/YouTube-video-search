import axios from "axios"

// const API_KEY = 'AIzaSyAXjwbuHAovyuLtFuJIhXKUEyOKZImNANc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: process.env.API_KEY
    }
})
