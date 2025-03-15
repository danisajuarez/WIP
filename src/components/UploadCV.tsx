import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UploadCV() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `curriculums/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error al subir el archivo:", error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setDownloadURL(url);
        alert("Archivo subido con éxito");
      }
    );
  };

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-gray-100 py-16 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Carga tu Currículum
          </h2>
          <p className="text-gray-600 mb-4">
            Sube tu currículum en formato PDF para aplicar a nuestras
            oportunidades.
          </p>

          {/* Input de carga de archivo */}
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block w-full px-4 py-2 border rounded-lg mb-4"
          />

          {/* Botón de subir */}
          <button
            onClick={handleUpload}
            disabled={!file}
            className={`w-full px-6 py-3 rounded-lg font-bold transition ${
              file
                ? "bg-blue-700 text-white hover:bg-blue-800"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
          >
            Subir Archivo
          </button>

          {/* Indicador de progreso */}
          {uploadProgress > 0 && (
            <div className="mt-4 w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress.toFixed(2)}%
              </div>
            </div>
          )}

          {/* Mensaje de éxito con enlace */}
          {downloadURL && (
            <p className="mt-4 text-green-600">
              Archivo subido con éxito:{" "}
              <a
                href={downloadURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold underline"
              >
                Ver CV
              </a>
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
