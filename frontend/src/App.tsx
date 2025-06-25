import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Team from './sections/Team';
import Content from './sections/Content';
import Contact from './sections/Contact';
import Admin from './Admin/Admin';
import Login from './securit/pages/Login';
import ForgotPassword from './securit/pages/ForgotPassword';
import ResetPassword from './securit/pages/ResetPassword';
import { AuthProvider } from './securit/context/AuthContext';
import ProtectedRoute from './securit/middleware/ProtectedRoute';

const AppContent: React.FC = () => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/login' && location.pathname !== '/admin' && location.pathname !== '/forgot-password' && location.pathname !== '/reset-password';

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Team />
                <Content />
                <Contact />
              </>
            }
          />
          <Route path="/content" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;