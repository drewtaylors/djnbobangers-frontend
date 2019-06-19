import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from '../App'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RoomPage from '../components/RoomPage'
import NotFoundPage from '../components/NotFoundPage'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/room" component={RoomPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter