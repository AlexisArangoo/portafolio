import { useEffect, useState } from "react"
import './styles/EcommerceReact.css'
import { useTranslation } from "react-i18next"

  const EcommerceReact = ({setOnInterval}) => {
  
  const [ondescription, setOndescription] = useState(false)
    
  const [ t ] = useTranslation('global')
  
  useEffect(() => {
    
  console.log(ondescription)

  }, [ondescription])

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }

  return (
    <section className="ecommervanilla ecommervanilla_react">
        <img className='ecommervanilla-img' src="/images/ecommerce_react.jpg" alt="" />
        <h2 className='api-clima-title'>Ecommerce</h2>
        <div className='footer'>
          <a className='rick-morty-detalles' href="https://ecommerce-react-amber.vercel.app/" target='_blank'>{t('translation.demo')}</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'><i className='bx bx-menu'></i></button>
        </div>

        <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
            <li className="description-icon icon_react">
            <img className="img-react" src="/images/icon_react.svg" alt="" />
          </li>
          <li className="description-icon icon_css">
            <img className="img-css" src="/images/icon_css.svg" alt="" />
          </li>
            </ul>
            
            <p className='description'>{t('translation.description-ecommerce_react')}</p>
        </div>
    </section>
  )
}

export default EcommerceReact