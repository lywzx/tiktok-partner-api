export const CREATE_ACTIVITY_URL_PATH = '/promotion/202309/activities';,export const CREATE_ACTIVITY_METHOD = '1';


/**
 * 接口名称：Create Activity
 * 接口标识：Create Activity
 * 接口使用场景：Create Activity
 **/
export interface CreateActivityRequestInterface {
  /**
   * @description: Activity name (50 characters max.) The name must be unique
   * @type: string
   **/
  title: string;

  /**
   * @description: The type of activities.<br>Values:<br>FIXED_PRICE: ""fixed price"" activity<br>DIRECT_DISCOUNT: ""direct discount"" activity<br>FLASHSALE: ""flash sale"" activity<br><br>Note:<br>The activity type cannot be changed once the activity has been created.
   * @type: string
   **/
  activity_type: string;

  /**
   * @description: Activity start time, unix timestamp
   * @type: int
   **/
  begin_time: int;

  /**
   * @description: Activity end time, unix timestamp
   * @type: int
   **/
  end_time: int;

  /**
   * @description: Activity product dimension, values are: <br>- PRODUCT: Product level promotion activity.<br>- VARIATION: Variant level promotion acitivity (SKU).
   * @type: string
   **/
  product_level: string;
}


/**
 * 接口名称：Create Activity
 * 接口标识：Create Activity
 * 接口使用场景：Create Activity
 **/
export interface CreateActivityRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Create Activity
 * 接口标识：Create Activity
 * 接口使用场景：Create Activity
 **/
export interface CreateActivityResponseInterface {
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
export interface CreateActivityDataResponseInterface {
  /**
   * @description: A unique ID that identifies different activities.
   * @type: string
   **/
  ^activity_id?: string;

  /**
   * @description: Activity creation time, unix timestamp.
   * @type: int
   **/
  ^create_time?: int;

  /**
   * @description: Activity update time, unix timestamp.
   * @type: int
   **/
  ^update_time?: int;

  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: Promotion activities with this status are not available to TikTok users.<br>- NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time.<br>- ONGOING: Promotion activities with this status are available to TikTok users.<br>- EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired.<br>- DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users.<br>- NOT_EFFECTIVE:  The activity is not in effect and is not available to TikTok users.
   * @type: string
   **/
  ^status?: string;
}
