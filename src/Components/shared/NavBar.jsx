import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { useSelector } from "react-redux";
import NavBarMenu from "../NavBar/NavBarMenu";
import { useState } from "react";

const NavBar = () => {

  const [isChecked, setIsChecked] = useState(false);

  const onDark = useSelector(reducer => reducer.onDark)

    const email = "alexisamalfi@hotmail.com";

  const message = '¡Hola! 👋 Estoy visitando tu increíble portafolio de desarrollo web y me gustaría hablar contigo sobre tus proyectos y habilidades. ¿Podemos conversar más sobre cómo trabajas y las oportunidades de colaboración?'


  return (
    <header className={`header ${onDark ? 'ondark' : ''}`}>

      <div className="header-container-img">
        <Link to="/" className="container-img">
          <img src={`/images/logo_${onDark ? 'black' : 'white'}.png`} alt="" />
          <span>Home</span>
        </Link>
        <hr className="hr" />
      </div>
      <div className="header-ul">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/proyects" className="item-link">
              <i className="bx bx-clipboard"></i>
              <h2>Projects</h2>
            </Link>
          </li>
          <li className="header-item">
            <Link to="/certificates" className="item-link">
              <i className="bx bxs-graduation"></i>
              <h2>Certificates</h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="acerca-de-mi">
        <i className="bx bxs-user-badge"></i>
        <div className="acerca-de-mi-menu">
          <ul className="acerca-de-mi-menu-list">
            <Link className="acerca-de-mi-menu-item" to='/about-me'><li>About me</li></Link>
            <li className="acerca-de-mi-menu-item item-contact">
              <span className="item-contact-span">Contact</span>
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
          <Link to='/'><li className="menu-items">Home</li></Link>
          <Link to='/proyects'><li className="menu-items">Proyects</li></Link>
          <Link to='/certificates'><li className="menu-items">Certificates</li></Link>
          <Link to='/about-me'><li className="menu-items">About Me</li></Link>
          <li className="menu-items item-contact">
            <span className="item-contact-span">Contact</span>
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
