import React, { useState } from "react";
import axios from "axios";

export default function Test() {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e: any) => {
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("images", e.target.files[i]);
    }

    try {
      const response = await axios.post("http://localhost:12002/api/banner", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      setImages(response.data.urls);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input
        type="file"
        multiple
        placeholder="Images"
        onChange={handleImageUpload}
      />
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index}`}
          width="200"
          height="200"
        />
      ))}
    </div>
  );
}
