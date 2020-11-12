import React, { useRef } from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const videoElRef = useRef(null)
    const fireScrollEvent = () => videoElRef.current.scrollIntoView()

    const renderedList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
            refProp={videoElRef}
            onVideoItemClick={fireScrollEvent} />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList