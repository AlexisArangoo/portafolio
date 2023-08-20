import { useState } from "react";
import { useTranslation } from "react-i18next";
import './styles/Pokemon.css'

const Pokemon = ({setOnInterval}) => {
  const [t] = useTranslation("global");

  const [ondescription, setOndescription] = useState(false);

  const handleTwoFuction = () => {
    setOnInterval(false);
    setOndescription(!ondescription);
  };

  return (
    <section className="rick-morty pokemon">
      <img className="pokemon_img" src="/images/pokemon.png" alt="" />
      
      <h2 className='api-clima-title'>Ecommerce Vanilla</h2>
    
    <div className='footer'>
      <a className='rick-morty-detalles' href="https://pokemon-seven-green.vercel.app/" target='_blank'>{t('translation.demo')}</a>
      <button onClick={handleTwoFuction} className='rick-morty-enlace'><i className='bx bx-menu'></i></button>
    </div>

      <div
        className={`container-description ${
          ondescription ? "ondescription" : ""
        }`}
      >
        <ul className="description-list-icon">
          <li className="description-icon icon_react">
            <img className="img-react" src="/images/icon_react.svg" alt="" />
          </li>
          <li className="description-icon icon_css">
            <img className="img-css" src="/images/icon_css.svg" alt="" />
          </li>
        </ul>
        <p className="description">{t("translation.description-pokemon")}</p>
      </div>
    </section>
  );
};

export default Pokemon;
