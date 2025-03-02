import React, { useRef, useEffect, useState } from "react";
import { uploadFile } from "./services/api";

const App = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  function onUploadClick() {
    fileInputRef.current.click();
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };

    getImage();
  }, [file]);

  return (
    <div className='container'>
      <img
        src='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
        alt='banner'
      />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target='_blank'>
          {result}
        </a>
      </div>
    </div>
  );
};

export default App;
