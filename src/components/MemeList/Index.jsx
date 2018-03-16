import React from 'react';
import PaperMeme from '../PaperMeme/Index';

const MemeList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <PaperMeme key={image.id} gif={image} />
  });

  return (
    <ul>{gifItems}</ul>
  );
};

export default MemeList;