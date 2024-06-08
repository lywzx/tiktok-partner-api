export const MARK_PACKAGE_AS_SHIPPED_URL_PATH = '/fulfillment/202309/orders/{order_id}/packages';,export const MARK_PACKAGE_AS_SHIPPED_METHOD = '1';


/**
 * 接口名称：Mark Package As Shipped
 * 接口标识：Mark Package As Shipped
 * 接口使用场景：Mark Package As Shipped
 **/
export interface MarkPackageAsShippedRequestInterface {
  /**
   * @description: Order line item ID list
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: Tracking number
   * @type: string
   **/
  tracking_number: string;

  /**
   * @description: Use Get Shipping Provider API to retrieve the shipping_provider_id for shipping providers.
   * @type: string
   **/
  shipping_provider_id: string;
}


/**
 * 接口名称：Mark Package As Shipped
 * 接口标识：Mark Package As Shipped
 * 接口使用场景：Mark Package As Shipped
 **/
export interface MarkPackageAsShippedRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Mark Package As Shipped
 * 接口标识：Mark Package As Shipped
 * 接口使用场景：Mark Package As Shipped
 **/
export interface MarkPackageAsShippedResponseInterface {
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
export interface MarkPackageAsShippedDataResponseInterface {
  /**
   * @description: TikTok Shop order ID
   * @type: string
   **/
  ^order_id?: string;

  /**
   * @description: Order line item ID
   * @type: string[]
   **/
  ^order_line_item_ids?: string[];

  /**
   * @description: Package ID
   * @type: string
   **/
  ^package_id?: string;

  /**
   * @description: warning message
   * @type: object
   **/
  ^warning?: object;
}


/**
 * @description warning message
 **/
export interface MarkPackageAsShippedDataWarningResponseInterface {
  /**
   * @description: Specific warning information
   * @type: string
   **/
  ^^message?: string;
}
