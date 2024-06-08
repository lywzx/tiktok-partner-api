export const GET_PRODUCTS_SEO_WORDS_URL_PATH = '/product/202405/products/seo_words';,export const GET_PRODUCTS_SEO_WORDS_METHOD = '2';


/**
 * 接口名称：Get Products SEO Words
 * 接口标识：Get Products SEO Words
 * 接口使用场景：Get Products SEO Words
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetProductsSEOWordsRequestInterface {

}


/**
 * 接口名称：Get Products SEO Words
 * 接口标识：Get Products SEO Words
 * 接口使用场景：Get Products SEO Words
 **/
export interface GetProductsSEOWordsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: A list of product ID strings, separated by commas. <br>Note that product(s) must be active, and no more than 20 products can be queried at a time.
   * @type: string[]
   **/
  product_ids: string[];
}


/**
 * 接口名称：Get Products SEO Words
 * 接口标识：Get Products SEO Words
 * 接口使用场景：Get Products SEO Words
 **/
export interface GetProductsSEOWordsResponseInterface {
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
export interface GetProductsSEOWordsDataResponseInterface {
  /**
   * @description: A list of products and their corresponding SEO suggestions.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description A list of products and their corresponding SEO suggestions.
 **/
export interface GetProductsSEOWordsDataProductsResponseInterface {
  /**
   * @description: Product ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: A list of SEO words.
   * @type: []object
   **/
  ^^seo_words?: []object;
}


/**
 * @description A list of SEO words.
 **/
export interface GetProductsSEOWordsDataProductsSeoWordsResponseInterface {
  /**
   * @description: A specific SEO word.
   * @type: string
   **/
  ^^^text?: string;
}
