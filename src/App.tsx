import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import NotFound from './components/NotFound/NotFound';
import NftGallery from './components/NftGallery/NftGallery';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/nftbro" element={<NftGallery />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
