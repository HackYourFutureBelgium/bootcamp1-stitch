import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

export default function Header(props) {
  return (
    <React.Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
          background: '#9ef',
          width: '100vw',
          display: 'flex',
          alignitems: 'center',
          padding: '0 5rem',
          boxShadow: '0 0 3px 1px rgba(81, 81, 81, 0.2)',
          top: '0px',
          left: '0',
          height: '50px'
        }}
        title="STITCH"
      ></PageHeader>
    </React.Fragment>
  );
}
