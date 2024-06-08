export const GET_ACTIVE_SHOPS_URL_PATH = '/seller/202309/shops';,export const GET_ACTIVE_SHOPS_METHOD = '2';


/**
 * 接口名称：Get Active Shops
 * 接口标识：Get Active Shops
 * 接口使用场景：Get Active Shops
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetActiveShopsRequestInterface {

}


/**
 * 接口名称：Get Active Shops
 * 接口标识：Get Active Shops
 * 接口使用场景：Get Active Shops
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetActiveShopsRequestInterface {

}


/**
 * 接口名称：Get Active Shops
 * 接口标识：Get Active Shops
 * 接口使用场景：Get Active Shops
 **/
export interface GetActiveShopsResponseInterface {
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
export interface GetActiveShopsDataResponseInterface {
  /**
   * @description: The seller's all active shops.
   * @type: []object
   **/
  ^shops?: []object;
}


/**
 * @description The seller's all active shops.
 **/
export interface GetActiveShopsDataShopsResponseInterface {
  /**
   * @description: The ID of the shop.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The region/market of the shop.
   * @type: string
   **/
  ^^region?: string;
}
