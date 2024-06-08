export const GET_WAREHOUSE_LIST_URL_PATH = '/logistics/202309/warehouses';,export const GET_WAREHOUSE_LIST_METHOD = '2';


/**
 * 接口名称：Get Warehouse List
 * 接口标识：Get Warehouse List
 * 接口使用场景：Get Warehouse List
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetWarehouseListRequestInterface {

}


/**
 * 接口名称：Get Warehouse List
 * 接口标识：Get Warehouse List
 * 接口使用场景：Get Warehouse List
 **/
export interface GetWarehouseListRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Warehouse List
 * 接口标识：Get Warehouse List
 * 接口使用场景：Get Warehouse List
 **/
export interface GetWarehouseListResponseInterface {
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
export interface GetWarehouseListDataResponseInterface {
  /**
   * @description: warehouses
   * @type: []object
   **/
  ^warehouses?: []object;
}


/**
 * @description warehouses
 **/
export interface GetWarehouseListDataWarehousesResponseInterface {
  /**
   * @description: This is the Primary Key, immutable, and used for aLL logistics warehouses.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Warehouse name,not as the unique key
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Available Value:<br>- ENABLED: All products in stock are  available for sale.<br>- DISABLED: All products in stock are unavailable for sale. <br>- RESTRICTED: The warehouse is either on holiday mode or on order limit status. All products in stock are unavailable for sale.<br>  - Holiday mode: When the seller cannot fulfill an order from a warehouse, the seller can turn on holiday mode for the warehouse in seller center. <br>  - Order limit mode: When the seller violates Tiktok Shop policies, TikTok Shop will limit order volume that can be fulfilled by a warehouse. 
   * @type: string
   **/
  ^^effect_status?: string;

  /**
   * @description: Available Value:<br>- SALES_WAREHOUSE: Warehouse for shipping products.  <br>- RETURN_WAREHOUSE: Warehouse for receiving returned products. <br>You can have the same warehouse for both shipping and receiving returns, but they will be a different warehouse id with the same address.
   * @type: string
   **/
  ^^type?: string;

  /**
   * @description: Available Value:<br>- DOMESTIC_WAREHOUSE ; The warehouse in a country which is both the target market and the seller's base country.<br>- of a domestic seller. <br>- CB_OVERSEA_WAREHOUSE;  For cross-border sellers, a local warehouse in the target market. <br>- CB_DIRECT_SHIPPING_WAREHOUSE; For cross-border sellers, a warehouse in the seller's base country, e.g., Mainland China or Hong Kong. 
   * @type: string
   **/
  ^^sub_type?: string;

  /**
   * @description: The default warehouse.  If a product is listed with no designated warehouse, the default warehouse will be used.
   * @type: bool
   **/
  ^^is_default?: bool;

  /**
   * @description: Warehouse  address object
   * @type: object
   **/
  ^^address?: object;
}


/**
 * @description Warehouse  address object
 **/
export interface GetWarehouseListDataWarehousesAddressResponseInterface {
  /**
   * @description: Region
   * @type: string
   **/
  ^^^region?: string;

  /**
   * @description: State
   * @type: string
   **/
  ^^^state?: string;

  /**
   * @description: City
   * @type: string
   **/
  ^^^city?: string;

  /**
   * @description: District
   * @type: string
   **/
  ^^^distict?: string;

  /**
   * @description: Town 
   * @type: string
   **/
  ^^^town?: string;

  /**
   * @description: Contact name
   * @type: string
   **/
  ^^^contact_person?: string;

  /**
   * @description: This is the postal code of the address (also known as zip code)
   * @type: string
   **/
  ^^^postal_code?: string;

  /**
   * @description: This is the combined address field including the Street address and other address information such as apartment number, building, floor..etc (optional)
   * @type: string
   **/
  ^^^full_address?: string;

  /**
   * @description: Region code
   * @type: string
   **/
  ^^^region_code?: string;

  /**
   * @description: Phone number
   * @type: string
   **/
  ^^^phone_number?: string;
}
