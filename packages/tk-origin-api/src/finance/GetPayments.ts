export const GET_PAYMENTS_URL_PATH = '/finance/202309/payments';,export const GET_PAYMENTS_METHOD = '2';


/**
 * 接口名称：Get Payments
 * 接口标识：Get Payments
 * 接口使用场景：Get Payments
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetPaymentsRequestInterface {

}


/**
 * 接口名称：Get Payments
 * 接口标识：Get Payments
 * 接口使用场景：Get Payments
 **/
export interface GetPaymentsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Timestamp (Second level)，time used for selecting payments that opened before (but not at) a specified time
   * @type: int
   **/
  create_time_lt?: int;

  /**
   * @description: The default is 20, it must be positive integer,the range is 1-100
   * @type: int
   **/
  page_size?: int;

  /**
   * @description: The default is empty string
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: Only support: create_time
   * @type: string
   **/
  sort_field: string;

  /**
   * @description: The default is ASC. The developer can choose ASC or DESC
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: Timestamp (Second level)，time used for selecting payments that opened after (or at) a specified time
   * @type: int
   **/
  create_time_ge?: int;
}


/**
 * 接口名称：Get Payments
 * 接口标识：Get Payments
 * 接口使用场景：Get Payments
 **/
export interface GetPaymentsResponseInterface {
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
export interface GetPaymentsDataResponseInterface {
  /**
   * @description: Cursor used for searching for next page information.
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: Payment list
   * @type: []object
   **/
  ^payments?: []object;
}


/**
 * @description Payment list
 **/
export interface GetPaymentsDataPaymentsResponseInterface {
  /**
   * @description: The time that the payment was created within TikTokShop. Once the payment is created, we will send the money to the Seller.
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: The unique ID of the payment
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The processing status of the payment indicates whether the payment is transferred. Possible values:<br>- PAID：the payment has been transferred to the Seller<br>- FAILED：the payment failed<br>- PROCESSING：the payment is currently processing. If the payment is successful, the status will transition to PAID. If not, it will be FAILED.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: The actual payment information after exchange
   * @type: object
   **/
  ^^amount?: object;

  /**
   * @description: The settlement information before exchange
   * @type: object
   **/
  ^^settlement_amount?: object;

  /**
   * @description: The reserve information before exchange
   * @type: object
   **/
  ^^reserve_amount?: object;

  /**
   * @description: The payment information before applying an exchange rate
   * @type: object
   **/
  ^^payment_amount_before_exchange?: object;

  /**
   * @description: The exchange rate, at 6 decimal places.
   * @type: string
   **/
  ^^exchange_rate?: string;

  /**
   * @description: UNIX timestamp when the payment was successfully processed.
   * @type: int
   **/
  ^^paid_time?: int;

  /**
   * @description: The Seller's bank account number masked, with only the last 4 digits revealed.
   * @type: string
   **/
  ^^bank_account?: string;
}


/**
 * @description The actual payment information after exchange
 **/
export interface GetPaymentsDataPaymentsAmountResponseInterface {
  /**
   * @description: Value is the amount after exchange
   * @type: string
   **/
  ^^^value?: string;

  /**
   * @description: Currency is  the currency after exchange,the three-digit currency code in ISO 4217 format.
   * @type: string
   **/
  ^^^currency?: string;
}


/**
 * @description The settlement information before exchange
 **/
export interface GetPaymentsDataPaymentsSettlementAmountResponseInterface {
  /**
   * @description: Value is the amount before exchange
   * @type: string
   **/
  ^^^value?: string;

  /**
   * @description: Currency is  the currency before exchange,the three-digit currency code in ISO 4217 format.
   * @type: string
   **/
  ^^^currency?: string;
}


/**
 * @description The reserve information before exchange
 **/
export interface GetPaymentsDataPaymentsReserveAmountResponseInterface {
  /**
   * @description: Value is the amount before exchange
   * @type: string
   **/
  ^^^value?: string;

  /**
   * @description: Currency is  the currency before exchange,the three-digit currency code in ISO 4217 format.
   * @type: string
   **/
  ^^^currency?: string;
}


/**
 * @description The payment information before applying an exchange rate
 **/
export interface GetPaymentsDataPaymentsPaymentAmountBeforeExchangeResponseInterface {
  /**
   * @description: Value is the amount before applying the exchange rate
   * @type: string
   **/
  ^^^value?: string;

  /**
   * @description: Currency is the currency before exchange, the three-digit currency code in ISO 4217 format.
   * @type: string
   **/
  ^^^currency?: string;
}
