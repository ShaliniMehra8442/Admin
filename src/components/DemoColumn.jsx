import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      type: 'Users',
      sales: 1245,
    },
    {
      type: 'Boards',
      sales: 3228,
    },
    {
      type: 'Workspace',
      sales: 2185,
    } 
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
       
      position: 'middle',
       
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: 'value',
      },
    },
  };
  return <Column {...config} />;
}; 
export default DemoColumn;