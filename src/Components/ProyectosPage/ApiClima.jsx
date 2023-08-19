import { useState } from 'react'
import './styles/ApiClima.css'
import { useTranslation } from 'react-i18next'
const ApiClima = ({setOnInterval}) => {

  const [ t ] = useTranslation('global')

  const [ondescription, setOndescription] = useState(false)

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }

  return (
    <section className='api-clima'>

          <img src="/images/api-clima.png" alt="" />

          <h2 className='api-clima-title'>Climate</h2>
          
          <div className='footer'>
          <a className='rick-morty-detalles' href="https://api-clima-phi.vercel.app/" target='_blank'>{t('translation.demo')}</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'><i className='bx bx-menu'></i></button>
          </div>

          <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
              <li className='description-icon'><img className='img-react' src="/images/icon_react.svg" alt="" /></li>
              <li className='description-icon'><img className='img-css' src="/images/icon_css.svg" alt="" /></li>
            </ul>

            <p className='description'>{t('translation.description-clima')}</p>
          </div>
          
        </section>
  )
}

export default ApiClima