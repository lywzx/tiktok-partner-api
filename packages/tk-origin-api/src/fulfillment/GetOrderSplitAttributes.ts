export const GET_ORDER_SPLIT_ATTRIBUTES_URL_PATH = '/fulfillment/202309/orders/split_attributes';,export const GET_ORDER_SPLIT_ATTRIBUTES_METHOD = '2';


/**
 * 接口名称：Get Order Split Attributes
 * 接口标识：Get Order Split Attributes
 * 接口使用场景：Get Order Split Attributes
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetOrderSplitAttributesRequestInterface {

}


/**
 * 接口名称：Get Order Split Attributes
 * 接口标识：Get Order Split Attributes
 * 接口使用场景：Get Order Split Attributes
 **/
export interface GetOrderSplitAttributesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: TikTok Shop order IDs
   * @type: string[]
   **/
  order_ids: string[];
}


/**
 * 接口名称：Get Order Split Attributes
 * 接口标识：Get Order Split Attributes
 * 接口使用场景：Get Order Split Attributes
 **/
export interface GetOrderSplitAttributesResponseInterface {
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
export interface GetOrderSplitAttributesDataResponseInterface {
  /**
   * @description: Specific return information (could return multiple TikTok Shop order ids)
   * @type: []object
   **/
  ^split_attributes?: []object;
}


/**
 * @description Specific return information (could return multiple TikTok Shop order ids)
 **/
export interface GetOrderSplitAttributesDataSplitAttributesResponseInterface {
  /**
   * @description: TikTok Shop order ID.
   * @type: string
   **/
  ^^order_id?: string;

  /**
   * @description: - true: the order can be split into multiple packages <br>- false: the order can not be split into multiple packages
   * @type: bool
   **/
  ^^can_split?: bool;

  /**
   * @description: The reason why the order cannot be split. Only return this field when the can_split = false.
   * @type: string
   **/
  ^^reason?: string;
}
