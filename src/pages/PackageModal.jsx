import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddRole from './AddRole';
import AddPackage from './AddPackage';
const PackageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Packages
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AddPackage/>
      </Modal>
    </>
  );
};
export default PackageModal;