import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import './DropZone.css'
const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const url = await uploadToIPFS(acceptedFiles[0]);
    setFileUrl(url);
    setImage(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className="dropzone">
      <div className="dropzone-box" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="dropzone-box-input">
          <p>{title}</p>
          <div className="dropzone-box-input-img">
            <img
              src=''
              alt="upload"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className="dropzone-box-aside">
          <div className="dropzone-box-aside-box">
            <img
              src={fileUrl}
              alt="uploaded"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <div className="dropzone-box-aside-preview">
              <div className="dropzone-box-aside-preview-one">
                <p>
                  <span>NFT Name:</span> {name || " "}
                </p>
                <p>
                  <span>Website:</span> {website || " "}
                </p>
              </div>
              <div className="dropzone-box-aside-preview-two">
                <p>
                  <span>Description:</span> {description || " "}
                </p>
              </div>
              <div className="dropzone-box-aside-preview-three">
                <p>
                  <span>Royalties:</span> {royalties || " "}
                </p>
                <p>
                  <span>File Size:</span> {fileSize || " "}
                </p>
                <p>
                  <span>Properties:</span> {properties || " "}
                </p>
                <p>
                  <span>Category:</span> {category || " "}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
