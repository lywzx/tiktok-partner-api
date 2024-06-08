export const UPDATE_PRICE_URL_PATH = '/product/202309/products/{product_id}/prices/update';,export const UPDATE_PRICE_METHOD = '1';


/**
 * 接口名称：Update Price
 * 接口标识：Update Price
 * 接口使用场景：Update Price
 **/
export interface UpdatePriceRequestInterface {
  /**
   * @description: Support updating the prices of multiple SKUs for the same product by providing a list of SKUs to update the corresponding prices.nnParameter Rules:nThe SKU prices can be updated only by this SKU in live status. Or you can not be successful
   * @type: []object
   **/
  skus: []object;
}


/**
 * @description Support updating the prices of multiple SKUs for the same product by providing a list of SKUs to update the corresponding prices.nnParameter Rules:nThe SKU prices can be updated only by this SKU in live status. Or you can not be successful
 **/
export interface UpdatePriceSkusRequestInterface {
  /**
   * @description: The SKU needs price updates.
   * @type: string
   **/
  ^id: string;

  /**
   * @description: The SKU price information.
   * @type: object
   **/
  ^price: object;
}


/**
 * @description The SKU price information.
 **/
export interface UpdatePriceSkusPriceRequestInterface {
  /**
   * @description: The price restrictions vary in different regions and different types of businesses.ni) localn  a) For ID, the minimum price is 100 and the maximum price is 100 million. Please note that products with a discounted price of less than 2000 IDR may lead to a negative balance.nb) For UK, the minimum price is 0.01GBP and the maximum price is 5600 GBP.nc) For TH, the minimum price is 30TNB and the maximum price is 260000TNB .nd) For MY, the minimum price is 0.01 MRY and the maximum price is 320000 MYR.ne) For VN, the minimum price is 1 VND and the maximum price is 180000000 VND.nf) For PH local to local, the minimum price is 0.01PHP and the maximum price is 400000PHP.ng) For SG, the minimum price is 0.01SGD and the maximum price is 10000SGP.n  h) For US, the minimum price is 0.01USD and the maximum price is 7600USD.nii) cross bordern  a) For UK, the minimum price is 0.01GBP and the maximum price is 134.5 GBP.n  b) For TH, the minimum price is 0.01THB and the maximum price is 260000THB.nc) For MY, the minimum price is 0.01 MRY and the maximum price is 320000 MYR.nd) For VH , the minimum price is 1 VND and the maximum price is 1000000 VND.ne) For PH, the minimum price is 0.01PHP and the maximum price is 400000PHP.n  f)For SG, the minimum price is 0.01SGD and maximum price is 400SGD.
   * @type: string
   **/
  ^^amount: string;

  /**
   * @description: Currencies are different in different regions. The mapping relationship between region and currency is as follows:nUS: USDnGB: GBPnID: IDRnTH: THBnMY: MYRnPH: PHPnVN: VNDnSG: SGD
   * @type: string
   **/
  ^^currency: string;
}


/**
 * 接口名称：Update Price
 * 接口标识：Update Price
 * 接口使用场景：Update Price
 **/
export interface UpdatePriceRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Update Price
 * 接口标识：Update Price
 * 接口使用场景：Update Price
 **/
export interface UpdatePriceResponseInterface {
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
