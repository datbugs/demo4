import React, { useEffect, useState } from 'react';
import { Table, Input, Modal, Popconfirm, Form, Typography, Radio, Divider, Space, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Item, EditableCellProps } from './interface';
import { TableModal } from './Modal';
import { TableModalDetail } from './Modal Detail';
import TableAPI from './API/tableAPI';
import { removeUserThunk } from './tableThunk';
import { useDispatch, useSelector } from 'react-redux';
import { getListData } from './tableSelector';







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
  const dispatch = useDispatch();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [dataCheckbox, setDataCheckbox] = useState<Item[]>([])
  const isEditing = (record: Item) => record.id === editingKey;
  const [dataUser, setDataUser] = useState<Item[]>([])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await TableAPI.getAll();
        console.log(response.data, "dataaaaaaaaaaabbb")
        setDataUser(response.data);
        return response.data
      } catch (error) {
        console.log(error, "Error")
      }
    }
    
    fetchData();

  }, []);

  const edit = (record: Partial<Item> & { id: React.Key }) => {
    form.setFieldsValue({ name: '', email: '', address: '', ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...dataUser];
      const index = newData.findIndex(item => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataUser(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataUser(newData);
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
      title: 'Age',
      dataIndex: 'age',
      width: '10%',
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
      title: 'Wage($)',
      dataIndex: 'wage',
      width: '10%',
      editable: true,
    },
    {
      title: 'Point',
      dataIndex: 'point',
      width: '10%',
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
                <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
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
                // onClick={() => dispatch(removeUserThunk(record.id))}
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
        // removeUserThunk(record.id)
        setDataUser(dataUser => {
          return dataUser.filter(item => item.id !== record.id)
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
        <TableModalDetail dataCheckbox={dataCheckbox} />
      </Radio.Group>

      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
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
        dataSource={dataUser}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};