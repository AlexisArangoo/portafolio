import { useState } from 'react'
import './styles/EcommerVanilla.css'

const EcommerVanilla = ({setOnInterval}) => {

  const [ondescription, setOndescription] = useState(false)

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }

  return (
    <section className="ecommervanilla">
        <img src="/images/academlo.png" alt="" />
        <div className='footer'>
          <a className='rick-morty-detalles' href="https://nimble-pudding-e9e451.netlify.app/" target='_blank'>See Demo</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'><i className='bx bx-menu'></i></button>
        </div>

        <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
              <li className='description-icon'><img className='img-html' src="/images/icon_html.svg" alt="" /></li>
              <li className='description-icon'><img className='img-js' src="/images/icon_js.svg" alt="" /></li>
              <li className='description-icon'><img className='img-css' src="/images/icon_css.svg" alt="" /></li>
            </ul>
            
        </div>
    </section>
  )
}

export default EcommerVanilla