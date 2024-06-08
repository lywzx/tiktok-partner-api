export const DELETE_GLOBAL_PRODUCTS_URL_PATH = '/product/202309/global_products';,export const DELETE_GLOBAL_PRODUCTS_METHOD = '4';


/**
 * 接口名称：Delete Global Products
 * 接口标识：Delete Global Products
 * 接口使用场景：Delete Global Products
 **/
export interface DeleteGlobalProductsRequestInterface {
  /**
   * @description: List of global product IDs corresponding to global products to be deleted. The upper limit for deleting global products in a single batch is 20.
   * @type: string[]
   **/
  global_product_ids: string[];
}


/**
 * 接口名称：Delete Global Products
 * 接口标识：Delete Global Products
 * 接口使用场景：Delete Global Products
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeleteGlobalProductsRequestInterface {

}


/**
 * 接口名称：Delete Global Products
 * 接口标识：Delete Global Products
 * 接口使用场景：Delete Global Products
 **/
export interface DeleteGlobalProductsResponseInterface {
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
export interface DeleteGlobalProductsDataResponseInterface {
  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface DeleteGlobalProductsDataErrorsResponseInterface {
  /**
   * @description: Failed status message
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: Status code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Errors details
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description Errors details
 **/
export interface DeleteGlobalProductsDataErrorsDetailResponseInterface {
  /**
   * @description: The global product that failed to be deleted
   * @type: string
   **/
  ^^^global_product_id?: string;
}
