export const GET_AUTHORIZED_SHOPS_URL_PATH = '/authorization/202309/shops';,export const GET_AUTHORIZED_SHOPS_METHOD = '2';


/**
 * 接口名称：Get Authorized Shops
 * 接口标识：Get Authorized Shops
 * 接口使用场景：Get Authorized Shops
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAuthorizedShopsRequestInterface {

}


/**
 * 接口名称：Get Authorized Shops
 * 接口标识：Get Authorized Shops
 * 接口使用场景：Get Authorized Shops
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAuthorizedShopsRequestInterface {

}


/**
 * 接口名称：Get Authorized Shops
 * 接口标识：Get Authorized Shops
 * 接口使用场景：Get Authorized Shops
 **/
export interface GetAuthorizedShopsResponseInterface {
  /**
   * @description: The success or failure status code returned in API response.
   * @type: int
   **/
  code?: int;

  /**
   * @description: The success or failure messages returned in API response. Reasons of failure will be described in the message.
   * @type: string
   **/
  message?: string;

  /**
   * @description: Request log
   * @type: string
   **/
  request_id?: string;

  /**
   * @description: Specific return information
   * @type: object
   **/
  data?: object;
}


/**
 * @description Specific return information
 **/
export interface GetAuthorizedShopsDataResponseInterface {
  /**
   * @description: Seller uses their TikTok Shop seller account to authorize developer. The list of object shows all shops authorized by a TikTok Shop seller to developer.
   * @type: []object
   **/
  ^shops?: []object;
}


/**
 * @description Seller uses their TikTok Shop seller account to authorize developer. The list of object shows all shops authorized by a TikTok Shop seller to developer.
 **/
export interface GetAuthorizedShopsDataShopsResponseInterface {
  /**
   * @description: TikTok Shop Id.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: TikTok Shop name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Region of  the shop.<br>The cross-border shop region (GB) is empty before it is approved, so if the following Seller statuses are<br>new create/reject/pending, the obtained region values are empty
   * @type: string
   **/
  ^^region?: string;

  /**
   * @description: Indicate the seller is "CROSS_BORDER" or "LOCAL".<br>Tiktok has both local sellers and cross-border sellers. For local sellers, one seller account has only one shop; for cross-border sellers, one seller account could have multiple shops in different country market.
   * @type: string
   **/
  ^^seller_type?: string;

  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response.<br>Required for cross-border shops, and optional for local shops.
   * @type: string
   **/
  ^^cipher?: string;

  /**
   * @description: TikTok Shop code.
   * @type: string
   **/
  ^^code?: string;
}
