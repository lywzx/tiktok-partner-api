export const UPDATE_PACKAGE_DELIVERY_STATUS_URL_PATH = '/fulfillment/202309/packages/deliver';,export const UPDATE_PACKAGE_DELIVERY_STATUS_METHOD = '1';


/**
 * 接口名称：Update Package Delivery Status
 * 接口标识：Update Package Delivery Status
 * 接口使用场景：Update Package Delivery Status
 **/
export interface UpdatePackageDeliveryStatusRequestInterface {
  /**
   * @description: Package
   * @type: []object
   **/
  packages: []object;
}


/**
 * @description Package
 **/
export interface UpdatePackageDeliveryStatusPackagesRequestInterface {
  /**
   * @description: The ID of package
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Delivery status of the package. If delivery is successful, input  DELIVERY_SUCCESS. If delivery is unsuccessful, input DELIVERY_FAILED; For packages which have been delivered, if you want to update an attachment, input UPDATE_POD.<br>- DELIVERY_SUCCESS<br>- DELIVERY_FAILED<br>- UPDATE_POD
   * @type: string
   **/
  ^delivery_type: string;

  /**
   * @description: Delivery fail reasons:<br>When delivery_type = DELIVERY_FAILED, this field is required. For other delivery types, this field is not required.<br>- INVALID_ADDRESS:The Buyer shipping address is invalid <br>- UNABLE_RECEIVE:The buyer is currently unable to receive the delivery.<br>- UNABLE_CONTACT_BUYER: Unable to contact the buyer<br>- BUYER_REFUSED: The buyer has refused to receive the product.<br>- DELAY_DELIVERY: Delay in delivery.<br>- PACKAGE_LOST: The package lost.<br>- PACKAGE_DAMAGE: The package damage.<br>- FORCE_MAJEURE: An unforeseeable event of force majeure has occurred.<br>- OTHER: other reason<br>
   * @type: string
   **/
  ^fail_delivery_reason?: string;

  /**
   * @description: Attachment type:<br>- IMG<br>- PDF
   * @type: string
   **/
  ^file_type?: string;

  /**
   * @description: Attachment URL<br>The seller can use the 'Upload Delivery File' and 'Upload Delivery Image' APIs to generate the URL. The attachment will be used by TikTok Shop to verify the package delivery.
   * @type: string
   **/
  ^file_url?: string;
}


/**
 * 接口名称：Update Package Delivery Status
 * 接口标识：Update Package Delivery Status
 * 接口使用场景：Update Package Delivery Status
 **/
export interface UpdatePackageDeliveryStatusRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Package Delivery Status
 * 接口标识：Update Package Delivery Status
 * 接口使用场景：Update Package Delivery Status
 **/
export interface UpdatePackageDeliveryStatusResponseInterface {
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
export interface UpdatePackageDeliveryStatusDataResponseInterface {
  /**
   * @description: Specific return information (returns multiple errors and reasons)
   * @type: []object
   **/
  ^errors?: []object;
}


/**
 * @description Specific return information (returns multiple errors and reasons)
 **/
export interface UpdatePackageDeliveryStatusDataErrorsResponseInterface {
  /**
   * @description: The failed reason code
   * @type: int
   **/
  ^^code?: int;

  /**
   * @description: Fulfillment failed reason
   * @type: string
   **/
  ^^message?: string;

  /**
   * @description: Error detail
   * @type: object
   **/
  ^^detail?: object;
}


/**
 * @description Error detail
 **/
export interface UpdatePackageDeliveryStatusDataErrorsDetailResponseInterface {
  /**
   * @description: Package Id
   * @type: string
   **/
  ^^^package_id?: string;
}
