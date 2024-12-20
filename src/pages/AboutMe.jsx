import { useSelector } from 'react-redux'
import './styles/AboutMe.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutMe = () => {

  const [ t ] = useTranslation('global')

  const onDark = useSelector(reducer => reducer.onDark)

  const email = "alexisamalfi@hotmail.com";

  const message = '¡Hola! 👋 Estoy visitando tu increíble portafolio de desarrollo web y me gustaría hablar contigo sobre tus proyectos y habilidades. ¿Podemos conversar más sobre cómo trabajas y las oportunidades de colaboración?'
  
  return (
    <div className={`aboutme ${onDark ? 'ondark' : ''}`}>
        <div className="aboutme_container-biografia">

            <Link to='/'>
              <motion.div className='aboutme_container-img'
              initial={{y: 0}} 
              animate={{y: [0,-10, 0]}}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              >
                <img src={`/images/logo_${onDark ? 'black' : 'white'}.png`} alt="" />
              </motion.div>
            </Link>

            <p className="aboutme_biografia">
            {t('translation.aboutme-biografia')}
            </p>

            <div className='aboutme_container-contact'>
              <hr />
                <h2 className='aboutme_title'>{t('translation.lets-talk')}</h2>
                <div className="aboutme_contact">
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
              <hr />
            </div>
        </div>
    </div>
  )
}

export default AboutMe