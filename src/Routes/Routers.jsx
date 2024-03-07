
import {Navigate,Routes,Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import MyBookingsPage from '../pages/MyBookingsPage/MyBookingsPage';
import Services from '../pages/ServicesPage/ServicesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import TeamPage from '../pages/TeamPage/Teampage';





function Routers() {
  return (
     <>
     <Routes>
      <Route path='/' element = {<Navigate  to="/login"/>}/>
      <Route path = '/login' element={<LoginPage/>} />
      <Route path = '/home' element={<HomePage/>} />
      <Route path = '/home:id' element={<HomePage/>} />
      <Route path = '/mybookings' element={<MyBookingsPage/>} />
      <Route path = '/about' element={<AboutPage/>} />
      <Route path = '/services' element={<Services/>} />
      <Route path = '/OurTeam' element={<TeamPage/>} />
     </Routes>

     
     </>
  );
}

export default Routers;
