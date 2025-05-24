"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

interface Foto {
  id: string;
  url: string;
  name: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState<Foto[]>([]);

  const fetchImages = async () => {
    const q = query(collection(db, "fotos"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const data: Foto[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      url: doc.data().url,
      name: doc.data().name,
    }));

    setImages(data);
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
            <Image
                src={foto.url}
                alt={foto.name}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <a
              href={foto.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", marginTop: 8, color: "#0070f3" }}
            >
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
