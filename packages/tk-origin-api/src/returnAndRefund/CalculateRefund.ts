export const CALCULATE_REFUND_URL_PATH = '/return_refund/202309/refunds/calculate';,export const CALCULATE_REFUND_METHOD = '1';


/**
 * 接口名称：Calculate Refund
 * 接口标识：Calculate Refund
 * 接口使用场景：Calculate Refund
 **/
export interface CalculateRefundRequestInterface {
  /**
   * @description: TikTok Shop order id.
   * @type: string
   **/
  order_id: string;

  /**
   * @description: Request type<br>- CANCEL<br>- REFUND<br>- RETURN_AND_REFUND<br>Note: different request types are used for different aftersales scenarios. Also, different request types might have different refund amounts, because the refund amount calculation policy is different.
   * @type: string
   **/
  request_type: string;

  /**
   * @description: How buyer ships items to seller when in a return request, could be:<br>- PLATFORM<br>- BUYER_ARRANGE
   * @type: string
   **/
  shipment_type?: string;

  /**
   * @description: Which handover method buyer chooses to use when returning goods to seller by platform<br>- DROP_OFF: buyer drops off the parcel in logistics service collect point.<br>- PICKUP: logistics service picks up the buyer package.
   * @type: string
   **/
  handover_method?: string;

  /**
   * @description: Seller's reason to create a return，all available reasons, please reference to API overview.
   * @type: string
   **/
  reason_name: string;

  /**
   * @description: TikTok Shop order line item ids.
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: skus
   * @type: []object
   **/
  skus?: []object;
}


/**
 * @description skus
 **/
export interface CalculateRefundSkusRequestInterface {
  /**
   * @description: Quantity seller wants to create a return request.
   * @type: string
   **/
  ^sku_id: string;

  /**
   * @description: Sku id seller wants to create a return request.
   * @type: int
   **/
  ^quantity: int;
}


/**
 * 接口名称：Calculate Refund
 * 接口标识：Calculate Refund
 * 接口使用场景：Calculate Refund
 **/
export interface CalculateRefundRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Calculate Refund
 * 接口标识：Calculate Refund
 * 接口使用场景：Calculate Refund
 **/
export interface CalculateRefundResponseInterface {
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
export interface CalculateRefundDataResponseInterface {
  /**
   * @description: Refund amount to buyer.
   * @type: object
   **/
  ^order_refund_amount?: object;
}


/**
 * @description Refund amount to buyer.
 **/
export interface CalculateRefundDataOrderRefundAmountResponseInterface {
  /**
   * @description: Currency for payment.
   * @type: string
   **/
  ^^currency?: string;

  /**
   * @description: Total amount refund to buyer.
   * @type: string
   **/
  ^^refund_total?: string;

  /**
   * @description: Total price of item be returned.
   * @type: string
   **/
  ^^refund_subtotal?: string;

  /**
   * @description: Shipping fee refund to buyer.
   * @type: string
   **/
  ^^refund_shipping_fee?: string;

  /**
   * @description: Tax returned to buyer.
   * @type: string
   **/
  ^^refund_tax?: string;

  /**
   * @description: Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules.
   * @type: string
   **/
  ^^retail_delivery_fee?: string;
}
