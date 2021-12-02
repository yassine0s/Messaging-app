import React, { useState, useRef } from "react";
import { Button } from "reactstrap";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  console.log("imageimage", image);
  return (
    <div>
      <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <Button onClick={onButtonClick} className="mt-2 mb-3">
        Change Image
      </Button>
    </div>
  );
};

export default ImageUpload;
