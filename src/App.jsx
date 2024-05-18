import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';

function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'login'} element={<Auth />} />
        <Route path={'register'} element={<Auth register />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
