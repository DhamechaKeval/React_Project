import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageChange from './lec2001/imageChanger'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageChange />
  </StrictMode>,
)
