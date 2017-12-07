// import node modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'


// components
import App from '../components/app.js'


// redcers import
import reducers from '../reducers/index.js'

// store defenition w middleware applying and Render of React dom

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render (
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>,
document.getElementById('react-application')

);
