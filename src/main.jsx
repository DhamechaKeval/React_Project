import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyComponent from './lec3112/combined'
// import Component1 from './lect2412/component1'
// import InpuutTest from './Component3'
// import ClassTimeTable from './lect2412/class_timetable'
//import StateMerge from './lect2412/state_managment'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <InpuutTest/> */}
    {/* <ClassTimeTable/> */}
    {/* <StateMerge/> */}
    <MyComponent/>
  </StrictMode>,
)
