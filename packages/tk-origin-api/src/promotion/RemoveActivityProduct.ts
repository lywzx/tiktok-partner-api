export const REMOVE_ACTIVITY_PRODUCT_URL_PATH = '/promotion/202309/activities/{activity_id}/products';,export const REMOVE_ACTIVITY_PRODUCT_METHOD = '4';


/**
 * 接口名称：Remove Activity Product
 * 接口标识：Remove Activity Product
 * 接口使用场景：Remove Activity Product
 **/
export interface RemoveActivityProductRequestInterface {
  /**
   * @description: Product ID to remove.
   * @type: string[]
   **/
  product_ids?: string[];

  /**
   * @description: Product variation to remove(SKU ID).
   * @type: string[]
   **/
  sku_ids?: string[];
}


/**
 * 接口名称：Remove Activity Product
 * 接口标识：Remove Activity Product
 * 接口使用场景：Remove Activity Product
 **/
export interface RemoveActivityProductRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Remove Activity Product
 * 接口标识：Remove Activity Product
 * 接口使用场景：Remove Activity Product
 **/
export interface RemoveActivityProductResponseInterface {
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
export interface RemoveActivityProductDataResponseInterface {
  /**
   * @description: A unique ID that identifies activities.
   * @type: string
   **/
  ^activity_id?: string;

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
