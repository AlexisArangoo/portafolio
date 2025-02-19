import { useEffect, useState } from 'react'
import './styles/ProyectosPage.css'
import EcommerVanilla from '../Components/ProyectosPage/EcommerVanilla'
import ApiClima from '../Components/ProyectosPage/ApiClima'
import RickMorty from '../Components/ProyectosPage/RickMorty'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Pokemon from '../Components/ProyectosPage/Pokemon'
import EcommerceReact from '../Components/ProyectosPage/EcommerceReact'


const ProyectosPage = () => {

  const [ t ] = useTranslation('global')

  const onDark = useSelector(reducer => reducer.onDark)

  const [currentPro, setCurrentPro] = useState(1)

  const [onInterval, setOnInterval] = useState(true)
  const [onCard, setOnCard] = useState(false)

  useEffect(() => {
    if (onInterval && !onCard) {
      const interval = setInterval(handleNext, 1500);

    return () => {
      clearInterval(interval);
    };
    }
  }, [currentPro, onCard]);

  const handlePrevious = () => { 
    if (currentPro > 1) {
      setCurrentPro( currentPro - 1)
    }else (
      setCurrentPro(5)
    )

    setOnInterval(false)
   }
   

  const handleNext = () => { 
    if (currentPro < 5) {
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
    <div className={`container-proyectos ${onDark ? 'ondark' : ''}`} >
  
      <div className='proyectos-par'>
        <p>{t('translation.proyectos-par')}</p>
      </div>
      <div className='cont-proyectos'>
      <article className='proyectos' onMouseEnter={() => {setOnCard(true); setOnInterval(false)}} onMouseLeave={() => {setOnCard(false); setOnInterval(true)}}>

          {currentPro === 1 ? <EcommerceReact setOnInterval={setOnInterval}/> : null}

          {currentPro === 2 ? <Pokemon setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 3 ?<RickMorty setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 4 ?<ApiClima setOnInterval={setOnInterval}/> : null}
          
          {currentPro === 5
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