import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProyectosPage from './pages/ProyectosPage'
import CertificadosPage from './pages/CertificadosPage'
import Dark from './Components/shared/Dark'
import NavBar from './Components/shared/NavBar'
import AboutMe from './pages/AboutMe'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import ContactUs from './pages/ContactUs'

function App() {

  const [isChecked, setIsChecked] = useState(false);

  const [onLanguage, setOnLanguage] = useState(false)

  const [ t, i18n ] = useTranslation('global')

  const handleLanguageEs = () => { 
    i18n.changeLanguage('es')
    setOnLanguage(true)
  }
  
  const handleLanguageEn = () => { 
    i18n.changeLanguage('en')
    setOnLanguage(false)
  }

  return (
    <div className='body'>
      
      <NavBar 
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      />
      
      <div className='container-translate'>
        {
          onLanguage
          ?<button onClick={handleLanguageEn} className='btn-translate'>EN</button>

          :<button onClick={handleLanguageEs} className='btn-translate'>ES</button>
        }
       
       <Dark />
      </div>
      
      <div onClick={() => setIsChecked(false)} className='container-pages'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='projects' element={<ProyectosPage />} />
          <Route path='certificates' element={<CertificadosPage />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='about-me' element={<AboutMe />} />
        </Routes>
      </div>


      
    </div>
  )
}

export default App
