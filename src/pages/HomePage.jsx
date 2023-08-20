import { useSelector } from "react-redux";
import Dark from "../Components/shared/Dark";
import "./styles/HomePage.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const [ t ] = useTranslation('global')

  const onDark = useSelector((reducer) => reducer.onDark);

  const texts = [t('translation.alexis-arango'), t("translation.full-stack")];

  const email = "alexisamalfi@hotmail.com";

  const message =
    "¡Hola! 👋 Estoy visitando tu increíble portafolio de desarrollo web y me gustaría hablar contigo sobre tus proyectos y habilidades. ¿Podemos conversar más sobre cómo trabajas y las oportunidades de colaboración?";


  return (
    <div className={`home ${onDark ? "ondark" : ""}`}>
      <div className="foto-perfil">
        <Link to="/about-me">
          <img src={`/images/logo_${onDark ? "black" : "white"}.png`} alt="" />
        </Link>
      </div>
      <div className="container-bibliografia">
        <div className="bibliografia">
          <div>
            <h1 className="home-title notranslate">
              <Typewriter words={texts} loop={true} typeSpeed={40}/>
            </h1>

            <p className="bibliografia-par">{t('translation.bibliografia-par')}</p>
          </div>

          <div className="home-container-contacts">
            <a href={`mailto:${email}`}>
              <div className="home-contact" target="_blank">
                <span>
                  <i className="bx bxs-envelope"></i>
                </span>
                <span>Email</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/alexis-arango-798b65160/"
              target="_blank"
            >
              <div className="home-contact">
                <span>
                  <i className="bx bxl-linkedin-square"></i>
                </span>
                <span>Linkedin</span>
              </div>
            </a>

            <a
              href={`https://wa.me/3116776580?text=${encodeURIComponent(
                message
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="home-contact">
                <span>
                  <i className="bx bxl-whatsapp-square"></i>
                </span>
                <span>Whatsapp</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
