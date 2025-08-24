import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

export function Form() {
  return (
    <Container>
      <h2>Enviame un mensaje ^^</h2>
      <form >
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
        />
        <textarea
          required
          placeholder="Enviar mensaje"
          id="message"
          name="message"
          
        />
        
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
