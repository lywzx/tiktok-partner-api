export const CREATE_CUSTOM_BRANDS_URL_PATH = '/product/202309/brands';,export const CREATE_CUSTOM_BRANDS_METHOD = '1';


/**
 * 接口名称：Create Custom Brands
 * 接口标识：Create Custom Brands
 * 接口使用场景：Create Custom Brands
 **/
export interface CreateCustomBrandsRequestInterface {
  /**
   * @description: Brand name to be created.nPrerequisites:n- The brand name should have a minimum of 2 characters and should not exceed 30 characters.n- There are no language restrictions for the brand, but Chinese characters can not be used. The brand name will not be translated into multiple languages.n- Authorization is not required when creating a brand. You can create the brand first and then apply for authorization. n Please refer to the following link for information about brand authorization. (i.e US market: https://seller-us.tiktok.com/profile/trademark?type=owner)
   * @type: string
   **/
  name: string;
}


/**
 * 接口名称：Create Custom Brands
 * 接口标识：Create Custom Brands
 * 接口使用场景：Create Custom Brands
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateCustomBrandsRequestInterface {

}


/**
 * 接口名称：Create Custom Brands
 * 接口标识：Create Custom Brands
 * 接口使用场景：Create Custom Brands
 **/
export interface CreateCustomBrandsResponseInterface {
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
export interface CreateCustomBrandsDataResponseInterface {
  /**
   * @description: Return the ID of the successfully created brand, which can be used for creating products.
   * @type: string
   **/
  ^id?: string;
}
