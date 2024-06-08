export const SPLIT_ORDERS_URL_PATH = '/fulfillment/202309/orders/{order_id}/split';,export const SPLIT_ORDERS_METHOD = '1';


/**
 * 接口名称：Split Orders
 * 接口标识：Split Orders
 * 接口使用场景：Split Orders
 **/
export interface SplitOrdersRequestInterface {
  /**
   * @description: splittable groups
   * @type: []object
   **/
  splittable_groups: []object;
}


/**
 * @description splittable groups
 **/
export interface SplitOrdersSplittableGroupsRequestInterface {
  /**
   * @description: A unique identifier designated by the developer. This identifier will represent a group of items that will be split into a new package. Once split is confirmed, the platform will assign a new package ID for this group of items.<br>If you input 123 as request, the response will return 123 as your unique identification. The seller uses this field to label each group of items that have been split, and the platform will assign new package IDs to them. 
   * @type: string
   **/
  ^id: string;

  /**
   * @description: The order line item ids that need to be split into this group.
   * @type: string[]
   **/
  ^order_line_item_ids: string[];
}


/**
 * 接口名称：Split Orders
 * 接口标识：Split Orders
 * 接口使用场景：Split Orders
 **/
export interface SplitOrdersRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Split Orders
 * 接口标识：Split Orders
 * 接口使用场景：Split Orders
 **/
export interface SplitOrdersResponseInterface {
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
export interface SplitOrdersDataResponseInterface {
  /**
   * @description: The number of packages returned is dependent on the number of splittable_group_ids you sent in the request.
   * @type: []object
   **/
  ^packages?: []object;
}


/**
 * @description The number of packages returned is dependent on the number of splittable_group_ids you sent in the request.
 **/
export interface SplitOrdersDataPackagesResponseInterface {
  /**
   * @description: The id of split group in request body.
   * @type: string
   **/
  ^^splittable_group_id?: string;

  /**
   * @description: Package id after success split. Use this new package id to call Ship Package API to ship the package.
   * @type: string
   **/
  ^^id?: string;
}
