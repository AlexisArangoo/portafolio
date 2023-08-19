import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProyectosPage from './pages/ProyectosPage'
import CertificadosPage from './pages/CertificadosPage'
import Dark from './Components/shared/Dark'
import NavBar from './Components/shared/NavBar'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <div className='body'>
      
      <NavBar />
      
      <Dark />
      
      <div className='container-pages'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='proyects' element={<ProyectosPage />} />
          <Route path='certificates' element={<CertificadosPage />} />
          <Route path='about-me' element={<AboutMe />} />
        </Routes>
      </div>


      
    </div>
  )
}

export default App
