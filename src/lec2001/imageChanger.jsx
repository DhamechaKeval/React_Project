//3. implementation image change with the help of useeffects.
//   create a list of 4 images and change images at interval of 4 seconds

import * as react from "react";

function ImageChange(){
    const [image, setImage] = react.useState("1.jpg");
    let initial=0;
    let interval;
    react.useEffect(()=>{
        const imaList = ["1.jpg","2.jpg","3.jpg","4.jpg"]
        interval = setInterval(()=>{
            setImage(imaList[initial % imaList.length])
            initial++;
        },4000);
    },[]);
            return(
                <div>
                    <img width="270px" height="400px" src={"../../public/image/"+image} alt="Image"/>
                    <p>Change every 4 seconds</p>
                    <button onClick={() =>clearInterval(interval)}>Stop</button>
                    </div>
            
            );
    }
export default ImageChange;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ImageChange from './lec2001/imageChanger'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ImageChange />
//   </StrictMode>,
// )
