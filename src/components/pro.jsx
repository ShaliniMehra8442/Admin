import { ProCard } from '@ant-design/pro-components';
import DemoColumn from './DemoColumn';
import DemoLine from './DemoLine';
import DemoPie from './DemoPie';

const Demo =() => {
  return (
    <>
      <ProCard style={{ marginBlockStart: 8 }} gutter={[9, 9]} wrap title="">
        <ProCard colSpan={{ xs: 10, sm: 8, md: 8, lg: 8, xl: 12 }} layout="center" bordered>
          <DemoColumn/>
        </ProCard>
        <ProCard colSpan={{ xs: 10, sm: 8, md: 8, lg: 8, xl: 12 }} layout="center" bordered>
          <DemoPie/>
        </ProCard>
         
      </ProCard>
    </>
  );
};
export default Demo;