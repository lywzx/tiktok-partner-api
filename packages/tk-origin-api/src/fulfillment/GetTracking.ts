export const GET_TRACKING_URL_PATH = '/fulfillment/202309/orders/{order_id}/tracking';,export const GET_TRACKING_METHOD = '2';


/**
 * 接口名称：Get Tracking
 * 接口标识：Get Tracking
 * 接口使用场景：Get Tracking
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetTrackingRequestInterface {

}


/**
 * 接口名称：Get Tracking
 * 接口标识：Get Tracking
 * 接口使用场景：Get Tracking
 **/
export interface GetTrackingRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Tracking
 * 接口标识：Get Tracking
 * 接口使用场景：Get Tracking
 **/
export interface GetTrackingResponseInterface {
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
export interface GetTrackingDataResponseInterface {
  /**
   * @description: tracking info
   * @type: []object
   **/
  ^tracking?: []object;
}


/**
 * @description tracking info
 **/
export interface GetTrackingDataTrackingResponseInterface {
  /**
   * @description: tracking description
   * @type: string
   **/
  ^^description?: string;

  /**
   * @description: update time
   * @type: int
   **/
  ^^update_time_millis?: int;
}
