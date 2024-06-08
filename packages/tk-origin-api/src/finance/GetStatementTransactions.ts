export const GET_STATEMENT_TRANSACTIONS_URL_PATH = '/finance/202309/statements/{statement_id}/statement_transactions';,export const GET_STATEMENT_TRANSACTIONS_METHOD = '2';


/**
 * 接口名称：Get Statement Transactions
 * 接口标识：Get Statement Transactions
 * 接口使用场景：Get Statement Transactions
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetStatementTransactionsRequestInterface {

}


/**
 * 接口名称：Get Statement Transactions
 * 接口标识：Get Statement Transactions
 * 接口使用场景：Get Statement Transactions
 **/
export interface GetStatementTransactionsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: The default is empty string
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: Only support: order_create_time
   * @type: string
   **/
  sort_field: string;

  /**
   * @description: The default is ASC, the developer can choose ASC or DESC
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: The default is 20. It must be a positive integer,the range is 1-100
   * @type: int
   **/
  page_size?: int;
}


/**
 * 接口名称：Get Statement Transactions
 * 接口标识：Get Statement Transactions
 * 接口使用场景：Get Statement Transactions
 **/
export interface GetStatementTransactionsResponseInterface {
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
export interface GetStatementTransactionsDataResponseInterface {
  /**
   * @description: Cursor used for searching for more information
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: The unique ID of statement
   * @type: string
   **/
  ^statement_id?: string;

  /**
   * @description: Time of statement in UTC time zone
   * @type: int
   **/
  ^statement_time?: int;

  /**
   * @description: The total settlement amount of the statement<br>settlement_amount = revenue_amount + fee_amount + adjustment_amount
   * @type: string
   **/
  ^settlement_amount?: string;

  /**
   * @description: The three-digit currency code in ISO 4217 format.   
   * @type: string
   **/
  ^currency?: string;

  /**
   * @description: The total earnings calculated by the platform at the time the order was paid
   * @type: string
   **/
  ^revenue_amount?: string;

  /**
   * @description: The fees calculated by the platform when the order meets the settlement rules (the order is settled 3 to 15 days after it is delivered with no return/refund ongoing) 
   * @type: string
   **/
  ^fee_amount?: string;

  /**
   * @description: The total amount calculated by the platform when the order fees need to be changed, the specific adjustment type will be shown in fields type
   * @type: string
   **/
  ^adjustment_amount?: string;

  /**
   * @description: The number of transaction records
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: Statement list
   * @type: []object
   **/
  ^statement_transactions?: []object;
}


/**
 * @description Statement list
 **/
export interface GetStatementTransactionsDataStatementTransactionsResponseInterface {
  /**
   * @description: The transaction Unique key，you can use this field to determine whether it is repeated.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: If the transaction is a regular order, we will return ORDER. If the transaction is an adjustment, we will return the adjustment type. <br>Adjustment type possible values:<br>- SHIPPING_FEE_ADJUSTMENT：Adjustment when there are differences or mistakes with the shipping fee paid by the seller.<br>- SHIPPING_FEE_COMPENSATION：Compensation given to sellers due to differences between the actual shipping fee and the pre-paid shipping fee.<br>- CHARGE_BACK：The charge returned to a payment card after a customer has successfully disputed an item on their account statement or transactions report.<br>- CUSTOMER_SERVICE_COMPENSATION：This is extra compensation or compensation paid to a customer after the after-sales period by customer service.<br>- PROMOTION_ADJUSTMENT：Adjustment when a seller takes part in a platform promotion and there are differences between the promotion price and the actual amount paid by the seller.<br>- PLATFORM_COMPENSATION：Compensation paid to the seller as a result of the seller successfully appealing customer dispute.<br>- PLATFORM_PENALTY：After identifying a violation of platform policies, we have deducted the corresponding penalty amount from the seller's account in accordance with our policies. Please see the email notification that was sent to you.<br>- SAMPLE_SHIPPING_FEE：Fees are charged for sending samples using the platform logistics provider.<br>- LOGISTICS_REIMBURSEMENT       <br>  - Your order has been lost or damaged due to logistics issues. We apologize sincerely for this issue, and we have provided reimbursement for this order.<br>  -  The platform has verified the return or refund order ID with logistics, and the return/refund request for the order has been approved. Since the reason for this refund is not the responsibility of the seller, TikTok has paid the refund amount to the customer.<br>  - Reimbursement paid by TikTok Shop for losses due to logistics-related issues<br>- PLATFORM_REIMBURSEMENT<br>  - Platform refund without return: Order has been processed using the TikTok refund without return policy. Since the buyer is responsible for the issue with the order, we have provided reimbursement to cover the loss. Refer to the TikTok refund without return policy for more details. <br>  - Platform refund without return: Order has been processed using the TikTok refund without return policy. Once we've reviewed the order, you may receive a subsidy to help neutralize your costs. Refer to the TikTok refund without return policy for more details. <br>  - The platform has verified the return or refund order ID, and the return/refund request for the order has been approved. Since the reason for this refund is not the responsibility of seller, TikTok has borne the refund amount to the customer.<br>  - Subsidy paid by TikTok Shop as a result of customer dissatisfaction<br>- DEDUCTIONS_INCURRED_BY_SELLER<br>  - User has submitted a 'Return and Refund' request for an order. According to TikTok Shop policy, the seller will be liable for return shipping costs if the return or refund is caused by a product issue or late delivery.<br>  - Order was found to meet the definition of fraud, and to either have one of the following issues, or other similar issues: empty package sent to customer, items sent not matching those on the product display page, items sent of lower value than advertised. The seller is responsible for costs related to this issue.<br>  - According to the TikTok Shop Anti-counterfeit Policy, the product under order is considered counterfeit. The seller is responsible for costs related to this issue.<br>  - The product for order is considered defective and to have created a negative experience for the customer. According to TikTok Shop's policy, the seller is responsible for the cost of the compensation voucher provided to the customer.<br>  - When a customer is unhappy with their experience due to an issue that is the seller's responsibility, the seller is responsible for related costs.<br>- SHIPPING_FEE_REBATE：The shipping fee rebate given to the seller as part of their participation in a platform campaign.<br>- WAREHOUSE_SERVICE_FEE：Fees that are charged as part of warehouse services provision, such as a wrapping service operations fee, wrapping service fee, barcode labeling fee, new product inspection service fee, and so on.<br>- PLATFORM_COMMISSION_ADJUSTMENT：Adjustment when there are differences in the platform commission paid by the seller.<br>- PLATFORM_COMMISSION_COMPENSATION：Compensation paid to the seller when there are differences in the platform commission paid by the seller.<br>- OTHER_ADJUSTMENT：Adjustments for other reasons.
   * @type: string
   **/
  ^^type?: string;

  /**
   * @description: The unique ID of the order，One of Order ID and Adjustment ID must not be 0
   * @type: string
   **/
  ^^order_id?: string;

  /**
   * @description: The unique ID of the adjustment transaction，One of Order ID and Adjustment ID must not be 0
   * @type: string
   **/
  ^^adjustment_id?: string;

  /**
   * @description: Orders related to adjustments, if any.
   * @type: string
   **/
  ^^adjustment_order_id?: string;

  /**
   * @description: The create time of the order
   * @type: int
   **/
  ^^order_create_time?: int;

  /**
   * @description: The total settlement amount of the order
   * @type: string
   **/
  ^^settlement_amount?: string;

  /**
   * @description: The three-digit currency code in ISO 4217 format.   
   * @type: string
   **/
  ^^currency?: string;

  /**
   * @description: Total revenue amount, revenue_amont = customer_payment_amount+platform_discount_amount+platform_discount_refund_amount+customer_order_refund_amount+shipping_fee_subsidy_amount
   * @type: string
   **/
  ^^revenue_amount?: string;

  /**
   * @description: The total amount paid by the customer, customer_payment = after_seller_discounts_subtotal_amount+customer_shipping_fee_amount-platform_discount_amount+sales_tax_payment_amount
   * @type: string
   **/
  ^^customer_payment_amount?: string;

  /**
   * @description: The price of all order items after the seller's discount is deducted
   * @type: string
   **/
  ^^after_seller_discounts_subtotal_amount?: string;

  /**
   * @description: The expected shipping fee borne by the buyer calculated based on the weight of the product uploaded by the seller
   * @type: string
   **/
  ^^customer_shipping_fee_amount?: string;

  /**
   * @description: Only for US. The sales tax collected from the buyer for the product and delivery.
   * @type: string
   **/
  ^^sales_tax_payment_amount?: string;

  /**
   * @description: This category represents promotions paid for by platform, such as coupons and other campaign discounts organised by platform
   * @type: string
   **/
  ^^platform_discount_amount?: string;

  /**
   * @description: If a refund happens, the platform discount that was applied will be regarded as invalid and deducted from the final settlement
   * @type: string
   **/
  ^^platform_discount_refund_amount?: string;

  /**
   * @description: The refunded amount deducted from the final settlement
   * @type: string
   **/
  ^^customer_order_refund_amount?: string;

  /**
   * @description: The exact amount refunded to the customer
   * @type: string
   **/
  ^^customer_refund_amount?: string;

  /**
   * @description: The refunded amount subsidized by the platform
   * @type: string
   **/
  ^^platform_refund_subsidy_amount?: string;

  /**
   * @description: A positive amount represents a shipping fee subsidy you've received and a negative amount represents a shipping fee subsidy you need to return
   * @type: string
   **/
  ^^shipping_fee_subsidy_amount?: string;

  /**
   * @description: The fees calculated by platform when the order meet the settlement rules (the order is deemed to settle X days after it is delivered with no return/refund ongoing)
   * @type: string
   **/
  ^^fee_amount?: string;

  /**
   * @description: Only for UK. Rate * (customer_payment_amount - customer_order_refund_amount + platform_discount_amount - platform_discount_refund_amount)
   * @type: string
   **/
  ^^platform_commission_amount?: string;

  /**
   * @description: shipping_fee_amount = actual_shipping_fee_amount - platform_shipping_fee_discount_amount + acutal_return_shipping_fee_amount + signature_confirmation_fee_amount
   * @type: string
   **/
  ^^shipping_fee_amount?: string;

  /**
   * @description: The actual shipping fee calculated based on the weight/dimensions measured by the carrier
   * @type: string
   **/
  ^^actual_shipping_fee_amount?: string;

  /**
   * @description: The shipping fee discount provided in accordance with a campaign policy
   * @type: string
   **/
  ^^platform_shipping_fee_discount_amount?: string;

  /**
   * @description: Only for US. The final sales tax collected from the buyer for the product and delivery. sales_tax_amount = sales_tax_refund_amount-sales_tax_payment_amount
   * @type: string
   **/
  ^^sales_tax_amount?: string;

  /**
   * @description: Only for US. If the purchase is refunded, the sales tax that was applied will be returned to the buyer.
   * @type: string
   **/
  ^^sales_tax_refund_amount?: string;

  /**
   * @description: The price the customer actually paid for the product (product sale price minus any platform coupons and merchant coupons) multiplied by the commission percentage.
   * @type: string
   **/
  ^^affiliate_commission_amount?: string;

  /**
   * @description: The amount the customer paid for the product (product price minus platform and seller discounts) via affiliate partner's links multiplied by the affiliate partner commission rate.
   * @type: string
   **/
  ^^affiliate_partner_commission_amount?: string;

  /**
   * @description: Only for US. Transaction Fee is a service fee charged for processing successful orders in TikTok Shop. Transaction Fee is a non-refundable fee, and is charged at 0.3 USD plus a percentage of the customer paid price per transaction. (For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* Customer payment amount
   * @type: string
   **/
  ^^transaction_fee_amount?: string;

  /**
   * @description: Only for US. The referral fee is an amount charged for processing successful orders in TikTok Shop. (For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* (Customer payment amount + Platform discount amount - (Customer order refund amount + Platform discount refund amount))
   * @type: string
   **/
  ^^referral_fee_amount?: string;

  /**
   * @description: The adjustment amount calculated by the platform when the order fees need to be changed, the specific adjustment type will be shown in fields type
   * @type: string
   **/
  ^^adjustment_amount?: string;

  /**
   * @description: If the seller is responsible for the return, the return shipping fee will be charged.
   * @type: string
   **/
  ^^actual_return_shipping_fee_amount?: string;

  /**
   * @description: retail_delivery_fee_amount = retail_delivery_fee_payment_amount+retail_delivery_fee_refund_amount
   * @type: string
   **/
  ^^retail_delivery_fee_amount?: string;

  /**
   * @description: The retail delivery fee is collected and remitted by the TikTok Shop. It applies to all deliveries by motor vehicle to a location in Colorado with at least one item of tangible personal property that is subject to state sales or use tax.
   * @type: string
   **/
  ^^retail_delivery_fee_payment_amount?: string;

  /**
   * @description: Subsidy paid by TikTok Shop for losses due to return or refund request rules or other issues
   * @type: string
   **/
  ^^retail_delivery_fee_refund_amount?: string;

  /**
   * @description: The commission paid to a creator before any personal income tax withholding.
   * @type: string
   **/
  ^^affiliate_commission_before_pit?: string;

  /**
   * @description: The creator's personal income tax withholding amount. Sellers are required to handle the filing and remittance of withheld taxes based on their region's tax regulations.
   * @type: string
   **/
  ^^pit_amount?: string;

  /**
   * @description: Refunds or returns will incur a 20% refund administration fee deduction from the total refunded referral fee amount
   * @type: string
   **/
  ^^refund_administration_fee_amount?: string;

  /**
   * @description: Full name is TikTok Shop shipping fee.The shipping fee incurred by the seller for using TikTok shipping. 
   * @type: string
   **/
  ^^fbm_shipping_cost_amount?: string;

  /**
   * @description: Full name is Fulfilled by TikTok Shop (FBT) shipping fee.The shipping fee incurred by the seller for orders fulfilled by TikTok.
   * @type: string
   **/
  ^^fbt_shipping_cost_amount?: string;

  /**
   * @description: Also named TikTok Shop shipping incentive.The shipping fee incentive provided by TikTok Shop.
   * @type: string
   **/
  ^^shipping_cost_discount_amount?: string;

  /**
   * @description: Also named TikTok Shop shipping incentive refund.The shipping fee incentive amount deducted from the seller's account for refunded orders due to a seller fault.
   * @type: string
   **/
  ^^refund_shipping_cost_discount_amount?: string;

  /**
   * @description: TBD
   * @type: string
   **/
  ^^signature_confirmation_fee_amount?: string;
}
