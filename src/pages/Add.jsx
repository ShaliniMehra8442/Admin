// import React, { useState } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";

// const AddPermission = () => {
//   let history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",  
//     phone: "",
//     website: ""
//   });

//   const { name, username, email, phone, website } = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/users", user);
//     history.push("/");
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-primary btn-block">Add User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddPermission;
// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// const AddPermission= () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
// //   const handleOk = () => {
// //     setIsModalOpen(false);
// //   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//       Add New Permission
//       </Button>
//       <Modal title="AddPermission" open={isModalOpen} onCancel={handleCancel}>
//       <label>Title :  
//       <input Type={"text"}></input>
//       </label>
//       <br/>
      
//   <label>Type : 
//   <select>
//   <option value="AUTOMATION">AUTOMATION</option>
//   <option value="BOARD">BOARD</option>
//   <option value="CHAT">CHAT</option>
//   <option value="EMAIL">EMAIL</option>
//   <option value="FORMS">FORMS</option>
//   <option value="INTEGRATION">INTEGRATION</option>
//   <option value="ONUSER">ONUSER</option>
//   <option value="STORAGE">STORAGE</option>

  
  
// </select>
// </label>
// <br/>

//   <label for="quantity">value:</label>
//   <input type="number" id="quantity" name="quantity" min="-100" max="100"/><br/>
//   <input type="submit"/>

//       </Modal>
//     </>
//   );
// };
// export default AddPermission;

// import React from 'react';
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
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddPermission = () => {
  const onFinish = (values) => {
    console.log(values);

}


  
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
         name={['Type']}
        label="Type" >
  <select id="change">
  <option value="">Select One</option>
  <option value="AUTOMATION">AUTOMATION</option>
  <option value="BOARD">BOARD</option>
  <option value="CHAT">CHAT</option>
  <option value="EMAIL">EMAIL</option>
  <option value="FORMS">FORMS</option>
  <option value="INTEGRATION">INTEGRATION</option>
  <option value="ONUSER">ONUSER</option>
  <option value="STORAGE">STORAGE</option>
</select>
</Form.Item>
      <Form.Item
        name={['Value']}
        label="Value"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
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
export default AddPermission;