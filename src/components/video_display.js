import React from 'react'

const VideoDisplay = ({ video }) => {
  if (!video) { return <div>Loading...</div> }

  const { videoId } = video.id
  const url = `https://www.youtube.com/embed/${videoId}`

  return(
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
          className="embed-responsive-item" 
          src={ url } />
      </div>
      <div className="details pt-3" style="border: 1px solid #333">
        <div>{ video.snippet.title }</div>
        <div> { video.snippet.description }</div>
      </div>
    </div>
  )
}

export default VideoDisplay
