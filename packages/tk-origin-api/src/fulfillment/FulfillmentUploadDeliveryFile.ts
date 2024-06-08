export const FULFILLMENT_UPLOAD_DELIVERY_FILE_URL_PATH = '/fulfillment/202309/files/upload';,export const FULFILLMENT_UPLOAD_DELIVERY_FILE_METHOD = '1';


/**
 * 接口名称：Fulfillment Upload Delivery File
 * 接口标识：Fulfillment Upload Delivery File
 * 接口使用场景：Fulfillment Upload Delivery File
 **/
export interface FulfillmentUploadDeliveryFileRequestInterface {
  /**
   * @description: PDF file data to be uploaded to TikTok Shop. <br>Prerequisites：<br>Only PDF file format is supported<br>Max size of original file: 10MB
   * @type: file
   **/
  data: file;

  /**
   * @description: The name of the uploaded file, the file name must include the file type.
   * @type: string
   **/
  name: string;
}


/**
 * 接口名称：Fulfillment Upload Delivery File
 * 接口标识：Fulfillment Upload Delivery File
 * 接口使用场景：Fulfillment Upload Delivery File
 **/
export interface FulfillmentUploadDeliveryFileRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Fulfillment Upload Delivery File
 * 接口标识：Fulfillment Upload Delivery File
 * 接口使用场景：Fulfillment Upload Delivery File
 **/
export interface FulfillmentUploadDeliveryFileResponseInterface {
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
export interface FulfillmentUploadDeliveryFileDataResponseInterface {
  /**
   * @description: The URL returned from uploading the file can be directly opened in a browser. 
   * @type: string
   **/
  ^url?: string;

  /**
   * @description: The name of the file.
   * @type: string
   **/
  ^name?: string;
}
