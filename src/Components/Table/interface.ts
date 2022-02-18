
export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  selectedRows: Item;
  index: number;
  children: React.ReactNode;
}
//---------------------------//
export interface Item {
  id: string;
  key: string;
  stt: number;
  name: string;
  age: number;
  email: string;
  address: string;
  description: string;
}