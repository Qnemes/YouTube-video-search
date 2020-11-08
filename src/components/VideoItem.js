import React from 'react'
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui image video-item__image" key={video.id.videoId} alt={video.snippet.title} src={`${video.snippet.thumbnails.medium.url}`} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem
