export const GET_REJECT_REASONS_URL_PATH = '/return_refund/202309/reject_reasons';,export const GET_REJECT_REASONS_METHOD = '2';


/**
 * 接口名称：Get Reject Reasons
 * 接口标识：Get Reject Reasons
 * 接口使用场景：Get Reject Reasons
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetRejectReasonsRequestInterface {

}


/**
 * 接口名称：Get Reject Reasons
 * 接口标识：Get Reject Reasons
 * 接口使用场景：Get Reject Reasons
 **/
export interface GetRejectReasonsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: BCP 47 locale identifier, reference to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier, default "en", effect multilingual text such as reason_text
   * @type: string
   **/
  locale?: string;

  /**
   * @description: A return id a cancel id
   * @type: string
   **/
  return_or_cancel_id: string;
}


/**
 * 接口名称：Get Reject Reasons
 * 接口标识：Get Reject Reasons
 * 接口使用场景：Get Reject Reasons
 **/
export interface GetRejectReasonsResponseInterface {
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
export interface GetRejectReasonsDataResponseInterface {
  /**
   * @description: The available reason for seller to rejects the cancel/return/refund request.
   * @type: []object
   **/
  ^reasons?: []object;
}


/**
 * @description The available reason for seller to rejects the cancel/return/refund request.
 **/
export interface GetRejectReasonsDataReasonsResponseInterface {
  /**
   * @description: The  reason name why seller reject request
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The multilingual text of reason, change lang by locale
   * @type: string
   **/
  ^^text?: string;
}
