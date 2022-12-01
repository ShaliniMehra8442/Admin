import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';
import request from 'umi-request';

const columns = [
    {
        dataIndex: 'index',
        valueType: 'indexBorder',
        width: 48,
    },
    {
        title: 'Domain',
        dataIndex: 'Domain ',
        copyable: true,
        ellipsis: true,
         
        formItemProps: {
            rules: [
                { 
                    required: true,
                    message: '此项为必填项',
                },
            ],
        },
    },
    
    
  
 
    {
        title: 'User Count',
        valueType: 'User Count',
        key: 'option',
        render: (text, record, _, action) => [
            <a key="editable" onClick={() => {
                    var _a;
                    (_a = action === null || action === void 0 ? void 0 : action.startEditable) === null || _a === void 0 ? void 0 : _a.call(action, record.id);
                }}>
        
      </a>,
            <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
   
      </a>,
            <TableDropdown key="actionGroup" onSelect={() => action === null || action === void 0 ? void 0 : action.reload()} menus={[
                    { key: 'copy', name: '' },
                    { key: 'delete', name: '' },
                ]}/>,
        ],
    },
];
const TableData = () => {
    const actionRef = useRef();
    return (<ProTable columns={columns} actionRef={actionRef} cardBordered request={async (params = {}, sort, filter) => {
            console.log(sort, filter);
            return request('https://proapi.azurewebsites.net/github/issues', {
                params,
            });
        }} editable={{
            type: 'multiple',
        }} columnsState={{
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            onChange(value) {
                console.log('value: ', value);
            },
        }} rowKey="id" search={{
            labelWidth: 'auto',
        }} options={{
            setting: {
                listsHeight: 200,
            },
        }} form={{
        
            syncToUrl: (values, type) => {
                if (type === 'get') {
                    return Object.assign(Object.assign({}, values), { created_at: [values.startTime, values.endTime] });
                }
                return values;
            },
        }} pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
        }} dateFormatter="string" headerTitle="User Login Details" toolBarRender={() => [
            
            
        ]}/>);
};

export default TableData;
