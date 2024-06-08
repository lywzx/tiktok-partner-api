export const BATCH_SHIP_PACKAGES_URL_PATH = '/fulfillment/202309/packages/ship';,export const BATCH_SHIP_PACKAGES_METHOD = '1';


/**
 * 接口名称：Batch Ship Packages
 * 接口标识：Batch Ship Packages
 * 接口使用场景：Batch Ship Packages
 **/
export interface BatchShipPackagesRequestInterface {
  /**
   * @description: Packages
   * @type: []object
   **/
  packages: []object;
}


/**
 * @description Packages
 **/
export interface BatchShipPackagesPackagesRequestInterface {
  /**
   * @description: Package Id
   * @type: string
   **/
  ^id: string;

  /**
   * @description: - PICKUP <br>A shipping provider will pickup the package(s) from the seller's pickup address.<br>- DROP_OFF <br>The seller will need to drop off the package(s) at a designated location.
   * @type: string
   **/
  ^handover_method?: string;

  /**
   * @description: Package pickup time slot.
   * @type: object
   **/
  ^pickup_slot?: object;

  /**
   * @description: Only needed for seller shipping packages. Check the delivery_option field in GetFulfillmentDetail to see how to differentiate between TikTok shipping and seller shipping. Use the shipping provider id retrieved from the Get Shipping Provider API and upload the corresponding tracking number.
   * @type: object
   **/
  ^self_shipment?: object;
}


/**
 * @description Package pickup time slot.
 **/
export interface BatchShipPackagesPackagesPickupSlotRequestInterface {
  /**
   * @description: The start date and time of the package pickup time slot.
   * @type: int
   **/
  ^^start_time?: int;

  /**
   * @description: The end date and time of the package pickup time slot.
   * @type: int
   **/
  ^^end_time?: int;
}


/**
 * @description Only needed for seller shipping packages. Check the delivery_option field in GetFulfillmentDetail to see how to differentiate between TikTok shipping and seller shipping. Use the shipping provider id retrieved from the Get Shipping Provider API and upload the corresponding tracking number.
 **/
export interface BatchShipPackagesPackagesSelfShipmentRequestInterface {
  /**
   * @description: For packages with the SEND_BY_SELLER delivery option type(seller shipping), developers need to provide the package's tracking number.
   * @type: string
   **/
  ^^tracking_number: string;

  /**
   * @description: For packages with the SEND_BY_SELLER delivery option type(seller shipping), developers need to provide the shipping provider information. Please use the Get Shipping Provider API to obtain the shipping_provider_id.
   * @type: string
   **/
  ^^shipping_provider_id: string;
}


/**
 * 接口名称：Batch Ship Packages
 * 接口标识：Batch Ship Packages
 * 接口使用场景：Batch Ship Packages
 **/
export interface BatchShipPackagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Batch Ship Packages
 * 接口标识：Batch Ship Packages
 * 接口使用场景：Batch Ship Packages
 **/
export interface BatchShipPackagesResponseInterface {
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
export interface BatchShipPackagesDataResponseInterface {
  /**
   * @description: Specific return information (returns multiple errors and reasons)
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description Specific return information (returns multiple errors and reasons)
 **/
export interface BatchShipPackagesDataErrorsResponseInterface {
  /**
   * @description: The failed reason code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Fulfillment failed reason
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: Error detail
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description Error detail
 **/
export interface BatchShipPackagesDataErrorsDetailResponseInterface {
  /**
   * @description: Package Id
   * @type: string
   **/
  ^^^package_id?: string;
}
