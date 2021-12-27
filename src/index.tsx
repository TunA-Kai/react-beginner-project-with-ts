import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GithubProvider } from './context/context'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GithubProvider>
                <App />
            </GithubProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
