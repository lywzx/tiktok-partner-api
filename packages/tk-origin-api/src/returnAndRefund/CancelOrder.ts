export const CANCEL_ORDER_URL_PATH = '/return_refund/202309/cancellations';,export const CANCEL_ORDER_METHOD = '1';


/**
 * 接口名称：Cancel Order
 * 接口标识：Cancel Order
 * 接口使用场景：Cancel Order
 **/
export interface CancelOrderRequestInterface {
  /**
   * @description: TikTok Shop order id
   * @type: string
   **/
  order_id: string;

  /**
   * @description: List of SKU to cancel
   * @type: []object
   **/
  skus?: []object;

  /**
   * @description: List of order line item ids to cancel. In the US and UK markets, when an item is out of stock, partial cancellation on the single item level is supported. To initiate a partial cancellation, specify the item's order line id.
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: Reason to cancel the order <br>Please see "Return API Overview" for a list of reasons a seller can select to cancel the order. 
   * @type: string
   **/
  cancel_reason: string;
}


/**
 * @description List of SKU to cancel
 **/
export interface CancelOrderSkusRequestInterface {
  /**
   * @description: The SKU id to cancel
   * @type: string
   **/
  ^sku_id: string;

  /**
   * @description: The quantity of SKU to cancel
   * @type: int
   **/
  ^quantity: int;
}


/**
 * 接口名称：Cancel Order
 * 接口标识：Cancel Order
 * 接口使用场景：Cancel Order
 **/
export interface CancelOrderRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Cancel Order
 * 接口标识：Cancel Order
 * 接口使用场景：Cancel Order
 **/
export interface CancelOrderResponseInterface {
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
export interface CancelOrderDataResponseInterface {
  /**
   * @description: The identifier of a specific order cancellation.
   * @type: string
   **/
  ^cancel_id?: string;

  /**
   * @description: The status of an order cancellation request. <br>Available values:<br>- CANCELLATION_REQUEST_PENDING<br>- CANCELLATION_REQUEST_SUCCESS<br>- CANCELLATION_REQUEST_CANCEL<br>- CANCELLATION_REQUEST_COMPLETE
   * @type: string
   **/
  ^cancel_status?: string;
}
