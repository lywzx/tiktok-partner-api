export const GET_AFTERSALE_ELIGIBILITY_URL_PATH = '/return_refund/202309/orders/{order_id}/aftersale_eligibility';,export const GET_AFTERSALE_ELIGIBILITY_METHOD = '2';


/**
 * 接口名称：Get Aftersale Eligibility
 * 接口标识：Get Aftersale Eligibility
 * 接口使用场景：Get Aftersale Eligibility
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAftersaleEligibilityRequestInterface {

}


/**
 * 接口名称：Get Aftersale Eligibility
 * 接口标识：Get Aftersale Eligibility
 * 接口使用场景：Get Aftersale Eligibility
 **/
export interface GetAftersaleEligibilityRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Aftersale Eligibility
 * 接口标识：Get Aftersale Eligibility
 * 接口使用场景：Get Aftersale Eligibility
 **/
export interface GetAftersaleEligibilityResponseInterface {
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
export interface GetAftersaleEligibilityDataResponseInterface {
  /**
   * @description: The eligible after-sales for the SKU.
   * @type: []object
   **/
  ^sku_eligibility?: []object;
}


/**
 * @description The eligible after-sales for the SKU.
 **/
export interface GetAftersaleEligibilityDataSkuEligibilityResponseInterface {
  /**
   * @description: SKU ID
   * @type: string
   **/
  ^^sku_id?: string;

  /**
   * @description: The eligible after-sales for the order line item.
   * @type: []object
   **/
  ^^line_item_eligibility?: []object;
}


/**
 * @description The eligible after-sales for the order line item.
 **/
export interface GetAftersaleEligibilityDataSkuEligibilityLineItemEligibilityResponseInterface {
  /**
   * @description: Request type<br>- CANCEL<br>- REFUND<br>- RETURN_AND_REFUND
   * @type: string
   **/
  ^^^request_type?: string;

  /**
   * @description: Order line items id
   * @type: string[]
   **/
  ^^^order_line_items_ids?: string[];

  /**
   * @description: Use this field to recognize whether the item an initiate the after sale request.<br>- TRUE<br>- FALSE
   * @type: bool
   **/
  ^^^eligible?: bool;

  /**
   * @description: The reason code for ineligible to initiate specific after-sales requests.
   * @type: int
   **/
  ^^^ineligible_code?: int;

  /**
   * @description: The reason for ineligible to initiate specific after-sales requests.
   * @type: string
   **/
  ^^^ineligible_reason?: string;
}
