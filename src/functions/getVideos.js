import axios from 'axios'
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = async (event, context, callback) => {
    const { REACT_APP_API_KEY } = process.env
    const part = 'snippet'
    const type = 'video'
    const maxResults = 10

    const url = `https://www.googleapis.com/youtube/v3/search?part=${part}&type=${type}&maxResults=${maxResults}&key=${REACT_APP_API_KEY}`

    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }
    const getVideos = async () => {
        const response = await axios.get(url)
        const data = response.data.results

        send(data)
    }
    getVideos()
};
