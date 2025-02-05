export const constants = {
  version: '202212',
  generateTokenByAuthCodeUrl: 'https://auth.tiktok-shops.com/api/v2/token/get',
  generateTokenByRefreshTokenUrl: 'https://auth.tiktok-shops.com/api/v2/token/refresh',
} as const;

export type Constants = typeof constants;
