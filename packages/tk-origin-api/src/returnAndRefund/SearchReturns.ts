export const SEARCH_RETURNS_URL_PATH = '/return_refund/202309/returns/search';,export const SEARCH_RETURNS_METHOD = '1';


/**
 * 接口名称：Search Returns
 * 接口标识：Search Returns
 * 接口使用场景：Search Returns
 **/
export interface SearchReturnsRequestInterface {
  /**
   * @description: List of return ids
   * @type: string[]
   **/
  return_ids?: string[];

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
   * @description: List of return types, which is enum type. <br>Available values:<br>- REFUND<br>- RETURN_AND_REFUND<br>- REPLACEMENT
   * @type: string[]
   **/
  return_types?: string[];

  /**
   * @description: List of return status, which is enum type. <br>The values could be:<br>- RETURN_OR_REFUND_REQUEST_PENDING: Buyer has initiated a return or refund request. The request is pending review by seller or system. <br>- REFUND_OR_RETURN_REQUEST_REJECT: The return or refund request was rejected. <br>- AWAITING_BUYER_SHIP: The return request was approved. The seller is waiting for the buyer to ship the approved items to the seller. If the buyer doesn't ship the items to the seller before the deadline, the platform will close the request.<br>- BUYER_SHIPPED_ITEM: Buyer has shipped the approved items to seller.<br>- REJECT_RECEIVE_PACKAGE: Seller inspected the returned items and rejected the return request. <br>- RETURN_OR_REFUND_REQUEST_SUCCESS: The return/refund request was successful. The buyer will be refunded.<br>- RETURN_OR_REFUND_REQUEST_CANCEL: The request has been cancelled by the buyer or system.<br>- RETURN_OR_REFUND_REQUEST_COMPLETE: The return/refund was processed successfully. The buyer has been refunded.
   * @type: string[]
   **/
  return_status?: string[];

  /**
   * @description: List of arbitration status, which is enum type. <br>Available values:<br>- IN_PROGRESS: The TikTok Shop platform operator is processing arbitration. Platform may request additional information from the seller.  <br>- SUPPORT_BUYER: The platform operator supports buyer<br>- SUPPORT_SELLER: The platform operator supports seller<br>- CLOSED: Arbitration is closed
   * @type: string[]
   **/
  arbitration_status?: string[];

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
 * 接口名称：Search Returns
 * 接口标识：Search Returns
 * 接口使用场景：Search Returns
 **/
export interface SearchReturnsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Fields to sort order by. <br>Available values:<br>- create_time (default value)<br>- update_time
   * @type: string
   **/
  sort_field?: string;

  /**
   * @description: Sort order by.<br>Available values:<br>- ASC (default value)<br>- DESC
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: Size of one page. <br>Default 10<br>Upper limit 50
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
 * 接口名称：Search Returns
 * 接口标识：Search Returns
 * 接口使用场景：Search Returns
 **/
export interface SearchReturnsResponseInterface {
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
export interface SearchReturnsDataResponseInterface {
  /**
   * @description: List of returns
   * @type: []object
   **/
  ^return_orders?: []object;
}


/**
 * @description List of returns
 **/
export interface SearchReturnsDataReturnOrdersResponseInterface {
  /**
   * @description: TikTok Shop order id. Contains multiple order line item ids
   * @type: string
   **/
  ^^order_id?: string;

  /**
   * @description: The identifier of a specific return.
   * @type: string
   **/
  ^^return_id?: string;

  /**
   * @description: Return type<br>Available values:<br>- REFUND: Seller will issue a returnless refund. The buyer is not required to send the items back to the seller.<br>- RETURN_AND_REFUND: Buyer is required to send the items back to the seller. The seller will need to review the condition of the returned items before a refund can be issued to the buyer. <br>- REPLACEMENT: The buyer requires the seller to replace the item(s)
   * @type: string
   **/
  ^^return_type?: string;

  /**
   * @description: Return status<br>Available values:<br>- RETURN_OR_REFUND_REQUEST_PENDING: Buyer has initiated a return or refund request. The request is pending review by seller or platform. <br>- REFUND_OR_RETURN_REQUEST_REJECT: The return or refund request was rejected. <br>- AWAITING_BUYER_SHIP: The return request was approved. The seller is waiting for the buyer to ship the approved items to the seller. If the buyer doesn't ship the items to the seller before the deadline, the platform will close the request.<br>- BUYER_SHIPPED_ITEM: Buyer has shipped the approved items to seller.<br>- REJECT_RECEIVE_PACKAGE: Seller inspected the returned items and rejected the return package. <br>- RETURN_OR_REFUND_REQUEST_SUCCESS: The return/refund request was approved. The buyer will be refunded.<br>- RETURN_OR_REFUND_REQUEST_CANCEL: The request has been cancelled by the buyer or system. <br>- RETURN_OR_REFUND_REQUEST_COMPLETE: The return/refund was processed successfully. The buyer has been refunded.<br>- REPLACEMENT_REQUEST_PENDING: Buyer has initiated a replacement request. The request is pending review by seller.<br>- REPLACEMENT_REQUEST_REJECT: Seller reject the buyer replacement request.<br>- REPLACEMENT_REQUEST_REFUND_SUCCESS: Buyer's replacement request was resolved by refund due to insufficient inventory.<br>- REPLACEMENT_REQUEST_CANCEL: Buyer canceled the replacement request.<br>- REPLACEMENT_REQUEST_COMPLETE: Seller has approved the buyer's replacement request, platform will generate a new order for seller to fulfill.
   * @type: string
   **/
  ^^return_status?: string;

  /**
   * @description: - IN_PROGRESS: The TikTok Shop platform operator is processing arbitration. Platform may request additional information from the seller.  <br>- SUPPORT_BUYER: The platform operator supports buyer<br>- SUPPORT_SELLER: The platform operator supports seller<br>- CLOSED: Arbitration is closed
   * @type: string
   **/
  ^^arbitration_status?: string;

  /**
   * @description: Return initiated by<br>- BUYER<br>- SELLER<br>- OPERATOR : TikTok Shop platform operator<br>- SYSTEM:  TikTok Shop system<br>Please see "API overview" to learn more about roles. 
   * @type: string
   **/
  ^^role?: string;

  /**
   * @description: Reason for return 
   * @type: string
   **/
  ^^return_reason?: string;

  /**
   * @description: Reason for return, in another language <br>You can change language using the locale field in the request parameter. 
   * @type: string
   **/
  ^^return_reason_text?: string;

  /**
   * @description: The shipment method buyer selected to send the item(s) back to seller<br>Available values:<br>- PLATFORM: Buyer will use TikTok Shop's shipping service to send the items back to seller. Use the handover_method field to see which handover method the buyer is using, drop_off or pickup. <br>- BUYER_ARRANGE: Buyer will arrange shipment to send the item(s) back to seller. 
   * @type: string
   **/
  ^^shipment_type?: string;

  /**
   * @description: The handover method buyer chooses to use when returning item(s) to seller using platform's shipping service. <br>- DROP_OFF: buyer will drop off the item(s) at courier <br>- PICKUP: buyer is scheduling a pick up service offered by the courier.
   * @type: string
   **/
  ^^handover_method?: string;

  /**
   * @description: The tracking number of parcels when buyer returns the item(s)
   * @type: string
   **/
  ^^return_tracking_number?: string;

  /**
   * @description: The provider name of parcel when buyer returns the item(s)
   * @type: string
   **/
  ^^return_provider_name?: string;

  /**
   * @description: The provider id of parcel when buyer returns the items
   * @type: string
   **/
  ^^return_provider_id?: string;

  /**
   * @description: The previous return id current return order is edited from
   * @type: string
   **/
  ^^pre_return_id?: string;

  /**
   * @description: The next return id current return order is edited to
   * @type: string
   **/
  ^^next_return_id?: string;

  /**
   * @description: Whether buyer can keep the item(s) in a return or replacement process
   * @type: bool
   **/
  ^^can_buyer_keep_item?: bool;

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
   * @description: Return create time, unix tiemstamp
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Return order lines
   * @type: []object
   **/
  ^^return_line_items?: []object;

  /**
   * @description: Total count of filtered returns
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
export interface SearchReturnsDataReturnOrdersSellerNextActionResponseResponseInterface {
  /**
   * @description: Seller's next action<br>Available values:<br>- SELLER_RESPOND_REFUND<br>- SELLER_RESPOND_RETURN<br>- SELLER_RESPOND_RECEIVE_PACKAGE<br>- SELLER_RESPOND_REPLACEMENT
   * @type: string
   **/
  ^^^action?: string;

  /**
   * @description: The deadline indicates the deadline for when seller must perform the next action
   * @type: int
   **/
  ^^^deadline?: int;
}


/**
 * @description Return order lines
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsResponseInterface {
  /**
   * @description: Return order line id
   * @type: string
   **/
  ^^^return_line_item_id?: string;

  /**
   * @description: Order line id
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
   * @description: Image info of the product
   * @type: object
   **/
  ^^^product_image?: object;

  /**
   * @description: Amount info refunded to buyer of order line<br>Refund amount details 
   * @type: object
   **/
  ^^^refund_amount?: object;

  /**
   * @description: The refund amount of discount.
   * @type: []object
   **/
  ^^discount_amount?: []object;

  /**
   * @description: The amount of return shipping fee.
   * @type: []object
   **/
  ^^shipping_fee_amount?: []object;

  /**
   * @description: Total refund amount to buyer
   * @type: object
   **/
  ^^refund_amount?: object;

  /**
   * @description: The type of return shipping document selected by the buyer:<br>- SHIPPING_LABEL: Shipping label<br>- QR_CODE: QR code
   * @type: string
   **/
  ^^return_shipping_document_type?: string;

  /**
   * @description: Return method:<br>- SELLER_SHIPPED: Seller offers the return shipping service<br>- BUYER_SHIPPED: Buyer offers the return shipping service<br>- PLATFORM_SHIPPED: TikTok Shop offers the return shipping service
   * @type: string
   **/
  ^^return_method?: string;

  /**
   * @description: This field will return true if the buyer is asking to combine multiple returns into one return package.
   * @type: bool
   **/
  ^^is_combined_return?: bool;

  /**
   * @description: If is_combined_return is true, this field will return the combined_return_id associated with the combined return.
   * @type: string
   **/
  ^^combined_return_id?: string;
}


/**
 * @description Image info of the product
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsProductImageResponseInterface {
  /**
   * @description: Image url of the product
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
 * @description Amount info refunded to buyer of order line<br>Refund amount details 
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsRefundAmountResponseInterface {
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

  /**
   * @description: Buyer service fee 
   * @type: string
   **/
  ^^^^buyer_service_fee?: string;
}


/**
 * @description The refund amount of discount.
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsDiscountAmountResponseInterface {
  /**
   * @description: The currency of amount of discount.
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: The refund amount of product platform discount.
   * @type: string
   **/
  ^^^product_seller_discount?: string;

  /**
   * @description: The refund amount of product seller discount.
   * @type: string
   **/
  ^^^shipping_fee_platform_discount?: string;

  /**
   * @description: The refund amount of shipping fee seller discount.
   * @type: string
   **/
  ^^^shipping_fee_seller_discount?: string;

  /**
   * @description: The refund amount of shipping fee platform discount.
   * @type: string
   **/
  ^^^product_platform_discount?: string;
}


/**
 * @description The amount of return shipping fee.
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsShippingFeeAmountResponseInterface {
  /**
   * @description: The currency of return shipping fee.
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: The amount of return shipping fee seller paid.
   * @type: string
   **/
  ^^^seller_paid_return_shipping_fee?: string;

  /**
   * @description: The amount of return shipping fee platform paid.
   * @type: string
   **/
  ^^^platform_paid_return_shipping_fee?: string;

  /**
   * @description: The amount of return shipping fee buyer paid.
   * @type: string
   **/
  ^^^buyer_paid_return_shipping_fee?: string;
}


/**
 * @description Total refund amount to buyer
 **/
export interface SearchReturnsDataReturnOrdersReturnLineItemsRefundAmountResponseInterface {
  /**
   * @description: Currency for payment
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: Total refund amount to buyer
   * @type: string
   **/
  ^^^refund_total?: string;

  /**
   * @description: Refund subtotal amount to buyer. This is the total price of all items returned. 
   * @type: string
   **/
  ^^^refund_subtotal?: string;

  /**
   * @description: Shipping fee refund to buyer
   * @type: string
   **/
  ^^^refund_shipping_fee?: string;

  /**
   * @description: Tax returned to buyer
   * @type: string
   **/
  ^^^refund_tax?: string;

  /**
   * @description: Retail delivery fee takes effect once platform GMV exceeds 500,000 USD, according to US Colorado states' compliance rules.<br>
   * @type: string
   **/
  ^^^retail_delivery_fee?: string;

  /**
   * @description: Buyer service fee
   * @type: string
   **/
  ^^^buyer_service_fee?: string;
}
