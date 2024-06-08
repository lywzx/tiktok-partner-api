export const GET_GLOBAL_CATEGORIES_URL_PATH = '/product/202309/global_categories';,export const GET_GLOBAL_CATEGORIES_METHOD = '2';


/**
 * 接口名称：Get Global Categories
 * 接口标识：Get Global Categories
 * 接口使用场景：Get Global Categories
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalCategoriesRequestInterface {

}


/**
 * 接口名称：Get Global Categories
 * 接口标识：Get Global Categories
 * 接口使用场景：Get Global Categories
 **/
export interface GetGlobalCategoriesRequestInterface {
  /**
   * @description: Category information will be returned in the corresponding language based on the specified locale. If not provided, it will default to en. <br>The currently supported locales include:<br>en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN.<br>Use BCP-47 language codes, such as 'en-US' or 'id'. For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
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
 * 接口名称：Get Global Categories
 * 接口标识：Get Global Categories
 * 接口使用场景：Get Global Categories
 **/
export interface GetGlobalCategoriesResponseInterface {
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
export interface GetGlobalCategoriesDataResponseInterface {
  /**
   * @description: Category information.
   * @type: []object
   **/
  ^categories?: []object;
}


/**
 * @description Category information.
 **/
export interface GetGlobalCategoriesDataCategoriesResponseInterface {
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
   * @description: Indicate the permission status of the seller for this category.<br>1. AVAILABLE: You have permission for this category and can create global products under this category.<br><br>2. NON_MAIN_CATEGORY: This product category falls outside of the main category the seller is allowed to sell. Please contact support to discuss the available category for the shop.
   * @type: string[]
   **/
  ^^permission_statuses?: string[];
}
