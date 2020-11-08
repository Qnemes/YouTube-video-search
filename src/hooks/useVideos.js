import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

const useVideos = ({ defaultSearchInput }) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchInput)
    }, [defaultSearchInput])

    const search = async input => {
        const response = await youtube.get('/search', {
            params: {
                q: input
            }
        })
        setVideos(response.data.items)
    }
    return [videos, search]
}

export default useVideos
