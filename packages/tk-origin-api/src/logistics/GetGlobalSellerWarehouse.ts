export const GET_GLOBAL_SELLER_WAREHOUSE_URL_PATH = '/logistics/202309/global_warehouses';,export const GET_GLOBAL_SELLER_WAREHOUSE_METHOD = '2';


/**
 * 接口名称：Get Global Seller Warehouse
 * 接口标识：Get Global Seller Warehouse
 * 接口使用场景：Get Global Seller Warehouse
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalSellerWarehouseRequestInterface {

}


/**
 * 接口名称：Get Global Seller Warehouse
 * 接口标识：Get Global Seller Warehouse
 * 接口使用场景：Get Global Seller Warehouse
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalSellerWarehouseRequestInterface {

}


/**
 * 接口名称：Get Global Seller Warehouse
 * 接口标识：Get Global Seller Warehouse
 * 接口使用场景：Get Global Seller Warehouse
 **/
export interface GetGlobalSellerWarehouseResponseInterface {
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
export interface GetGlobalSellerWarehouseDataResponseInterface {
  /**
   * @description: global warehouse information
   * @type: []object
   **/
  ^global_warehouses?: []object;
}


/**
 * @description global warehouse information
 **/
export interface GetGlobalSellerWarehouseDataGlobalWarehousesResponseInterface {
  /**
   * @description: This is the Primary Key, immutable, and used for all logistics global warehouses.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: A warehouse name. This name is not unique across the TikTok Shop system.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Values:<br>- SELLER: Warehouse owned by the seller. <br>- PLATFORM_COOPERATION: Warehouse owned by TikTok Shop. <br>
   * @type: string
   **/
  ^^ownership?: string;
}
