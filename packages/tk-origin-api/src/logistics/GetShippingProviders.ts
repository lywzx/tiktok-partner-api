export const GET_SHIPPING_PROVIDERS_URL_PATH = '/logistics/202309/delivery_options/{delivery_option_id}/shipping_providers';,export const GET_SHIPPING_PROVIDERS_METHOD = '2';


/**
 * 接口名称：Get Shipping Providers
 * 接口标识：Get Shipping Providers
 * 接口使用场景：Get Shipping Providers
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetShippingProvidersRequestInterface {

}


/**
 * 接口名称：Get Shipping Providers
 * 接口标识：Get Shipping Providers
 * 接口使用场景：Get Shipping Providers
 **/
export interface GetShippingProvidersRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Shipping Providers
 * 接口标识：Get Shipping Providers
 * 接口使用场景：Get Shipping Providers
 **/
export interface GetShippingProvidersResponseInterface {
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
export interface GetShippingProvidersDataResponseInterface {
  /**
   * @description: shipping provider list
   * @type: []object
   **/
  ^shipping_providers?: []object;
}


/**
 * @description shipping provider list
 **/
export interface GetShippingProvidersDataShippingProvidersResponseInterface {
  /**
   * @description: shipping provider id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: shipping provider name
   * @type: string
   **/
  ^^name?: string;
}
