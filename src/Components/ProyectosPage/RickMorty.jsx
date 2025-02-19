import { useState } from 'react'
import './styles/RickMorty.css'
import { useTranslation } from 'react-i18next'
const RickMorty = ({setOnInterval}) => {
 
  const [ t ] = useTranslation('global')

  const [ondescription, setOndescription] = useState(false)

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }
  return (
    <section className='rick-morty'>

          <img src="/images/rick-morty.gif" alt="" />
          <div className='footer'>
          <a className='rick-morty-detalles' href="https://rick-and-morty-lyart-phi.vercel.app/" target='_blank'>{t('translation.demo')}</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'>{ondescription ? 'X' : <i className='bx bx-menu'></i>}</button>
          </div>

          <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
              <li className='description-icon icon_react'><img className='img-react' src="/images/icon_react.svg" alt="" /></li>
              <li className='description-icon icon_css'><img className='img-css' src="/images/icon_css.svg" alt="" /></li>
            </ul>
            <p className='description'>{t('translation.description-rick')}</p>
          </div>
          
    </section>
  )
}

export default RickMorty