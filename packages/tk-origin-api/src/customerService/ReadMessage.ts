export const READ_MESSAGE_URL_PATH = '/customer_service/202309/conversations/{conversation_id}/messages/read';,export const READ_MESSAGE_METHOD = '1';


/**
 * 接口名称：Read Message
 * 接口标识：Read Message
 * 接口使用场景：Read Message
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReadMessageRequestInterface {

}


/**
 * 接口名称：Read Message
 * 接口标识：Read Message
 * 接口使用场景：Read Message
 **/
export interface ReadMessageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Read Message
 * 接口标识：Read Message
 * 接口使用场景：Read Message
 **/
export interface ReadMessageResponseInterface {
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
