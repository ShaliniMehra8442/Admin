import {
    ProForm,
    ProFormCheckbox,
    ProFormDigit,
    ProFormDigitRange,
    ProFormGroup,
    ProFormRadio,
    ProFormRate,
    ProFormSegmented,
    ProFormSelect,
    ProFormSlider,
    ProFormSwitch,
    ProFormText,
    ProFormUploadButton,
    ProFormUploadDragger,
    ProFormMoney,
  } from '@ant-design/pro-components';
  import { Switch } from 'antd';
  import Mock from 'mockjs';
  import { useState } from 'react';
  
//   export const waitTime = (time: number = 100) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(true);
//       }, time);
//     });
//   };
  
  const AddPackage = () => {
    const [readonly, setReadonly] = useState(false);
    return (
        <>
      <div
        style={{
          padding: 24,
        }}
      >
      <ProFormText
          width="md"
          name="Title"
          required
          label="Title"
          placeholder="Title"
          rules={[{ required: true }]}
        />

    <ProFormMoney
        label="Price"
        name="amount0"
        fieldProps={{
          moneySymbol: false,
        }}
        locale="en-US"
        initialValue={0}
        min={0}
        width="lg"
        required
      />

        <ProFormMoney
        label="Price Dollar"
        name="amount0"
        locale="en-US"
        initialValue={0}
        min={0}
        width="lg"
        required
      />  
       
      
         <ProFormSelect
              width="md"
              fieldProps={{
                labelInValue: true,
              }}
              request={() => [
                { label: '1 month' },
                { label: '3 month'},
                { label: '9 month' },
                { label: '12 month'},
              ]}
              name="Time"
              label="Time duration"
              rules={[{ required: true, message: 'Please select your country!' }]}
            />

    <ProFormMoney
        label="Position"
        name="Position"
        fieldProps={{
          moneySymbol: false,
        }}
        locale="en-US"
        initialValue={0}
        min={0}
        width="lg"
        required
      />

              
            <ProFormCheckbox
              name="Status"
              label="Active"
              options={['Active']}
            />

            <ProFormCheckbox
              name="Default"
              label="Default"
              options={['Active']}
            />

            <ProFormSelect
              width="md"
              fieldProps={{
                labelInValue: true,
              }}
              request={ () => [
                { label: '55f1s1f41rf45ts51fr2g15rt4tr1' },
                { label: '65f1s14s5yd1i5s11fr2g15rt4tr1' },
                { label: '75f1s1g457ygu421jm54g15rt4tr1' },  
                { label: '85f1s54f87t22d23f1ff415rt4tr1' },
                { label: '9gh95d6fg454sts51fr2g15rt4tr1' },            
                { label: '105f1s1f41rf45ts51fr2g15rt4tr1' },
                { label: '11f1s1f41rf45ts51fr2g15rt4tr1' },
            ]}
 

              name="Roll"
              label="Roll(Select any of one)"
              rules={[{ required: true, message: 'Please select your country!' }]}
            />

<ProFormText
          width="md"
          name="Discription"
          required
          label="Discription"
          placeholder="Discription"
          rules={[{ required: true }]}
        />

         

      </div>
      </>
    );
  };
  
  export default AddPackage;