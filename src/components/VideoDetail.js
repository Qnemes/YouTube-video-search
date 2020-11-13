import React, { Fragment } from 'react'
import './videoDetail.css'

const VideoDetail = ({ video, forwardedRef }) => {
    if (!video) {
        return <div className="ui active centered inline loader spinner"></div>
    }
    return (
        <Fragment>
            <div ref={forwardedRef} className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </Fragment>
    )
}

export default VideoDetail