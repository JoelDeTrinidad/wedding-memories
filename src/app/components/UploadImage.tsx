"use client";

import { useState } from "react";
import { storage, db } from "../../../firebase/config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const fileRef = ref(storage, `fotos-boda/${file.name}`);
      await uploadBytes(fileRef, file);

      const downloadURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, "fotos"), {
        url: downloadURL,
        createdAt: Timestamp.now(),
        name: file.name,
      });

      alert("Imagen subida correctamente ✅");
      setFile(null);
    } catch (error) {
      console.error("Error al subir:", error);
      alert("Error al subir la imagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Subir imagen de boda</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : null)
        }
      />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
      >
        {loading ? "Subiendo..." : "Subir Imagen"}
      </button>
    </div>
  );
};

export default UploadImage;
