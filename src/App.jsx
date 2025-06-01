import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/home';
import Services from './pages/Services/Services';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/services/:id/:serviceId" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;