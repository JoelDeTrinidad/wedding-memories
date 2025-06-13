"use client";

import React from 'react';
import Image from 'next/image';

import { 
  Container,
  Content,
  Paragraph,
  Title
} from '../app/components/StyledHome';
import UploadImage from "../app/components/UploadImage";
import ImageGallery from "../app/components/ImageGallery";
import Logo from "../app/assets/logo.svg";
import BgBoda from "../app/assets/boda.png";

export default function Home() {
  return (
    <Container>
    <Content>
      <div className='photo-container'>
        <Image src={BgBoda} alt='photo' />
      </div>
      <Title>
        Momentos de boda de Anjelica y Joel
      </Title>
      <Paragraph>
          Familia y amigos, gracias por celebrar con nosotros y ser parte de nuestra historia.  
          Nos sentimos muy afortunados de compartir este día tan especial con ustedes.  
          Gracias por compartirnos tus fotos para que podamos revivir el momento desde tu teléfono.  
        </Paragraph>
        <UploadImage />
      <ImageGallery />
    </Content>
    <div className='logo'>
        <Logo 
          width={100} 
          height={40}
        />
      </div>
  </Container>
  );
}
