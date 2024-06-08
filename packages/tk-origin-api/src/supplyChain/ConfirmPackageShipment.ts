export const CONFIRM_PACKAGE_SHIPMENT__URL_PATH = '/supply_chain/202309/packages/sync';,export const CONFIRM_PACKAGE_SHIPMENT__METHOD = '1';


/**
 * 接口名称：Confirm Package Shipment 
 * 接口标识：Confirm Package Shipment 
 * 接口使用场景：Confirm Package Shipment 
 **/
export interface ConfirmPackageShipmentRequestInterface {
  /**
   * @description: Warehouse provider id；Provide by Tiktok;
   * @type: string
   **/
  warehouse_provider_id: string;

  /**
   * @description: Package info list
   * @type: []object
   **/
  packages: []object;
}


/**
 * @description Package info list
 **/
export interface ConfirmPackageShipmentPackagesRequestInterface {
  /**
   * @description: Package id
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Warehouse Management System order number
   * @type: string
   **/
  ^wms_order_id: string;

  /**
   * @description: Warehouse code
   * @type: string
   **/
  ^provider_warehouse_code?: string;

  /**
   * @description: Shipped city name 
   * @type: string
   **/
  ^shipping_origin_city?: string;

  /**
   * @description: Time zone
   * @type: string
   **/
  ^time_zone: string;

  /**
   * @description: The time when the goods are shipped out of the warehouse
   * @type: int
   **/
  ^ship_time_millis: int;

  /**
   * @description: The time when warehouse receive the order
   * @type: int
   **/
  ^create_time_millis: int;

  /**
   * @description: Hand over time
   * @type: int
   **/
  ^handover_time_millis: int;

  /**
   * @description: Shipping service provider id
   * @type: string
   **/
  ^shipping_provider_id: string;

  /**
   * @description: Shipping service provider
   * @type: string
   **/
  ^shipping_provider_name: string;

  /**
   * @description: Tracking number
   * @type: string
   **/
  ^tracking_number: string;

  /**
   * @description: length info
   * @type: object
   **/
  ^dimension: object;

  /**
   * @description: weight info
   * @type: object
   **/
  ^weight?: object;

  /**
   * @description: sku info list
   * @type: []object
   **/
  ^skus: []object;
}


/**
 * @description length info
 **/
export interface ConfirmPackageShipmentPackagesDimensionRequestInterface {
  /**
   * @description: Parcel length
   * @type: int
   **/
  ^^length?: int;

  /**
   * @description: Parcel width 
   * @type: int
   **/
  ^^width?: int;

  /**
   * @description: Parcel height
   * @type: int
   **/
  ^^height?: int;

  /**
   * @description: "METER<br>CENTIMETER<br>MILLIMETER<br>FOOT<br>MICRON<br>INCH"
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description weight info
 **/
export interface ConfirmPackageShipmentPackagesWeightRequestInterface {
  /**
   * @description: parcel weight value
   * @type: int
   **/
  ^^value?: int;

  /**
   * @description: "KILOGRAM<br>GRAM<br>MILLIGRAM<br>POUND<br>OUNCE"
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description sku info list
 **/
export interface ConfirmPackageShipmentPackagesSkusRequestInterface {
  /**
   * @description: Tiktok Shop Sku Id
   * @type: string
   **/
  ^^id: string;

  /**
   * @description: The quantity of outbound goods
   * @type: int
   **/
  ^^quantity: int;
}


/**
 * 接口名称：Confirm Package Shipment 
 * 接口标识：Confirm Package Shipment 
 * 接口使用场景：Confirm Package Shipment 
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConfirmPackageShipmentRequestInterface {

}


/**
 * 接口名称：Confirm Package Shipment 
 * 接口标识：Confirm Package Shipment 
 * 接口使用场景：Confirm Package Shipment 
 **/
export interface ConfirmPackageShipmentResponseInterface {
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
export interface ConfirmPackageShipmentDataResponseInterface {
  /**
   * @description: success package id list
   * @type: string[]
   **/
  ^success_packages?: string[];

  /**
   * @description: error list
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description error list
 **/
export interface ConfirmPackageShipmentDataErrorsResponseInterface {
  /**
   * @description: error code
   * @type: string
   **/
  ^^code?: string;

  /**
   * @description: error message
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: failed package detail
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description failed package detail
 **/
export interface ConfirmPackageShipmentDataErrorsDetailResponseInterface {
  /**
   * @description: failed package id
   * @type: string
   **/
  ^^^package_id?: string;
}
