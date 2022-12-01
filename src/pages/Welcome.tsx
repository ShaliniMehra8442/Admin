// import { PageContainer } from '@ant-design/pro-components';
import { Card,Row,Col, } from 'antd';
import {UserOutlined,AlignCenterOutlined,DiffOutlined,RadarChartOutlined } from '@ant-design/icons';

import React from 'react';
 
 
import Demo from '@/components/pro'; 
import DemoLine from '@/components/DemoLine';
import TableData from '@/components/TableData';

 

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const Welcome: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {



  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  return (
   
 
<div className="site-card-wrapper">
<Row gutter={18}>
  <Col span={6}>
    <Card title="Users" bordered={false}>
    <UserOutlined />
      1.2k
    </Card>
  </Col>
  <Col span={6}>
    <Card title="Rows" bordered={false}>
    <AlignCenterOutlined />
      432.7k
    </Card>
  </Col>
  <Col span={6}>
    <Card title="Boards" bordered={false}>
    <DiffOutlined />
     <span className='text-5xl font-bold underline'> 3.2k</span>
     
    </Card>
  </Col>
  <Col span={6}>
    <Card title="Workspace" bordered={false}>
    <RadarChartOutlined />
      2.2k
    </Card>
  </Col>
</Row>
<br/>
<Demo/>
<br/>
<DemoLine/>
<br/>
<TableData/>

<div className='container mx-auto px-4'>
{/* <DemoLine/> */}

</div>
 
</div>



 

  );
};


export default Welcome;


