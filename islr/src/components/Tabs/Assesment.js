import React, {useState,useEffect} from 'react'
import axios from 'axios';

function Assesment() {

  
  const [videoFile, setVideoFile] = useState(null);

  const handleFileInputChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(videoFile);
    reader.onload = async () => {
      const response = await axios.post('http://localhost:5000/video', { videoData: reader.result });
      console.log(response.data);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileInputChange} />
      <button type="submit">Upload Video</button>
    </form>
  );
}

export default Assesment