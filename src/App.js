import React, { useState, useEffect, useRef } from 'react';
import useVideos from './hooks/useVideos'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos("")

    const videoListRef = useRef(null)
    const fireScrollEvent = () => {
        if (videoListRef.current)
            videoListRef.current.scrollIntoView()
    }

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail forwardedRef={videoListRef} video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo}
                            onVideoClick={fireScrollEvent}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
