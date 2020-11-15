import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect, onVideoClick }) => {

    const renderedList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
            onClick={onVideoClick()}
        />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList