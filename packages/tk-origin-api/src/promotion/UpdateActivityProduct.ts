export const UPDATE_ACTIVITY_PRODUCT_URL_PATH = '/promotion/202309/activities/{activity_id}/products';,export const UPDATE_ACTIVITY_PRODUCT_METHOD = '3';


/**
 * 接口名称：Update Activity Product
 * 接口标识：Update Activity Product
 * 接口使用场景：Update Activity Product
 **/
export interface UpdateActivityProductRequestInterface {
  /**
   * @description: Discount Item list<br>If you choose "product" as the product level, you need to fill "products"<br>If you choose "variants" as the product level, you need to fill "skus"
   * @type: []object
   **/
  products: []object;
}


/**
 * @description Discount Item list<br>If you choose "product" as the product level, you need to fill "products"<br>If you choose "variants" as the product level, you need to fill "skus"
 **/
export interface UpdateActivityProductProductsRequestInterface {
  /**
   * @description: TikTok Shop product ID
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Fill this field only if the activity type is FIXED_PRICE/FLASHSALE. The currency of activity price is same as product price.
   * @type: string
   **/
  ^activity_price_amount?: string;

  /**
   * @description: Activity discount, available only if activity_type is DIRECT_DISCOUNT. If activity discount is 10%, then discount is "10".
   * @type: string
   **/
  ^discount?: string;

  /**
   * @description: Activity stock: you can either input "-1" (no limit) or a specific number. Activity stock you set must not be greater than the current stock.
   * @type: int
   **/
  ^quantity_limit: int;

  /**
   * @description: Purchase limit per buyer: you can either input "-1" (no limit) or a specific number.
   * @type: int
   **/
  ^quantity_per_user: int;

  /**
   * @description: SKU object, this field must be empty when the product_level is PRODUCT.
   * @type: []object
   **/
  ^skus?: []object;

  /**
   * @description: A unique ID that identifies activities
   * @type: string
   **/
  activity_id: string;
}


/**
 * @description SKU object, this field must be empty when the product_level is PRODUCT.
 **/
export interface UpdateActivityProductProductsSkusRequestInterface {
  /**
   * @description: SKU ID
   * @type: string
   **/
  ^^id: string;

  /**
   * @description: Fill this field only if the activity type is FIXED_PRICE/FLASHSALE. The currency of activity price is same as product price.
   * @type: string
   **/
  ^^activity_price_amount?: string;

  /**
   * @description: Activity discount, available only if activity_type is DIRECT_DISCOUNT. If activity discount is 10%, then discount is "10".
   * @type: string
   **/
  ^^discount?: string;

  /**
   * @description: Activity stock: you can either input "-1" (no limit) or a specific number. Activity stock you set must not be greater than the current stock.
   * @type: int
   **/
  ^^quantity_limit: int;

  /**
   * @description: Purchase limit per buyer: you can either input "-1" (no limit) or a specific number.
   * @type: int
   **/
  ^^quantity_per_user: int;
}


/**
 * 接口名称：Update Activity Product
 * 接口标识：Update Activity Product
 * 接口使用场景：Update Activity Product
 **/
export interface UpdateActivityProductRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Activity Product
 * 接口标识：Update Activity Product
 * 接口使用场景：Update Activity Product
 **/
export interface UpdateActivityProductResponseInterface {
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
export interface UpdateActivityProductDataResponseInterface {
  /**
   * @description: A unique ID that identifies different activities.
   * @type: string
   **/
  ^activity_id?: string;

  /**
   * @description: Activity name set by the merchant.
   * @type: string
   **/
  ^title?: string;

  /**
   * @description: Activity update time, unix timestamp.
   * @type: int
   **/
  ^update_time?: int;

  /**
   * @description: Activity status.<br>Values:<br>- DRAFT: Promotion activities with this status are not available to TikTok users.<br>- NOT_START: Promotion activities with this status are not available to TikTok users until the the set activity start time.<br>- ONGOING: Promotion activities with this status are available to TikTok users.<br>- EXPIRED: Promotion activities with this status are not available to TikTok users because it has expired.<br>- DEACTIVATED: The activity has been deactivated by the seller and is not available to TikTok users.<br>- NOT_EFFECTIVE:  The activity is not in effect and is not available to TikTok users.<br><br><br><br><br><br>
   * @type: string
   **/
  ^status?: string;

  /**
   * @description: The number of items (ProductInfo objects) in this request.
   * @type: int
   **/
  ^total_count?: int;
}
