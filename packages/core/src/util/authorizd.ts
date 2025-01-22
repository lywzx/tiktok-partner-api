import { constants } from '../constants';

export interface AuthorizedConfig {
  app_key: string;
  app_secret: string;
}

/**
 * 根据授权码生成访问令牌的 URL
 * @param config 配置对象，包含 app_key 和 app_secret
 * @param authCode 授权码
 * @returns 生成的 URL
 */
export function generateTokenByAuthCodeUrl(config: AuthorizedConfig, authCode: string): string {
  return `${constants.generateTokenByAuthCodeUrl}?app_key=${config.app_key}&auth_code=${authCode}&app_secret=${config.app_secret}&grant_type=authorized_code`;
}

/**
 * 根据刷新令牌生成新的访问令牌的 URL
 * @param config 配置对象，包含 app_key 和 app_secret
 * @param refreshToken 刷新令牌
 * @returns 生成的 URL
 */
export function generateTokenByRefreshToken(config: AuthorizedConfig, refreshToken: string): string {
  return `${constants.generateTokenByRefreshTokenUrl}?app_key=${config.app_key}&app_secret=${config.app_secret}&refresh_token=${refreshToken}&grant_type=refresh_token`;
}
