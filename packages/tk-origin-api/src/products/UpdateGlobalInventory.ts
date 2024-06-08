export const UPDATE_GLOBAL_INVENTORY_URL_PATH = '/product/202309/global_products/{global_product_id}/inventory/update';,export const UPDATE_GLOBAL_INVENTORY_METHOD = '1';


/**
 * 接口名称：Update Global Inventory
 * 接口标识：Update Global Inventory
 * 接口使用场景：Update Global Inventory
 **/
export interface UpdateGlobalInventoryRequestInterface {
  /**
   * @description: Need to modify the Global SKU corresponding to the inventory.
   * @type: []object
   **/
  global_skus: []object;
}


/**
 * @description Need to modify the Global SKU corresponding to the inventory.
 **/
export interface UpdateGlobalInventoryGlobalSkusRequestInterface {
  /**
   * @description: SKU ID for global products
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Global inventory information that needs to be updated
   * @type: []object
   **/
  ^inventory: []object;
}


/**
 * @description Global inventory information that needs to be updated
 **/
export interface UpdateGlobalInventoryGlobalSkusInventoryRequestInterface {
  /**
   * @description: Global warehouse ID. You can obtain global entity warehouses through the interface "Get Gloabal Warehouse List", <br>Specifying a global warehouse is only required in multi-warehouse scenarios.
   * @type: string
   **/
  ^^global_warehouse_id: string;

  /**
   * @description: The quantity of named inventory after the change.
   * @type: int
   **/
  ^^quantity: int;
}


/**
 * 接口名称：Update Global Inventory
 * 接口标识：Update Global Inventory
 * 接口使用场景：Update Global Inventory
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateGlobalInventoryRequestInterface {

}


/**
 * 接口名称：Update Global Inventory
 * 接口标识：Update Global Inventory
 * 接口使用场景：Update Global Inventory
 **/
export interface UpdateGlobalInventoryResponseInterface {
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
