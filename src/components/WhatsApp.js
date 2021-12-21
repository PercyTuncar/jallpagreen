import React from 'react'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const WhatsApp = () => {
  return <WhatsAppWidget companyName='JALLPA GREEN ' phoneNumber='+51951751326' textReplyTime='Normalmente responde en unos minutos' message='¡Hola! 👋🏼 ¿Qué podemos hacer por usted?'	sendButton='Enviar' placeholder='Escribe tu mensaje aquí'/>
}

export default WhatsApp