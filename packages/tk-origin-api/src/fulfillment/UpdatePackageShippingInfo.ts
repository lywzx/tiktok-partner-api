export const UPDATE_PACKAGE_SHIPPING_INFO_URL_PATH = '/fulfillment/202309/packages/{package_id}/shipping_info/update';,export const UPDATE_PACKAGE_SHIPPING_INFO_METHOD = '1';


/**
 * 接口名称：Update Package Shipping Info
 * 接口标识：Update Package Shipping Info
 * 接口使用场景：Update Package Shipping Info
 **/
export interface UpdatePackageShippingInfoRequestInterface {
  /**
   * @description: The shipment tracking number provided by the carrier.
   * @type: string
   **/
  tracking_number: string;

  /**
   * @description: Identifies the carrier that will deliver the package. Please call Get Shipping Provider API to retrieve the available shipping provider.
   * @type: string
   **/
  shipping_provider_id: string;
}


/**
 * 接口名称：Update Package Shipping Info
 * 接口标识：Update Package Shipping Info
 * 接口使用场景：Update Package Shipping Info
 **/
export interface UpdatePackageShippingInfoRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Package Shipping Info
 * 接口标识：Update Package Shipping Info
 * 接口使用场景：Update Package Shipping Info
 **/
export interface UpdatePackageShippingInfoResponseInterface {
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
