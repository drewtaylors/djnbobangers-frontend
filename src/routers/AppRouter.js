import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from '../components/Header'
import App from '../App'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact="true" />
                <Route path="/home" component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter