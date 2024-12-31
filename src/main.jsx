import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Purefunction from './lec3112/purefunction'
// import MyComponent from './lec3112/combined'
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
    {/* <MyComponent/> */}
    <Purefunction abc={true} xyz="How" />
    <Purefunction abc={true} xyz="Are" />
    <Purefunction abc={true} xyz="You..?" />
  </StrictMode>,
)
