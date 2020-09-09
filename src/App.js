import React, { useState } from "react";
import Title from "./components/Title/Title";
import UploadForm from "./components/UploadForm/UploadForm";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <Title />
      <div className="max-w-6xl mx-auto">
        <UploadForm />
        <ImageGrid setSelectedImage={setSelectedImage} />
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}

export default App;
