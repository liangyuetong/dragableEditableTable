import React, { useContext, useState, useEffect, useRef, Children } from 'react';
import { Input } from 'antd';
import { ColumnProps, TableProps } from '../node_modules/antd/es/table';
import Table from '../node_modules/antd/es/table/index';
// import Field from '../node_modules/rc-field-form/es/Field';
// import useForm from '../node_modules/rc-field-form/es/useForm';
import Form from '../node_modules/rc-field-form/es/index';
import '../node_modules/antd/es/table/style';
import '../node_modules/antd/dist/antd.css';
import './index.less';
import { Resizable } from 'react-resizable';
// import '../node_modules/react-resizable/css/styles.css'
// import classnames from 'classnames';

export interface Col<T> extends ColumnProps<object> {
  dataIndex: string;
  title: string;
  render?: any;
  width?: string | number;
  enableDrag?: boolean;
  onCell?: (record: any) => any;
  editable?: boolean;
}

export interface TableComposProps extends TableProps<object> {
  readonly?: boolean;
  dataSource: object[];
  columns: Col<object>[];
  title?: (currentPageData: object[]) => React.ReactNode;
  rowSelection?: object;
  rowKey: string;
  scroll?: object;
}

interface TableComposState {
  columns: Col<object>[];
  // form: any,
}

// const MyContext = React.createContext<any>(void 0);
// interface Item {
//   // key: string;
//   name: string;
// }
export default class TableCompos extends React.Component<TableComposProps, TableComposState> {
  constructor(props: TableComposProps) {
    super(props);
    // const [form] = useForm();
    this.state = {
      columns: props.columns,
      // form: ,
      // const [form] = Form.useForm();
    }
  }

  // const [col, setCols] = useState(cols)
  resizableCell = (props, position) => {
    const { onResize, record = {}, ...rest } = props;
    // width===true,enableDrag===true可拖动

    // console.log(record);
    return record.enableDrag ?
      <Resizable
        width={record.width}
        height={0}
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >{
          position === 'head' ? <th {...rest} /> : <td {...rest} />}</Resizable> :
      position === 'head' ? <th {...rest} /> : <td {...rest} />
  }
  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };;
    })
  };
  components = {
    header: {
      cell: (props) => this.resizableCell(props, 'head'),
    },
    body: {
      cell: (props) => this.resizableCell(props, 'body'),
    }
  }
  render() {
    const { columns, dataSource, ...rest } = this.props;
    const cols = this.state.columns.map((item, index) => ({
      enableDrag: false,
      ...item,
      onHeaderCell: record => {
        return {
          record: item,
          onResize: this.handleResize(index),
        }
      },
      onCell: record => {
        return {
          record: item,
          onResize: this.handleResize(index),
        }
      }
    })
    )
    // const [form] = Form.useForm();
    return <Table {...rest} dataSource={dataSource} columns={cols} className="mtable" components={this.components} />
  }
}