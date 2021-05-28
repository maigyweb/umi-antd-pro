import { useLocation, useHistory } from 'umi';
import { useEffect } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormList, ProFormDigit, ProFormSelect, ProFormGroup } from '@ant-design/pro-form';

interface Location {
    query?: object;
}

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default () => {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    const { query } = useLocation() as Location;
    console.log(query);

    const history = useHistory();
    console.log(history);

    return (
        <ProForm<{
            name: string;
        }>
            onFinish={async (values: any) => {
                await waitTime(500);
                console.log(values);
                message.success('提交成功');
            }}
            params={{}}
            >
            <ProFormText
                width="md"
                name="name"
                label="company"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
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
                    {
                        name: '',
                        age: '',
                        sex: '',
                    },
                ]}
                creatorButtonProps={false}
                itemRender={(action, record) => {
                    console.log(record)
                    return (
                        <ProFormGroup>
                            <ProFormText
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
                    )
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
        </ProForm>
    )
}