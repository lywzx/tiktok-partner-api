export const GET_ACTIVITY_URL_PATH = '/promotion/202309/activities/{activity_id}';,export const GET_ACTIVITY_METHOD = '2';


/**
 * 接口名称：Get Activity
 * 接口标识：Get Activity
 * 接口使用场景：Get Activity
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetActivityRequestInterface {

}


/**
 * 接口名称：Get Activity
 * 接口标识：Get Activity
 * 接口使用场景：Get Activity
 **/
export interface GetActivityRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Activity
 * 接口标识：Get Activity
 * 接口使用场景：Get Activity
 **/
export interface GetActivityResponseInterface {
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
export interface GetActivityDataResponseInterface {
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
   * @description: The type of activities.<br>Values:<br>FIXED_PRICE<br>DIRECT_DISCOUNT<br>FLASHSALE
   * @type: string
   **/
  ^activity_type?: string;

  /**
   * @description: Activity start time, unix timestamp. Must be later than the current time.
   * @type: int
   **/
  ^begin_time?: int;

  /**
   * @description: Activity end time, unix time stamp. The end time must be 10 minutes later than the start time and the activity period must be less than 365 days.
   * @type: int
   **/
  ^end_time?: int;

  /**
   * @description: Product List.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description Product List.
 **/
export interface GetActivityDataProductsResponseInterface {
  /**
   * @description: TikTok Shop Product ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Activity price.
   * @type: object
   **/
  ^^activity_price?: object;

  /**
   * @description: Activity quantity limit: you can either input "-1" (no limit) or a specific number. Activity quantity you set must not be greater than the current quantity.
   * @type: int
   **/
  ^^quantity_limit?: int;

  /**
   * @description: Purchase limit per buyer: you can either input "-1" (no limit) or a specific number.
   * @type: int
   **/
  ^^quantity_per_user?: int;

  /**
   * @description: Activity discount, available only if activity_type is DIRECT_DISCOUNT. If activity discount is 10%, then discount is "10".
   * @type: string
   **/
  ^^discount?: string;

  /**
   * @description: SKU object, this field must be empty when the product_level is PRODUCT.
   * @type: []object
   **/
  ^^skus?: []object;
}


/**
 * @description Activity price.
 **/
export interface GetActivityDataProductsActivityPriceResponseInterface {
  /**
   * @description: Activity price amount.
   * @type: string
   **/
  ^^^amount?: string;

  /**
   * @description: Currency unit of an activity price.
   * @type: string
   **/
  ^^^currency?: string;
}


/**
 * @description SKU object, this field must be empty when the product_level is PRODUCT.
 **/
export interface GetActivityDataProductsSkusResponseInterface {
  /**
   * @description: TikTok Shop SKU ID.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Activity discount, available only if activity_type is DIRECT_DISCOUNT. If activity discount is 10%, then discount is "10".
   * @type: string
   **/
  ^^^discount?: string;

  /**
   * @description: Activity quantity limit: you can either input "-1" (no limit) or a specific number. Activity quantity you set must not be greater than the current quantity.
   * @type: int
   **/
  ^^^quantity_limit?: int;

  /**
   * @description: Purchase limit per buyer: you can either input "-1" (no limit) or a specific number.
   * @type: int
   **/
  ^^^quantity_per_user?: int;

  /**
   * @description: Activity price only if activity_type is FIXED_PRICE/FLASHSALE.
   * @type: object
   **/
  ^^^activity_price?: object;

  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: Promotion activities with this status are not available to TikTok users.<br>- NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time.<br>- ONGOING: Promotion activities with this status are available to TikTok users.<br>- EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired.<br>- DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users.<br>- NOT_EFFECTIVE:  The activity is not in effect and is not available to TikTok users.
   * @type: string
   **/
  ^status?: string;

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
   * @description: Activity product dimension, values are: <br>- PRODUCT: Product level promotion activity.<br>- VARIATION: Variant level promotion acitivity (SKU).
   * @type: string
   **/
  ^product_level?: string;
}


/**
 * @description Activity price only if activity_type is FIXED_PRICE/FLASHSALE.
 **/
export interface GetActivityDataProductsSkusActivityPriceResponseInterface {
  /**
   * @description: Activity price amount.
   * @type: string
   **/
  ^^^^amount?: string;

  /**
   * @description: Currency unit of an activity price.
   * @type: string
   **/
  ^^^^currency?: string;
}
