export const SEARCH_CANCELLATIONS_URL_PATH = '/return_refund/202309/cancellations/search';,export const SEARCH_CANCELLATIONS_METHOD = '1';


/**
 * 接口名称：Search Cancellations
 * 接口标识：Search Cancellations
 * 接口使用场景：Search Cancellations
 **/
export interface SearchCancellationsRequestInterface {
  /**
   * @description: List of order cancellations ids
   * @type: string[]
   **/
  cancel_ids?: string[];

  /**
   * @description: List of TikTok Shop order ids
   * @type: string[]
   **/
  order_ids?: string[];

  /**
   * @description: List of TikTok Shop buyer user ids
   * @type: string[]
   **/
  buyer_user_ids?: string[];

  /**
   * @description: List of cancel type, which is enum type. <br>Available values:<br>- CANCEL<br>- BUYER_CANCEL
   * @type: string[]
   **/
  cancel_types?: string[];

  /**
   * @description: List of order cancellation status, which is enum type. <br>Available values:<br>- CANCELLATION_REQUEST_PENDING<br>- CANCELLATION_REQUEST_SUCCESS<br>- CANCELLATION_REQUEST_CANCEL<br>- CANCELLATION_REQUEST_COMPLETE<br>Please see "API Overview" for more information about these status.
   * @type: string[]
   **/
  cancel_status?: string[];

  /**
   * @description: Create time greater than or equal to
   * @type: int
   **/
  create_time_ge?: int;

  /**
   * @description: Create time less than
   * @type: int
   **/
  create_time_lt?: int;

  /**
   * @description: Update time greater than or equal to
   * @type: int
   **/
  update_time_ge?: int;

  /**
   * @description: Update time less than
   * @type: int
   **/
  update_time_lt?: int;

  /**
   * @description: BCP 47 locale identifier. Default value is "en"<br>Refer http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for more information. <br>Some fields, such as reason_text , are multilingual. Use locale to set the  language of response. 
   * @type: string
   **/
  locale?: string;
}


/**
 * 接口名称：Search Cancellations
 * 接口标识：Search Cancellations
 * 接口使用场景：Search Cancellations
 **/
export interface SearchCancellationsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Fields to sort order by. <br>Available values:<br>- create_time (default)<br>- update_time
   * @type: string
   **/
  sort_field?: string;

  /**
   * @description: Sort order by.<br>Available values: <br>- ASC (default)<br>- DESC
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: Size of one page<br>Default 10<br>Upper limit 50
   * @type: string
   **/
  page_size?: string;

  /**
   * @description: Token of pagination<br>- Should be empty on the first page<br>- Get next page token from response
   * @type: string
   **/
  page_token?: string;
}


/**
 * 接口名称：Search Cancellations
 * 接口标识：Search Cancellations
 * 接口使用场景：Search Cancellations
 **/
export interface SearchCancellationsResponseInterface {
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
export interface SearchCancellationsDataResponseInterface {
  /**
   * @description: List of order cancellations
   * @type: []object
   **/
  ^cancellations?: []object;
}


/**
 * @description List of order cancellations
 **/
export interface SearchCancellationsDataCancellationsResponseInterface {
  /**
   * @description: TikTok Shop order id. Contains multiple order line item ids
   * @type: string
   **/
  ^^order_id?: string;

  /**
   * @description: Cancel type<br>Available values:<br>- CANCEL: Cancel by seller or system<br>- BUYER_CANCEL: Cancel by buyer. Need to be approved by seller or system. 
   * @type: string
   **/
  ^^cancel_type?: string;

  /**
   * @description: Cancel status, available values:<br>- CANCELLATION_REQUEST_PENDING<br>- CANCELLATION_REQUEST_SUCCESS<br>- CANCELLATION_REQUEST_CANCELLED<br>- CANCELLATION_REQUEST_COMPLETE
   * @type: string
   **/
  ^^cancel_status?: string;

  /**
   * @description: Order cancellation initiated by<br>- BUYER<br>- SELLER<br>- SYSTEM
   * @type: string
   **/
  ^^role?: string;

  /**
   * @description: Reason for order cancellation
   * @type: string
   **/
  ^^cancel_reason?: string;

  /**
   * @description: Reason for order cancellation, in another language <br>You can change language using the locale field in the request parameter.
   * @type: string
   **/
  ^^cancel_reason_text?: string;

  /**
   * @description: Return create time, unix tiemstamp
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Return update time, unix tiemstamp
   * @type: int
   **/
  ^^update_time?: int;

  /**
   * @description: Seller's next action and deadline
   * @type: []object
   **/
  ^^seller_next_action_response?: []object;

  /**
   * @description: Total refund amount to the buyer
   * @type: object
   **/
  ^^refund_amount?: object;

  /**
   * @description: Cancellation line items
   * @type: []object
   **/
  ^^cancel_line_items?: []object;

  /**
   * @description: Total count of filtered order cancellations
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: Page token to query next page orders. The last page is an empty string.
   * @type: string
   **/
  ^next_page_token?: string;
}


/**
 * @description Seller's next action and deadline
 **/
export interface SearchCancellationsDataCancellationsSellerNextActionResponseResponseInterface {
  /**
   * @description: Seller's next action<br>Available values:<br>- SELLER_RESPOND_CANCEL
   * @type: string
   **/
  ^^^action?: string;

  /**
   * @description: The timestamp indicates the deadline for when seller must perform the next action
   * @type: int
   **/
  ^^^deadline?: int;
}


/**
 * @description Total refund amount to the buyer
 **/
export interface SearchCancellationsDataCancellationsRefundAmountResponseInterface {
  /**
   * @description: Currency for payment
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: Total refund amount to the buyer
   * @type: string
   **/
  ^^^refund_total?: string;

  /**
   * @description: Items refund amount to buyer
   * @type: string
   **/
  ^^^refund_subtotal?: string;

  /**
   * @description: Shipping fee refund amount to buyer
   * @type: string
   **/
  ^^^refund_shipping_fee?: string;

  /**
   * @description: Tax refund amount to buyer
   * @type: string
   **/
  ^^^refund_tax?: string;

  /**
   * @description: Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules.<br>
   * @type: string
   **/
  ^^^retail_delivery_fee?: string;
}


/**
 * @description Cancellation line items
 **/
export interface SearchCancellationsDataCancellationsCancelLineItemsResponseInterface {
  /**
   * @description: Cancellation line item id
   * @type: string
   **/
  ^^^cancel_line_item_id?: string;

  /**
   * @description: Order line item id
   * @type: string
   **/
  ^^^order_line_item_id?: string;

  /**
   * @description: SKU id
   * @type: string
   **/
  ^^^sku_id?: string;

  /**
   * @description: SKU name
   * @type: string
   **/
  ^^^sku_name?: string;

  /**
   * @description: Product image object. Contains information of product images.
   * @type: object
   **/
  ^^^product_image?: object;

  /**
   * @description: Product name
   * @type: string
   **/
  ^^^product_name?: string;

  /**
   * @description: SKU name defined by seller
   * @type: string
   **/
  ^^^seller_sku?: string;

  /**
   * @description: Refund amount information 
   * @type: object
   **/
  ^^^refund_amount?: object;

  /**
   * @description: The identifier of a specific order cancellation.
   * @type: string
   **/
  ^^cancel_id?: string;
}


/**
 * @description Product image object. Contains information of product images.
 **/
export interface SearchCancellationsDataCancellationsCancelLineItemsProductImageResponseInterface {
  /**
   * @description: URL of the product image
   * @type: string
   **/
  ^^^^url?: string;

  /**
   * @description: Image width of the product, unit px
   * @type: int
   **/
  ^^^^width?: int;

  /**
   * @description: Image height of the product, unit px
   * @type: int
   **/
  ^^^^height?: int;
}


/**
 * @description Refund amount information 
 **/
export interface SearchCancellationsDataCancellationsCancelLineItemsRefundAmountResponseInterface {
  /**
   * @description: Currency for payment
   * @type: string
   **/
  ^^^^currency?: string;

  /**
   * @description: Total refund amount to buyer
   * @type: string
   **/
  ^^^^refund_total?: string;

  /**
   * @description: Items refund amount to buyer
   * @type: string
   **/
  ^^^^refund_subtotal?: string;

  /**
   * @description: Shipping fee refund amount to buyer
   * @type: string
   **/
  ^^^^refund_shipping_fee?: string;

  /**
   * @description: Tax refund amount to buyer
   * @type: string
   **/
  ^^^^refund_tax?: string;

  /**
   * @description: Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules.<br>
   * @type: string
   **/
  ^^^^retail_delivery_fee?: string;
}
