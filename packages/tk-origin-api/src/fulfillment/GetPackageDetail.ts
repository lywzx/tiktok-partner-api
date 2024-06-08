export const GET_PACKAGE_DETAIL_URL_PATH = '/fulfillment/202309/packages/{package_id}';,export const GET_PACKAGE_DETAIL_METHOD = '2';


/**
 * 接口名称：Get Package Detail
 * 接口标识：Get Package Detail
 * 接口使用场景：Get Package Detail
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetPackageDetailRequestInterface {

}


/**
 * 接口名称：Get Package Detail
 * 接口标识：Get Package Detail
 * 接口使用场景：Get Package Detail
 **/
export interface GetPackageDetailRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Package Detail
 * 接口标识：Get Package Detail
 * 接口使用场景：Get Package Detail
 **/
export interface GetPackageDetailResponseInterface {
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
export interface GetPackageDetailDataResponseInterface {
  /**
   * @description: TikTok Shop package id.<br>
   * @type: string
   **/
  ^package_id?: string;

  /**
   * @description: Order Information
   * @type: []object
   **/
  ^orders?: []object;
}


/**
 * @description Order Information
 **/
export interface GetPackageDetailDataOrdersResponseInterface {
  /**
   * @description: TikTok Shop order id.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Sku Infomation.
   * @type: []object
   **/
  ^^skus?: []object;

  /**
   * @description: The package item<br><br>PROCESSING: package has been arranged by seller. Waiting carrier to collect the parcel.<br><br>FULFILLING: package has been collected by carrier and in transit.<br><br>COMPLETED: package has been delivered.<br><br>CANCELLED: package has been canceled. Normally, the package is canceled due to the package being lost or damaged.
   * @type: string
   **/
  ^package_status?: string;

  /**
   * @description: DEFAULT: the package has no combine or split operation.<br><br>COMBINE: the package has been consolidated with another order.<br><br>SPLIT: the order has been split order to ship.
   * @type: string
   **/
  ^split_and_combine_tag?: string;

  /**
   * @description: Whether there are multiple SKU IDs in a package
   * @type: bool
   **/
  ^has_multi_skus?: bool;

  /**
   * @description: BUYER_UNNOTED: the order has not been noted by buyer<br><br>BUYER_NOTED: the order has been noted by buyer<br>
   * @type: string
   **/
  ^note_tag?: string;

  /**
   * @description: Package shipping provider
   * @type: string
   **/
  ^shipping_provider_name?: string;

  /**
   * @description: Package shipping provider id
   * @type: string
   **/
  ^shipping_provider_id?: string;

  /**
   * @description: The method of delivery.<br>TIKTOK: shipping service provided by Tiktok. The seller should obtain a shipping label from Tiktok.<br>SELLER: Seller provides shipping, including through 3rd party fulfillment providers on behalf of the Seller. 
   * @type: string
   **/
  ^shipping_type?: string;

  /**
   * @description: Delivery option name. For display purposes only.
   * @type: string
   **/
  ^delivery_option_name?: string;

  /**
   * @description: Order delivery option id. Delivery option ID is mapping to seller configured logistics templates id.
   * @type: string
   **/
  ^delivery_option_id?: string;

  /**
   * @description: Package tracking number
   * @type: string
   **/
  ^tracking_number?: string;

  /**
   * @description: For cross-border order only. Cross-border order last mile tracking number.<br>
   * @type: string
   **/
  ^last_mile_tracking_number?: string;

  /**
   * @description: Time slots available for pickup.
   * @type: object
   **/
  ^pickup_slot?: object;

  /**
   * @description: Unix timestamp in second.
   * @type: int
   **/
  ^create_time?: int;

  /**
   * @description: Whether the package is delivered by pick_up or drop_off.<br>PICKUP <br>An Logistics carrier will pickup the package(s) from the seller's pickup address.<br><br>DROP_OFF <br>Seller will need to drop off the package(s) to a designated location.
   * @type: string
   **/
  ^handover_method?: string;

  /**
   * @description: The order line item id contained in the package
   * @type: string[]
   **/
  ^order_line_item_ids?: string[];

  /**
   * @description: Recipient address.<br>
   * @type: object
   **/
  ^recipient_address?: object;

  /**
   * @description: Sender address.
   * @type: object
   **/
  ^sender_address?: object;

  /**
   * @description: The weight of the scheduled package.
   * @type: object
   **/
  ^weight?: object;

  /**
   * @description: The dimensions of the scheduled package.
   * @type: object
   **/
  ^dimension?: object;

  /**
   * @description: Unix timestamp in second.
   * @type: int
   **/
  ^update_time?: int;
}


/**
 * @description Sku Infomation.
 **/
export interface GetPackageDetailDataOrdersSkusResponseInterface {
  /**
   * @description: The id of sku
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Sku properties
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: Sku image in order snapshot
   * @type: string
   **/
  ^^^image_url?: string;

  /**
   * @description: Quantity of the sku
   * @type: int
   **/
  ^^^quantity?: int;
}


/**
 * @description Time slots available for pickup.
 **/
export interface GetPackageDetailDataOrdersPickupSlotResponseInterface {
  /**
   * @description: Timestamp of when package is picked up by carrier. Unix timestamp in second.
   * @type: int
   **/
  ^^start_time?: int;

  /**
   * @description: Timestamp of when package is picked up by carrier. Unix timestamp in second.
   * @type: int
   **/
  ^^end_time?: int;
}


/**
 * @description Recipient address.<br>
 **/
export interface GetPackageDetailDataOrdersRecipientAddressResponseInterface {
  /**
   * @description: The complete recipient addresses information.<br>
   * @type: string
   **/
  ^^full_address?: string;

  /**
   * @description: The telephone number of the buyer. Please notice, if this order use platform logistics, phone number will be desensitized
   * @type: string
   **/
  ^^phone_number?: string;

  /**
   * @description: The name of the recipient. Please note, if this order uses platform logistics, recipient name will be desensitized
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The postal code that can be used by seller for shipping. (In the U.S, it means zipcode)
   * @type: string
   **/
  ^^postal_code?: string;

  /**
   * @description: Full buyer detail address.
   * @type: string
   **/
  ^^address_detail?: string;

  /**
   * @description: Region code.
   * @type: string
   **/
  ^^region_code?: string;

  /**
   * @description: The first line of the street address
   * @type: string
   **/
  ^^address_line1?: string;

  /**
   * @description: The second line of the street address
   * @type: string
   **/
  ^^address_line2?: string;

  /**
   * @description: The third line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^address_line3?: string;

  /**
   * @description: The fourth line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^address_line4?: string;
}


/**
 * @description Sender address.
 **/
export interface GetPackageDetailDataOrdersSenderAddressResponseInterface {
  /**
   * @description: The complete sender addresses information.
   * @type: string
   **/
  ^^full_address?: string;

  /**
   * @description: The telephone number of the sender. 
   * @type: string
   **/
  ^^phone_number?: string;

  /**
   * @description: The name of the sender.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The postal code
   * @type: string
   **/
  ^^postal_code?: string;

  /**
   * @description: Full sender detail address
   * @type: string
   **/
  ^^address_detail?: string;

  /**
   * @description: Region code
   * @type: string
   **/
  ^^region_code?: string;

  /**
   * @description: The first line of the street address
   * @type: string
   **/
  ^^address_line1?: string;

  /**
   * @description: The second line of the street address
   * @type: string
   **/
  ^^address_line2?: string;

  /**
   * @description: The third line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^address_line3?: string;

  /**
   * @description: The fourth line of the street address. Usually only for the Brazilian market
   * @type: string
   **/
  ^^address_line4?: string;
}


/**
 * @description The weight of the scheduled package.
 **/
export interface GetPackageDetailDataOrdersWeightResponseInterface {
  /**
   * @description: The value of the weight of the scheduled package.
   * @type: string
   **/
  ^^value?: string;

  /**
   * @description: The unit of measurement is used to measure the weight.<br>- GRAM<br>- POUND
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description The dimensions of the scheduled package.
 **/
export interface GetPackageDetailDataOrdersDimensionResponseInterface {
  /**
   * @description: The length of the scheduled package. 
   * @type: string
   **/
  ^^length?: string;

  /**
   * @description: The width of the scheduled package. 
   * @type: string
   **/
  ^^width?: string;

  /**
   * @description: The height of the scheduled package. 
   * @type: string
   **/
  ^^height?: string;

  /**
   * @description: The unit of measurement is used to measure the length.<br>- CM<br>- INCH
   * @type: string
   **/
  ^^unit?: string;
}
