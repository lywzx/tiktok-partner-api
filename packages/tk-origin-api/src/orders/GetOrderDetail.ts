export const GET_ORDER_DETAIL_URL_PATH = '/order/202309/orders';,export const GET_ORDER_DETAIL_METHOD = '2';


/**
 * 接口名称：Get Order Detail
 * 接口标识：Get Order Detail
 * 接口使用场景：Get Order Detail
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetOrderDetailRequestInterface {

}


/**
 * 接口名称：Get Order Detail
 * 接口标识：Get Order Detail
 * 接口使用场景：Get Order Detail
 **/
export interface GetOrderDetailRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: A list of Tiktok shop order ID values. <br>Max count : 50
   * @type: string[]
   **/
  ids: string[];
}


/**
 * 接口名称：Get Order Detail
 * 接口标识：Get Order Detail
 * 接口使用场景：Get Order Detail
 **/
export interface GetOrderDetailResponseInterface {
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
export interface GetOrderDetailDataResponseInterface {
  /**
   * @description: orders information
   * @type: []object
   **/
  ^orders?: []object;
}


/**
 * @description orders information
 **/
export interface GetOrderDetailDataOrdersResponseInterface {
  /**
   * @description: Tiktok shop order id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Cancel request initiator. Avaliable value: SELLER/ BUYER/ SYSTEM .
   * @type: string
   **/
  ^^cancellation_initiator?: string;

  /**
   * @description: The name of the current shipping provider.
   * @type: string
   **/
  ^^shipping_provider?: string;

  /**
   * @description: The id of the current shipping provider.
   * @type: string
   **/
  ^^shipping_provider_id?: string;

  /**
   * @description: Buyer User ID.
   * @type: string
   **/
  ^^user_id?: string;

  /**
   * @description: Available value:<br>- UNPAID: The order has been placed but payment has not been finished. <br>- ON_HOLD(currently ON_HOLD status is only available in the UK market): Payment has been finished, but order allow buyer to cancel without seller approval. Not allow seller fulfill order under ON_HOLD status.<br>- PARTIALLY_SHIPPING: One or more (but not all) items in the order have been shipped.<br>- AWAITING_SHIPMENT: Payment has been finished and order is ready for shipment, but no items in the order have been shipped.<br>- AWAITING_COLLECTION:  Seller arranged shipment, but package is still waiting to handover the parcel to carrier.<br>- IN_TRANSIT: Package has been collected by the carrier.<br>- DELIVERED: Package delivered to buyer.<br>- COMPLETED: Order has been completed. Orders are not allowed to initiate return or refund anymore.<br>- CANCELLED: The order was canceled.<br>
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: The time sellers shipped order(call ShipOrder successfully).<br>Unix timestamp.
   * @type: int
   **/
  ^^rts_time?: int;

  /**
   * @description: Payment info about this order
   * @type: object
   **/
  ^^payment?: object;

  /**
   * @description: recipient_address is not available under unpaid and on hold status.
   * @type: object
   **/
  ^^recipient_address?: object;
}


/**
 * @description Payment info about this order
 **/
export interface GetOrderDetailDataOrdersPaymentResponseInterface {
  /**
   * @description: Currency for payment.
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: Buyer paid sub total of all the SKUs in the order. For the US market, this is pre-tax total amount.<br>sub_total = original_total_product_price - seller_discount - platform_discount
   * @type: string
   **/
  ^^^sub_total?: string;

  /**
   * @description: Buyer paid shipping fee. Shipping_fee = original_shipping_fee - shipping_fee_seller_discount - shipping_fee_platform_discount<br>For the US market, this is pre-tax total amount.
   * @type: string
   **/
  ^^^shipping_fee?: string;

  /**
   * @description: Product discount by seller.
   * @type: string
   **/
  ^^^seller_discount?: string;

  /**
   * @description: Product discount by platform.
   * @type: string
   **/
  ^^^platform_discount?: string;

  /**
   * @description: Buyer paid total payment.<br>Total_amount=sub_total+shipping_fee+taxes+retail_delivery_fee.
   * @type: string
   **/
  ^^^total_amount?: string;

  /**
   * @description: Total original price of products. (VAT included for crossborder shop).<br>For the US market, this is pre-tax total amount.
   * @type: string
   **/
  ^^^original_total_product_price?: string;

  /**
   * @description: Shipping fee before discount
   * @type: string
   **/
  ^^^original_shipping_fee?: string;

  /**
   * @description: Shipping fee discount by seller.
   * @type: string
   **/
  ^^^shipping_fee_seller_discount?: string;

  /**
   * @description: Shipping fee discount by platform.
   * @type: string
   **/
  ^^^shipping_fee_platform_discount?: string;

  /**
   * @description: Buyer paid total taxes of the order. Applicable to crossborder shops and the US market.
   * @type: string
   **/
  ^^^tax?: string;

  /**
   * @description: Small order fee for TH.<br>Small order fee is for Thailand only. small order fee means that the platform will set a minimum order spending amount, when the order amount is lower than the minimum order spending amount, the user needs to pay small order fee to meet the platform minimum spending amount. <br>e.g. Minmum order spending amount is 100, order amount is 80. So the small order fee will be 20.
   * @type: string
   **/
  ^^^small_order_fee?: string;

  /**
   * @description: The tax on the shipping price.
   * @type: string
   **/
  ^^^shipping_fee_tax?: string;

  /**
   * @description: The tax on the total item price.
   * @type: string
   **/
  ^^^product_tax?: string;

  /**
   * @description: RDF(Retail delivery fee). Available only in the US market.
   * @type: string
   **/
  ^^^retail_delivery_fee?: string;

  /**
   * @description: A service fee is charged on every transaction made. The charge is applied from the fifth order onwards and collected directly from customers during checkout. Only available in Indonesia market.
   * @type: string
   **/
  ^^^buyer_service_fee?: string;
}


/**
 * @description recipient_address is not available under unpaid and on hold status.
 **/
export interface GetOrderDetailDataOrdersRecipientAddressResponseInterface {
  /**
   * @description: The complete recipient addresses information.
   * @type: string
   **/
  ^^^full_address?: string;

  /**
   * @description: The telephone number of the buyer. Please notice, if this order use platform logistics, phone number will be desensitized.
   * @type: string
   **/
  ^^^phone_number?: string;

  /**
   * @description: The name of the recipient. Please note, if this order uses platform logistics, recipient name will be desensitized
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: The postal code that can be used by seller for shipping. (In the U.S, it means zipcode)
   * @type: string
   **/
  ^^^postal_code?: string;

  /**
   * @description: Full buyer detail address
   * @type: string
   **/
  ^^^address_detail?: string;

  /**
   * @description: Region code
   * @type: string
   **/
  ^^^region_code?: string;

  /**
   * @description: The first line of the street address
   * @type: string
   **/
  ^^^address_line1?: string;

  /**
   * @description: The second line of the street address
   * @type: string
   **/
  ^^^address_line2?: string;

  /**
   * @description: The third line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^^address_line3?: string;

  /**
   * @description: The fourth line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^^address_line4?: string;

  /**
   * @description: district information list
   * @type: []object
   **/
  ^^^district_info?: []object;

  /**
   * @description: Contains all of the delivery instructions provided by the buyer for the shipping address. Currently, only available in the US market.
   * @type: object
   **/
  ^^^delivery_preferences?: object;

  /**
   * @description: The note from buyer.
   * @type: string
   **/
  ^^buyer_message?: string;

  /**
   * @description: The date and time that the order was created. Unix timestamp for second. 
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Tracking number. Available after ship pacakge.
   * @type: string
   **/
  ^^tracking_number?: string;

  /**
   * @description: The reason for cancelling action. https://partner.tiktokshop.com/docv2/page/650b28280fcef602bf435096#Back%20To%20Top
   * @type: string
   **/
  ^^cancel_reason?: string;

  /**
   * @description: The latest shipping time specified by the platform.<br>Unix timestamp.
   * @type: int
   **/
  ^^rts_sla_time?: int;

  /**
   * @description: The date and time that the order was paid. Unix timestamp for second.
   * @type: int
   **/
  ^^paid_time?: int;

  /**
   * @description: - Fulfillment type. Only orders with fulfillment type  can be shipped by sellers.<br>FULFILLMENT_BY_SELLER: is a method where sellers fulfill orders directly from their own inventory, without using Tiktok's fulfillment centers. In this model, the seller is responsible for storing, packaging, and shipping the products to customers.<br>- FULFILLMENT_BY_TIKTOK: is a service offered by TIktok where sellers can send their products to Tiktok's fulfillment centers. Tiktok then takes care of storing, picking, packing, and shipping the products to customers.
   * @type: string
   **/
  ^^fulfillment_type?: string;

  /**
   * @description: This field return the note, which seller notes in Tiktok seller center
   * @type: string
   **/
  ^^seller_note?: string;

  /**
   * @description: The latest collection time specified by the platform.<br>Unix timestamp.
   * @type: int
   **/
  ^^tts_sla_time?: int;

  /**
   * @description: The automatic cancellation time for orders specified by the platform.<br>Unix timestamp.
   * @type: int
   **/
  ^^cancel_order_sla_time?: int;

  /**
   * @description: Time of order status changes.<br>Unix timestamp.
   * @type: int
   **/
  ^^update_time?: int;

  /**
   * @description: List of packages included in this order
   * @type: []object
   **/
  ^^packages?: []object;

  /**
   * @description: Indicates whether it is PickUp DropOff (PUDO) location. The PUDO location is selected by the buyer when placing orders. <br>- HOME_DELIVERY: not a PUDO location<br>- COLLECTION_POINT: a PUDO location
   * @type: string
   **/
  ^^delivery_type?: string;

  /**
   * @description: Use this field to determine whether the order is a sample order.
   * @type: bool
   **/
  ^^is_sample_order?: bool;

  /**
   * @description: seller warehouse id
   * @type: string
   **/
  ^^warehouse_id?: string;

  /**
   * @description: Indicate whether the order is combined or split.<br>- COMBINED<br>- SPLIT<br>This field will be used in future fulfillment apis.
   * @type: string
   **/
  ^^split_or_combine_tag?: string;

  /**
   * @description: False: no update<br>True: updated
   * @type: bool
   **/
  ^^has_updated_recipient_address?: bool;

  /**
   * @description: CPF(invoice number), used to issue an invoice，only works in Brazil.
   * @type: string
   **/
  ^^cpf?: string;

  /**
   * @description: Order delivery option id.
   * @type: string
   **/
  ^^delivery_option_id?: string;

  /**
   * @description: The latest delivery time specified by the platform.
   * @type: int
   **/
  ^^delivery_sla_time?: int;

  /**
   * @description: Payment method name, only for display
   * @type: string
   **/
  ^^payment_method_name?: string;

  /**
   * @description: If the order hasn't updated its status to "AWAITING_COLLECTION" before this time, the order will be canceled by TikTok Shop
   * @type: int
   **/
  ^^shipping_due_time?: int;

  /**
   * @description: Line item info list
   * @type: []object
   **/
  ^^line_items?: []object;

  /**
   * @description: The method of delivery.<br>- TIKTOK: shipping service provided by Tiktok. The seller should obtain shipping label from Tiktok.<br>- SELLER: Seller provides shipping, including through 3rd party fulfillment providers on behalf of the Seller. 
   * @type: string
   **/
  ^^shipping_type?: string;

  /**
   * @description: The anonymized email address of the buyer. It is not recommended to send messages directly to this email address. If you need to contact the buyer, please go to Seller Center - Buyer Messages page.
   * @type: string
   **/
  ^^buyer_email?: string;

  /**
   * @description: The timestamp of the order's status update to "DELIVERED"
   * @type: int
   **/
  ^^delivery_time?: int;

  /**
   * @description: need to upload the invoice (Only work in Brazil）<br>- UNKNOWN<br>- NEED_INVOICE<br>- NO_NEED
   * @type: string
   **/
  ^^need_upload_invoice?: string;

  /**
   * @description: This option is for Sellers that accept cash payment on delivery which is rare. Buyers will pay in cash upon receipt of package. Default value is FALSE. Only applicable to countries where Cod is supported.
   * @type: bool
   **/
  ^^is_cod?: bool;

  /**
   * @description: Buyer request cancel time
   * @type: int
   **/
  ^^request_cancel_time?: int;

  /**
   * @description: Order should be delivered before this time.
   * @type: int
   **/
  ^^delivery_option_required_delivery_time?: int;

  /**
   * @description: Delivery option name. For display purposes only.
   * @type: string
   **/
  ^^delivery_option_name?: string;

  /**
   * @description: True when the buyer has a pending cancellation request
   * @type: bool
   **/
  ^^is_buyer_request_cancel?: bool;

  /**
   * @description: If the order hasn't updated its status to "DELIVERED" before this time, the order will be canceled by TikTok Shop
   * @type: int
   **/
  ^^delivery_due_time?: int;

  /**
   * @description: The timestamp of the order's status update to "IN_TRANSIT"
   * @type: int
   **/
  ^^collection_time?: int;

  /**
   * @description: Indicates whether the order experienced or will be experienced ON_HOLD status.
   * @type: bool
   **/
  ^^is_on_hold_order?: bool;

  /**
   * @description: The timestamp of the order's status update to "CANCELLED"
   * @type: int
   **/
  ^^cancel_time?: int;

  /**
   * @description: When true, this is a replacement order.
   * @type: bool
   **/
  ^^is_replacement_order?: bool;

  /**
   * @description: The order id for the order that is being replaced. Returned only if is_replacement_order = true
   * @type: string
   **/
  ^^replaced_order_id?: string;

  /**
   * @description: If the order hasn't updated its status to "IN_TRANSIT" before this time, the order will be canceled by TikTok Shop
   * @type: int
   **/
  ^^collection_due_time?: int;
}


/**
 * @description district information list
 **/
export interface GetOrderDetailDataOrdersRecipientAddressDistrictInfoResponseInterface {
  /**
   * @description: The name of administrative division that can be used by seller for ship. e.g. state/county/city/district/town etc.
   * @type: string
   **/
  ^^^^address_level_name?: string;

  /**
   * @description: Administrative area name. eg: London
   * @type: string
   **/
  ^^^^address_name?: string;

  /**
   * @description: Administrative district level code. Value can be L0/L1/L2/L3/L4. eg. US is L0
   * @type: string
   **/
  ^^^^address_level?: string;
}


/**
 * @description Contains all of the delivery instructions provided by the buyer for the shipping address. Currently, only available in the US market.
 **/
export interface GetOrderDetailDataOrdersRecipientAddressDeliveryPreferencesResponseInterface {
  /**
   * @description: Drop-off location selected by the buyer.
   * @type: string
   **/
  ^^^^drop_off_location?: string;
}


/**
 * @description List of packages included in this order
 **/
export interface GetOrderDetailDataOrdersRecipientAddressPackagesResponseInterface {
  /**
   * @description: Package ID
   * @type: string
   **/
  ^^^id?: string;
}


/**
 * @description Line item info list
 **/
export interface GetOrderDetailDataOrdersRecipientAddressLineItemsResponseInterface {
  /**
   * @description: Line item ID
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Sku id
   * @type: string
   **/
  ^^^sku_id?: string;

  /**
   * @description: For a combined listing SKU, returns an array of related product SKUs that compose the combined listing SKU
   * @type: []object
   **/
  ^^^combined_listing_skus?: []object;

  /**
   * @description: Product ID
   * @type: string
   **/
  ^^^product_id?: string;

  /**
   * @description: Product name
   * @type: string
   **/
  ^^^product_name?: string;

  /**
   * @description: The name of the SKU, combined by product SKU attribute like size or color. For example, "Black, 26".<br><br>
   * @type: string
   **/
  ^^^sku_name?: string;

  /**
   * @description: SKU image
   * @type: string
   **/
  ^^^sku_image?: string;

  /**
   * @description: Item original price,please refer to the currency of payment_info
   * @type: string
   **/
  ^^^original_price?: string;

  /**
   * @description: Item sale price,please refer to the currency of payment_info
   * @type: string
   **/
  ^^^sale_price?: string;

  /**
   * @description: Platform discount amount,please refer to the currency of payment_info
   * @type: string
   **/
  ^^^platform_discount?: string;

  /**
   * @description: - UNPAID: The order has been placed but payment has not been finished. <br>- AWAITING_SHIPMENT: Payment has been finished and order is ready for shipment, but no items in the order have been shipped.<br>- AWAITING_COLLECTION:  Seller arranged shipment, but package is still waiting to handover the parcel to carrier.<br>- IN_TRANSIT: Package has been collected by the carrier.<br>- DELIVERED: Package delivered to buyer.<br><br>- COMPLETED: Order has been completed. Orders are not allowed to initiate return or refund anymore.<br><br>- CANCELLED: The order was cancelled.
   * @type: string
   **/
  ^^^display_status?: string;

  /**
   * @description: This is the initiator of the cancellation request<br>- BUYER<br>- SELLER<br>- OPERATOR<br>- SYSTEM
   * @type: string
   **/
  ^^^cancel_user?: string;

  /**
   * @description: Order line type：<br>- NORMAL: An item for which the selling partner currently has inventory in stock.<br>- PRE_ORDER: An item with a release date that is in the future.<br>- ZERO_LOTTERY:  An item obtained through a lottery event.<br>- SHOP_PARTNER: An shop partner order from Tiktok Shop partner store.
   * @type: string
   **/
  ^^^sku_type?: string;

  /**
   * @description: The seller stock keeping unit (SKU) of the item. 
   * @type: string
   **/
  ^^^seller_sku?: string;

  /**
   * @description: The shipping provider id of the item
   * @type: string
   **/
  ^^^shipping_provider_id?: string;

  /**
   * @description: Seller discount amount. Please refer to the currency of payment_info
   * @type: string
   **/
  ^^^seller_discount?: string;

  /**
   * @description: Currency for payment.
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: An Order can contain one more more packages based on how the Seller chooses to ship. Each package has a unique package_id (and also a tracking_id, which is used to track the progress of the package as it is shipped). For local sellers in the US and UK markets, the package_id and package_status property will not be returned before the package is shipped
   * @type: string
   **/
  ^^^package_id?: string;

  /**
   * @description: The time seller shipped line order (call ShipOrder successfully).<br>Unix timestamp.
   * @type: int
   **/
  ^^^rts_time?: int;

  /**
   * @description: Item tax detail.
   * @type: []object
   **/
  ^^^item_tax?: []object;

  /**
   * @description: The package status of the item<br>- TO_FULFILL: package waiting seller to arrange the shipment.<br>- PROCESSING: package has been arranged by seller. Waiting carrier to collect the parcel.<br>- FULFILLING: package has been collected by carrier and in transit.<br>- COMPLETED: package has been delivered.<br>- CANCELLED: package has been canceled. Normally, the package is canceled due to the package being lost or damaged.
   * @type: string
   **/
  ^^^package_status?: string;

  /**
   * @description: The shipping provider name of the item
   * @type: string
   **/
  ^^^shipping_provider_name?: string;

  /**
   * @description: Indicates whether the current order line is a gift.
   * @type: bool
   **/
  ^^^is_gift?: bool;

  /**
   * @description: Item cancel reason
   * @type: string
   **/
  ^^^cancel_reason?: string;

  /**
   * @description: Small order fee for TH
   * @type: string
   **/
  ^^^small_order_fee?: string;

  /**
   * @description: RDF(Retail delivery fee). Available only in the US market.
   * @type: string
   **/
  ^^^retail_delivery_fee?: string;

  /**
   * @description: Tracking number. Available after ship pacakge.
   * @type: string
   **/
  ^^^tracking_number?: string;

  /**
   * @description: A service fee is charged on every transaction made. The charge is applied from the fifth order onwards and collected directly from customers during checkout. Only available in Indonesia market.
   * @type: string
   **/
  ^^^buyer_service_fee?: string;
}


/**
 * @description For a combined listing SKU, returns an array of related product SKUs that compose the combined listing SKU
 **/
export interface GetOrderDetailDataOrdersRecipientAddressLineItemsCombinedListingSkusResponseInterface {
  /**
   * @description: The orginal sku_id related to the combined listing SKU
   * @type: string
   **/
  ^^^^sku_id?: string;

  /**
   * @description: The quantity of original SKU that compose the combined listing SKU
   * @type: int
   **/
  ^^^^sku_count?: int;

  /**
   * @description: The original product_id related to the combined listing SKU
   * @type: string
   **/
  ^^^^product_id?: string;
}


/**
 * @description Item tax detail.
 **/
export interface GetOrderDetailDataOrdersRecipientAddressLineItemsItemTaxResponseInterface {
  /**
   * @description: Tax type.<br>- SALES_TAX (US market sales tax)<br>Currently only sales tax is available.
   * @type: string
   **/
  ^^^^tax_type?: string;

  /**
   * @description: Tax amount.
   * @type: string
   **/
  ^^^^tax_amount?: string;

  /**
   * @description: Tax rate
   * @type: string
   **/
  ^^^^tax_rate?: string;
}
