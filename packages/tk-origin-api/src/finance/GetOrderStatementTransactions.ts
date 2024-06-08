export const GET_ORDER_STATEMENT_TRANSACTIONS_URL_PATH = '/finance/202309/orders/{order_id}/statement_transactions';,export const GET_ORDER_STATEMENT_TRANSACTIONS_METHOD = '2';


/**
 * 接口名称：Get Order Statement Transactions
 * 接口标识：Get Order Statement Transactions
 * 接口使用场景：Get Order Statement Transactions
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetOrderStatementTransactionsRequestInterface {

}


/**
 * 接口名称：Get Order Statement Transactions
 * 接口标识：Get Order Statement Transactions
 * 接口使用场景：Get Order Statement Transactions
 **/
export interface GetOrderStatementTransactionsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Order Statement Transactions
 * 接口标识：Get Order Statement Transactions
 * 接口使用场景：Get Order Statement Transactions
 **/
export interface GetOrderStatementTransactionsResponseInterface {
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
export interface GetOrderStatementTransactionsDataResponseInterface {
  /**
   * @description: Order ID
   * @type: string
   **/
  ^order_id?: string;

  /**
   * @description: The create time of the order
   * @type: int
   **/
  ^order_create_time?: int;

  /**
   * @description: Statement transactions list
   * @type: []object
   **/
  ^statement_transactions?: []object;
}


/**
 * @description Statement transactions list
 **/
export interface GetOrderStatementTransactionsDataStatementTransactionsResponseInterface {
  /**
   * @description: The transaction Unique key. 
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The status of the transaction.  Under normal circumstances, only settled orders are included in the response.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: Time of statement in UTC time zone
   * @type: int
   **/
  ^^statement_time?: int;

  /**
   * @description: settlement_amount = revenue_amount + fee_amount + adjustment_amount
   * @type: string
   **/
  ^^settlement_amount?: string;

  /**
   * @description: The three-digit currency code in ISO 4217 format.   
   * @type: string
   **/
  ^^currency?: string;

  /**
   * @description: Total revenue amount, revenue_amont = customer_payment_amount + platform_discount_amount + platform_discount_refund_amount + customer_order_refund_amount + shipping_fee_subsidy_amount
   * @type: string
   **/
  ^^revenue_amount?: string;

  /**
   * @description: The unique ID of statement
   * @type: string
   **/
  ^^statement_id?: string;

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
   * @description: Only for US
   * @type: string
   **/
  ^^sales_tax_payment_amount?: string;

  /**
   * @description: This category represents promotion subsidies funded by TikTok Shop, such as coupons and other campaign discounts. 
   * @type: string
   **/
  ^^platform_discount_amount?: string;

  /**
   * @description: If a refund happens, the platform discount that was applied will be regarded as invalid and deducted from the final settlement
   * @type: string
   **/
  ^^platform_discount_refund_amount?: string;

  /**
   * @description: The total amount paid by the customer, customer_payment = after_seller_discounts_subtotal_amount + customer_shipping_fee_amount - platform_discount_amount + sales_tax_payment_amount
   * @type: string
   **/
  ^^customer_payment_amount?: string;

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
   * @description: Shipping fee subsidy funded by TikTok.  A positive amount represents a shipping fee subsidy paid to the seller.  A negative amount represents a shipping fee subsidy returned to TikTok by the seller. 
   * @type: string
   **/
  ^^shipping_fee_subsidy_amount?: string;

  /**
   * @description: The fees calculated by TikTok when the order is settled (the order is settled X days after it is delivered with no return/refund pending). 
   * @type: string
   **/
  ^^fee_amount?: string;

  /**
   * @description: Only for UK. Rate * (customer_payment_amount - customer_order_refund_amount + platform_discount_amount - platform_discount_refund_amount)
   * @type: string
   **/
  ^^platform_commission_amount?: string;

  /**
   * @description: The refunded amount deducted from the final settlement
   * @type: string
   **/
  ^^customer_order_refund_amount?: string;

  /**
   * @description: The actual shipping fee calculated based on the weight/dimensions measured by the carrier
   * @type: string
   **/
  ^^actual_shipping_fee_amount?: string;

  /**
   * @description: The shipping fee discount funded by TikTok in accordance with campaign policy
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
   * @description: shipping_fee_amount = actual_shipping_fee_amount - platform_shipping_fee_discount_amount + acutal_return_shipping_fee_amount + signature_confirmation_fee_amount
   * @type: string
   **/
  ^^shipping_fee_amount?: string;

  /**
   * @description: Only for US. The refferal fee is an amount charged for processing successful orders in TikTok Shop. (For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* (Customer payment amount + Platform discount amount - (Customer order refund amount + Platform discount refund amount))
   * @type: string
   **/
  ^^referral_fee_amount?: string;

  /**
   * @description: The final adjustment amount
   * @type: string
   **/
  ^^adjustment_amount?: string;

  /**
   * @description: If the seller is responsible for the return, the return shipping fee will be charged.
   * @type: string
   **/
  ^^actual_return_shipping_fee_amount?: string;

  /**
   * @description: Only for US. Transaction Fee is a service fee charged for processing successful orders in TikTok Shop. Transaction Fee is a non-refundable fee, and is charged at 0.3 USD plus a percentage of the customer paid price per transaction. (For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* Customer payment amount
   * @type: string
   **/
  ^^transaction_fee_amount?: string;

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
   * @description: Statement SKU list
   * @type: []object
   **/
  ^^sku_statement_transactions?: []object;

  /**
   * @description: The commission paid to a creator before any personal income tax withholding.
   * @type: string
   **/
  ^^affiliate_commission_before_pit?: string;

  /**
   * @description: The fee incurred for packages requiring  signature confirmation services
   * @type: string
   **/
  ^^signature_confirmation_fee_amount?: string;

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
   * @description: Also named TikTok Shop shipping incentive refund.The shipping fee incentive amount deducted from the seller's for refunded orders due to a seller fault.
   * @type: string
   **/
  ^^refund_shipping_cost_discount_amount?: string;
}


/**
 * @description Statement SKU list
 **/
export interface GetOrderStatementTransactionsDataStatementTransactionsSkuStatementTransactionsResponseInterface {
  /**
   * @description: Transaction SKU ID
   * @type: string
   **/
  ^^^sku_id?: string;

  /**
   * @description: SKU name
   * @type: string
   **/
  ^^^sku_name?: string;

  /**
   * @description: Product name
   * @type: string
   **/
  ^^^product_name?: string;

  /**
   * @description: Quantity
   * @type: int
   **/
  ^^^quantity?: int;

  /**
   * @description: settlement_amount = revenue_amount + fee_amount + adjustment_amount
   * @type: string
   **/
  ^^^settlement_amount?: string;

  /**
   * @description: The three-digit currency code in ISO 4217 format.   
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: All revenue amount
   * @type: string
   **/
  ^^^revenue_amount?: string;

  /**
   * @description: The total amount paid by the customer, customer_payment = after_seller_discounts_subtotal_amount+customer_shipping_fee_amount-platform_discount_amount+sales_tax_payment_amount
   * @type: string
   **/
  ^^^customer_payment_amount?: string;

  /**
   * @description: The price of all order items after the seller's discount is deducted
   * @type: string
   **/
  ^^^after_seller_discounts_subtotal_amount?: string;

  /**
   * @description: The expected shipping fee borne by the buyer calculated based on the weight of the product uploaded by the seller
   * @type: string
   **/
  ^^^customer_shipping_fee_amount?: string;

  /**
   * @description: Only for US. The sales tax collected from the buyer for the product and delivery.
   * @type: string
   **/
  ^^^sales_tax_payment_amount?: string;

  /**
   * @description: This category represents promotions paid for by platform, such as coupons and other campaign discounts organised by platform
   * @type: string
   **/
  ^^^platform_discount_amount?: string;

  /**
   * @description: If a refund happens, the platform discount that was applied will be regarded as invalid and deducted from the final settlement
   * @type: string
   **/
  ^^^platform_discount_refund_amount?: string;

  /**
   * @description: The refunded amount deducted from the final settlement
   * @type: string
   **/
  ^^^customer_order_refund_amount?: string;

  /**
   * @description: The exact amount refunded to the customer
   * @type: string
   **/
  ^^^customer_refund_amount?: string;

  /**
   * @description: The refunded amount subsidized by the platform
   * @type: string
   **/
  ^^^platform_refund_subsidy_amount?: string;

  /**
   * @description: A positive amount represents a shipping fee subsidy you've received and a negative amount represents a shipping fee subsidy you need to return
   * @type: string
   **/
  ^^^shipping_fee_subsidy_amount?: string;

  /**
   * @description: The fees calculated by platform when the order meet the settlement rules (the order is deemed to settle X days after it is delivered with no return/refund ongoing)
   * @type: string
   **/
  ^^^fee_amount?: string;

  /**
   * @description: Only for UK. Rate * (customer_payment_amount - customer_order_refund_amount + platform_discount_amount - platform_discount_refund_amount)
   * @type: string
   **/
  ^^^platform_commission_amount?: string;

  /**
   * @description: shipping_fee_amount = actual_shipping_fee_amount - platform_shipping_fee_discount_amount + actual_return_shipping_fee_amount + signature_confirmation_fee_amount
   * @type: string
   **/
  ^^^shipping_fee_amount?: string;

  /**
   * @description: The actual shipping fee calculated based on the weight/dimensions measured by the carrier
   * @type: string
   **/
  ^^^actual_shipping_fee_amount?: string;

  /**
   * @description: The shipping fee discount provided in accordance with a campaign policy
   * @type: string
   **/
  ^^^platform_shipping_fee_discount_amount?: string;

  /**
   * @description: Only for US. The final sales tax collected from the buyer for the product and delivery. sales_tax_amount = sales_tax_refund_amount-sales_tax_payment_amount
   * @type: string
   **/
  ^^^sales_tax_amount?: string;

  /**
   * @description: Only for US. If the purchase is refunded, the sales tax that was applied will be returned to the buyer.
   * @type: string
   **/
  ^^^sales_tax_refund_amount?: string;

  /**
   * @description: The price the customer actually paid for the product (product sale price minus any platform coupons and merchant coupons) multiplied by the commission percentage.
   * @type: string
   **/
  ^^^affiliate_commission_amount?: string;

  /**
   * @description: The amount the customer paid for the product (product price minus platform and seller discounts) via affiliate partner's links multiplied by the affiliate partner commission rate.
   * @type: string
   **/
  ^^^affiliate_partner_commission_amount?: string;

  /**
   * @description: Only for US. Transaction Fee is a service fee charged for processing successful orders in TikTok Shop.Transaction Fee is a non-refundable fee, and is charged at 0.3USD plus a percentage of the customer paid price per transaction.(For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* Customer payment
   * @type: string
   **/
  ^^^transaction_fee_amount?: string;

  /**
   * @description: Only for US. The refferal fee is an amount charged for processing successful orders in TikTok Shop. (For orders placed before April 3, 2023, 0:00 AM UTC-04:00, New York Time)$0.3 + rate %* (Customer payment + Platform discount - (Customer order refund + Platform discount refund ))
   * @type: string
   **/
  ^^^referral_fee_amount?: string;

  /**
   * @description: The adjustment amount
   * @type: string
   **/
  ^^^adjustment_amount?: string;

  /**
   * @description: If the seller is responsible for the return, the return shipping fee will be charged.
   * @type: string
   **/
  ^^^actual_return_shipping_fee_amount?: string;

  /**
   * @description: retail_delivery_fee_amount = retail_delivery_fee_payment_amount+retail_delivery_fee_refund_amount
   * @type: string
   **/
  ^^^retail_delivery_fee_amount?: string;

  /**
   * @description: The retail delivery fee is collected and remitted by the TikTok Shop. It applies to all deliveries by motor vehicle to a location in Colorado with at least one item of tangible personal property that is subject to state sales or use tax.
   * @type: string
   **/
  ^^^retail_delivery_fee_payment_amount?: string;

  /**
   * @description: Subsidy paid by TikTok Shop for losses due to return or refund request rules or other issues
   * @type: string
   **/
  ^^^retail_delivery_fee_refund_amount?: string;

  /**
   * @description: The commission paid to a creator before any personal income tax withholding.
   * @type: string
   **/
  ^^^affiliate_commission_before_pit?: string;

  /**
   * @description: The creator's personal income tax withholding amount. Sellers are required to handle the filing and remittance of withheld taxes based on their region's tax regulations.
   * @type: string
   **/
  ^^^pit_amount?: string;

  /**
   * @description: Refunds or returns will incur a 20% refund administration fee deduction from the total refunded referral fee amount
   * @type: string
   **/
  ^^^refund_administration_fee_amount?: string;

  /**
   * @description: Full name is TikTok Shop shipping fee.The shipping fee incurred by the seller for using TikTok shipping. 
   * @type: string
   **/
  ^^^fbm_shipping_cost_amount?: string;

  /**
   * @description: Full name is Fulfilled by TikTok Shop (FBT) shipping fee.The shipping fee incurred by the seller for orders fulfilled by TikTok.
   * @type: string
   **/
  ^^^fbt_shipping_cost_amount?: string;

  /**
   * @description: Also named TikTok Shop shipping incentive.The shipping fee incentive provided by TikTok Shop.
   * @type: string
   **/
  ^^^shipping_cost_discount_amount?: string;

  /**
   * @description: Also named TikTok Shop shipping incentive refund.The shipping fee incentive amount deducted from the seller's account for refunded orders due to a seller fault.
   * @type: string
   **/
  ^^^refund_shipping_cost_discount_amount?: string;

  /**
   * @description: The fee incurred for packages requiring  signature confirmation services
   * @type: string
   **/
  ^^^signature_confirmation_fee_amount?: string;
}
