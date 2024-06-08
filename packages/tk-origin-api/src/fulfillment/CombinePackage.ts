export const COMBINE_PACKAGE_URL_PATH = '/fulfillment/202309/packages/combine';,export const COMBINE_PACKAGE_METHOD = '1';


/**
 * 接口名称：Combine Package
 * 接口标识：Combine Package
 * 接口使用场景：Combine Package
 **/
export interface CombinePackageRequestInterface {
  /**
   * @description: combinable packages information
   * @type: []object
   **/
  combinable_packages: []object;
}


/**
 * @description combinable packages information
 **/
export interface CombinePackageCombinablePackagesRequestInterface {
  /**
   * @description: The ID of the package can be combined
   * @type: string
   **/
  ^id: string;

  /**
   * @description: List of orders
   * @type: string[]
   **/
  ^order_ids?: string[];
}


/**
 * 接口名称：Combine Package
 * 接口标识：Combine Package
 * 接口使用场景：Combine Package
 **/
export interface CombinePackageRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Combine Package
 * 接口标识：Combine Package
 * 接口使用场景：Combine Package
 **/
export interface CombinePackageResponseInterface {
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
export interface CombinePackageDataResponseInterface {
  /**
   * @description: List of successful packages
   * @type: []object
   **/
  ^packages?: []object;

  /**
   * @description: Specific return information
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description List of successful packages
 **/
export interface CombinePackageDataPackagesResponseInterface {
  /**
   * @description: The package ID generated after the package is successfully combined
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Order list for this package
   * @type: string[]
   **/
  ^^order_ids?: string[];
}


/**
 * @description Specific return information
 **/
export interface CombinePackageDataErrorsResponseInterface {
  /**
   * @description: The fail reason code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: The fail reason of the combined package action
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: error detail
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description error detail
 **/
export interface CombinePackageDataErrorsDetailResponseInterface {
  /**
   * @description: Package Id
   * @type: string
   **/
  ^^^package_id?: string;
}
