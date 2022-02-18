import React, { useState } from 'react';
import { Table, Input, Modal, Popconfirm, Form, Typography, Radio, Divider, Space, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Item, EditableCellProps } from './interface';
import { dataTable } from './API/data';
import { TableModal } from './Modal';
import { TableModalDetail } from './Modal Detail';







const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'text' ? <Input /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export const TableUser = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [form] = Form.useForm();
  const [data, setData] = useState(dataTable);
  const [editingKey, setEditingKey] = useState('');
  const [dataCheckbox, setDataCheckbox] = useState<Item[]>([])
  const isEditing = (record: Item) => record.key === editingKey;

  console.log("dataCheckbox ", dataCheckbox);

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', email: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '15%',
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '35%',
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '20%',
      children: [
        {
          title: 'Edit',
          dataIndex: 'edit',
          key: 'edit',
          width: 100,
          render: (_: any, record: Item) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                  Save
                </Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Edit
              </Typography.Link>
            );
          },
        },
        {
          title: 'Delete',
          dataIndex: 'delete',
          key: 'delete',
          width: 100,
          render: (_: any, record: Item) => (
            <Space size="middle">
                  <Button
                      onClick={() => { handleDelete(record) }}
                      type="link"
                  >
                      Delete
                  </Button>
            </Space>
          ),
        },
        {
          title: 'Modal',
          dataIndex: 'modal',
          render: (_: any, record: Item) => (
            <Space size="middle">
              <TableModal item={record} />
              {/* <TableModalDetail item={record}/> */}
            </Space>
          ),
        },
      ],

    },
  ];


  const handleDelete = (record: Item) => {
    console.log('handleDelete', record);
    Modal.confirm({
      title: 'Bạn đã chắc chắn muốn xóa?',
      icon: <ExclamationCircleOutlined />,
      content: 'Xóa là mất hết !!!',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK', record);
        setData(dataTable => {
          return dataTable.filter(item => item.id !== record.id)
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'email' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Item[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    setDataCheckbox(selectedRows);
  },
  getCheckboxProps: (record: Item) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

  return (
    <Form form={form} component={false}>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">Radio</Radio>
        <Button type='link'><TableModalDetail dataCheckbox={dataCheckbox} /></Button>
      </Radio.Group>

      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection, 
          onSelect: (record) => {
          }
        
        }}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};