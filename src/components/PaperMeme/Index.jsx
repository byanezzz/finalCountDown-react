import React from 'react';
import Paper from 'material-ui/Paper';
import './PaperMeme.css';

const PaperMeme = (image, description) => {
  return (
    <li>
      <img src={image.gif.images.downsized.url} alt=''/>
    </li>
  )
};

export default PaperMeme;
