import React from 'react'
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect, onVideoItemClick, refProp }) => {
    return (
        <div ref={refProp}
            className="item video-item"
            onClick={() => {
                onVideoSelect(video)
                onVideoItemClick()
            }}
        >
            <img className="ui image video-item__image" key={video.id.videoId}
                alt={video.snippet.title}
                src={`${video.snippet.thumbnails.medium.url}`} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div >
    )
}

export default VideoItem
