import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = createStore({

    },
    composeEnhancers(applyMiddleware(thunk)))

    return store
}

export default configureStore