import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const acceptedTypes = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && acceptedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form className="mt-8 mb-2 mx-auto text-center">
      <label className="flex justify-center items-center w-8 h-8 text-blue-400 border-2 border-blue-400 my-2 mx-auto font-bold text-2xl rounded-full cursor-pointer hover:bg-blue-400 hover:text-white">
        <abbr title="upload a new image to gallery" className="noo-underline">
          <input
            className="h-0 w-0 opacity-0"
            type="file"
            onChange={changeHandler}
          />
          <span>+</span>
        </abbr>
      </label>
      <div className="text-sm" style={{ height: error ? "" : "h-16" }}>
        {error && <div className="error">{error}</div>}
      </div>
      {file && <div>{file.name}</div>}
      <div className="max-w-90% mx-auto">
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
