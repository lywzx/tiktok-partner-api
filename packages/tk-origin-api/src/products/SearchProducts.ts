export const SEARCH_PRODUCTS_URL_PATH = '/product/202312/products/search';,export const SEARCH_PRODUCTS_METHOD = '1';


/**
 * 接口名称：Search Products
 * 接口标识：Search Products
 * 接口使用场景：Search Products
 **/
export interface SearchProductsRequestInterface {
  /**
   * @description: Product status, used as a filtering criterion for product search. including <br>ALL, DRAFT, PENDING, FAILED, ACTIVATE, SELLER_DEACTIVATED, PLATFORM_DEACTIVATED, FREEZE, DELETED
   * @type: string
   **/
  status?: string;

  /**
   * @description: Seller SKUs, a filtering condition used for product search. This field allows you to search for all products that contain these Seller SKUs.
   * @type: string[]
   **/
  seller_skus?: string[];

  /**
   * @description: The fields "create_time_ge" and "create_time_le" together constitute the filter condition for the creation time of the product. If you only fill in the "create_time_le", and the "create_time_ge" is empty , then we will set the earliest time of the shop to the field "create_time_ge" by default. If you only fill in the "create_time_ge", and the "create_time_le" is empty , then we will set the current time to the field "create_time_le" by default.<br><br>The time search condition uses Unix timestamp in GMT (UTC+00:00). 
   * @type: int
   **/
  create_time_ge?: int;

  /**
   * @description: Refer to the description of "create_time_ge".<br>
   * @type: int
   **/
  create_time_le?: int;

  /**
   * @description: The fields "update_time_ge" and "update_time_le" together constitute the filter condition for the update time of the product. If you only fill in the "update_time_le", and the "update_time_ge" is empty , then we will set the earliest time of the shop to the field "update_time_ge" by default. If you only fill in the "update_time_ge", and the "update_time_le" is empty , then we will set the current time to the field "update_time_le" by default.
   * @type: int
   **/
  update_time_ge?: int;

  /**
   * @description: Refer to the description of "update_time_ge".
   * @type: int
   **/
  update_time_le?: int;
}


/**
 * 接口名称：Search Products
 * 接口标识：Search Products
 * 接口使用场景：Search Products
 **/
export interface SearchProductsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: "page_size" represents the return list pagination, the number of brands products per page. Each page can retrieve up to 100 product records.
   * @type: int
   **/
  page_size: int;

  /**
   * @description: The pagination token is a cursor used for pagination. It is not needed for the first page. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  page_token?: string;
}


/**
 * 接口名称：Search Products
 * 接口标识：Search Products
 * 接口使用场景：Search Products
 **/
export interface SearchProductsResponseInterface {
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
export interface SearchProductsDataResponseInterface {
  /**
   * @description: The total number of products searched.
   * @type: int
   **/
  ^total_count?: int;

  /**
   * @description: The searched product list.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description The searched product list.
 **/
export interface SearchProductsDataProductsResponseInterface {
  /**
   * @description: The product ID.<br>
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The product name.
   * @type: string
   **/
  ^^title?: string;

  /**
   * @description: The status of the product, including DRAFT, PENDING, FAILED, ACTIVATE, SELLER_DEACTIVATED, PLATFORM_DEACTIVATED, FREEZE, DELETED.
   * @type: string
   **/
  ^^status?: string;

  /**
   * @description: Product SKU information.
   * @type: []object
   **/
  ^^skus?: []object;

  /**
   * @description: The pagination token is a cursor used for pagination. The token is returned in the previous pagination query to determine the current position. 
   * @type: string
   **/
  ^next_page_token?: string;
}


/**
 * @description Product SKU information.
 **/
export interface SearchProductsDataProductsSkusResponseInterface {
  /**
   * @description: The SKU ID.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: The seller SKU entered when creating or editing the product.
   * @type: string
   **/
  ^^^seller_sku?: string;

  /**
   * @description: The SKU price information.
   * @type: object
   **/
  ^^^price?: object;

  /**
   * @description: This is inventory information for SKU, including warehouse and corresponding inventory quantity.
   * @type: []object
   **/
  ^^^inventory?: []object;

  /**
   * @description: The current sales regions of the product.<br>Supported regions include:<br>"GB" United Kingdom,<br>"ID" Indonesia,<br>"MY" Malaysia,<br>"TH" Thailand,<br>"PH" Philippines,<br>"VN" Vietnam,<br>"SG" Singapore,<br>"US" United States
   * @type: string[]
   **/
  ^^sales_regions?: string[];

  /**
   * @description: The latest update time of the product. (unit is second)
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: The latest update time of the product. (unit is second)
   * @type: int
   **/
  ^^update_time?: int;

  /**
   * @description: The reasons for the failure of synchronizing global product information to local products by merchants. Cross-border sellers need to pay attention to this field, while Local-to-Local sellers ignore this field.
   * @type: string[]
   **/
  ^^product_sync_fail_reasons?: string[];

  /**
   * @description: True：The product is not for sale.<br>False: The product is a normally sold product.
   * @type: bool
   **/
  ^^is_not_for_sale?: bool;
}


/**
 * @description The SKU price information.
 **/
export interface SearchProductsDataProductsSkusPriceResponseInterface {
  /**
   * @description: Currencies are different in different regions. The mapping relationship between region and currency is as follows:<br>US: USD<br>GB: GBP<br>ID: IDR<br>TH: THB<br>MY: MYR<br>PH: PHP<br>VN: VND<br>SG: SGD
   * @type: string
   **/
  ^^^^currency?: string;

  /**
   * @description: The price of the product, before tax, the tax_exclusive_price entered for product listing.
   * @type: string
   **/
  ^^^^tax_exclusive_price?: string;

  /**
   * @description: The actual price the customers pay for the product.In the context of cross-border scenarios, the price includes tax. 
   * @type: string
   **/
  ^^^^sale_price?: string;
}


/**
 * @description This is inventory information for SKU, including warehouse and corresponding inventory quantity.
 **/
export interface SearchProductsDataProductsSkusInventoryResponseInterface {
  /**
   * @description: The SKU warehouse ID.
   * @type: string
   **/
  ^^^^warehouse_id?: string;

  /**
   * @description: The available stock quantity of the SKU in this warehouse.
   * @type: int
   **/
  ^^^^quantity?: int;
}
