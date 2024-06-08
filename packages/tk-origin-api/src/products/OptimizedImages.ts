export const OPTIMIZED_IMAGES_URL_PATH = '/product/202404/images/optimize';,export const OPTIMIZED_IMAGES_METHOD = '1';


/**
 * 接口名称：Optimized Images
 * 接口标识：Optimized Images
 * 接口使用场景：Optimized Images
 **/
export interface OptimizedImagesRequestInterface {
  /**
   * @description: A list of image objects, each with a corresponding URI and optimization_mode.<br>Field validation logic:<br>- The uploaded platform's image ID/URI/URL<br>- Maximum supported input image count: 200
   * @type: []object
   **/
  images?: []object;
}


/**
 * @description A list of image objects, each with a corresponding URI and optimization_mode.<br>Field validation logic:<br>- The uploaded platform's image ID/URI/URL<br>- Maximum supported input image count: 200
 **/
export interface OptimizedImagesImagesRequestInterface {
  /**
   * @description: The image URI returned by the "Upload Image" API.
   * @type: string
   **/
  ^uri?: string;

  /**
   * @description: A list of optimizations you would like to apply to your image. Current modes include:<br>- WHITE_BACKGROUND: change the background of the picture to white.
   * @type: string[]
   **/
  ^optimization_mode?: string[];
}


/**
 * 接口名称：Optimized Images
 * 接口标识：Optimized Images
 * 接口使用场景：Optimized Images
 **/
export interface OptimizedImagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Optimized Images
 * 接口标识：Optimized Images
 * 接口使用场景：Optimized Images
 **/
export interface OptimizedImagesResponseInterface {
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
export interface OptimizedImagesDataResponseInterface {
  /**
   * @description: A returned list of queried images.
   * @type: []object
   **/
  ^images?: []object;
}


/**
 * @description A returned list of queried images.
 **/
export interface OptimizedImagesDataImagesResponseInterface {
  /**
   * @description: Height dimension of the image which is determined on upload. This is the height post processing.
   * @type: int
   **/
  ^^height?: int;

  /**
   * @description: Width dimension of the image which is determined on upload. This is the width of post processing.
   * @type: int
   **/
  ^^width?: int;

  /**
   * @description: The URI returned from uploading the image, which can be used for product main image, SKU image, size chart image, qualification image, etc. when listing a product.
   * @type: string
   **/
  ^^original_uri?: string;

  /**
   * @description: The URL returned from uploading the image can be directly opened in a browser. It can be used in product description when creating a product.
   * @type: string
   **/
  ^^original_url?: string;

  /**
   * @description: Image URI after optimization.
   * @type: string
   **/
  ^^optimized_uri?: string;

  /**
   * @description: Image URL after optimization.
   * @type: string
   **/
  ^^optimized_url?: string;

  /**
   * @description: The current status of image optimization, with following values:<br>- SUCCESS: image optimized successfully<br>- IGNORE: image optimization already exists<br>- PROCESSING: image is still being optimized. You may use the interface Optimized Images /product/:version/images/optimize to check on your optimization results
   * @type: string
   **/
  ^^optimize_status?: string;
}
