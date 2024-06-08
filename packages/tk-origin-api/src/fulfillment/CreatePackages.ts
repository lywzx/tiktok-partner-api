export const CREATE_PACKAGES_URL_PATH = '/fulfillment/202309/packages';,export const CREATE_PACKAGES_METHOD = '1';


/**
 * 接口名称：Create Packages
 * 接口标识：Create Packages
 * 接口使用场景：Create Packages
 **/
export interface CreatePackagesRequestInterface {
  /**
   * @description: TikTok Shop order ID
   * @type: string
   **/
  order_id: string;

  /**
   * @description: Order line item ID list
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: The dimensions of the package.
   * @type: object
   **/
  dimension?: object;

  /**
   * @description: Specify the shipping service used for shipping, if not specified, use the default service obtained from the Get Shipping Service API.
   * @type: string
   **/
  shipping_service_id?: string;

  /**
   * @description: The weight of the scheduled package.
   * @type: object
   **/
  weight?: object;
}


/**
 * @description The dimensions of the package.
 **/
export interface CreatePackagesDimensionRequestInterface {
  /**
   * @description: The length of package. The length, width, height must be passed together.
   * @type: string
   **/
  ^length: string;

  /**
   * @description: The width of package. The length, width, height must be passed together.
   * @type: string
   **/
  ^width: string;

  /**
   * @description: The height of package. The length, width, height must be passed together.
   * @type: string
   **/
  ^height: string;

  /**
   * @description: The unit of measurement is used to measure the length.<br>- CM<br>- INCH
   * @type: string
   **/
  ^unit: string;
}


/**
 * @description The weight of the scheduled package.
 **/
export interface CreatePackagesWeightRequestInterface {
  /**
   * @description: The weight of the scheduled package.
   * @type: string
   **/
  ^value: string;

  /**
   * @description: The unit of measurement is used to measure the weight.<br>- GRAM<br>- POUND
   * @type: string
   **/
  ^unit: string;
}


/**
 * 接口名称：Create Packages
 * 接口标识：Create Packages
 * 接口使用场景：Create Packages
 **/
export interface CreatePackagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Create Packages
 * 接口标识：Create Packages
 * 接口使用场景：Create Packages
 **/
export interface CreatePackagesResponseInterface {
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
export interface CreatePackagesDataResponseInterface {
  /**
   * @description: TikTok Shop order ID<br> 
   * @type: string
   **/
  ^order_id?: string;

  /**
   * @description: Order line item ID list
   * @type: string[]
   **/
  ^order_line_item_ids?: string[];

  /**
   * @description: The dimensions of the scheduled package.
   * @type: object
   **/
  ^dimension?: object;

  /**
   * @description: The information of available shipping service
   * @type: object
   **/
  ^shipping_service_info?: object;

  /**
   * @description: Package ID
   * @type: string
   **/
  ^package_id?: string;

  /**
   * @description: The weight of the scheduled package.
   * @type: object
   **/
  ^weight?: object;

  /**
   * @description: The date and time that the order was created. Unix timestamp for second. 
   * @type: int
   **/
  ^create_time?: int;
}


/**
 * @description The dimensions of the scheduled package.
 **/
export interface CreatePackagesDataDimensionResponseInterface {
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


/**
 * @description The information of available shipping service
 **/
export interface CreatePackagesDataShippingServiceInfoResponseInterface {
  /**
   * @description: Shipping service ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Shipping service name
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Estimated price for this service.
   * @type: string
   **/
  ^^price?: string;

  /**
   * @description: Currency of the price
   * @type: string
   **/
  ^^currency?: string;

  /**
   * @description: The minimum estimated duration required for parcel delivery.
   * @type: int
   **/
  ^^earliest_delivery_days?: int;

  /**
   * @description: The maximum estimated duration required for parcel delivery.
   * @type: int
   **/
  ^^latest_delivery_days?: int;

  /**
   * @description: The ID of shipping provider
   * @type: string
   **/
  ^^shipping_provider_id?: string;

  /**
   * @description: The name of shipping provider
   * @type: string
   **/
  ^^shipping_provider_name?: string;
}


/**
 * @description The weight of the scheduled package.
 **/
export interface CreatePackagesDataWeightResponseInterface {
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
