export const SEND_MESSAGE_URL_PATH = '/customer_service/202309/conversations/{conversation_id}/messages';,export const SEND_MESSAGE_METHOD = '1';


/**
 * 接口名称：Send Message
 * 接口标识：Send Message
 * 接口使用场景：Send Message
 **/
export interface SendMessageRequestInterface {
  /**
   * @description: Message type<br>Available values:<br>TEXT<br>IMAGE<br>PRODUCT_CARD<br>ORDER_CARD
   * @type: string
   **/
  type: string;

  /**
   * @description: Message content, in JSON string.<br><br>For  TEXT:<br>(Max 2000 characters. Sensitive words are not allowed.)<br>{<br>    "content": "hi, I want to refund"<br>}<br><br>For PRODUCT_CARD:<br>{<br>    "product_id": "7494560109732334265"<br>}<br>For ORDER_CARD:<br>{<br>    "order_id": "7494560109732334267"<br>}<br><br>For IMAGE:<br>{<br>    "url":"https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/2ca53c34ad8443e6b39f4e0153d3aed4~tplv-o3syd03w52-origin-image.image?from=1320446476",<br>    "width": 1280,<br>    "height": 720<br>}<br>
   * @type: string
   **/
  content: string;
}


/**
 * 接口名称：Send Message
 * 接口标识：Send Message
 * 接口使用场景：Send Message
 **/
export interface SendMessageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Send Message
 * 接口标识：Send Message
 * 接口使用场景：Send Message
 **/
export interface SendMessageResponseInterface {
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
export interface SendMessageDataResponseInterface {
  /**
   * @description: Message ID
   * @type: string
   **/
  ^message_id?: string;
}
