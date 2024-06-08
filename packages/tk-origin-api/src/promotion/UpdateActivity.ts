export const UPDATE_ACTIVITY_URL_PATH = '/promotion/202309/activities/{activity_id}';,export const UPDATE_ACTIVITY_METHOD = '3';


/**
 * 接口名称：Update Activity
 * 接口标识：Update Activity
 * 接口使用场景：Update Activity
 **/
export interface UpdateActivityRequestInterface {
  /**
   * @description: Activity name (50 characters max.) The name must be unique
   * @type: string
   **/
  title: string;

  /**
   * @description: Activity start time, unix timestamp.
   * @type: int
   **/
  begin_time: int;

  /**
   * @description: Activity end time, unit timestamp.
   * @type: int
   **/
  end_time: int;
}


/**
 * 接口名称：Update Activity
 * 接口标识：Update Activity
 * 接口使用场景：Update Activity
 **/
export interface UpdateActivityRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Activity
 * 接口标识：Update Activity
 * 接口使用场景：Update Activity
 **/
export interface UpdateActivityResponseInterface {
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
export interface UpdateActivityDataResponseInterface {
  /**
   * @description: A unique ID that identifies different activities.
   * @type: string
   **/
  ^activity_id?: string;

  /**
   * @description: Activity name set by the seller.
   * @type: string
   **/
  ^title?: string;

  /**
   * @description: Activity update time, unix timestamp.
   * @type: int
   **/
  ^update_time?: int;
}
