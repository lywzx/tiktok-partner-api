export const GET_WAREHOUSE_DELIVERY_OPTIONS_URL_PATH = '/logistics/202309/warehouses/{warehouse_id}/delivery_options';,export const GET_WAREHOUSE_DELIVERY_OPTIONS_METHOD = '2';


/**
 * 接口名称：Get Warehouse Delivery Options
 * 接口标识：Get Warehouse Delivery Options
 * 接口使用场景：Get Warehouse Delivery Options
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetWarehouseDeliveryOptionsRequestInterface {

}


/**
 * 接口名称：Get Warehouse Delivery Options
 * 接口标识：Get Warehouse Delivery Options
 * 接口使用场景：Get Warehouse Delivery Options
 **/
export interface GetWarehouseDeliveryOptionsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Warehouse Delivery Options
 * 接口标识：Get Warehouse Delivery Options
 * 接口使用场景：Get Warehouse Delivery Options
 **/
export interface GetWarehouseDeliveryOptionsResponseInterface {
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
export interface GetWarehouseDeliveryOptionsDataResponseInterface {
  /**
   * @description: List of Delivery options subscribed by seller warehouses and their carriers and attribute restrictions on commodities
   * @type: []object
   **/
  ^delivery_options?: []object;
}


/**
 * @description List of Delivery options subscribed by seller warehouses and their carriers and attribute restrictions on commodities
 **/
export interface GetWarehouseDeliveryOptionsDataDeliveryOptionsResponseInterface {
  /**
   * @description: Delivery option id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Delivery option name
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Delivery option type
   * @type: string
   **/
  ^^type?: string;

  /**
   * @description: Delivery option description
   * @type: string
   **/
  ^^description?: string;

  /**
   * @description: The length, width and height restrictions of this Delivery option
   * @type: object
   **/
  ^^dimension_limit?: object;

  /**
   * @description: The weight restrictions of this Delivery option
   * @type: object
   **/
  ^^weight_limit?: object;
}


/**
 * @description The length, width and height restrictions of this Delivery option
 **/
export interface GetWarehouseDeliveryOptionsDataDeliveryOptionsDimensionLimitResponseInterface {
  /**
   * @description: Maximum height limit
   * @type: int
   **/
  ^^^max_height?: int;

  /**
   * @description: Maximum length limit
   * @type: int
   **/
  ^^^max_length?: int;

  /**
   * @description: Max width limit
   * @type: int
   **/
  ^^^max_width?: int;

  /**
   * @description: The unit of measurement is used to measure the length.<br>- CM<br>- INCH
   * @type: string
   **/
  ^^^unit?: string;
}


/**
 * @description The weight restrictions of this Delivery option
 **/
export interface GetWarehouseDeliveryOptionsDataDeliveryOptionsWeightLimitResponseInterface {
  /**
   * @description: Maximum weight limit
   * @type: int
   **/
  ^^^max_weight?: int;

  /**
   * @description: Minimum weight limit
   * @type: int
   **/
  ^^^min_weight?: int;

  /**
   * @description: The unit of measurement is used to measure the weight.<br>- GRAM<br>- POUND
   * @type: string
   **/
  ^^^unit?: string;
}
