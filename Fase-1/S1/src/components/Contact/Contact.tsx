import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
        <p>Espero cualquier consulta</p>
        <p>Dame chamba</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:andrycaceres2006@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:andrycaceres2006@gmail.com">andrycaceres2006@gmail.com</a>
        </div>
        <div>
        <a href="tel:+51902177449"><img src={phoneIcon} alt="No telefono" /></a>
          <a href="tel:+51902177449">(+51) 902177449</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}