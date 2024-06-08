export const GET_RECOMMENDED_PRODUCT_TITLE_AND_DESCRIPTION_URL_PATH = '/product/202405/products/suggestions';,export const GET_RECOMMENDED_PRODUCT_TITLE_AND_DESCRIPTION_METHOD = '2';


/**
 * 接口名称：Get Recommended Product Title And Description
 * 接口标识：Get Recommended Product Title And Description
 * 接口使用场景：Get Recommended Product Title And Description
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetRecommendedProductTitleAndDescriptionRequestInterface {

}


/**
 * 接口名称：Get Recommended Product Title And Description
 * 接口标识：Get Recommended Product Title And Description
 * 接口使用场景：Get Recommended Product Title And Description
 **/
export interface GetRecommendedProductTitleAndDescriptionRequestInterface {
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
 * 接口名称：Get Recommended Product Title And Description
 * 接口标识：Get Recommended Product Title And Description
 * 接口使用场景：Get Recommended Product Title And Description
 **/
export interface GetRecommendedProductTitleAndDescriptionResponseInterface {
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
export interface GetRecommendedProductTitleAndDescriptionDataResponseInterface {
  /**
   * @description: A list of queried products, and their corresponding suggestions.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description A list of queried products, and their corresponding suggestions.
 **/
export interface GetRecommendedProductTitleAndDescriptionDataProductsResponseInterface {
  /**
   * @description: Product ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Suggestions for corresponding product ID.
   * @type: []object
   **/
  ^^suggestions?: []object;
}


/**
 * @description Suggestions for corresponding product ID.
 **/
export interface GetRecommendedProductTitleAndDescriptionDataProductsSuggestionsResponseInterface {
  /**
   * @description: The type of suggestion, including TITLE and DESCRIPTION.
   * @type: string
   **/
  ^^^field?: string;

  /**
   * @description: A list containing all optimized suggestions for a given field.
   * @type: []object
   **/
  ^^^items?: []object;
}


/**
 * @description A list containing all optimized suggestions for a given field.
 **/
export interface GetRecommendedProductTitleAndDescriptionDataProductsSuggestionsItemsResponseInterface {
  /**
   * @description: An optimized title or description.
   * @type: string
   **/
  ^^^^text?: string;
}
