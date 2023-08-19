import { useState } from 'react'
import './styles/RickMorty.css'
const RickMorty = ({setOnInterval}) => {

  const [ondescription, setOndescription] = useState(false)

  const handleTwoFuction = () => { 
    setOnInterval(false)
    setOndescription(!ondescription)
   }
  return (
    <section className='rick-morty'>

          <img src="/images/rick-morty.gif" alt="" />
          <div className='footer'>
          <a className='rick-morty-detalles' href="https://rick-and-morty-lyart-phi.vercel.app/" target='_blank'>See Demo</a>
          <button onClick={handleTwoFuction} className='rick-morty-enlace'>{ondescription ? 'X' : <i className='bx bx-menu'></i>}</button>
          </div>

          <div className={`container-description ${ondescription ? 'ondescription' : ''}`}>
            <ul className='description-list-icon'>
              <li className='description-icon'><img className='img-react' src="/images/icon_react.svg" alt="" /></li>
              <li className='description-icon'><img className='img-css' src="/images/icon_css.svg" alt="" /></li>
            </ul>
            <p className='description'>This page contains the residents of the Ryck and Morty series, in this we can search for them with the ID of their locality or with the name of their locality, this page was developed with React and Css, all the cards are functional and this is the total description of their respective resident.</p>
          </div>
          
    </section>
  )
}

export default RickMorty