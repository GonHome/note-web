import { KVMap } from '../models/models';

export const DATASOURCE_MANAGE: string = 'dataSource/manage/:path*';
export const LOGIN: string = 'login';
export const paths = [
  { text: '大数据标准化治理平台', icon: 'graph', path: DATASOURCE_MANAGE },
  { text: '登录', icon: 'graph', path: LOGIN },
];

export const routes: KVMap = {
};

export const headRoutes: KVMap = {
};
