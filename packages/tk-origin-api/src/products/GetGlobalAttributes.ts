export const GET_GLOBAL_ATTRIBUTES_URL_PATH = '/product/202309/categories/{category_id}/global_attributes';,export const GET_GLOBAL_ATTRIBUTES_METHOD = '2';


/**
 * 接口名称：Get Global Attributes
 * 接口标识：Get Global Attributes
 * 接口使用场景：Get Global Attributes
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalAttributesRequestInterface {

}


/**
 * 接口名称：Get Global Attributes
 * 接口标识：Get Global Attributes
 * 接口使用场景：Get Global Attributes
 **/
export interface GetGlobalAttributesRequestInterface {
  /**
   * @description: Category information will be returned in the corresponding language based on the specified locale. If not provided, it will default to en. <br>The currently supported locales include:<br>en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN.<br>Use BCP-47 language codes, such as 'en-US' or 'id'. For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   * @type: string
   **/
  locale?: string;

  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * 接口名称：Get Global Attributes
 * 接口标识：Get Global Attributes
 * 接口使用场景：Get Global Attributes
 **/
export interface GetGlobalAttributesResponseInterface {
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
export interface GetGlobalAttributesDataResponseInterface {
  /**
   * @description: Attribute information bound to categories.
   * @type: []object
   **/
  ^attributes?: []object;
}


/**
 * @description Attribute information bound to categories.
 **/
export interface GetGlobalAttributesDataAttributesResponseInterface {
  /**
   * @description: Platform-defined attribute ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Platform-defined attribute name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Attribute types, currently only include "SALES_PROPERTY" and "PRODUCT_PROPERTY".
   * @type: string
   **/
  ^^type?: string;

  /**
   * @description: Indicate whether the attribute is required when creating or editing a product.
   * @type: bool
   **/
  ^^is_requried?: bool;

  /**
   * @description: Attribute value information bound to the attribute.
   * @type: []object
   **/
  ^^values?: []object;

  /**
   * @description: Indicate whether the attribute value supports multiple selections when creating or editing a product.
   * @type: bool
   **/
  ^^is_multiple_selection?: bool;

  /**
   * @description: Indicate whether the seller can customize the attribute value when creating or editing a product.
   * @type: bool
   **/
  ^^is_customizable?: bool;
}


/**
 * @description Attribute value information bound to the attribute.
 **/
export interface GetGlobalAttributesDataAttributesValuesResponseInterface {
  /**
   * @description: Platform-defined attribute value ID.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Platform-defined attribute value name.
   * @type: string
   **/
  ^^^name?: string;
}
