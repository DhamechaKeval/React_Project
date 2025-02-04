import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './lec0402/file3'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
