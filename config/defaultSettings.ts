import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
  contentStyle?: object;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'My Ant-Design Pro',
  pwa: false,
  iconfontUrl: '',
  contentStyle: { padding: 30, display: 'flex', justifyContent: 'center' }
};

export type { DefaultSettings };

export default proSettings;
