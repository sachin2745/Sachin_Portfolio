import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position='top-center'
      toastOptions={{
        className: ' font-Josefin_Sans   tracking-wider text-md font-bold',
        color: '#FF3131',
        backgroundColor: '#1f1f1f',
      }} />

    <App />
  </React.StrictMode>,
)
