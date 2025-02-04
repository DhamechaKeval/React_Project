import { useState } from 'react';
import { CalculateInterest } from './file1';
import { Page1, Page2, Page3 ,Page4} from './file2';

function SelectPage({ i }) {
    const Page = [Page1, Page2, Page3, Page4][i];
    return <Page />;
}

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <CalculateInterest>
            <div>
                <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>Page 1</button>
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>Page 2</button>
                <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>Page 3</button>
                <button onClick={() => setCurrentPage(3)} disabled={currentPage === 3}>Page 4</button>
                <SelectPage i={currentPage} />
            </div>
        </CalculateInterest>
    );
}

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './lec0402/file3'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>,
// )
