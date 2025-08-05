// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaceDetail from './pages/PlaceDetail';
import Footer from './components/Footer';
import Navber from './components/Navber';



function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
