export const INVENTORY_SEARCH_URL_PATH = '/product/202309/inventory/search';,export const INVENTORY_SEARCH_METHOD = '1';


/**
 * 接口名称：Inventory Search
 * 接口标识：Inventory Search
 * 接口使用场景：Inventory Search
 **/
export interface InventorySearchRequestInterface {
  /**
   * @description: Product id list, with a length of up to 100.<br>You have to pass either sku_ids or product_ids.
   * @type: string[]
   **/
  product_ids?: string[];

  /**
   * @description: SKU ID list, with a length of up to 600. If both product IDs and SKU IDs exist, SKU IDs will be used. <br>You have to pass either sku_ids or product_ids.
   * @type: string[]
   **/
  sku_ids?: string[];
}


/**
 * 接口名称：Inventory Search
 * 接口标识：Inventory Search
 * 接口使用场景：Inventory Search
 **/
export interface InventorySearchRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Inventory Search
 * 接口标识：Inventory Search
 * 接口使用场景：Inventory Search
 **/
export interface InventorySearchResponseInterface {
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
export interface InventorySearchDataResponseInterface {
  /**
   * @description: Product stock list
   * @type: []object
   **/
  ^inventory?: []object;
}


/**
 * @description Product stock list
 **/
export interface InventorySearchDataInventoryResponseInterface {
  /**
   * @description: The ID of the product
   * @type: string
   **/
  ^^product_id?: string;

  /**
   * @description: SKU list of product
   * @type: []object
   **/
  ^^skus?: []object;
}


/**
 * @description SKU list of product
 **/
export interface InventorySearchDataInventorySkusResponseInterface {
  /**
   * @description: The ID of SKU(Stock Keeping Unit)
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Sku name
   * @type: string
   **/
  ^^^seller_sku?: string;

  /**
   * @description: total_available_quantity is the total available inventory at the SKU.<br>Total available inventory of SKU across all warehouses, including in shop inventory, campaign inventory, and creator inventory<br>total_available_quantity is the sum of all available inventory values under warehouse_inventory.
   * @type: int
   **/
  ^^^total_available_quantity?: int;

  /**
   * @description: Total inventory ordered by users but that has not yet left the warehouse.<br>total_committed_quantity is the sum of all committed inventory values under warehouse_inventory
   * @type: int
   **/
  ^^^total_committed_quantity?: int;

  /**
   * @description: Warehouse inventory information list of SKU
   * @type: []object
   **/
  ^^^warehouse_inventory?: []object;

  /**
   * @description: Distribution of total available inventory, detailed explanation of available inventory<br>
   * @type: object
   **/
  ^^^total_available_inventory_distribution?: object;
}


/**
 * @description Warehouse inventory information list of SKU
 **/
export interface InventorySearchDataInventorySkusWarehouseInventoryResponseInterface {
  /**
   * @description: Warehouse ID of SKU
   * @type: string
   **/
  ^^^^warehouse_id?: string;

  /**
   * @description: Salesable inventory in this warehouse, available inventory at the warehouse level for the product SKU.<br>available_quantity is equivalent to inventory.quantity under the product SKU
   * @type: int
   **/
  ^^^^available_quantity?: int;

  /**
   * @description: Inventory ordered by users but that has not yet left the warehouse
   * @type: int
   **/
  ^^^^committed_quantity?: int;
}


/**
 * @description Distribution of total available inventory, detailed explanation of available inventory<br>
 **/
export interface InventorySearchDataInventorySkusTotalAvailableInventoryDistributionResponseInterface {
  /**
   * @description: Campaign inventory list refers to inventory that is exclusive to a specific promotion.
   * @type: []object
   **/
  ^^^^campaign_inventory?: []object;

  /**
   * @description: TikTok Creator inventory list
   * @type: []object
   **/
  ^^^^creator_inventory?: []object;

  /**
   * @description: Available Inventory quantity without any channel, campaign or promotion
   * @type: object
   **/
  ^^^^in_shop_inventory?: object;
}


/**
 * @description Campaign inventory list refers to inventory that is exclusive to a specific promotion.
 **/
export interface InventorySearchDataInventorySkusTotalAvailableInventoryDistributionCampaignInventoryResponseInterface {
  /**
   * @description: The quantity reserved for the campaign
   * @type: int
   **/
  ^^^^^quantity?: int;

  /**
   * @description: Campaign name for inventory
   * @type: string
   **/
  ^^^^^campaign_name?: string;
}


/**
 * @description TikTok Creator inventory list
 **/
export interface InventorySearchDataInventorySkusTotalAvailableInventoryDistributionCreatorInventoryResponseInterface {
  /**
   * @description: The quantity reserved for the creator
   * @type: int
   **/
  ^^^^^quantity?: int;

  /**
   * @description: TikTok Creator name for inventory
   * @type: string
   **/
  ^^^^^creator_name?: string;
}


/**
 * @description Available Inventory quantity without any channel, campaign or promotion
 **/
export interface InventorySearchDataInventorySkusTotalAvailableInventoryDistributionInShopInventoryResponseInterface {
  /**
   * @description: The quantity for the in-shop inventory.
   * @type: int
   **/
  ^^^^^quantity?: int;
}
