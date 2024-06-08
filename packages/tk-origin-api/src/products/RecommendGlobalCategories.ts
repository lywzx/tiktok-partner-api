export const RECOMMEND_GLOBAL_CATEGORIES_URL_PATH = '/product/202309/global_categories/recommend';,export const RECOMMEND_GLOBAL_CATEGORIES_METHOD = '1';


/**
 * 接口名称：Recommend Global Categories
 * 接口标识：Recommend Global Categories
 * 接口使用场景：Recommend Global Categories
 **/
export interface RecommendGlobalCategoriesRequestInterface {
  /**
   * @description: You can provide the global product title to complete category recommendations.<br>Prerequisites:<br>Chinese characters are not allowed in the product name. 
   * @type: string
   **/
  product_title: string;

  /**
   * @description: HTML rich text of a product description to describe your product information in detail.<br><br>**Prerequisites:** <br>- Must conform to html syntax<br>- Currently, it only supports html tags <p> <img> <ul> <ol> <li> <br > <strong> <b> <i> <em> <u>, other HTML tags will be filtered out and will not take effect. <br>- Tags can not be nested<br>- This field character limit needs to be within 10000 characters.<br>- It is recommended to avoid using Chinese because the copy will be displayed to local users.<br>- The img tag needs to include the src, width, and height attributes, and the image dimensions can not exceed 4000<br>- Only Tiktok Shop image URLs are allowed, no external URLs.<br>- <strong> <b> <i> <em> <u> <br > should be used within  <p> and <li><br><br>**Tips** <br>- Please provide a clear and comprehensive product description preferably longer than 300 characters, and adding images to the description will help customers make purchasing decisions.<br>- We recommend publishing 3 to 5 selling points. Different selling points are described in segments and a single selling point is within 250 characters to increase the readability of consumers.<br>- We recommend adding auxiliary illustration images under each selling point, and the recommended image resolution is 1200* 1600px, which is convenient for consumers to understand the product more intuitively and accurately.<br><br>**Sample** <br><p>Please compare above detailed size with your measurement before purchase.</p><br><ul> <br>  <li>M-Size</li><br>  <li>XL-Size</li><br></ul> <br><img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' heigh='100' />
   * @type: string
   **/
  description?: string;

  /**
   * @description: Global product images, including main images, description images, attribute images, etc., can be used to complete category recommendations. You can also use the response parameters of the "Upload Image" API as the request parameters. 
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
 * @description Global product images, including main images, description images, attribute images, etc., can be used to complete category recommendations. You can also use the response parameters of the "Upload Image" API as the request parameters. 
 **/
export interface RecommendGlobalCategoriesImagesRequestInterface {
  /**
   * @description: The image URI used for category recommendations.<br>
   * @type: string
   **/
  ^uri?: string;
}


/**
 * 接口名称：Recommend Global Categories
 * 接口标识：Recommend Global Categories
 * 接口使用场景：Recommend Global Categories
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecommendGlobalCategoriesRequestInterface {

}


/**
 * 接口名称：Recommend Global Categories
 * 接口标识：Recommend Global Categories
 * 接口使用场景：Recommend Global Categories
 **/
export interface RecommendGlobalCategoriesResponseInterface {
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
export interface RecommendGlobalCategoriesDataResponseInterface {
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
export interface RecommendGlobalCategoriesDataCategoriesResponseInterface {
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
}
