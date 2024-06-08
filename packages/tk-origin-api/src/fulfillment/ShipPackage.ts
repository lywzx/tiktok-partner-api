export const SHIP_PACKAGE_URL_PATH = '/fulfillment/202309/packages/{package_id}/ship';,export const SHIP_PACKAGE_METHOD = '1';


/**
 * 接口名称：Ship Package
 * 接口标识：Ship Package
 * 接口使用场景：Ship Package
 **/
export interface ShipPackageRequestInterface {
  /**
   * @description: - PICKUP <br>An logistics carrier will pickup the package(s) from the seller's pickup address.<br>- DROP_OFF<br>The seller will need to drop off the package(s) to a designated location.
   * @type: string
   **/
  handover_method?: string;

  /**
   * @description: pickup slot<br>
   * @type: object
   **/
  pickup_slot?: object;

  /**
   * @description: Only needed for merchant self-shipping packages. Check delivery_option field of GetFulfillmentDetail to see how to differentiate platform-logistics and self-shipping. Use the shipping_provider_id retrieved from GetShippingProvider API and upload the corresponding tracking_number.
   * @type: object
   **/
  self_shipment?: object;
}


/**
 * @description pickup slot<br>
 **/
export interface ShipPackagePickupSlotRequestInterface {
  /**
   * @description: The start date and time of the package pick up time slot.
   * @type: int
   **/
  ^start_time?: int;

  /**
   * @description: The end date and time of the package pick up time slot.
   * @type: int
   **/
  ^end_time?: int;
}


/**
 * @description Only needed for merchant self-shipping packages. Check delivery_option field of GetFulfillmentDetail to see how to differentiate platform-logistics and self-shipping. Use the shipping_provider_id retrieved from GetShippingProvider API and upload the corresponding tracking_number.
 **/
export interface ShipPackageSelfShipmentRequestInterface {
  /**
   * @description: For package with SEND_BY_SELLER as delivery_option(merchant self-shipping mode), developer needs to input tracking_number to call this API.
   * @type: string
   **/
  ^tracking_number: string;

  /**
   * @description: For package with SEND_BY_SELLER as delivery_option(merchant self-shipping mode), developer needs to input shipping_provider to call this API. Please use Get Shipping Provider API to obtain the shipping_provider_id.
   * @type: string
   **/
  ^shipping_provider_id: string;
}


/**
 * 接口名称：Ship Package
 * 接口标识：Ship Package
 * 接口使用场景：Ship Package
 **/
export interface ShipPackageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Ship Package
 * 接口标识：Ship Package
 * 接口使用场景：Ship Package
 **/
export interface ShipPackageResponseInterface {
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
