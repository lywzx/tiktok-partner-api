export const EDIT_OPEN_COLLABORATION_SETTINGS_URL_PATH = '/affiliate_seller/202405/open_collaboration_settings';,export const EDIT_OPEN_COLLABORATION_SETTINGS_METHOD = '1';


/**
 * 接口名称：Edit Open Collaboration Settings
 * 接口标识：Edit Open Collaboration Settings
 * 接口使用场景：Edit Open Collaboration Settings
 **/
export interface EditOpenCollaborationSettingsRequestInterface {
  /**
   * @description: The settings for automatically adding products to affiliate open collaboration plans.
   * @type: object
   **/
  auto_add_product?: object;
}


/**
 * @description The settings for automatically adding products to affiliate open collaboration plans.
 **/
export interface EditOpenCollaborationSettingsAutoAddProductRequestInterface {
  /**
   * @description: Indicates if products should be automatically added to affiliate open collaboration plans.<br>- true: The seller can add existing non-affiliate products to open collaboration at one time, and future products will also be added automatically.<br>- false: Future products will not be added to open collaboration automatically, but existing products' open collaboration will not be reverted.
   * @type: bool
   **/
  ^enable: bool;

  /**
   * @description: The commission rate of products' open collaboration to be created.   <br>This value is expressed as 1/10000th of the price of the product.<br>For example, if you desire a commission payout of 0.1, or 10%, then commission_rate would be 1000.<br>If the price of a product is $50 USD, then the creator would receive $5 USD (10% of $50). The commission_rate would be 1000. <br>The maximum allowed commission payout is 0.8, 80%, with the commission_rate value being 8000.<br>The minimum allowed commission payout is 0.01, 1%, or 100.<br>When enable=false, this field does not take effect.
   * @type: int
   **/
  ^commission_rate: int;
}


/**
 * 接口名称：Edit Open Collaboration Settings
 * 接口标识：Edit Open Collaboration Settings
 * 接口使用场景：Edit Open Collaboration Settings
 **/
export interface EditOpenCollaborationSettingsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Edit Open Collaboration Settings
 * 接口标识：Edit Open Collaboration Settings
 * 接口使用场景：Edit Open Collaboration Settings
 **/
export interface EditOpenCollaborationSettingsResponseInterface {
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
