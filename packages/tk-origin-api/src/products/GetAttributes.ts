export const GET_ATTRIBUTES_URL_PATH = '/product/202309/categories/{category_id}/attributes';,export const GET_ATTRIBUTES_METHOD = '2';


/**
 * 接口名称：Get Attributes
 * 接口标识：Get Attributes
 * 接口使用场景：Get Attributes
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAttributesRequestInterface {

}


/**
 * 接口名称：Get Attributes
 * 接口标识：Get Attributes
 * 接口使用场景：Get Attributes
 **/
export interface GetAttributesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Category information will be returned in the corresponding language based on the specified locale.  If no locale is provided, the default locale of the store will be used. <br>The currently supported locales include:<br>en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN.<br>Use BCP-47 language codes, such as 'en-US' or 'id'. For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
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
 * 接口名称：Get Attributes
 * 接口标识：Get Attributes
 * 接口使用场景：Get Attributes
 **/
export interface GetAttributesResponseInterface {
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
export interface GetAttributesDataResponseInterface {
  /**
   * @description: Attribute information bound to categories. Return the requirements for filling in category-related attributes, including product attributes and sales attributes.
   * @type: []object
   **/
  ^attributes?: []object;
}


/**
 * @description Attribute information bound to categories. Return the requirements for filling in category-related attributes, including product attributes and sales attributes.
 **/
export interface GetAttributesDataAttributesResponseInterface {
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
   * @description: Indicate whether the attribute is required when creating or editing a product.<br><br>Notice:<br>is_requried is only applicable to product attributes. If is_required = true, it means that the product attribute is mandatory when listing the product.
   * @type: bool
   **/
  ^^is_requried?: bool;

  /**
   * @description: Attribute value information bound to the attribute.
   * @type: []object
   **/
  ^^values?: []object;

  /**
   * @description: Indicate whether the attribute value supports multiple selections when creating or editing a product.<br><br>Notice：<br>is_multiple_selection only applies to product attributes. If is_multiple_selection = true, it means that when listing the product, multiple attribute values can be filled in for that product attribute.
   * @type: bool
   **/
  ^^is_multiple_selection?: bool;

  /**
   * @description: Indicate whether the attribute value supports customization when creating or editing a product.<br><br>Notice：<br>is_customizable only applies to product attributes. If is_customizable = true, indicates that when listing the product, the product attribute allows the merchant to fill in custom sales attribute values.
   * @type: bool
   **/
  ^^is_customizable?: bool;
}


/**
 * @description Attribute value information bound to the attribute.
 **/
export interface GetAttributesDataAttributesValuesResponseInterface {
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
