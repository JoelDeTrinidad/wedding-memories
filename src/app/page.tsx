import React from 'react';
import Image from 'next/image';

import { 
  Container,
  Content,
  Overlay,
  Paragraph,
  Title
} from '../app/components/StyledHome';
import Logo from "../app/assets/logo.svg";
import BgBoda from "../app/assets/boda.jpeg";

export default function Home() {
  return (
    <Container $bgImage={BgBoda.src}>
    <Overlay />
    <Content>
      <Title>
        Momentos de boda de Anjelica y Joel
      </Title>
      <Paragraph>
          Familia y amigos, gracias por celebrar con nosotros y ser parte de nuestra historia.  
          Nos sentimos muy afortunados de compartir este día tan especial con ustedes.  
          Gracias por compartirnos tus fotos para que podamos revivir el momento desde tu teléfono.  
        </Paragraph>
    </Content>
    <div className='logo'>
        <Image 
          src={Logo} 
          alt="logo" 
          width={100} 
          height={40}
        />
      </div>
  </Container>
  );
}
