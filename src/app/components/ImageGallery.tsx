"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";


interface Foto {
  id: string;
  url: string;
  name: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState<Foto[]>([]);

  const fetchImages = async () => {
    const q = query(collection(db, "fotos"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Foto, "id">),
      }));
      setImages(data);
    });

    return () => unsubscribe(); // Limpiar listener
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Momentos capturados</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {images.map((foto) => (
          <div key={foto.id}>
            <Image
              src={foto.url}
              alt={foto.name}
              width={500}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
