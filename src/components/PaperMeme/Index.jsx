
import React from 'react';
import Paper from 'material-ui/Paper';

const PaperMeme = (image, description) => {
  return (
    <Paper zDepth={3}>
      <li>
        <img src={image.gif.images.downsized.url} alt=''/>
      </li>
    </Paper>
  )
};

export default PaperMeme;
