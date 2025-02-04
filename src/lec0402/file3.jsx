import { useState } from 'react';
import { CalculateInterest } from './file1';
import { Principle , Interest , Duration , Result} from './file2';

function SelectPage({ i }) {
    const Page = [Principle , Interest , Duration , Result][i];
    return <Page />;
}

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <CalculateInterest>
            <div>
                <button onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>Principle amt</button>
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>Interest</button>
                <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>Duration</button>
                <button onClick={() => setCurrentPage(3)} disabled={currentPage === 3}>Calculate Interest</button>
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
