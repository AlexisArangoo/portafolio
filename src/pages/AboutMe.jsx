import { useSelector } from 'react-redux'
import './styles/AboutMe.css'
import { Link } from 'react-router-dom';

const AboutMe = () => {

  const onDark = useSelector(reducer => reducer.onDark)

  const email = "alexisamalfi@hotmail.com";

  const message = '¡Hola! 👋 Estoy visitando tu increíble portafolio de desarrollo web y me gustaría hablar contigo sobre tus proyectos y habilidades. ¿Podemos conversar más sobre cómo trabajas y las oportunidades de colaboración?'
  
  return (
    <div className={`aboutme ${onDark ? 'ondark' : ''}`}>
        <div className="aboutme_container-biografia">

            <Link to='/'>
              <div className='aboutme_container-img'>
                <img src={`/images/logo_${onDark ? 'black' : 'white'}.png`} alt="" />
              </div>
            </Link>

            <p className="aboutme_biografia">
             I am proud to say that: I am a web developer, the taste for this wide world arose empirically, as the years went by I found myself looking for courses and with my resources I grew more in my student life, I had the opportunity to study at ACADEMLO, which has been a fundamental part of my growth as a person and in my job training; Although I am a FULL STACK developer and I perform very well in both fields with all my skills, I lean more towards the BACK END.
            </p>

            <div className='aboutme_container-contact'>
              <hr />
                <h2 className='aboutme_title'>Let's Talk</h2>
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