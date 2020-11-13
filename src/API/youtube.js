import axios from "axios"

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY
    }
})
