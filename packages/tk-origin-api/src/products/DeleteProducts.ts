export const DELETE_PRODUCTS_URL_PATH = '/product/202309/products';,export const DELETE_PRODUCTS_METHOD = '4';


/**
 * 接口名称：Delete Products
 * 接口标识：Delete Products
 * 接口使用场景：Delete Products
 **/
export interface DeleteProductsRequestInterface {
  /**
   * @description: List of product IDs corresponding to the products to be deleted. The upper limit for deleting products in a single batch is 20.
   * @type: string[]
   **/
  product_ids: string[];
}


/**
 * 接口名称：Delete Products
 * 接口标识：Delete Products
 * 接口使用场景：Delete Products
 **/
export interface DeleteProductsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Delete Products
 * 接口标识：Delete Products
 * 接口使用场景：Delete Products
 **/
export interface DeleteProductsResponseInterface {
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
export interface DeleteProductsDataResponseInterface {
  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface DeleteProductsDataErrorsResponseInterface {
  /**
   * @description: Failed biz status code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Failed status message
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: Errors details
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description Errors details
 **/
export interface DeleteProductsDataErrorsDetailResponseInterface {
  /**
   * @description: The product that failed to be deleted
   * @type: string
   **/
  ^^^product_id?: string;
}
