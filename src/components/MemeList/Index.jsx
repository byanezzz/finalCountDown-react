import React from 'react';
import PaperMeme from '../PaperMeme/Index';
import './MemeList.css'

const MemeList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <PaperMeme key={image.id} gif={image} />
  });

  return (
    <ul className="MemeList">{gifItems}</ul>
  );
};

export default MemeList;