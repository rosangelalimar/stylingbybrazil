import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Frisor from './pages/Frisor';
import Keratin from './pages/Keratin';
import OgonBryn from './pages/OgonBryn';
import Vaxning from './pages/Vaxning';
import Laser from './pages/Laser';
import Behandlingar from './pages/Behandlingar';
import Priser from './pages/Priser';
import TeamMemberPage from './pages/TeamMemberPage';
import ScrollToTop from './components/ScrollToTop';
import Slingor from './pages/Slingor';
import Fargning from './pages/Fargning';
import Kroppsbehandling from './pages/Kroppsbehandling';
import Ansiktsbehandling from './pages/Ansiktsbehandling';
import Fettreducering from './pages/Fettreducering';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frisor" element={<Frisor />} />
        <Route path="/slingor" element={<Slingor />} />
        <Route path="/fargning" element={<Fargning />} />
        <Route path="/keratin" element={<Keratin />} />
        <Route path="/ogon-bryn" element={<OgonBryn />} />
        <Route path="/vaxning" element={<Vaxning />} />
        <Route path="/laser" element={<Laser />} />
        <Route path="/behandlingar" element={<Behandlingar />} />
        <Route path="/kroppsbehandling" element={<Kroppsbehandling />} />
        <Route path="/ansiktsbehandling" element={<Ansiktsbehandling />} />
        <Route path="/fettreducering" element={<Fettreducering />} />
        <Route path="/priser" element={<Priser />} />
        <Route path="/team/:slug" element={<TeamMemberPage />} />
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;