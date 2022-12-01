
import "antd/dist/antd.css";
import "./AutomatinHistory.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddPermission from "./Add";
import PermissionModal from "./permissionmodal";
import AddPackage from "./AddPackage";
import PackageModal from "./PackageModal";

function PackageDetails() {
  // const[inputlist, setInputList]= useState();
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "-",
      email: "-",
      address: "John Address",
    },
    {
      id: 2,
      name: "-",
      email: "-",
      address: "-",
    },
    {
      id: 3,
      name: "-",
      email: "-",
      address: "-",
    },
    {
      id: 4,
      name: "-",
      email: "-",
      address: "-",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Title",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Description",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Role",
      dataIndex: "email",
    },{
        key: "4",
        title: "INR Price",
        dataIndex: "email",
      },
      {
        key: "5",
        title: "USD price",
        dataIndex: "email",
      },
    {
        key: "6",
        title: "Time Duration(in Months)",
        dataIndex: "email",
      },

      {
        key: "7",
        title: "Active",
        dataIndex: "email",
      },


    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (

    <div className="App">
      <header className="App-header">
  

      <PackageModal/>

        {/* <Button onClick={onAddStudent}>Add new Permissions</Button> */}
        <Table columns={columns} dataSource={dataSource}></Table>

        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
        
      </header>
    </div>
  );
}

export default PackageDetails;