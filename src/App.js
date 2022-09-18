import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './components/Page';


function App() {

    return (
        <>
            <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/home" element={<Page />} />
                    <Route path="/:value" element={<Page />} />
                    <Route path="/:value/:textColor/:backGroundColor" element={<Page />} />
                </Routes>
            </div>
            </BrowserRouter>
        </>
    );
}

export default App;
