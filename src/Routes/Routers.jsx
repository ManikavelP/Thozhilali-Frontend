import { Navigate, Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/LoginPage/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';
import MyBookingsPage from '../pages/MyBookingsPage/MyBookingsPage';
import Services from '../pages/ServicesPage/ServicesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import TeamPage from '../pages/TeamPage/Teampage';
import SignInPage from '../pages/LoginPage/SignInPage';
import MobileRegister from '../pages/LoginPage/MobileRegister';

function Routers() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home:id" element={<HomePage />} />
        <Route path="/mybookings" element={<MyBookingsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/OurTeam" element={<TeamPage />} />
        <Route
          path="/Register"
          element={isMobile ? <MobileRegister /> : <RegisterPage />}
        />
      </Routes>
    </>
  );
}

export default Routers;
