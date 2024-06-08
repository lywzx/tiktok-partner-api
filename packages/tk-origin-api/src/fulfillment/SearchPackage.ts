export const SEARCH_PACKAGE_URL_PATH = '/fulfillment/202309/packages/search';,export const SEARCH_PACKAGE_METHOD = '1';


/**
 * 接口名称：Search Package
 * 接口标识：Search Package
 * 接口使用场景：Search Package
 **/
export interface SearchPackageRequestInterface {
  /**
   * @description: A date used for selecting packages created after (or at) a specified time. Only packages created after the specified time are returned. Unix timestamp. 
   * @type: int
   **/
  create_time_ge?: int;

  /**
   * @description: A date used for selecting packages created before (or at) a specified time. Unix timestamp. 
   * @type: int
   **/
  create_time_lt?: int;

  /**
   * @description: A date used for selecting packages that were last updated after (or at) a specified time. An update is defined as any change in package status, including the creation of a new package. Includes updates made by TikTok and by the seller. Unix timestamp. 
   * @type: int
   **/
  update_time_ge?: int;

  /**
   * @description: A date used for selecting packages that were last updated before (or at) a specified time. An update is defined as any change in package status, including the creation of a new packages. Includes updates made by TikTok and by the seller. Unix timestamp.
   * @type: int
   **/
  update_time_lt?: int;

  /**
   * @description: PROCESSING: package has been arranged by seller. Waiting carrier to collect the parcel.<br>FULFILLING: package has been collected by carrier and in transit.<br>COMPLETED: package has been delivered.<br>CANCELLED: package has been canceled. Normally, the package is canceled due to the package being lost or damaged.
   * @type: string
   **/
  package_status?: string;
}


/**
 * 接口名称：Search Package
 * 接口标识：Search Package
 * 接口使用场景：Search Package
 **/
export interface SearchPackageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Use this field to specify the maximum number of orders to obtain in a single page. Must be 1-50.
   * @type: int
   **/
  page_size: int;

  /**
   * @description: Sort field<br>Default value: create_time<br>create_time<br>order_pay_time<br>update_time
   * @type: string
   **/
  sort_field?: string;

  /**
   * @description: Available value: ASC;DESC(default);
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: This field value would be returned in response data and you can use this to search the data on the next page. You do not need it at first search.
   * @type: string
   **/
  page_token?: string;
}


/**
 * 接口名称：Search Package
 * 接口标识：Search Package
 * 接口使用场景：Search Package
 **/
export interface SearchPackageResponseInterface {
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
export interface SearchPackageDataResponseInterface {
  /**
   * @description: Cursor used for searching for more information. If the field is empty, there is no more information
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: Total amount of the search result
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: Packages.
   * @type: []object
   **/
  ^packages?: []object;
}


/**
 * @description Packages.
 **/
export interface SearchPackageDataPackagesResponseInterface {
  /**
   * @description: package id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: TikTok Shop order
   * @type: []object
   **/
  ^^orders?: []object;
}


/**
 * @description TikTok Shop order
 **/
export interface SearchPackageDataPackagesOrdersResponseInterface {
  /**
   * @description: TikTok Shop order id
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Sku
   * @type: []object
   **/
  ^^^skus?: []object;

  /**
   * @description: Package created time.Unix timestamp
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Package lastest updated time.Unix timestamp
   * @type: int
   **/
  ^^update_time?: int;

  /**
   * @description: Package status<br>PROCESSING: package has been arranged by seller. Waiting carrier to collect the parcel.<br>FULFILLING: package has been collected by carrier and in transit.<br>COMPLETED: package has been delivered.<br>CANCELLED: package has been canceled. Normally, the package is canceled due to the package being lost or damaged.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: Package tracking number
   * @type: string
   **/
  ^^tracking_number?: string;

  /**
   * @description: Package shipping provider
   * @type: string
   **/
  ^^shipping_provider_name?: string;

  /**
   * @description: Package shipping provider id
   * @type: string
   **/
  ^^shipping_provider_id?: string;

  /**
   * @description: The order line item id contained in the package<br>
   * @type: string[]
   **/
  ^^order_line_item_ids?: string[];
}


/**
 * @description Sku
 **/
export interface SearchPackageDataPackagesOrdersSkusResponseInterface {
  /**
   * @description: The id of sku<br>
   * @type: string
   **/
  ^^^^id?: string;

  /**
   * @description: Sku properties
   * @type: string
   **/
  ^^^^name?: string;

  /**
   * @description: Sku image in order snapshot<br>
   * @type: string
   **/
  ^^^^image_url?: string;

  /**
   * @description: Quantity of the sku
   * @type: int
   **/
  ^^^^quantity?: int;
}
