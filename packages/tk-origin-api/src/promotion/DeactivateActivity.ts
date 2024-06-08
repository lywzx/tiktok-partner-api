export const DEACTIVATE_ACTIVITY_URL_PATH = '/promotion/202309/activities/{activity_id}/deactivate';,export const DEACTIVATE_ACTIVITY_METHOD = '1';


/**
 * 接口名称：Deactivate Activity
 * 接口标识：Deactivate Activity
 * 接口使用场景：Deactivate Activity
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeactivateActivityRequestInterface {

}


/**
 * 接口名称：Deactivate Activity
 * 接口标识：Deactivate Activity
 * 接口使用场景：Deactivate Activity
 **/
export interface DeactivateActivityRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Deactivate Activity
 * 接口标识：Deactivate Activity
 * 接口使用场景：Deactivate Activity
 **/
export interface DeactivateActivityResponseInterface {
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
export interface DeactivateActivityDataResponseInterface {
  /**
   * @description: A unique ID that identifies different activities.
   * @type: string
   **/
  ^activity_id?: string;

  /**
   * @description: Activity name (50 characters max.) The name must be unique.
   * @type: string
   **/
  ^title?: string;

  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: Promotion activities with this status are not available to TikTok users.<br>- NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time.<br>- ONGOING: Promotion activities with this status are available to TikTok users.<br>- EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired.<br>- DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users.<br>- NOT_EFFECTIVE:  The activity is not in effect and is not available to TikTok users.
   * @type: string
   **/
  ^status?: string;

  /**
   * @description: Activity update time, unix timestamp.
   * @type: int
   **/
  ^update_time?: int;
}
