import React from 'react';
import 'antd/dist/antd.css';

import { PageHeader } from 'antd';

export default function Header() {
  return (
    <React.Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)'
        }}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </React.Fragment>
  );
}
