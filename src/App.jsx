import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Footer from './components/footer.jsx/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
