export const GET_CATEGORY_RULES_URL_PATH = '/product/202309/categories/{category_id}/rules';,export const GET_CATEGORY_RULES_METHOD = '2';


/**
 * 接口名称：Get Category Rules
 * 接口标识：Get Category Rules
 * 接口使用场景：Get Category Rules
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetCategoryRulesRequestInterface {

}


/**
 * 接口名称：Get Category Rules
 * 接口标识：Get Category Rules
 * 接口使用场景：Get Category Rules
 **/
export interface GetCategoryRulesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * 接口名称：Get Category Rules
 * 接口标识：Get Category Rules
 * 接口使用场景：Get Category Rules
 **/
export interface GetCategoryRulesResponseInterface {
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
export interface GetCategoryRulesDataResponseInterface {
  /**
   * @description: Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>- For some categories, certification information is required when listing products. <br>- If not returned, it means that certification is not required for listing in that category.<br>- If is_required is false, it means that certification is optional for listing in that category.
   * @type: []object
   **/
  ^product_certifications?: []object;

  /**
   * @description: Size chart information related to the category.
   * @type: object
   **/
  ^size_chart?: object;

  /**
   * @description: COD(Cash on Delivery)-related rules.
   * @type: object
   **/
  ^cod?: object;

  /**
   * @description: Package dimension related to the category.
   * @type: object
   **/
  ^package_dimension?: object;

  /**
   * @description: EPR(extended producer responsibility)- related to the category
   * @type: object
   **/
  ^epr?: object;
}


/**
 * @description Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>- For some categories, certification information is required when listing products. <br>- If not returned, it means that certification is not required for listing in that category.<br>- If is_required is false, it means that certification is optional for listing in that category.
 **/
export interface GetCategoryRulesDataProductCertificationsResponseInterface {
  /**
   * @description: The unique ID for product certifications, which can be used when creating or editing products.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Product certification name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: Image of sample certification template.
   * @type: bool
   **/
  ^^is_required?: bool;

  /**
   * @description: Image of sample certification template.<br>
   * @type: string
   **/
  ^^sample_image_url?: string;
}


/**
 * @description Size chart information related to the category.
 **/
export interface GetCategoryRulesDataSizeChartResponseInterface {
  /**
   * @description: Indicate whether size charts are supported when creating or editing a product.<br>Noice:<br>If you fill in a size chart when creating a product in an unsupported region or category, the size chart will not be saved.
   * @type: bool
   **/
  ^^is_supported?: bool;

  /**
   * @description: Indicate whether the size chart is mandatory when creating or editing a product.
   * @type: bool
   **/
  ^^is_required?: bool;
}


/**
 * @description COD(Cash on Delivery)-related rules.
 **/
export interface GetCategoryRulesDataCodResponseInterface {
  /**
   * @description: Indicate whether COD(Cash on Delivery) is supported when creating or editing a product<br>Noice:<br>If you try to create a product with "is_supported = true" in an unsupported region, the listing will fail.
   * @type: bool
   **/
  ^^is_supported?: bool;
}


/**
 * @description Package dimension related to the category.
 **/
export interface GetCategoryRulesDataPackageDimensionResponseInterface {
  /**
   * @description: Indicate whether the package dimension is mandatory when creating or editing a product.
   * @type: bool
   **/
  ^^is_required?: bool;
}


/**
 * @description EPR(extended producer responsibility)- related to the category
 **/
export interface GetCategoryRulesDataEprResponseInterface {
  /**
   * @description: Indicate whether the category EPR is mandatory when creating a product.
   * @type: bool
   **/
  ^^is_required?: bool;
}
