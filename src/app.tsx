import * as React from 'react';
// import { HelloComponent } from './hello';
import TableCompos from './table';
import { Input } from 'antd';
// interface Props { }
// interface State { }

export const App = () => {
  // const [rowKey] = React.useState('0');
  const [dataSource] = React.useState([
    { name: 'hhh', code1: '1', code2: '123', code3: '123', code4: '123', code5: '123' },
    { name: 'hhh', code1: '2', code2: '123', code3: '123', code4: '123', code5: '123' },
    { name: 'hhh', code1: '3', code2: '123', code3: '123', code4: '123', code5: '123' },
    { name: 'hhh', code1: '4', code2: '123', code3: '123', code4: '123', code5: '123' }
  ]);
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    width: 100,
    enableDrag: true,
    editable: true,
    render: (val) => <Input />
  }, {
    title: 'code1',
    dataIndex: 'code1',
    width: 100,
    enableDrag: true,
    // editable: true,
    render: (val) => <span>{val}</span>
  }, {
    title: 'code2',
    dataIndex: 'code2',
    width: 100,
    enableDrag: true,
    // editable: true,
    render: (val) => <span>{val}</span>
  }, {
    title: 'code3',
    dataIndex: 'code3',
    width: 100,
    enableDrag: true,
    // editable: true,
    render: (val) => <span>{val}</span>
  }, {
    title: 'code4',
    dataIndex: 'code4',
    width: 100,
    enableDrag: true,
    // editable: true,
    render: (val) => <span>{val}</span>
  }, {
    title: 'code5',
    dataIndex: 'code5',
    // editable: true,
    render: (val) => <span>{val}</span>
  }]
  // const onChange = (e) => {
  //   console.log(e.target.value);
  // }
  const rowSelections = {
    type: 'radio',
    columnWidth: 40,
  }
  const Ttitle = () => "hhh"
  return (
    <>
      {/* <HelloComponent userName="hhh" /> */}
      <TableCompos
        rowKey="code1"
        dataSource={dataSource}
        columns={columns}
        title={Ttitle}
        bordered={true}
        rowSelection={rowSelections}
        scroll={{ x: 100 }}
      />
    </>
  )
}