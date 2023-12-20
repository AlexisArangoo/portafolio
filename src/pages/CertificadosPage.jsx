import { useSelector } from 'react-redux'
import './styles/CertificadosPage.css'

const CertificadosPage = () => {

  const onDark = useSelector(reducer => reducer.onDark)

  return (
    <article className={`certificados ${onDark ? 'ondark' : ''}`}>
      <section className="certificados-section">
        <h2 className='notranslate'>FULL STACK</h2>
        <img src="/certificados/fullstack.png" alt="" />
      </section>

      <section className="certificados-section">
        <h2 className='notranslate'>FRONT-END</h2>
        <img src="/certificados/react.png" alt="" />
      </section>
     
      <section className="certificados-section">
        <h2 className='notranslate'>BACK-END</h2>
        <img src="/certificados/backend.png" alt="" />
      </section> 

      <section className="certificados-section">
        <h2>FUNDAMENTOS</h2>
        <img src="/certificados/fundamentos.jpg" alt="" />
      </section> 
    </article>
  )
}

export default CertificadosPage