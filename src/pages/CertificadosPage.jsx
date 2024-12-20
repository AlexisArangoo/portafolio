import { useSelector } from 'react-redux'
import './styles/CertificadosPage.css'
import { motion } from 'framer-motion'

const CertificadosPage = () => {

  const onDark = useSelector(reducer => reducer.onDark)

  return (
    <article className={`certificados ${onDark ? 'ondark' : ''}`}>
      <motion.section className="certificados-section ci"
        initial={{opacity: 0.5, x:'-90%'}}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.15 }}
      >
        <h2 className='notranslate certificados_title'>FULL STACK</h2>
        <img src="/certificados/fullstack.png" alt="" />
      </motion.section>

      <motion.section className="certificados-section cd"
        initial={{opacity: 0.5, x:'-90%'}}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.15 }}
      >
        <h2 className='notranslate certificados_title'>FRONT-END</h2>
        <img src="/certificados/react.png" alt="" />
      </motion.section>
     
      <motion.section className="certificados-section ci"
        initial={{opacity: 0.5, x:'-90%'}}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.15 }}
      >
        <h2 className='notranslate certificados_title'>BACK-END</h2>
        <img src="/certificados/backend.png" alt="" />
      </motion.section> 

      <motion.section className="certificados-section cd"
        initial={{opacity: 0.5, x:'-90%'}}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.15 }}
      >
        <h2 className=' certificados_title'>FUNDAMENTOS</h2>
        <img src="/certificados/fundamentos.jpg" alt="" />
      </motion.section> 
    </article>
  )
}

export default CertificadosPage