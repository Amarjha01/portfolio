import { useState } from 'react';
import React from 'react';
import commonApiEndpoints from '../../common/backendEndpoints';

const Resume = () => {

  const [resume, setResume] = useState('');

  const fetchResume = async () => {
    try {
      const response = await fetch(commonApiEndpoints.resume.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf'; // Change this to the file name you want
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error fetching the resume:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchResume}>Download my resume</button>
    </div>
  );
};

export default Resume;
