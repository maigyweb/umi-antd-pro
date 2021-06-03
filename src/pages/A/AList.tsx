import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { stringify } from 'querystring';
import useUrlState from '@ahooksjs/use-url-state';
import { useState, useEffect } from 'react';

const loadAListAPi = (params: object | undefined) => {
  const args = params ? `?${stringify(params)}` : '';
  return new Promise((resolve) => {
    fetch(`http://localhost:8080/api/a/list${args}`).then((response: any) => {
      resolve(response.json());
    });
  })
    .then((res: any) => {
      if (res?.code === 0) {
        return res?.data;
      }

      return new Promise((_, reject) => {
        reject(res?.errMessage);
      });
    })
    .then((res) => res);
};

type ListItem = {
  id: number;
  name: string;
  price: number;
};

const columns: ProColumns<ListItem>[] = [
  {
    dataIndex: 'id',
    title: 'id',
    search: false,
  },
  {
    dataIndex: 'name',
    title: 'name',
  },
  {
    dataIndex: 'price',
    title: 'price',
    search: false,
    render: (text) => `￥${text}`,
  },
];

export default () => {
  const [state, setState] = useUrlState(undefined);
  const [list, setList] = useState([]);

  const handleLoadList = async () => {
    const data = await loadAListAPi(state);
    setList(data || []);
  };

  useEffect(() => {
    handleLoadList();

    alert(list);
  }, []);

  return (
    <ProTable
      style={{ width: '100%' }}
      request={async (params) => {
        const data = await loadAListAPi(params);
        return Promise.resolve({
          data: data?.listData || [],
          success: true,
        });
      }}
      columns={columns}
      rowKey="id"
      onSubmit={(params) => {
        setState(params);
      }}
    ></ProTable>
  );
};
