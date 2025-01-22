import axios from 'axios';
import * as Common from './common';
import * as Authorized from './authorizd';


interface TokenResponse {
  // 你可以根据实际返回数据的结构来完善这个接口
  data?: any;
}

/**
 * 生成签名
 * @param config
 * @param path
 */
function signature(config: Common.Config, path: string) {
  const error = Common.checkConfig(config);
  if (error) {
    return new Error(error);
  }
  if (!path) {
    return new Error('path is required');
  }
  return Common.signature(config, path);
}

/**
 * t
 * @param config
 * @param authCode
 */
async function authCodeToken(config: Common.Config, authCode: string): Promise<TokenResponse | Error> {
  const error = Common.checkConfig(config);
  if (error) {
    return new Error(error);
  }
  if (!authCode) {
    return new Error('authCode is required');
  }

  const url = Authorized.generateTokenByAuthCodeUrl(config, authCode);
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err: any) {
    return new Error(err.message);
  }
}

async function generateToken(config: Common.Config, refreshToken: string): Promise<TokenResponse | Error> {
  const error = Common.checkConfig(config);
  if (error) {
    return new Error(error);
  }
  if (!refreshToken) {
    return new Error('refreshToken is required');
  }

  const url = Authorized.generateTokenByRefreshToken(config, refreshToken);
  try {
    const res = await axios.get(url);
    return res.data.data ? res.data.data : res.data;
  } catch (err: any) {
    return new Error(err.message);
  }
}

function signByUrl(url: string, appSecret: string, body: object | string = {}) {
  const error = Common.checkUrl(url, appSecret);
  if (error) {
    return new Error(error);
  }
  if (typeof body === "string") {
    return Common.signByUrl(url, appSecret, JSON.parse(body));
  }
  return Common.signByUrl(url, appSecret, body);
}

export {
  signature,
  authCodeToken,
  generateToken,
  signByUrl,
};
