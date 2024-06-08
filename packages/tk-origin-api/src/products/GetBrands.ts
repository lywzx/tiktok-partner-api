export const GET_BRANDS_URL_PATH = '/product/202309/brands';,export const GET_BRANDS_METHOD = '2';


/**
 * 接口名称：Get Brands
 * 接口标识：Get Brands
 * 接口使用场景：Get Brands
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetBrandsRequestInterface {

}


/**
 * 接口名称：Get Brands
 * 接口标识：Get Brands
 * 接口使用场景：Get Brands
 **/
export interface GetBrandsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: By providing the category ID, it will return the status of brands that comply with the NICE classification.
   * @type: string
   **/
  category_id?: string;

  /**
   * @description: You can use the "is_authorized" field to decide whether to search only authorized brands.
   * @type: bool
   **/
  is_authorized?: bool;

  /**
   * @description: You can use the "brand_name" field to search for the brands.
   * @type: string
   **/
  brand_name?: string;

  /**
   * @description: "page_size" represents the return list pagination, the number of brands per page. Each page can retrieve up to 100 brand records.
   * @type: int
   **/
  page_size: int;

  /**
   * @description: The pagination token is a cursor used for pagination. It is not needed for the first page. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: The version id of the category tree.The new version id is "v2" and will return data from our new 7-level category tree.The old version id is "v1" and will return data from the current 3-level category tree.The old version of category data will be given by default.
   * @type: string
   **/
  category_version?: string;
}


/**
 * 接口名称：Get Brands
 * 接口标识：Get Brands
 * 接口使用场景：Get Brands
 **/
export interface GetBrandsResponseInterface {
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
export interface GetBrandsDataResponseInterface {
  /**
   * @description: This field returns search results in the brand library based on brand_suggest. Authorized brands will be prioritized.
   * @type: []object
   **/
  ^brands?: []object;

  /**
   * @description: Total count of brands returned.
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: The pagination token is a cursor used for pagination. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  ^next_page_token?: string;
}


/**
 * @description This field returns search results in the brand library based on brand_suggest. Authorized brands will be prioritized.
 **/
export interface GetBrandsDataBrandsResponseInterface {
  /**
   * @description: brand id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: brand name
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: What are Authorized Brands on TikTok Shop?<br>Brand authorization certificate refers to the seller's requirement to provide prior authorization from the brand owner before selling goods with a certain brand's trademark, name, or logo.<br><br>The Status of brand authorized：<br>UNAUTHORIEZD<br>AUTHORIZED
   * @type: string
   **/
  ^^authorized_status?: string;

  /**
   * @description: What are T1 Brands on TikTok Shop？<br>T1 brands mainly refer to internationally renowned brands that may have compliance risks.and require brand authorization.<br>Determines if the current brand is a T1 brand. Other brands can also be displayed on the PDP page without brand authorization.
   * @type: bool
   **/
  ^^is_t1_brand?: bool;

  /**
   * @description: Return the available status of the brand. If the brand does not comply with the NICE classification, it will be marked as unavailable.<br>AVAILABLE<br>UNAVAILABLE
   * @type: string
   **/
  ^^brand_status?: string;
}
