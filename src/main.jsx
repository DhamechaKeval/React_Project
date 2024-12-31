import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyButton2 from './lec3112/purefunc2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyButton2/>
    <MyButton2 abc={true} def="Hellooo"/>
    <MyButton2 abc={true} />
    <MyButton2 def="Good Morning..."/>
  </StrictMode>,
)
