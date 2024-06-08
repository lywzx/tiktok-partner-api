export const PUBLISH_GLOBAL_PRODUCT_URL_PATH = '/product/202309/global_products/{global_product_id}/publish';,export const PUBLISH_GLOBAL_PRODUCT_METHOD = '1';


/**
 * 接口名称：Publish Global Product
 * 接口标识：Publish Global Product
 * 接口使用场景：Publish Global Product
 **/
export interface PublishGlobalProductRequestInterface {
  /**
   * @description: Target markets for publishing global products<br>
   * @type: []object
   **/
  publish_target: []object;
}


/**
 * @description Target markets for publishing global products<br>
 **/
export interface PublishGlobalProductPublishTargetRequestInterface {
  /**
   * @description: select the target market for publishing, only support cross-border business，Supported regions include:<br>"GB" United Kingdom,<br>"ID" Indonesia,<br>"MY" Malaysia,<br>"TH" Thailand,<br>"PH" Philippines,<br>"VN" Vietnam,<br>"SG" Singapore,<br>"US" United States,<br>"DE" - Germany<br>"ES" - Spain<br>"FR" - France<br>"IE" - Ireland<br>"IT" - Italy<br><br>Notice：<br>The published regions cannot be published again. If you want to change the information of the product, you can edit it through the Edit Global Product API. The changes made to the published product will be automatically synchronized to the corresponding markets.
   * @type: string
   **/
  ^region: string;

  /**
   * @description: The SKU information that needs to be listed, after successful listing on the corresponding market, a product SKU will be created and associated with the Global SKU. <br>- If the price is not provided, it will be calculated based on the price of the Global SKU. <br>- If the inventory value is not provided, the global inventory will be evenly distributed.<br>Prerequisites:<br>All Global SKU IDs need to be provided.
   * @type: []object
   **/
  ^skus: []object;
}


/**
 * @description The SKU information that needs to be listed, after successful listing on the corresponding market, a product SKU will be created and associated with the Global SKU. <br>- If the price is not provided, it will be calculated based on the price of the Global SKU. <br>- If the inventory value is not provided, the global inventory will be evenly distributed.<br>Prerequisites:<br>All Global SKU IDs need to be provided.
 **/
export interface PublishGlobalProductPublishTargetSkusRequestInterface {
  /**
   * @description: The Global SKU ID that needs to be published. After listing on the corresponding market, a product SKU will be created and associated with it.
   * @type: string
   **/
  ^^related_global_sku_id: string;

  /**
   * @description: The pre-tax price of the SKU. If the pre-tax price for the corresponding market shop's SKU is not set, it will be calculated based on the Global SKU price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
   * @type: object
   **/
  ^^price?: object;

  /**
   * @description: This is inventory information for SKU, including warehouse and corresponding inventory quantity.<br>Filling rules<br>- If you are a seller with permission of multiple warehouses, inventory is an optional parameter.<br>- If you are not a seller with permission of multiple warehouses, inventory is a required parameter.
   * @type: object
   **/
  ^^inventory?: object;
}


/**
 * @description The pre-tax price of the SKU. If the pre-tax price for the corresponding market shop's SKU is not set, it will be calculated based on the Global SKU price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
 **/
export interface PublishGlobalProductPublishTargetSkusPriceRequestInterface {
  /**
   * @description: The price restrictions vary in different regions and different types of businesses.<br>a) For UK, the minimum price is 0.01GBP and the maximum price is 134.5 GBP.<br>b) For TH, the minimum price is 0.01THB and the maximum price is 260000THB.<br>c) For MY, the minimum price is 0.01 MRY and the maximum price is 320000 MYR.<br>d) For VH , the minimum price is 1 VND and the maximum price is 1000000 VND.<br>e) For PH, the minimum price is 0.01PHP and the maximum price is 400000PHP.<br>f)For SG, the minimum price is 0.01SGD and maximum price is 400SGD.
   * @type: string
   **/
  ^^^amount: string;

  /**
   * @description: Currencies are different in different regions. The seller can choose to use the local currency or US dollar，The mapping relationship between region and currency is as follows:<br>US: USD<br>GB: GBP<br>TH: THB<br>MY: MYR<br>PH: PHP<br>VN: VND<br>SG: SGD<br>DE :Euro (EUR)<br>ES :Euro (EUR)<br>FR :Euro (EUR)<br>IE : Euro (EUR)<br>IT :Euro (EUR)
   * @type: string
   **/
  ^^^currency: string;
}


/**
 * @description This is inventory information for SKU, including warehouse and corresponding inventory quantity.<br>Filling rules<br>- If you are a seller with permission of multiple warehouses, inventory is an optional parameter.<br>- If you are not a seller with permission of multiple warehouses, inventory is a required parameter.
 **/
export interface PublishGlobalProductPublishTargetSkusInventoryRequestInterface {
  /**
   * @description: You can obtain all available warehouses through the interface "Get Warehouse List" API.<br>The warehouse field is an optional parameter. If this field is not provided, the default warehouse ID will be filled in.<br>Filling rules<br>- If you are a seller with permission of multiple warehouses, the associated warehouse ID will be populated with the Global warehouse ID. <br>- If you are not a seller with permission of multiple warehouses, it will populate the available warehouses (cross-border overseas warehouses take priority over cross-border direct warehouses).
   * @type: string
   **/
  ^^^warehouse_id?: string;

  /**
   * @description: Set the inventory value for the corresponding market shop's SKU.<br>Publication Rules<br>- During the publication, you can specify the inventory allocation for each shop. If not specified, the global SKU inventory will be evenly distributed among the shops. If there is a surplus in allocation, the inventory value will be accumulated to the last published product SKU<br>- If the shop SKU inventory is greater than the global SKU inventory, the global SKU inventory will be updated to the sum of the inventory of all market shop SKUs.<br>- The quantity value of stock must be a non-negative number, and the upper limit of inventory value set at one time is 99999.
   * @type: int
   **/
  ^^^quantity?: int;
}


/**
 * 接口名称：Publish Global Product
 * 接口标识：Publish Global Product
 * 接口使用场景：Publish Global Product
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PublishGlobalProductRequestInterface {

}


/**
 * 接口名称：Publish Global Product
 * 接口标识：Publish Global Product
 * 接口使用场景：Publish Global Product
 **/
export interface PublishGlobalProductResponseInterface {
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
export interface PublishGlobalProductDataResponseInterface {
  /**
   * @description: The related information is returned when publishing to a specific market.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description The related information is returned when publishing to a specific market.
 **/
export interface PublishGlobalProductDataProductsResponseInterface {
  /**
   * @description: Publish to the corresponding market.
   * @type: string
   **/
  ^^region?: string;

  /**
   * @description: Shop ID for publishing to the corresponding market.
   * @type: string
   **/
  ^^shop_id?: string;

  /**
   * @description: Product SKUs generated from listing global products
   * @type: []object
   **/
  ^^skus?: []object;

  /**
   * @description: Result for publishing to the corresponding market.
   * @type: []object
   **/
  ^publish_result?: []object;
}


/**
 * @description Product SKUs generated from listing global products
 **/
export interface PublishGlobalProductDataProductsSkusResponseInterface {
  /**
   * @description: Related global SKU id
   * @type: string
   **/
  ^^^related_global_sku_id?: string;

  /**
   * @description: Product SKU ID generated from listing global products
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: SKU name
   * @type: string
   **/
  ^^^seller_sku?: string;

  /**
   * @description: Sales attributes and attribute values corresponding to SKU.
   * @type: []object
   **/
  ^^^sale_attributes?: []object;

  /**
   * @description: Product ID for publishing to the corresponding market.
   * @type: string
   **/
  ^^id?: string;
}


/**
 * @description Sales attributes and attribute values corresponding to SKU.
 **/
export interface PublishGlobalProductDataProductsSkusSaleAttributesResponseInterface {
  /**
   * @description: The sales attribute ID corresponding to the sales attribute ID of the Global SKU.
   * @type: string
   **/
  ^^^^id?: string;

  /**
   * @description: The sales attribute value ID corresponding to the sales attribute value ID of the Global SKU.
   * @type: string
   **/
  ^^^^value_id?: string;
}


/**
 * @description Result for publishing to the corresponding market.
 **/
export interface PublishGlobalProductDataProductsPublishResultResponseInterface {
  /**
   * @description: Publish to the corresponding market.
   * @type: string
   **/
  ^^region?: string;

  /**
   * @description: Publish to the corresponding status.<br>The status includes:<br>SUCCESS: Successful synchronization of global products to the shop, listing a product and submitting it for review.<br>DRAFT: Synchronization of global products to the shop with validation errors, saving it as a draft product.<br>FAILED: Failed synchronization of global products to the shop.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: The list of errors that occurred from executing the mutation.
   * @type: []object
   **/
  ^^fail_reasons?: []object;
}


/**
 * @description The list of errors that occurred from executing the mutation.
 **/
export interface PublishGlobalProductDataProductsPublishResultFailReasonsResponseInterface {
  /**
   * @description: Failed status message
   * @type: string
   **/
  ^^^message?: string;
}
