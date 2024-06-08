export const GET_CATEGORIES_URL_PATH = '/product/202309/categories';,export const GET_CATEGORIES_METHOD = '2';


/**
 * 接口名称：Get Categories
 * 接口标识：Get Categories
 * 接口使用场景：Get Categories
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetCategoriesRequestInterface {

}


/**
 * 接口名称：Get Categories
 * 接口标识：Get Categories
 * 接口使用场景：Get Categories
 **/
export interface GetCategoriesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Category information will be returned in the corresponding language based on the specified locale. If no locale is provided, the default locale of the store will be used. <br>The currently supported locales include:<br>en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN.<br>Use BCP-47 language codes, such as 'en-US' or 'id'. For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   * @type: string
   **/
  locale?: string;

  /**
   * @description: The keyword of the search. The search will be based on the content of this field. For example, if the field is "shoes", the search will return all categories related to shoes that the seller can use.
   * @type: string
   **/
  keyword?: string;

  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * 接口名称：Get Categories
 * 接口标识：Get Categories
 * 接口使用场景：Get Categories
 **/
export interface GetCategoriesResponseInterface {
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
export interface GetCategoriesDataResponseInterface {
  /**
   * @description: Return the hierarchical structure of all categories
   * @type: []object
   **/
  ^categories?: []object;
}


/**
 * @description Return the hierarchical structure of all categories
 **/
export interface GetCategoriesDataCategoriesResponseInterface {
  /**
   * @description: Platform-defined category ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The parent category ID, and the parent category ID of the first-level category is "0".
   * @type: string
   **/
  ^^parent_id?: string;

  /**
   * @description: The name of the category in the country where the shop operates.
   * @type: string
   **/
  ^^local_name?: string;

  /**
   * @description: Indicate whether the category is a leaf category. Creating and editing products is only supported using leaf categories.
   * @type: bool
   **/
  ^^is_leaf?: bool;

  /**
   * @description: Indicate the permission status of the seller for this category.<br>1. AVAILABLE: You have permission for this category and can create products under this category.<br>2. INVITE_ONLY : This category is an invitation category, and you can not use this category to create products. Contact the account manager or TikTok Shop support team for permission to access this category or select another one.<br>3. NON_MAIN_CATEGORY: This category is not within the scope of the main category of the seller's store, and the seller has no permission to use it. It is recommended that merchants contact AM for processing.
   * @type: string[]
   **/
  ^^permission_statuses?: string[];
}
