import React from 'react';

const UploadImage = () => {
  return (
    <div>
      <form action="/upload" method="POST" enctype="multipart/form-data">
        <div className="file-field input-field">
          <div className="btn grey">
            <span>File</span>
            <input name="myImage" type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
