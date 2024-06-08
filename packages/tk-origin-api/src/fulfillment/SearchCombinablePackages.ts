export const SEARCH_COMBINABLE_PACKAGES_URL_PATH = '/fulfillment/202309/combinable_packages/search';,export const SEARCH_COMBINABLE_PACKAGES_METHOD = '2';


/**
 * 接口名称：Search Combinable Packages
 * 接口标识：Search Combinable Packages
 * 接口使用场景：Search Combinable Packages
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchCombinablePackagesRequestInterface {

}


/**
 * 接口名称：Search Combinable Packages
 * 接口标识：Search Combinable Packages
 * 接口使用场景：Search Combinable Packages
 **/
export interface SearchCombinablePackagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: This field value would be returned in response data and you can use this to search the data on the next page. You do not need it at first search.<br>
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: Use this field to specify the maximum number of packages to obtain on a single page. Must be 1-50.
   * @type: int
   **/
  page_size: int;
}


/**
 * 接口名称：Search Combinable Packages
 * 接口标识：Search Combinable Packages
 * 接口使用场景：Search Combinable Packages
 **/
export interface SearchCombinablePackagesResponseInterface {
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
export interface SearchCombinablePackagesDataResponseInterface {
  /**
   * @description: List of eligible packages that can be combined.
   * @type: []object
   **/
  ^combinable_packages?: []object;

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
}


/**
 * @description List of eligible packages that can be combined.
 **/
export interface SearchCombinablePackagesDataCombinablePackagesResponseInterface {
  /**
   * @description: A set of pre-generated package IDs after calling the Search Draft Package API. These package IDs will be used when the package combine is confirmed.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Order list for this package
   * @type: string[]
   **/
  ^^order_ids?: string[];
}
