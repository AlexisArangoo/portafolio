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
            Me enorgullece decir que: soy un desarrolador web, el gusto por este mundo tan amplio surgio empiricamente, con el pasar de los años me fui informando buscando cursos y con mis recursos fui creciendo mas en mi vida estudiantil, conte con la oportunidad de poder estudiar en ACADEMLO que ha sido parte fundamental en mi crecimiento como persona y en mi formacion laboral; aunque soy un desarrollador FULL STACK y me desempeño muy bien en ambos campos con todas mis habilidades, me inclino mas por el BACK END.
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