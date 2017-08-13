import React from 'react';
import logo from '../images/logo.svg';

export default function Image(props) {
  return (
    <div className="image">
      <img src={logo} />
    </div>
  );
}
