import axios from 'axios';
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';
import { Exception } from './exception';
import { CategoryListItemInterface } from '../interface/category-list-item.interface';
import { promiseToCallback } from '../util';
import { ApiDetailInterface } from '../interface/api-detail.interface';
import { retry } from 'async';

const instance = axios.create({
  baseURL: 'https://partner.tiktokshop.com',
  timeout: 5000,
  headers: {
    Origin: 'https://partner.tiktokshop.com/',
    Referer: 'https://partner.tiktokshop.com/',
    Connection: 'keep-alive',
  },
  httpAgent: new HttpAgent(),
  httpsAgent: new HttpsAgent(),
});

instance.interceptors.response.use((value: any) => {
  const data = value.data || {};
  if (!data.code) {
    return value.data;
  } else {
    throw new Exception(value.data.errorMsg, value.data.errorCode);
  }
});

// 获取API的所有分类
export function getAllApiCategory(): Promise<CategoryListItemInterface[]> {
  return retry(5, (callback) => {
    const prs = instance.get('api/v1/document/tree?workspace_id=3&aid=359713&locale=zh-CN').then((value: any) => {
      return value.data.document_tree;
    });
    promiseToCallback(prs, callback);
  }) as any;
}

// 通过API的ID，来获取API详细信息
export function getApiDetailByApiId(documentId: string): Promise<ApiDetailInterface> {
  return retry(5, (callback) => {
    const prs = instance.get(`api/v1/document/api_meta?src_document_id=${documentId}&aid=359713&locale=zh-CN`).then(res => res.data.document_api_meta);
    return promiseToCallback(prs, callback);
  }) as any;
}
