import React from 'react';
import 'antd/dist/antd.css';

import { Button } from 'antd';

const buttonStyle = {
  color: '#000',
  borderRadius: '3.2rem 0',
  cursor: 'pointer',
  transition: 'all 500ms',
  background: 'orange',
  fontSize: '20px',
  border: 'none',
  position: 'absolute',
  left: '350px'
};
const ButtonS = () => (
  <div>
    <Button style={buttonStyle}>Submit</Button>
  </div>
);

export default ButtonS;
