import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/Footer.css"

export default function ContactMe() {

    // useState para controlar o estado da variável formData
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });

    // Função chamada sempre que há alterações no formulário. Essa função chama o setFormData e passa o campo alterado com o valor alterado    
    const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
        };
        
    // Função chamada quando o formulário é enviado    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Email enviado com sucesso!');
              }, (error) => {
                console.log(error.text);
                alert('Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.');
            });
        };    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className='message'>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}