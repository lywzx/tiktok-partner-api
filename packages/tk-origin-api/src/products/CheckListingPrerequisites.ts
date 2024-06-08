export const CHECK_LISTING_PREREQUISITES_URL_PATH = '/product/202312/prerequisites';,export const CHECK_LISTING_PREREQUISITES_METHOD = '2';


/**
 * 接口名称：Check Listing Prerequisites
 * 接口标识：Check Listing Prerequisites
 * 接口使用场景：Check Listing Prerequisites
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckListingPrerequisitesRequestInterface {

}


/**
 * 接口名称：Check Listing Prerequisites
 * 接口标识：Check Listing Prerequisites
 * 接口使用场景：Check Listing Prerequisites
 **/
export interface CheckListingPrerequisitesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Check Listing Prerequisites
 * 接口标识：Check Listing Prerequisites
 * 接口使用场景：Check Listing Prerequisites
 **/
export interface CheckListingPrerequisitesResponseInterface {
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
export interface CheckListingPrerequisitesDataResponseInterface {
  /**
   * @description: Check items and results related to product creation. If "is_failed=true", it means that this item does not meet the conditions for creating a product.
   * @type: []object
   **/
  ^check_results?: []object;
}


/**
 * @description Check items and results related to product creation. If "is_failed=true", it means that this item does not meet the conditions for creating a product.
 **/
export interface CheckListingPrerequisitesDataCheckResultsResponseInterface {
  /**
   * @description: Currently, the checked items provided by this interface are as follows.<br>1. "SHOP_STATUS"：Whether the shop status allows normal creating a product. If the shop status is abnormal, return a check failure and do not allow creating a product.<br>2. "SHOP_TAX": In some regions, if it is not prepared, return a check failure and do not allow creating a product. In US, if it is not prepared, return a check failure and the product will not be sent to audition.<br>3. "PICKUP_WAREHOUSE": Shops without pickup warehouses can not create products.<br>4. "RETURN_WAREHOUSE": Shops without return warehouses can not create products.<br>5. "DELIVERY_OPTION": If the seller has not subscribed to any delivery option, the seller can not create products.<br>6. "SHIPPING_TEMPLATE": If sellers set TikTok Shipping, the SHIPPING_TEMPLATE will always return "is_failed:false" and the sellers can create products.<br>7. "PRODUCT_QUANTITY_LIMIT": Quantity limit for sellers to create products. If the number of products created exceeds the limit, the seller can not create products.<br>8. "EXTENDED_PRODUCER_RESPONSIBILITY": In some regions, if it is not prepared, return a check failure and do not allow creating a product.<br>9. "BANk_ACCOUNT": In some regions, the seller needs to complete your profile setup by adding your bank account details. If it is not prepared, the product will not be sent to audition.<br>10. "CONTACT_INFO": In some regions, the seller needs to provide contact info. If it is not prepared, return a check failure and do not allow creating a product.
   * @type: string
   **/
  ^^check_item?: string;

  /**
   * @description: If "is_failed" is true, it indicates that the requirements for listing have not been met.
   * @type: bool
   **/
  ^^is_failed?: bool;

  /**
   * @description: The specific reasons for not being able to list products due to the check_item.
   * @type: string[]
   **/
  ^^fail_reasons?: string[];
}
