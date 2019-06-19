import React from 'react'

const LoginPage = () => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">DJ NoBangers</h1>
                <input type="text" placeholder="Username" className="text-input" />
                <input type="password" placeholder="Password" className="text-input" />
                <button className="button button--login">Login</button>
            </div>
        </div>
    )
}

export default LoginPage