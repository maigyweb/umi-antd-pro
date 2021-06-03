// import { useLocation, useHistory } from 'umi';
import { useThrottleEffect } from 'ahooks';
import { Form } from 'antd';
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

const loadDetail = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        company: 'google',
        users: [
          {
            name: '',
            age: 18,
            sex: 'man',
          },
        ],
      });
    }, 300);
  });
};

export default () => {
  // const { query } = useLocation() as Location;
  // console.log(query);

  // const history = useHistory();
  // console.log(history);

  const [form] = Form.useForm();

  const handleLoadDetail = async () => {
    const data = await loadDetail();
    form.setFieldsValue(data);
  };

  useThrottleEffect(() => {
    handleLoadDetail();

    return () => {
      alert('unmount');
    };
  }, []);

  const testPostApi = () => {
    return new Promise((resolve) => {
      fetch('http://localhost:8080/a/postform', {
        method: 'POST',
        body: JSON.stringify({ name: 'mai' }),
      }).then((response) => {
        resolve(response.json());
      });
    });
  };

  return (
    <ProForm<{
      name: string;
    }>
      onFinish={async () => {
        await new Promise((resolve) => {
          fetch('http://localhost:8080/a/getform?company=xxx&name=mai').then((response) => {
            resolve(response.json());
          });
        }).then();
      }}
      params={{}}
      form={form}
    >
      <ProFormText
        id="company"
        width="md"
        name="company"
        label="公司"
        tooltip="最长为 24 位"
        placeholder="请输入名称"
        rules={[{ required: true }]}
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
          rules={[{ required: true }]}
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
