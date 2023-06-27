import React, { useState } from 'react';

const Document = ({ documents }) => {
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const currentDoc = documents[currentDocIndex];
  const { doc_id, images } = currentDoc;

  const handlePrevDoc = () => {
    setCurrentDocIndex(
      (prevIndex) => (prevIndex - 1 + documents.length) % documents.length
    );
    setCurrentImgIndex(0);
  };

  const handleNextDoc = () => {
    setCurrentDocIndex((prevIndex) => (prevIndex + 1) % documents.length);
    setCurrentImgIndex(0);
  };

  const handlePrevImg = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrevDoc}>Previous Document</button>
        Document ID: {doc_id}
        <button onClick={handleNextDoc}>Next Document</button>
      </div>
      <div>
        <button onClick={handlePrevImg}>Previous Image</button>
        {`Image: ${images[currentImgIndex].img_id}`}
        <button onClick={handleNextImg}>Next Image</button>
      </div>
    </div>
  );
};

export default Document;
