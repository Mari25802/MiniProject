import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrCode } from './QrCode.jsx'
// import './css/app.css'
import './css/QrCode.css'

import App from './App.jsx'
import App2 from './ht.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <App2 /> */}
    {/* <App /> */}
    < QrCode />
   
  </StrictMode>,
)
