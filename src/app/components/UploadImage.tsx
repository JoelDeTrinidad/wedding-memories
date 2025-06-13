"use client";

import { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      for (const file of Array.from(files)) {
        const fileRef = ref(storage, `fotos-boda/${file.name}`);
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);

        await addDoc(collection(db, "fotos"), {
          url: downloadURL,
          createdAt: Timestamp.now(),
          name: file.name,
        });
      }

      alert("Imágenes subidas correctamente ✅");
    } catch (error) {
      console.error("Error al subir imágenes:", error);
      alert("Error al subir imágenes");
    } finally {
      // Limpia el input para permitir volver a seleccionar el mismo archivo
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="cursor-pointer w-full bg-white my-3">
      <button 
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer text-black w-full">
        Seleccionar y Subir Imágenes
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadImage;