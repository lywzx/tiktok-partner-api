export const CREATE_RETURN_URL_PATH = '/return_refund/202309/returns';,export const CREATE_RETURN_METHOD = '1';


/**
 * 接口名称：Create Return
 * 接口标识：Create Return
 * 接口使用场景：Create Return
 **/
export interface CreateReturnRequestInterface {
  /**
   * @description: Tiktok Shop order id
   * @type: string
   **/
  order_id: string;

  /**
   * @description: Skus
   * @type: []object
   **/
  skus?: []object;

  /**
   * @description: Order line ids seller wants to create return request, should use order line ids to create return request if had split parcel to multiple packages, default value is all order line ids in the order if not input order_line_ids and skus
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: Seller's reason to create a return
   * @type: string
   **/
  return_reason: string;

  /**
   * @description: Which type to create: <br>- REFUND<br>- RETURN_AND_REFUND
   * @type: string
   **/
  return_type: string;

  /**
   * @description: Total refund amount to the buyer. <br>The total refund amount can not exceed the refundable amount
   * @type: string
   **/
  refund_total?: string;

  /**
   * @description: Currency for refund which should be same as currency in TikTok Ship Order.
   * @type: string
   **/
  currency?: string;

  /**
   * @description: How buyer ships items to seller when in a return request, could be:<br>- PLATFORM<br>- BUYER_ARRANGE
   * @type: string
   **/
  shipment_type?: string;

  /**
   * @description: Which handover method buyer chooses to use when returning goods to seller by platform<br>- DROP_OFF<br>- PICKUP
   * @type: string
   **/
  handover_method?: string;
}


/**
 * @description Skus
 **/
export interface CreateReturnSkusRequestInterface {
  /**
   * @description: Sku id seller wants to create a return request
   * @type: string
   **/
  ^sku_id: string;

  /**
   * @description: Quantity seller wants to create a return request
   * @type: int
   **/
  ^quantity: int;
}


/**
 * 接口名称：Create Return
 * 接口标识：Create Return
 * 接口使用场景：Create Return
 **/
export interface CreateReturnRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Idempotency Key
   * @type: string
   **/
  idempotency_key?: string;
}


/**
 * 接口名称：Create Return
 * 接口标识：Create Return
 * 接口使用场景：Create Return
 **/
export interface CreateReturnResponseInterface {
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
export interface CreateReturnDataResponseInterface {
  /**
   * @description: The identifier of a specific return request.
   * @type: string
   **/
  ^return_id?: string;

  /**
   * @description: Return status, available values:<br>- RETURN_OR_REFUND_REQUEST_PENDING: Request is pending, needs to be approved by seller or platform<br>- REFUND_OR_RETURN_REQUEST_REJECT: Seller rejected the request<br>- AWAITING_BUYER_SHIP: Waiting buyer to ship items to seller, if exceed the deadline, request will be closed by platform<br>- BUYER_SHIPPED_ITEM: Buyer has shipped items to seller.<br>- REJECT_RECEIVE_PACKAGE: Seller reject return package<br>- RETURN_OR_REFUND_REQUEST_SUCCESS: The refund/return request is successful, buyer will be refunded.<br>- RETURN_OR_REFUND_REQUEST_CANCEL: The request has been cancelled by buyer or system<br>- RETURN_OR_REFUND_REQUEST_COMPLETE: The request is successful, and the amount has been refunded.
   * @type: string
   **/
  ^return_status?: string;
}
