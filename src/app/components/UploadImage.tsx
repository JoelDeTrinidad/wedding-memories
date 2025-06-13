"use client";

import { useRef, useState } from "react";
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
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

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

      alert("Gracias por compartir tus fotos!");
    } catch (error) {
      console.error("Error al subir imágenes:", error);
      alert("Error al subir imágenes");
    } finally {
      setIsUploading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="cursor-pointer w-full bg-white my-3 flex items-center">
      <button
        onClick={() => inputRef.current?.click()}
        disabled={isUploading}
        className={`
          cursor-pointer 
          text-black w-full 
          ${isUploading ? "opacity-50" : ""}
          font-black
          font-[fantasy]
          flex 
          justify-center 
          items-center
          relative
          top-[4px]`}
      >
        {isUploading ? "Subiendo imágenes..." : "Haz click aqui para subir tus fotos"}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {isUploading && (
        <div className="mt-3 text-center text-blue-600 font-semibold">
          ⏳ Subiendo imágenes...
        </div>
      )}
    </div>
  );
};

export default UploadImage;
