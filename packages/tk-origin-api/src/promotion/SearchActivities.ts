export const SEARCH_ACTIVITIES_URL_PATH = '/promotion/202309/activities/search';,export const SEARCH_ACTIVITIES_METHOD = '1';


/**
 * 接口名称：Search Activities
 * 接口标识：Search Activities
 * 接口使用场景：Search Activities
 **/
export interface SearchActivitiesRequestInterface {
  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: Promotion activities with this status are not available to TikTok users.<br>- NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time.<br>- ONGOING: Promotion activities with this status are available to TikTok users.<br>- EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired.<br>- DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users.<br>- NOT_EFFECTIVE:  The activity is not in effect and is not available to TikTok users.
   * @type: string
   **/
  status?: string;

  /**
   * @description: Activity title key words.
   * @type: string
   **/
  activity_title?: string;

  /**
   * @description: Page size, maximum limit 100, default limit 50
   * @type: int
   **/
  page_size?: int;

  /**
   * @description: Page cursor, the first page can be empty.
   * @type: string
   **/
  page_token?: string;
}


/**
 * 接口名称：Search Activities
 * 接口标识：Search Activities
 * 接口使用场景：Search Activities
 **/
export interface SearchActivitiesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Search Activities
 * 接口标识：Search Activities
 * 接口使用场景：Search Activities
 **/
export interface SearchActivitiesResponseInterface {
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
export interface SearchActivitiesDataResponseInterface {
  /**
   * @description: Total activity count.
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: Page cursor for next request. The last page returns "".
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: Activities list information.
   * @type: []object
   **/
  ^activities?: []object;
}


/**
 * @description Activities list information.
 **/
export interface SearchActivitiesDataActivitiesResponseInterface {
  /**
   * @description: A unique ID that identifies different activities.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Activity name (50 characters max.) The name must be unique.
   * @type: string
   **/
  ^^title?: string;

  /**
   * @description: The type of activities.<br>Values:<br>FIXED_PRICE<br>DIRECT_DISCOUNT<br>FLASHSALE
   * @type: string
   **/
  ^^activity_type?: string;

  /**
   * @description: The time when promotion activity starts. The start time must be later than current time.
   * @type: int
   **/
  ^^begin_time?: int;

  /**
   * @description: The time when promotion activity ends. The end time must be 10 mins later than the start time, and the activity period must be less than 365 days.
   * @type: int
   **/
  ^^end_time?: int;

  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: The activity in this status is not avaliable for users.<br>- NOT_START: The activity in this status is not avaliable for users utill activity start time coming.<br>- ONGOING: The activity in this status is avaliable for users.<br>- EXPIRED: The activity in this status is not avaliable for users because current time over activity end time.<br>- DEACTIVATED: The activity in this status is deactivated by owner and not avaliable for users.<br>- NOT_EFFECTIVE: The activity in this status is not avaliable for users.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: The time when the activity is created.
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: The time when the activity is updated.
   * @type: int
   **/
  ^^update_time?: int;

  /**
   * @description: Activity product dimension, values are: <br>- PRODUCT: Product level promotion activity.<br>- VARIATION: Variant level promotion acitivity (SKU).
   * @type: string
   **/
  ^^product_level?: string;
}
