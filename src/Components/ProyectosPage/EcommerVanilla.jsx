import { useState } from 'react'
import './styles/EcommerVanilla.css'
import { useTranslation } from 'react-i18next'

const EcommerVanilla = ({setOnInterval}) => {

  const [ t ] = useTranslation('global')

  const [ondescription, setOndescription] = useState(false)

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }

  return (
    <section className="ecommervanilla">
        <img className='ecommervanilla-img' src="/images/academlo.png" alt="" />
        <h2 className='api-clima-title'>Ecommerce Vanilla</h2>
        <div className='footer'>
          <a className='rick-morty-detalles' href="https://nimble-pudding-e9e451.netlify.app/" target='_blank'>{t('translation.demo')}</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'><i className='bx bx-menu'></i></button>
        </div>

        <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
              <li className='description-icon'><img className='img-html' src="/images/icon_html.svg" alt="" /></li>
              <li className='description-icon'><img className='img-js' src="/images/icon_js.svg" alt="" /></li>
              <li className='description-icon'><img className='img-css' src="/images/icon_css.svg" alt="" /></li>
            </ul>
            
            <p className='description'>{t('translation.description-ecommerce')}</p>
        </div>
    </section>
  )
}

export default EcommerVanilla