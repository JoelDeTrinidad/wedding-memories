import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f8f4e3]"> 
    <div className='my-8 flex flex-col items-center'>
      <h1 
        className="text-5xl text-[#002a60] font-bold mb-4" 
        style={{ fontFamily: "'Great Vibes', cursive" }}>
        Momentos de boda de Anjelica y Joel
      </h1>
      <p
          className="text-lg text-gray-700 max-w-2xl text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Familia y amigos, gracias por celebrar con nosotros y ser parte de nuestra historia.  
          Nos sentimos muy afortunados de compartir este día tan especial con ustedes.  
          Gracias por compartirnos tus fotos para que podamos revivir el momento desde tu teléfono.  
        </p>
    </div>
  </div>
  );
}
