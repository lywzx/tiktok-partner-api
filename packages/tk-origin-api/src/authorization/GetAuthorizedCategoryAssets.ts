export const GET_AUTHORIZED_CATEGORY_ASSETS_URL_PATH = '/authorization/202405/category_assets';,export const GET_AUTHORIZED_CATEGORY_ASSETS_METHOD = '2';


/**
 * 接口名称：Get Authorized Category Assets
 * 接口标识：Get Authorized Category Assets
 * 接口使用场景：Get Authorized Category Assets
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAuthorizedCategoryAssetsRequestInterface {

}


/**
 * 接口名称：Get Authorized Category Assets
 * 接口标识：Get Authorized Category Assets
 * 接口使用场景：Get Authorized Category Assets
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAuthorizedCategoryAssetsRequestInterface {

}


/**
 * 接口名称：Get Authorized Category Assets
 * 接口标识：Get Authorized Category Assets
 * 接口使用场景：Get Authorized Category Assets
 **/
export interface GetAuthorizedCategoryAssetsResponseInterface {
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
export interface GetAuthorizedCategoryAssetsDataResponseInterface {
  /**
   * @description: The categories which the partner has authoirzed this app to access.
   * @type: []object
   **/
  ^category_assets?: []object;
}


/**
 * @description The categories which the partner has authoirzed this app to access.
 **/
export interface GetAuthorizedCategoryAssetsDataCategoryAssetsResponseInterface {
  /**
   * @description: Use this property to pass partner information in requesting the API. Failure in passing the correct value when requesting the API for partner will return incorrect response.
   * @type: string
   **/
  ^^cipher?: string;

  /**
   * @description: Target market of the category asset.
   * @type: string
   **/
  ^^target_market?: string;

  /**
   * @description: The category information.
   * @type: object
   **/
  ^^category?: object;
}


/**
 * @description The category information.
 **/
export interface GetAuthorizedCategoryAssetsDataCategoryAssetsCategoryResponseInterface {
  /**
   * @description: The ID of TTSPC category, use this field to check if the partner has authorized the correct category. If not, ask the partner to re-authorize.
   * @type: int
   **/
  ^^^id?: int;

  /**
   * @description: The name of TTSPC category, this might change in the run.
   * @type: string
   **/
  ^^^name?: string;
}
