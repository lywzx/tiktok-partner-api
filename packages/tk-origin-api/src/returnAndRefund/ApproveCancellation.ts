export const APPROVE_CANCELLATION_URL_PATH = '/return_refund/202309/cancellations/{cancel_id}/approve';,export const APPROVE_CANCELLATION_METHOD = '1';


/**
 * 接口名称：Approve Cancellation
 * 接口标识：Approve Cancellation
 * 接口使用场景：Approve Cancellation
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApproveCancellationRequestInterface {

}


/**
 * 接口名称：Approve Cancellation
 * 接口标识：Approve Cancellation
 * 接口使用场景：Approve Cancellation
 **/
export interface ApproveCancellationRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: The idempotency key is a unique value generated by the client which the server uses to recognize the same request. How you create unique keys is up to you, but we suggest using UUIDs, or another random string with enough entropy to avoid collisions. Idempotency keys can be up to 255 characters long.
   * @type: string
   **/
  idempotency_key?: string;
}


/**
 * 接口名称：Approve Cancellation
 * 接口标识：Approve Cancellation
 * 接口使用场景：Approve Cancellation
 **/
export interface ApproveCancellationResponseInterface {
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