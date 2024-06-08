export const GET_PACKAGE_HANDOVER_TIME_SLOTS_URL_PATH = '/fulfillment/202309/packages/{package_id}/handover_time_slots';,export const GET_PACKAGE_HANDOVER_TIME_SLOTS_METHOD = '2';


/**
 * 接口名称：Get Package Handover Time Slots
 * 接口标识：Get Package Handover Time Slots
 * 接口使用场景：Get Package Handover Time Slots
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetPackageHandoverTimeSlotsRequestInterface {

}


/**
 * 接口名称：Get Package Handover Time Slots
 * 接口标识：Get Package Handover Time Slots
 * 接口使用场景：Get Package Handover Time Slots
 **/
export interface GetPackageHandoverTimeSlotsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Package Handover Time Slots
 * 接口标识：Get Package Handover Time Slots
 * 接口使用场景：Get Package Handover Time Slots
 **/
export interface GetPackageHandoverTimeSlotsResponseInterface {
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
export interface GetPackageHandoverTimeSlotsDataResponseInterface {
  /**
   * @description: Does this package support door-to-door collection
   * @type: bool
   **/
  ^can_pickup?: bool;

  /**
   * @description: Can this package be dropped off at a drop off location
   * @type: bool
   **/
  ^can_drop_off?: bool;

  /**
   * @description: Specific to UK. Use this field to determine whether van collection is available
   * @type: bool
   **/
  ^can_van_collection?: bool;

  /**
   * @description: View package drop off locations  via provided URL
   * @type: string
   **/
  ^drop_off_point_url?: string;

  /**
   * @description: Time period for door-to-door collection
   * @type: []object
   **/
  ^pickup_slots?: []object;
}


/**
 * @description Time period for door-to-door collection
 **/
export interface GetPackageHandoverTimeSlotsDataPickupSlotsResponseInterface {
  /**
   * @description: The start date and time of the package pick up time slot.
   * @type: int
   **/
  ^^start_time?: int;

  /**
   * @description: The end date and time of the package pick up time slot.
   * @type: int
   **/
  ^^end_time?: int;

  /**
   * @description: Can an appointment be made for this time period
   * @type: bool
   **/
  ^^avaliable?: bool;
}
