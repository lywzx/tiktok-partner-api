import crypto from 'crypto';
import { constants } from '../constants';
import {AuthorizedConfig} from "./authorizd";

/**
 * 获取当前的 Unix 时间戳，单位是秒
 */
export function getTimestamp(): number {
  return Math.floor(Date.now() / 1000) - 100;
}

/**
 * 使用 SHA-256 和给定的密钥进行 HMAC 加密
 * @param plainText 明文字符串
 * @param secretKey 用于加密的密钥
 */
export function sha256Decoded(plainText: string, secretKey: string): string {
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(plainText);
  return hmac.digest('hex');
}

// 配置对象的接口，包含 app_key、app_secret 和可选的版本和时间戳
export interface Config extends AuthorizedConfig {
  version?: string;
  timestamp?: number;
}

/**
 * 生成签名
 * @param config 配置对象，包含 app_key、app_secret 等参数
 * @param path 请求路径
 * @returns 包含签名和时间戳的对象
 */
export function signature(config: Config = {app_key: '', app_secret: ''}, path: string = ''): { signature: string, timestamp: number } {
  let input = '';
  const getKeyValue = getKeyValueFn(config);
  let timestamp = getTimestamp();  // 获取当前时间戳
  if (config.timestamp) {
    timestamp = config.timestamp;  // 如果配置中有指定时间戳，则使用指定时间戳
  }
  let formatUrl = '';
  // 构建带有时间戳和版本号的 URL
  if (path.includes('?')) {
    formatUrl = `${path}&${getKeyValue}&timestamp=${timestamp}&version=${config.version ? config.version : constants.version}`;
  } else {
    formatUrl = `${path}?${getKeyValue}&timestamp=${timestamp}&version=${config.version ? config.version : constants.version}`;
  }
  const getBaseUrl = getBaseUrlFn(formatUrl);
  const stringToObject = stringToObjectFn(getBaseUrl.query);
  const key = sortKeyObjectFn(stringToObject);
  const tiktokPathHash = getPathFn(formatUrl);

  // 将参数拼接成签名字符串
  for (let index = 0; index < key.length; index += 1) {
    input += key[index] + stringToObject[key[index]];
  }
  const plainText = config.app_secret + tiktokPathHash + decodeURIComponent(input) + config.app_secret;
  const signature = sha256Decoded(plainText, config.app_secret);
  return {
    signature,
    timestamp,
  };
}

/**
 * 获取 URL 中的基础部分和查询部分
 * @param url 完整 URL 地址
 * @returns 基础 URL 和查询字符串
 */
export function getBaseUrlFn(url: string = ''): { baseUrl: string, query: string } {
  const parts = url.split('?');
  return {
    baseUrl: parts[0] + '?',
    query: parts[1],
  };
}

/**
 * 获取 URL 中的路径部分
 * @param url 完整 URL 地址
 * @returns 路径部分
 */
export function getPathFn(url: string = ''): string {
  const indexOfDotCom = url.indexOf('.com');
  const indexOfQuestionMark = url.indexOf('?', indexOfDotCom);
  return url.substring(indexOfDotCom, indexOfQuestionMark);
}

/**
 * 排序对象中的键
 * @param pathObj 参数对象
 * @returns 排序后的键名数组
 */
export function sortKeyObjectFn(pathObj: Record<string, any> = {}): string[] {
  const declareKeyObj = ['app_secret', 'token', 'access_token', 'sign'];
  const keys = Object.keys(pathObj).filter((k) => !declareKeyObj.includes(k));
  return keys.sort((a, b) => a.localeCompare(b));  // 按字母排序
}

/**
 * 将查询字符串转化为对象
 * @param string 查询字符串
 * @returns 键值对对象
 */
export function stringToObjectFn(string: string = ''): Record<string, string> {
  const keyValuePairs = string.split('&');
  const result: Record<string, string> = {};
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split('=');
    result[key] = value;
  });
  return result;
}

/**
 * 将对象转化为查询字符串
 * @param obj 配置对象
 * @returns 查询字符串
 */
export function getKeyValueFn(obj: Record<string, any> = {}): string {
  let result = '';
  let index = 1;
  const count = Object.keys(obj).length;
  // 遍历对象，将键值对拼接成查询字符串
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (index === count) {
        result += `${key}=${obj[key]}`;
        index++;
      } else {
        result += `${key}=${obj[key]}&`;
        index++;
      }
    }
  }
  return result;
}

/**
 * 检查配置对象是否包含必要的参数
 * @param config 配置对象
 * @returns 错误信息或空字符串
 */
export function checkConfig(config: Record<string, any>): string {
  let error = '';
  if (!(config.app_key && config.app_secret)) {
    const compareArray = ['app_key', 'app_secret'];
    const keysArray = Object.keys(config);
    const missing = compareArray.filter(item => !keysArray.includes(item));
    error = `config must have ${missing.toString()}`;
  }
  return error;
}

/**
 * 根据请求参数、路径和请求体生成签名
 * @param params 请求参数
 * @param path 请求路径
 * @param appSecret 应用密钥
 * @param body 请求体（可选）
 * @returns 包含签名和时间戳的对象
 */
export function signatureByAppSecret(params: Record<string, any> = {}, path: string = '', appSecret: string = '', body: Record<string, any> = {}): { signature: string, timestamp: number } {
  let input = '';
  let timestamp = getTimestamp();
  if (params.timestamp) {
    timestamp = params.timestamp;
  }
  const modParams: Record<string, string | number> = { ...params, timestamp };
  const key = sortKeyObjectFn(modParams);
  for (let index = 0; index < key.length; index += 1) {
    input += key[index] + modParams[key[index]];
  };
  input = path + input;
  input = Object.keys(body).length > 0 ? input + JSON.stringify(body) : input;
  const plainText = appSecret + input + appSecret;
  const signature = sha256Decoded(plainText, appSecret);
  return {
    signature: signature,
    timestamp,
  };
}

/**
 * 从 URL 中提取路径和查询字符串，生成签名
 * @param url 完整 URL 地址
 * @param appSecret 应用密钥
 * @param body 请求体（可选）
 * @returns 包含签名和时间戳的对象
 */
export function signByUrl(url: string = '', appSecret: string = '', body: Record<string, any> = {}): { signature: string, timestamp: number } {
  const { path, query } = getPathQueryFromUrlFn(decodeURIComponent(url));
  const params = parseQueryStringFn(query);
  return signatureByAppSecret(params, path, appSecret, body);
}

/**
 * 从 URL 中提取路径和查询字符串
 * @param url 完整 URL 地址
 * @returns 包含路径和查询字符串的对象
 */
export function getPathQueryFromUrlFn(url: string = ''): { path: string, query: string } {
  const parts = url.split('?');
  const match = url.match(/\.com(.*?)\?/);
  return {
    path: match![1],
    query: parts[1],
  };
}

/**
 * 解析查询字符串为对象
 * @param queryString 查询字符串
 * @returns 键值对对象
 */
export function parseQueryStringFn(queryString: string): Record<string, string> {
  const obj: Record<string, string> = {};
  queryString.split('&').forEach((keyValue) => {
    const [key, value] = keyValue.split('=');
    obj[key] = value;
  });
  return obj;
}

/**
 * 检查 URL 和 appSecret 是否有效
 * @param url URL 地址
 * @param appSecret 应用密钥
 * @returns 错误信息或空字符串
 */
export function checkUrl(url: string, appSecret: string): string {
  let error = '';
  if (!url) {
    error = `url is required`;
  }
  if (!appSecret) {
    error = `appSecret is required`;
  }
  return error;
}
