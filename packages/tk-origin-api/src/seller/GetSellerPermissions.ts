export const GET_SELLER_PERMISSIONS_URL_PATH = '/seller/202309/permissions';,export const GET_SELLER_PERMISSIONS_METHOD = '2';


/**
 * 接口名称：Get Seller Permissions
 * 接口标识：Get Seller Permissions
 * 接口使用场景：Get Seller Permissions
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetSellerPermissionsRequestInterface {

}


/**
 * 接口名称：Get Seller Permissions
 * 接口标识：Get Seller Permissions
 * 接口使用场景：Get Seller Permissions
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetSellerPermissionsRequestInterface {

}


/**
 * 接口名称：Get Seller Permissions
 * 接口标识：Get Seller Permissions
 * 接口使用场景：Get Seller Permissions
 **/
export interface GetSellerPermissionsResponseInterface {
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
export interface GetSellerPermissionsDataResponseInterface {
  /**
   * @description: The operations the seller has permission to perform.  Each element in the array represents an operation. For example, MANAGE_GLOBAL_PRODUCT indicates that the seller has the privilege to manage global products. At present, the only available operation is MANAGE_GLOBAL_PRODUCT. <br>If the seller has no permissions, this field will return an empty array.
   * @type: string[]
   **/
  ^permissions?: string[];
}
