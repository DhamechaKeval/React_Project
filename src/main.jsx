import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateExample from './lec0601/hookexmp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateExample />
  </StrictMode>,
)
