import Axios from 'axios';
import FileDownload from 'js-file-download';
import React from 'react';

const Resume = () => {
  const downloadResume = (e) => {
    e.preventDefault();
    Axios({
      url: 'http://192.168.249.148:5000/api', // Replace with your local IP address
      method: 'GET',
      responseType: 'blob'
    })
      .then((response) => {
        console.log(response);
        FileDownload(response.data, 'resume.pdf');
      })
      .catch((error) => {
        console.error("There was an error downloading the resume!", error);
      });
  };

  return (
    <>
      <button onClick={downloadResume}>Download</button>
    </>
  );
};

export default Resume;
