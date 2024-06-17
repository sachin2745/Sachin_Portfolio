import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position='top-center'
      toastOptions={{
        className: ' font-Josefin_Sans text-black tracking-wider text-md font-normal',
       
      }} />

    <App />
  </React.StrictMode>,
)
