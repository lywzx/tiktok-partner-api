export const UPDATE_INVENTORY_URL_PATH = '/product/202309/products/{product_id}/inventory/update';,export const UPDATE_INVENTORY_METHOD = '1';


/**
 * 接口名称：Update Inventory
 * 接口标识：Update Inventory
 * 接口使用场景：Update Inventory
 **/
export interface UpdateInventoryRequestInterface {
  /**
   * @description: Need to modify the SKU corresponding to the inventory.nn**Parameter Rules:**nThe SKU stock can be updated only by this SKU in live status. Or you can not be successful
   * @type: []object
   **/
  skus: []object;
}


/**
 * @description Need to modify the SKU corresponding to the inventory.nn**Parameter Rules:**nThe SKU stock can be updated only by this SKU in live status. Or you can not be successful
 **/
export interface UpdateInventorySkusRequestInterface {
  /**
   * @description: Need to modify the SKU corresponding to the inventory.
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Inventory information that needs to be updatedn
   * @type: []object
   **/
  ^inventory: []object;
}


/**
 * @description Inventory information that needs to be updatedn
 **/
export interface UpdateInventorySkusInventoryRequestInterface {
  /**
   * @description: Need to modify the warehouse corresponding to the inventory.nn**Parameter Rules:**nIf the SKU is using one default warehouse information , then this warehouse id is an optional field. If the SKU is using another warehouse or the SKU has multiple warehouse information , then this warehouse id and inventory information are mandatory when you update inventory to a certain warehouse.
   * @type: string
   **/
  ^^warehouse_id?: string;

  /**
   * @description: The quantity of named inventory after the change.nn**Parameter Rules:**nThe amount by which the inventory quantity was changed. The value should be non-negative numbers（include number 0）And less then 99999
   * @type: int
   **/
  ^^quantity: int;
}


/**
 * 接口名称：Update Inventory
 * 接口标识：Update Inventory
 * 接口使用场景：Update Inventory
 **/
export interface UpdateInventoryRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Inventory
 * 接口标识：Update Inventory
 * 接口使用场景：Update Inventory
 **/
export interface UpdateInventoryResponseInterface {
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
export interface UpdateInventoryDataResponseInterface {
  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface UpdateInventoryDataErrorsResponseInterface {
  /**
   * @description: Failed status code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Failed status message
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: List of skus that failed to update
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description List of skus that failed to update
 **/
export interface UpdateInventoryDataErrorsDetailResponseInterface {
  /**
   * @description: Failed sku id
   * @type: string
   **/
  ^^^sku_id?: string;

  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^^^extra_errors?: []object;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface UpdateInventoryDataErrorsDetailExtraErrorsResponseInterface {
  /**
   * @description: Failed warehouse ID
   * @type: string
   **/
  ^^^^warehouse_id?: string;

  /**
   * @description: Listing product failed status code
   * @type: int
   **/
  ^^^^code?: int;

  /**
   * @description: Failed status message
   * @type: string
   **/
  ^^^^message?: string;
}
