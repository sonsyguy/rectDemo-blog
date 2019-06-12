import request from '@/utils/request';

export default async function queryHome() {
  return request('/api/notices');
}
