export const GET_ELIGIBLE_SHIPPING_SERVICE_URL_PATH = '/fulfillment/202309/orders/{order_id}/shipping_services/query';,export const GET_ELIGIBLE_SHIPPING_SERVICE_METHOD = '1';


/**
 * 接口名称：Get Eligible Shipping Service
 * 接口标识：Get Eligible Shipping Service
 * 接口使用场景：Get Eligible Shipping Service
 **/
export interface GetEligibleShippingServiceRequestInterface {
  /**
   * @description: Order line item ID list
   * @type: string[]
   **/
  order_line_item_ids?: string[];

  /**
   * @description: The weight of the scheduled package.
   * @type: object
   **/
  weight?: object;

  /**
   * @description: The dimensions of the scheduled package.
   * @type: object
   **/
  dimension?: object;
}


/**
 * @description The weight of the scheduled package.
 **/
export interface GetEligibleShippingServiceWeightRequestInterface {
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
 * @description The dimensions of the scheduled package.
 **/
export interface GetEligibleShippingServiceDimensionRequestInterface {
  /**
   * @description: The length of the package. The length, width, height must be passed together.
   * @type: string
   **/
  ^length: string;

  /**
   * @description: The width of the package. The length, width, height must be passed together.
   * @type: string
   **/
  ^width: string;

  /**
   * @description: The height of the package. The length, width, height must be passed together.
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
 * 接口名称：Get Eligible Shipping Service
 * 接口标识：Get Eligible Shipping Service
 * 接口使用场景：Get Eligible Shipping Service
 **/
export interface GetEligibleShippingServiceRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Eligible Shipping Service
 * 接口标识：Get Eligible Shipping Service
 * 接口使用场景：Get Eligible Shipping Service
 **/
export interface GetEligibleShippingServiceResponseInterface {
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
export interface GetEligibleShippingServiceDataResponseInterface {
  /**
   * @description: TikTok Shop order ID
   * @type: string
   **/
  ^order_id?: string;

  /**
   * @description: Line item ID list
   * @type: string[]
   **/
  ^order_line_id?: string[];

  /**
   * @description: The weight of the scheduled package.
   * @type: object
   **/
  ^weight?: object;

  /**
   * @description: Shipping services info.
   * @type: []object
   **/
  ^shipping_services?: []object;

  /**
   * @description: The dimension of the scheduled package.
   * @type: object
   **/
  ^dimension?: object;
}


/**
 * @description The weight of the scheduled package.
 **/
export interface GetEligibleShippingServiceDataWeightResponseInterface {
  /**
   * @description: The weight of the scheduled package.
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
 * @description Shipping services info.
 **/
export interface GetEligibleShippingServiceDataShippingServicesResponseInterface {
  /**
   * @description: Shipping service ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Shipping service Name
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
   * @description: The minimum estimated duration required for parcel delivery.<br>
   * @type: int
   **/
  ^^earliest_delivery_days?: int;

  /**
   * @description: The maximum estimated duration required for parcel delivery.
   * @type: int
   **/
  ^^latest_delivery_days?: int;

  /**
   * @description: Whether it is the default shipping service
   * @type: bool
   **/
  ^^is_default?: bool;

  /**
   * @description: The name of shipping provider
   * @type: string
   **/
  ^^shipping_provider_name?: string;

  /**
   * @description: The ID of shipping provider
   * @type: string
   **/
  ^^shipping_provider_id?: string;
}


/**
 * @description The dimension of the scheduled package.
 **/
export interface GetEligibleShippingServiceDataDimensionResponseInterface {
  /**
   * @description: The length of the package. The length, width, height must be passed together.
   * @type: string
   **/
  ^^length?: string;

  /**
   * @description: The width of the package. The length, width, height must be passed together.
   * @type: string
   **/
  ^^width?: string;

  /**
   * @description: The height of the package. The length, width, height must be passed together.
   * @type: string
   **/
  ^^height?: string;

  /**
   * @description: The unit of measurement is used to measure the length.<br>- CM<br>- INCH
   * @type: string
   **/
  ^^unit?: string;
}
