// import { useLocation, useHistory } from 'umi';
// import { useEffect } from 'react';
import ProForm, {
  ProFormText,
  ProFormList,
  ProFormDigit,
  ProFormSelect,
  ProFormGroup,
} from '@ant-design/pro-form';

// interface Location {
//     query?: object;
// }

export default () => {
  // useEffect(() => {
  //     console.log('useEffect');
  // }, []);

  // const { query } = useLocation() as Location;
  // console.log(query);

  // const history = useHistory();
  // console.log(history);

  const testPostApi = () => {
    new Promise((resolve) => {
      fetch('http://localhost:8080/a/form', {
        method: 'POST',
        body: JSON.stringify({ name: 'mai' }),
      }).then(function (response) {
        resolve(response.json());
      });
    }).then(() => {});
  };

  return (
    <ProForm<{
      name: string;
    }>
      onFinish={async () => {
        // await waitTime(500);
        // console.log(values);
        // message.success('提交成功');
        await new Promise((resolve) => {
          fetch('http://localhost:8080/a/form?company=xxx&name=mai').then(function (response) {
            resolve(response.json());
          });
        }).then((res) => console.log(res));
      }}
      params={{}}
    >
      <ProFormText
        id="company"
        width="md"
        name="company"
        label="公司"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
        rules={[
          {
            required: true,
          },
        ]}
      />
      <ProFormList
        name="users"
        label="用户信息"
        initialValue={[
          {
            name: '',
            age: '',
            sex: '',
          },
        ]}
        creatorButtonProps={false}
        itemRender={() => {
          return (
            <ProFormGroup>
              <ProFormText
                id="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="name"
                label="姓名"
              />
              <ProFormDigit name="age" label="年龄" width="sm" />
              <ProFormSelect
                label="性别"
                name="sex"
                width="xs"
                valueEnum={{
                  man: '男性',
                  woman: '女性',
                }}
              />
            </ProFormGroup>
          );
        }}
      >
        {/* <ProFormText
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    name="name"
                    label="姓名"
                />
                <ProFormDigit name="age" label="年龄" width="sm" />
                <ProFormSelect
                    label="性别"
                    name="sex"
                    width="xs"
                    valueEnum={{
                        man: '男性',
                        woman: '女性',
                    }}
                /> */}
      </ProFormList>
      <div style={{ padding: '0 0 20px' }}>
        <button id="post-btn" onClick={testPostApi}>
          POST TEST
        </button>
      </div>
    </ProForm>
  );
};
