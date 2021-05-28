import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { message } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default () => {
    return (
        <ProCard style={{ maxWidth: 800 }}>
            <ProForm
                onFinish={async (values: any) => {
                    await waitTime(500);
                    console.log(values);
                    message.success('提交成功');
                }}
                layout='horizontal'
            >
                <ProFormText
                    {...layout}
                    width="md"
                    name="name"
                    label="company"
                    placeholder="请输入名称"
                />
                <ProFormText
                    {...layout}
                    width="md"
                    name="brand"
                    label="brand"
                    placeholder="请输入品牌"
                />
            </ProForm>
        </ProCard>
    )
}