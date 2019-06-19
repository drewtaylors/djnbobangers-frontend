import React from 'react'
import Header from './Header'

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="home-portal">
                <div className="content-container">
                    <div>
                        <p>HomePage</p>
                        <input type="text" placeholder="Enter a room number" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage