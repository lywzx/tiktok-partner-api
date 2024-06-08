export const GET_GLOBAL_CATEGORY_RULES_URL_PATH = '/product/202309/categories/{category_id}/global_rules';,export const GET_GLOBAL_CATEGORY_RULES_METHOD = '2';


/**
 * 接口名称：Get Global Category Rules
 * 接口标识：Get Global Category Rules
 * 接口使用场景：Get Global Category Rules
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalCategoryRulesRequestInterface {

}


/**
 * 接口名称：Get Global Category Rules
 * 接口标识：Get Global Category Rules
 * 接口使用场景：Get Global Category Rules
 **/
export interface GetGlobalCategoryRulesRequestInterface {
  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * 接口名称：Get Global Category Rules
 * 接口标识：Get Global Category Rules
 * 接口使用场景：Get Global Category Rules
 **/
export interface GetGlobalCategoryRulesResponseInterface {
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
export interface GetGlobalCategoryRulesDataResponseInterface {
  /**
   * @description: certifications information related to the category.<br><br>What are certifications for Tiktok?<br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. 
   * @type: []object
   **/
  ^product_certifications?: []object;

  /**
   * @description: Size chart information related to the category.
   * @type: object
   **/
  ^size_chart?: object;
}


/**
 * @description certifications information related to the category.<br><br>What are certifications for Tiktok?<br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. 
 **/
export interface GetGlobalCategoryRulesDataProductCertificationsResponseInterface {
  /**
   * @description: The unique ID for product qualifications, which can be used when creating or editing products.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Product certification name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Indicate whether the product certification is mandatory when creating or editing a global product.
   * @type: bool
   **/
  ^^is_required?: bool;

  /**
   * @description: sample_image_url
   * @type: string
   **/
  ^^sample_image_url?: string;

  /**
   * @description: Return to the markets where product certifications are required.<br>Enumeration values: <br>Thailand-TH, Malaysia-MY, Vietnam-VN, Philippines-PH, UK-GB, Singapore-SG, USA-US.
   * @type: string[]
   **/
  ^^required_regions?: string[];

  /**
   * @description: Return to the markets where product certifications are optional.<br>Enumeration values: <br>Thailand-TH, Malaysia-MY, Vietnam-VN, Philippines-PH, UK-GB, Indonesia-ID, Singapore-SG, USA-US.
   * @type: string[]
   **/
  ^^optional_regions?: string[];
}


/**
 * @description Size chart information related to the category.
 **/
export interface GetGlobalCategoryRulesDataSizeChartResponseInterface {
  /**
   * @description: Indicate whether size charts are supported when creating or editing a global product.
   * @type: bool
   **/
  ^^is_supported?: bool;

  /**
   * @description: Indicate whether the size chart is mandatory when creating or editing a product.
   * @type: bool
   **/
  ^^is_required?: bool;
}
