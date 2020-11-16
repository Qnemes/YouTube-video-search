import axios from 'axios'
import { useState, useEffect } from 'react'

const useVideos = defaultSearchInput => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchInput)
    }, [defaultSearchInput])

    const search = async input => {
        const url = `/.netlify/functions/getVideos`
        const response = await axios.get(url, {
            params: {
                q: 'input'
            }
        })
        setVideos(response.data.items)
    }
    return [videos, search]
}

export default useVideos
