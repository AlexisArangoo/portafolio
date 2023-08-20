import { useEffect, useState } from 'react'
import './styles/ProyectosPage.css'
import EcommerVanilla from '../Components/ProyectosPage/EcommerVanilla'
import ApiClima from '../Components/ProyectosPage/ApiClima'
import RickMorty from '../Components/ProyectosPage/RickMorty'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Pokemon from '../Components/ProyectosPage/Pokemon'


const ProyectosPage = () => {

  const [ t ] = useTranslation('global')

  const onDark = useSelector(reducer => reducer.onDark)

  const [currentPro, setCurrentPro] = useState(1)

  const [onInterval, setOnInterval] = useState(true)

  useEffect(() => {
    if (onInterval) {
      const interval = setInterval(handleNext, 1500);

    return () => {
      clearInterval(interval);
    };
    }
  }, [currentPro]);

  const handlePrevious = () => { 
    if (currentPro > 1) {
      setCurrentPro( currentPro - 1)
    }else (
      setCurrentPro(4)
    )

    setOnInterval(false)
   }

  const handleNext = () => { 
    if (currentPro < 4) {
      setCurrentPro(currentPro + 1)
    } else (
      setCurrentPro(1)
    )
  }

  const handleTwoFuction = () => { 
    handleNext()
    setOnInterval(false)
  }
  return (
    <div className={`container-proyectos ${onDark ? 'ondark' : ''}`}>
  
      <div className='proyectos-par'>
        <p>{t('translation.proyectos-par')}</p>
      </div>
      <div className='cont-proyectos'>
      <article className='proyectos'>

        
          {currentPro === 1 ? <Pokemon setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 2 ?<RickMorty setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 3 ?<ApiClima setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 4
            ?<EcommerVanilla 
            setOnInterval={setOnInterval}
            handlePrevious={handlePrevious}
            /> : null}
          
       

        <div className='container-btn'>
          <button onClick={handlePrevious} className='btn-right'><i className='bx bx-arrow-from-right' ></i></button>
          <button onClick={handleTwoFuction} className='btn-left'><i className='bx bx-arrow-from-left'></i></button>
        </div>
      </article>
      </div>
    </div>
  )
}

export default ProyectosPage