import React from 'react';
import Triangles from './LoggingComponents/Triangles'
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}  <Triangles></Triangles></div>;
};

export default Card;
