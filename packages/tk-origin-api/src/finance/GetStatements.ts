export const GET_STATEMENTS_URL_PATH = '/finance/202309/statements';,export const GET_STATEMENTS_METHOD = '2';


/**
 * 接口名称：Get Statements
 * 接口标识：Get Statements
 * 接口使用场景：Get Statements
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetStatementsRequestInterface {

}


/**
 * 接口名称：Get Statements
 * 接口标识：Get Statements
 * 接口使用场景：Get Statements
 **/
export interface GetStatementsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Timestamp (Second level)，time used for selecting statements that opened before (but not at) a specified time
   * @type: int
   **/
  statement_time_lt?: int;

  /**
   * @description: This optional parameter allows you to filter your query based on one of 3 payment statuses. If you don't supply a payment_status, then we will return all 3 payment_status types.<br>- PAID：the payment has been transferred to the Seller<br>- FAILED：the payment failed<br>- PROCESSING：the payment is currently processing. If the payment is successful, the status will transition to PAID. If not, it will be FAILED.
   * @type: string
   **/
  payment_status?: string;

  /**
   * @description: The default is 20. It must be a positive integer,the range is 1-100
   * @type: int
   **/
  page_size?: int;

  /**
   * @description: The default is empty string
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: Only support: statement_time
   * @type: string
   **/
  sort_field: string;

  /**
   * @description: The default is ASC,the developer can choose ASC or DESC
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: Timestamp (Second level)，time used for selecting statements that opened after (or at) a specified time
   * @type: int
   **/
  statement_time_ge?: int;
}


/**
 * 接口名称：Get Statements
 * 接口标识：Get Statements
 * 接口使用场景：Get Statements
 **/
export interface GetStatementsResponseInterface {
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
export interface GetStatementsDataResponseInterface {
  /**
   * @description: Cursor used for searching for more information
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: Statement list
   * @type: []object
   **/
  ^statements?: []object;
}


/**
 * @description Statement list
 **/
export interface GetStatementsDataStatementsResponseInterface {
  /**
   * @description: The unique id of statement
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: This will return the statement date at 00:00 UTC time equivalent in Unix timestamp. <br><br>For example, if we want to return the statement_time for Aug 31, 2023, we will return 1693440000, which is the Unix timestamp for Aug 31, 2023 00:00 UTC. The statements returned will encompass the next 23 hours, 59 minutes, and 59 seconds until September 1st, 2023 00:00 UTC (not inclusive), which is 1693526400 in Unix.
   * @type: int
   **/
  ^^statement_time?: int;

  /**
   * @description: Settlement_amount = revenue_amount + fee_amount + adjustment_amount
   * @type: string
   **/
  ^^settlement_amount?: string;

  /**
   * @description: The three-digit currency code in ISO 4217 format.   
   * @type: string
   **/
  ^^currency?: string;

  /**
   * @description: The total earnings calculated by the platform at the time the order was paid
   * @type: string
   **/
  ^^revenue_amount?: string;

  /**
   * @description: The fees calculated by the platform when the order meets the settlement rules (the order is deemed to settle 3/15 days after it is delivered with no return/refund ongoing) 
   * @type: string
   **/
  ^^fee_amount?: string;

  /**
   * @description: The total amount calculated by the platform when the order fees need to be changed, If you require the specific adjustment type, pass in the statement_id to Get Statement Transactions.
   * @type: string
   **/
  ^^adjustment_amount?: string;

  /**
   * @description: The processing status of the statement indicates whether the payment of the statement is settled.<br>Possible values:<br>- PAID：the payment has been transferred to the Seller<br>- FAILED：the payment failed<br>- PROCESSING：the payment is currently processing. If the payment is successful, the status will transition to PAID. If not, it will be FAILED.
   * @type: string
   **/
  ^^payment_status?: string;

  /**
   * @description: The unique ID of the payment
   * @type: string
   **/
  ^^payment_id?: string;
}
