import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { useSelector } from "react-redux";
import NavBarMenu from "../NavBar/NavBarMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = ({isChecked, setIsChecked}) => {

  const [ t ] = useTranslation('global')


  const onDark = useSelector(reducer => reducer.onDark)

    const email = "alexisamalfi@hotmail.com";

  const message = '¡Hola! 👋 Estoy visitando tu increíble portafolio de desarrollo web y me gustaría hablar contigo sobre tus proyectos y habilidades. ¿Podemos conversar más sobre cómo trabajas y las oportunidades de colaboración?'


  return (
    <header className={`header ${onDark ? 'ondark' : ''}`}>

      <div className="header-container-img">
        <Link to="/" className="container-img">
          <img src={`/images/logo_${onDark ? 'black' : 'white'}.png`} alt="" />
          <span>{t('translation.home')}</span>
        </Link>
        <hr className="hr" />
      </div>
      <div className="header-ul">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/proyects" className="item-link">
              <i className="bx bx-clipboard"></i>
              <h2>{t('translation.projects')}</h2>
            </Link>
          </li>
          <li className="header-item">
            <Link to="/certificates" className="item-link">
              <i className="bx bxs-graduation"></i>
              <h2>{t('translation.certificates')}</h2>
            </Link>
          </li>
          <li className="header-item">
            <div className="item-link cv">
              <i className='bx bx-archive-in'></i>
              <div className="item-link-curriculum notranslate">
                <div className="item-link-btn"><a href="https://drive.google.com/file/d/1Hx_BCott-nk_QLFOBOh375tFQFeL_i69/view?usp=drive_link" target="_blank">Es</a><a href="https://drive.google.com/file/d/1ab3cC-TSm-xnWbTgAQ0FB9VvKR6VSZ5a/view?usp=drive_link" target="_back">En</a></div>
                <div className="item-link-cv">{t('translation.curriculum')}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="acerca-de-mi">
        <i className="bx bxs-user-badge"></i>
        <div className="acerca-de-mi-menu">
          <ul className="acerca-de-mi-menu-list">
            <Link className="acerca-de-mi-menu-item" to='/about-me'><li>{t('translation.about-me')}</li></Link>
            <li className="acerca-de-mi-menu-item item-contact">
              <span className="item-contact-span">{t('translation.contact')}</span>
              <div className="header-contact">
                <a href={`mailto:${email}`}>
                  <i className="bx bxs-envelope"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/alexis-arango-798b65160/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>

                <a
                  href={`https://wa.me/3116776580?text=${encodeURIComponent(
                    message
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="bx bxl-whatsapp-square"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <NavBarMenu 
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      />
      <div className={`menu ${isChecked ? 'onmenu' : ''}`}>
        <ul className="menu-list">
          <Link to='/'><li className="menu-items">{t('translation.home')}</li></Link>
          <Link to='/proyects'><li className="menu-items">{t('translation.projects')}</li></Link>
          <Link to='/certificates'><li className="menu-items">{t('translation.certificates')}</li></Link>
          <Link to='/about-me'><li className="menu-items">{t('translation.about-me')}</li></Link>
          <li className="menu-items cv notranslate">
              <div className="item-link-btn-menu"><a href="https://drive.google.com/file/d/1Hx_BCott-nk_QLFOBOh375tFQFeL_i69/view?usp=sharing" target="_blank">Es</a><a href="https://drive.google.com/file/d/1ab3cC-TSm-xnWbTgAQ0FB9VvKR6VSZ5a/view?usp=sharing" target="_back">En</a></div>
              <div className="item-link-cv-menu">{t('translation.curriculum')}</div>
          </li>
          <li className="menu-items item-contact">
            <span className="item-contact-span">{t('translation.contact')}</span>
            <div className="header-contact">
                <a href={`mailto:${email}`}>
                  <i className="bx bxs-envelope"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/alexis-arango-798b65160/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>

                <a
                  href={`https://wa.me/3116776580?text=${encodeURIComponent(
                    message
                  )}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="bx bxl-whatsapp-square"></i>
                </a>
              </div>
          </li>
         
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
