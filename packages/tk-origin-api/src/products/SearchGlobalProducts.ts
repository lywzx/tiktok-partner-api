export const SEARCH_GLOBAL_PRODUCTS_URL_PATH = '/product/202312/global_products/search';,export const SEARCH_GLOBAL_PRODUCTS_METHOD = '1';


/**
 * 接口名称：Search Global Products
 * 接口标识：Search Global Products
 * 接口使用场景：Search Global Products
 **/
export interface SearchGlobalProductsRequestInterface {
  /**
   * @description: Global Product status, used as a filtering criterion for global product search. including <br>PUBLISHED,UNPUBLISHED,DRAFT,DELETED
   * @type: string
   **/
  status?: string;

  /**
   * @description: Seller SKUs, a filtering condition used for global product search. This field allows you to search for all global products that contain these Seller SKUs.
   * @type: string[]
   **/
  seller_skus?: string[];

  /**
   * @description: The fields "create_time_ge" and "create_time_le" together constitute the filter condition for the creation time of the global product. <br>- If you only fill in the "create_time_le", and the "create_time_ge" is empty , then we will set the earliest time of the shop to the field "create_time_ge" by default. <br>- If you only fill in the "create_time_ge", and the "create_time_le" is empty , then we will set the current time to the field "create_time_le" by default.<br><br>The time search condition uses Unix timestamp in GMT (UTC+00:00). 
   * @type: int
   **/
  create_time_ge?: int;

  /**
   * @description: Refer to the description of "create_time_ge".
   * @type: int
   **/
  create_time_le?: int;

  /**
   * @description: The fields "update_time_ge" and "update_time_le" together constitute the filter condition for the update time of the global product. <br>-  If you only fill in the "update_time_le", and the "update_time_ge" is empty , then we will set the earliest time of the shop to the field "update_time_ge" by default. <br>- If you only fill in the "update_time_ge", and the "update_time_le" is empty , then we will set the current time to the field "update_time_le" by default.
   * @type: int
   **/
  update_time_ge?: int;

  /**
   * @description: Refer to the description of "update_time_ge".
   * @type: int
   **/
  update_time_le?: int;
}


/**
 * 接口名称：Search Global Products
 * 接口标识：Search Global Products
 * 接口使用场景：Search Global Products
 **/
export interface SearchGlobalProductsRequestInterface {
  /**
   * @description: "page_size" represents the return list pagination, the number of global products per page. Each page can retrieve up to 100 global product records.
   * @type: int
   **/
  page_size: int;

  /**
   * @description: The pagination token is a cursor used for pagination. It is not needed for the first page. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  page_token?: string;
}


/**
 * 接口名称：Search Global Products
 * 接口标识：Search Global Products
 * 接口使用场景：Search Global Products
 **/
export interface SearchGlobalProductsResponseInterface {
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
export interface SearchGlobalProductsDataResponseInterface {
  /**
   * @description: The pagination token is a cursor used for pagination. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: The total number of global products searched.
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: The searched global product list.
   * @type: []object
   **/
  ^global_products?: []object;
}


/**
 * @description The searched global product list.
 **/
export interface SearchGlobalProductsDataGlobalProductsResponseInterface {
  /**
   * @description: The global product ID.<br>
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The global product name.
   * @type: string
   **/
  ^^title?: string;

  /**
   * @description: The status of the global product.<br>including PUBLISHED,UNPUBLISHED,DRAFT,DETELTED
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: global product SKU information.
   * @type: []object
   **/
  ^^skus?: []object;

  /**
   * @description: The time when the global product is created.<br>Unix timestamp GMT (UTC+00:00). This timestamp is used across all API requests. Developers can use this convert to local time.
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: The time when the global product status is updated.<br>Unix timestamp GMT (UTC+00:00). This timestamp is used across all API requests. Developers can use this convert to local time.
   * @type: int
   **/
  ^^update_time?: int;
}


/**
 * @description global product SKU information.
 **/
export interface SearchGlobalProductsDataGlobalProductsSkusResponseInterface {
  /**
   * @description: The global SKU ID.<br>
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: The seller SKU entered when creating or editing the global product.
   * @type: string
   **/
  ^^^seller_sku?: string;
}
