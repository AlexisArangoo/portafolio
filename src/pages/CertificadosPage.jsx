import { useSelector } from 'react-redux'
import './styles/CertificadosPage.css'

const CertificadosPage = () => {

  const onDark = useSelector(reducer => reducer.onDark)

  return (
    <article className={`certificados ${onDark ? 'ondark' : ''}`}>
      <section className="fundamentos">
        <h2>FUNDAMENTOS</h2>
        <img src="/certificados/fundamentos.jpg" alt="" />
      </section>
      
      <section className="react">
        <h2 className='notranslate'>REACT</h2>
        <img src="/certificados/react.png" alt="" />
      </section>
    </article>
  )
}

export default CertificadosPage