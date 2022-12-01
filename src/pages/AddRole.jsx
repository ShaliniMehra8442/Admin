import { Button, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',

};
/* eslint-enable no-template-curly-in-string */

const AddRole = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        Title={['Title']}
        label="Title:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['Package Permission']}
        label="Package Permission"
        rules={[
          {
            required: true
          },
        ]}
      >
        <InputNumber />
      
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddRole;