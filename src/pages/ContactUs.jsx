import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import './styles/ContactUs.css'
import emailjs from '@emailjs/browser'

const ContactUs = () => {

  const [ t ] = useTranslation('global')

  const onDark = useSelector(reducer => reducer.onDark)

  const submit = (e) => { 
    e.preventDefault()

    emailjs.sendForm('service_tqbsq4h', 'template_w2d3dhe', e.target, 'mjO7dr-EP6PG3gfir')
      .then(resp => console.log(resp))
      .catch(err => console.log(err))

      e.target.elements['firstname'].value = ''
      e.target.elements['lastname'].value = ''
      e.target.elements['email'].value = ''
      e.target.elements['message'].value = ''
  }

  

  return (
    <div className={`contactus ${onDark ? 'ondark' : ''}`}>
      <form className="form" onSubmit={submit}>
        <p className="title">{t('translation.contactus')}</p>
        <p className="message">{t('translation.contactus-description')}</p>
            <div className="flex">
            <label>
                <input className="input" type="text" name="firstname" placeholder="" required={true}/>
                <span>Firstname</span>
            </label>

            <label>
                <input className="input" type="text" name="lastname" placeholder="" required={true}/>
                <span>Lastname</span>
            </label>
        </div>  

        <label>
            <input className="input" type="email" name="email" placeholder="" required={true}/>
            <span>Email</span>
        </label> 

        <label>
            <textarea className="input" name="message" placeholder="" required={true}/>
            <span>Message</span>
        </label>
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs