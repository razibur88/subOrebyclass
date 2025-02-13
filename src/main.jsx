import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store.js"
import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextApi>
      <Provider store={store}>
        <App />
      </Provider>
    </ContextApi>
  ,
)
