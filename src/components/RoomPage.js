import React from 'react'
import Header from './Header'
import SongQueue from './SongQueue'

const RoomPage = () => {
    return (
        <div >
            <Header />
            <div className="content-container">
                <h1>RoomPage</h1>
                <iframe 
                    className="video-player"
                    title="roomPlayer"
                    src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" 
                    frameborder="0" 
                    allow="autoplay; encrypted-media" 
                    allowfullscreen="true"
                >
                </iframe>
                <input type="text" placeholder="Enter a URL" />
                <button>Submit</button>
                <SongQueue />
            </div>
        </div>
    )
}

export default RoomPage