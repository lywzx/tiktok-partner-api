export const UPLOAD_BUYER_MESSAGES_IMAGE_URL_PATH = '/customer_service/202309/images/upload';,export const UPLOAD_BUYER_MESSAGES_IMAGE_METHOD = '1';


/**
 * 接口名称：Upload Buyer Messages Image
 * 接口标识：Upload Buyer Messages Image
 * 接口使用场景：Upload Buyer Messages Image
 **/
export interface UploadBuyerMessagesImageRequestInterface {
  /**
   * @description: Image data
   * @type: file
   **/
  data: file;
}


/**
 * 接口名称：Upload Buyer Messages Image
 * 接口标识：Upload Buyer Messages Image
 * 接口使用场景：Upload Buyer Messages Image
 **/
export interface UploadBuyerMessagesImageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Upload Buyer Messages Image
 * 接口标识：Upload Buyer Messages Image
 * 接口使用场景：Upload Buyer Messages Image
 **/
export interface UploadBuyerMessagesImageResponseInterface {
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
export interface UploadBuyerMessagesImageDataResponseInterface {
  /**
   * @description: Image URL<br>
   * @type: string
   **/
  ^url?: string;

  /**
   * @description: Image width
   * @type: int
   **/
  ^width?: int;

  /**
   * @description: Image height
   * @type: int
   **/
  ^height?: int;
}
