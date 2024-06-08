export const RECOMMEND_CATEGORY_URL_PATH = '/product/202309/categories/recommend';,export const RECOMMEND_CATEGORY_METHOD = '1';


/**
 * 接口名称：Recommend Category
 * 接口标识：Recommend Category
 * 接口使用场景：Recommend Category
 **/
export interface RecommendCategoryRequestInterface {
  /**
   * @description: You can provide the product title to complete category recommendations.<br>**Prerequisites:**<br>Chinese characters are not allowed in the product name. For US and UK shops, the product name must have at least 1 character and no more than 255 characters. For shops in other regions, the product name must have at least 25 characters and no more than 255 characters.
   * @type: string
   **/
  product_title: string;

  /**
   * @description: HTML rich text of a product description to describe your product information in detail.<br><br>**Prerequisites:** <br>- Must conform to html syntax<br>- Currently, it only supports html tags <p> <img> <ul> <ol> <li> <br > <strong> <b> <i> <em> <u>, other HTML tags will be filtered out and will not take effect. <br>- Tags can not be nested<br>- This field character limit needs to be within 10000 characters.<br>- It is recommended to avoid using Chinese because the copy will be displayed to local users.<br>- The img tag needs to include the src, width, and height attributes, and the image dimensions can not exceed 4000<br>- Only Tiktok Shop image URLs are allowed, no external URLs.<br>- <strong> <b> <i> <em> <u> <br > should be used within  <p> and <li><br><br>**Tips** <br>- Please provide a clear and comprehensive product description preferably longer than 300 characters, and adding images to the description will help customers make purchasing decisions.<br>- We recommend publishing 3 to 5 selling points. Different selling points are described in segments and a single selling point is within 250 characters to increase the readability of consumers.<br>- We recommend adding auxiliary illustration images under each selling point, and the recommended image resolution is 1200* 1600px, which is convenient for consumers to understand the product more intuitively and accurately.<br><br>**Sample** <br><p>Please compare above detailed size with your measurement before purchase.</p><br><ul> <br>  <li>M-Size</li><br>  <li>XL-Size</li><br></ul> <br><img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' heigh='100' />
   * @type: string
   **/
  description?: string;

  /**
   * @description: Product images, including main images, description images, attribute images, etc., can be used to complete category recommendations. You can also use the response parameters of the "Upload Image" API as the request parameters. 
   * @type: []object
   **/
  images?: []object;

  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * @description Product images, including main images, description images, attribute images, etc., can be used to complete category recommendations. You can also use the response parameters of the "Upload Image" API as the request parameters. 
 **/
export interface RecommendCategoryImagesRequestInterface {
  /**
   * @description: The image URI used for category recommendations.<br>
   * @type: string
   **/
  ^uri?: string;
}


/**
 * 接口名称：Recommend Category
 * 接口标识：Recommend Category
 * 接口使用场景：Recommend Category
 **/
export interface RecommendCategoryRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Recommend Category
 * 接口标识：Recommend Category
 * 接口使用场景：Recommend Category
 **/
export interface RecommendCategoryResponseInterface {
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
export interface RecommendCategoryDataResponseInterface {
  /**
   * @description: This is the leaf category ID recommended by the platform. You can use it to create a product.
   * @type: string
   **/
  ^leaf_category_id?: string;

  /**
   * @description: Category chain information of the recommended category.
   * @type: []object
   **/
  ^categories?: []object;
}


/**
 * @description Category chain information of the recommended category.
 **/
export interface RecommendCategoryDataCategoriesResponseInterface {
  /**
   * @description: Category ID of the Category recommended by the platform.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The Category name
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The Category level
   * @type: int
   **/
  ^^level?: int;

  /**
   * @description: Indicates whether the category is a leaf category, only leaf categories can be used to create products.
   * @type: bool
   **/
  ^^is_leaf?: bool;

  /**
   * @description: Indicate the permission status of the seller for this category.<br>1. AVAILABLE: You have permission for this category and can create products under this category.<br>2. INVITE_ONLY : This category is an invitation category, and you can not use this category to create products. Contact the account manager or TikTok Shop support team for permission to access this category or select another one.
   * @type: string[]
   **/
  ^^permission_statuses?: string[];
}
