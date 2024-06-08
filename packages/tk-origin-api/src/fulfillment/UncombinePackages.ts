export const UNCOMBINE_PACKAGES_URL_PATH = '/fulfillment/202309/packages/{package_id}/uncombine';,export const UNCOMBINE_PACKAGES_METHOD = '1';


/**
 * 接口名称：Uncombine Packages
 * 接口标识：Uncombine Packages
 * 接口使用场景：Uncombine Packages
 **/
export interface UncombinePackagesRequestInterface {
  /**
   * @description: TikTok Shop order id. Indicate the orders that need to be removed from the package. Please make sure the orders belong to the package.
   * @type: string[]
   **/
  order_ids?: string[];
}


/**
 * 接口名称：Uncombine Packages
 * 接口标识：Uncombine Packages
 * 接口使用场景：Uncombine Packages
 **/
export interface UncombinePackagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Uncombine Packages
 * 接口标识：Uncombine Packages
 * 接口使用场景：Uncombine Packages
 **/
export interface UncombinePackagesResponseInterface {
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
export interface UncombinePackagesDataResponseInterface {
  /**
   * @description: Package infomation
   * @type: []object
   **/
  ^packages?: []object;
}


/**
 * @description Package infomation
 **/
export interface UncombinePackagesDataPackagesResponseInterface {
  /**
   * @description: Package ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Order ID list
   * @type: string[]
   **/
  ^^order_ids?: string[];
}
