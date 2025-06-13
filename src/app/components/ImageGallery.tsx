"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

interface Foto {
  id: string;
  url: string;
  name: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState<Foto[]>([]);

  useEffect(() => {
    const q = query(collection(db, "fotos"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Foto, "id">),
      }));
      setImages(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // 4 columnas fijas
        gap: "12px",
        padding: "16px",
      }}
    >
      {images.map((foto) => (
        <div
          key={foto.id}
          style={{
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <Image
            src={foto.url}
            alt={foto.name}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              transition: "scale 0.3s ease-in-out",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;