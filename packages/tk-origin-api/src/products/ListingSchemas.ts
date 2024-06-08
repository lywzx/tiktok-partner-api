export const LISTING_SCHEMAS_URL_PATH = '/product/202401/listing_schemas';,export const LISTING_SCHEMAS_METHOD = '2';


/**
 * 接口名称：Listing Schemas
 * 接口标识：Listing Schemas
 * 接口使用场景：Listing Schemas
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListingSchemasRequestInterface {

}


/**
 * 接口名称：Listing Schemas
 * 接口标识：Listing Schemas
 * 接口使用场景：Listing Schemas
 **/
export interface ListingSchemasRequestInterface {
  /**
   * @description: The interface returns the field requirements for creating a product. By providing the leaf category ID, you can obtain the field information and input methods for the product creation requirements.
   * @type: int[]
   **/
  category_ids: int[];

  /**
   * @description: Category information will be returned in the corresponding language based on the specified locale. If no locale is provided, the default locale of the store will be used. <br>The currently supported locales include:<br>en-GB, en-US, id-ID, ms-MY, th-TH, vi-VN, zh-CN.<br>Use BCP-47 language codes, such as 'en-US' or 'id'. For more details, please refer to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
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
 * 接口名称：Listing Schemas
 * 接口标识：Listing Schemas
 * 接口使用场景：Listing Schemas
 **/
export interface ListingSchemasResponseInterface {
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
export interface ListingSchemasDataResponseInterface {
  /**
   * @description: The schema information of listing product.
   * @type: []object
   **/
  ^listing_schemas?: []object;
}


/**
 * @description The schema information of listing product.
 **/
export interface ListingSchemasDataListingSchemasResponseInterface {
  /**
   * @description: The category id
   * @type: int
   **/
  ^^category_id?: int;

  /**
   * @description: 	<br>The description of the fields in the schema explains the capabilities, rules, and other properties of the fields.
   * @type: []object
   **/
  ^^fileds?: []object;
}


/**
 * @description 	<br>The description of the fields in the schema explains the capabilities, rules, and other properties of the fields.
 **/
export interface ListingSchemasDataListingSchemasFiledsResponseInterface {
  /**
   * @description: The id of the listing fields. The fields include: title,category, brand, product_attributes, sku.sale_attributes, sku.identifier_code, package_dimensions.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: The fields display name.
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: The rules of the schema's fields are used to describe the requirements of the product.
   * @type: []object
   **/
  ^^^rules?: []object;

  /**
   * @description: The list of field options. For optional fields, return all the available options.
   * @type: []object
   **/
  ^^^options?: []object;

  /**
   * @description: List of complex subfield values
   * @type: []object
   **/
  ^^^complex_values?: []object;
}


/**
 * @description The rules of the schema's fields are used to describe the requirements of the product.
 **/
export interface ListingSchemasDataListingSchemasFiledsRulesResponseInterface {
  /**
   * @description: The type of rule, with detailed explanation, such as:<br>- VALUE_TYPE(required field):<br>The field values for the following data types need to be satisfied, including:<br>Types:<br>string (text type), For example: Title, SellerSKU, custom properties<br>integer (integer type), For example: Inventory amount.<br>date (date type), For example: Creation time, update time, etc.<br>uri (media resource ID),For example: Main image ID<br>html (text supporting HTML markup syntax) For example: Product description<br>- REQUIRED(required field): Is the field a required field.<br>- SUPPORTED(optional field): Is the field a supported field.<br>- DISABLE(required field): The rule description field is a deprecated field.<br>- MAX_LENGTH/ MIN_LENGTH(optional field):The maximum/minimum length generally refers to the character length limit.<br>- MAX_VALUE/MIN_VALUE(optional field): The maximum/minimum value generally refers to the numerical limit.<br>- MAX_INPUT_NUM/MIN_INPUT_NUM(optional field): The maximum/minimum number of selections generally refers to the number of options that can be selected in a multiple-choice scenario.<br>- MAX_TARGE_TSIZE/MIN_TARGE_TSIZE(optional field):The maximum/minimum target file size generally refers to the size of the resource.<br>- REGX(optional field)：Regular expression matching refers to input rules for input classes.<br>- TIP(optional field):Provide an explanation for filling in the rule description field.<br>- SAMPLE(optional field):Provide an example for filling in the rule description field.<br>- CUSTOM(optional field):Explain whether the rule supports customization for fields. By default, customization is not supported.<br>- MULTI_INPUT(optional field):Explain whether the rule supports multiple inputs for fields. By default, it is single input.<br>- AVAILABLE(optional field)：The rule is used to express whether it is in an available state. For example, the category is available.<br>- AUTHORIZED(optional field)：The rule is used to express whether it is in an authorized state, for example, scheduled category authorization.
   * @type: string
   **/
  ^^^^type?: string;

  /**
   * @description: The values of the rules
   * @type: string
   **/
  ^^^^value?: string;
}


/**
 * @description The list of field options. For optional fields, return all the available options.
 **/
export interface ListingSchemasDataListingSchemasFiledsOptionsResponseInterface {
  /**
   * @description: The id of option
   * @type: string
   **/
  ^^^^id?: string;

  /**
   * @description: 	<br>The name of option
   * @type: string
   **/
  ^^^^name?: string;
}


/**
 * @description List of complex subfield values
 **/
export interface ListingSchemasDataListingSchemasFiledsComplexValuesResponseInterface {
  /**
   * @description: Subfield ID
   * @type: string
   **/
  ^^^^id?: string;

  /**
   * @description: Subfield name
   * @type: string
   **/
  ^^^^name?: string;

  /**
   * @description: Rule list of the field, expressing the product listing rules of field.
   * @type: []object
   **/
  ^^^^rules?: []object;

  /**
   * @description: The list of field options. For optional fields, return all the available options.
   * @type: []object
   **/
  ^^^^options?: []object;

  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description Rule list of the field, expressing the product listing rules of field.
 **/
export interface ListingSchemasDataListingSchemasFiledsComplexValuesRulesResponseInterface {
  /**
   * @description: The type of rule, with detailed explanation, such as:<br>- VALUE_TYPE(required field):<br>The field values for the following data types need to be satisfied, including:<br>Types:<br>string (text type), For example: Title, SellerSKU, custom properties<br>integer (integer type), For example: Inventory amount.<br>date (date type), For example: Creation time, update time, etc.<br>uri (media resource ID),For example: Main image ID<br>html (text supporting HTML markup syntax) For example: Product description<br>- REQUIRED(required field): Is the field a required field.<br>- SUPPORTED(optional field): Is the field a supported field.<br>- DISABLE(required field): The rule description field is a deprecated field.<br>- MAX_LENGTH/ MIN_LENGTH(optional field):The maximum/minimum length generally refers to the character length limit.<br>- MAX_VALUE/MIN_VALUE(optional field): The maximum/minimum value generally refers to the numerical limit.<br>- MAX_INPUT_NUM/MIN_INPUT_NUM(optional field): The maximum/minimum number of selections generally refers to the number of options that can be selected in a multiple-choice scenario.<br>- MAX_TARGE_TSIZE/MIN_TARGE_TSIZE(optional field):The maximum/minimum target file size generally refers to the size of the resource.<br>- REGX(optional field)：Regular expression matching refers to input rules for input classes.<br>- TIP(optional field):Provide an explanation for filling in the rule description field.<br>- SAMPLE(optional field):Provide an example for filling in the rule description field.<br>- CUSTOM(optional field):Explain whether the rule supports customization for fields. By default, customization is not supported.<br>- MULTI_INPUT(optional field):Explain whether the rule supports multiple inputs for fields. By default, it is single input.<br>- AVAILABLE(optional field)：The rule is used to express whether it is in an available state. For example, the category is available.<br>- AUTHORIZED(optional field)：The rule is used to express whether it is in an authorized state, for example, scheduled category authorization.
   * @type: string
   **/
  ^^^^^type?: string;

  /**
   * @description: The values of the rules
   * @type: string
   **/
  ^^^^^value?: string;
}


/**
 * @description The list of field options. For optional fields, return all the available options.
 **/
export interface ListingSchemasDataListingSchemasFiledsComplexValuesOptionsResponseInterface {
  /**
   * @description: The id of option
   * @type: string
   **/
  ^^^^^id?: string;

  /**
   * @description: 	<br>The name of option
   * @type: string
   **/
  ^^^^^name?: string;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface ListingSchemasDataListingSchemasFiledsComplexValuesErrorsResponseInterface {
  /**
   * @description: Listing schema failed status code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Listing schema failed status message
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: 	<br>Detailed error reasons
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description 	<br>Detailed error reasons
 **/
export interface ListingSchemasDataListingSchemasFiledsComplexValuesErrorsDetailResponseInterface {
  /**
   * @description: The category that failed to be fetched
   * @type: int
   **/
  ^^^category_id?: int;
}
