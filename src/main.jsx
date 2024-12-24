import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './lect2412/component1'
// import InpuutTest from './Component3'
import ClassTimeTable from './lect2412/class_timetable'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <InpuutTest/> */}
    <ClassTimeTable/>
  </StrictMode>,
)
