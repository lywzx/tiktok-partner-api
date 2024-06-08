export const GET_GLOBAL_PRODUCT_URL_PATH = '/product/202309/global_products/{global_product_id}';,export const GET_GLOBAL_PRODUCT_METHOD = '2';


/**
 * 接口名称：Get Global Product
 * 接口标识：Get Global Product
 * 接口使用场景：Get Global Product
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalProductRequestInterface {

}


/**
 * 接口名称：Get Global Product
 * 接口标识：Get Global Product
 * 接口使用场景：Get Global Product
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetGlobalProductRequestInterface {

}


/**
 * 接口名称：Get Global Product
 * 接口标识：Get Global Product
 * 接口使用场景：Get Global Product
 **/
export interface GetGlobalProductResponseInterface {
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
export interface GetGlobalProductDataResponseInterface {
  /**
   * @description: The global product id entered by the sellers.
   * @type: string
   **/
  ^id?: string;

  /**
   * @description: The name of the global product.
   * @type: string
   **/
  ^title?: string;

  /**
   * @description: Main image of the product. Up to 9 images.
   * @type: []object
   **/
  ^main_images?: []object;

  /**
   * @description: Global product video information.
   * @type: object
   **/
  ^video?: object;

  /**
   * @description: The description of the product, complete with HTML formatting.
   * @type: string
   **/
  ^description?: string;

  /**
   * @description: The dimensions of the global product package 
   * @type: object
   **/
  ^package_dimensions?: object;

  /**
   * @description: The weight of the product package may affect the shipping cost and logistics accessibility.
   * @type: object
   **/
  ^package_weight?: object;

  /**
   * @description: Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "Get Global Category Rule" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. 
   * @type: []object
   **/
  ^certifications?: []object;
}


/**
 * @description Main image of the product. Up to 9 images.
 **/
export interface GetGlobalProductDataMainImagesResponseInterface {
  /**
   * @description: Global product main image ID.
   * @type: int
   **/
  ^^height?: int;

  /**
   * @description: Height of the image in pixels.
   * @type: int
   **/
  ^^width?: int;

  /**
   * @description: Width of the image in pixels.
   * @type: string
   **/
  ^^uri?: string;
}


/**
 * @description Global product video information.
 **/
export interface GetGlobalProductDataVideoResponseInterface {
  /**
   * @description: Unique ID for the product video.
   * @type: string
   **/
  ^^id?: string;
}


/**
 * @description The dimensions of the global product package 
 **/
export interface GetGlobalProductDataPackageDimensionsResponseInterface {
  /**
   * @description: The length of the package.
   * @type: string
   **/
  ^^length?: string;

  /**
   * @description: The width of the package.
   * @type: string
   **/
  ^^width?: string;

  /**
   * @description: The height of the package.
   * @type: string
   **/
  ^^height?: string;

  /**
   * @description: The unit for the dimensions of the product.
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description The weight of the product package may affect the shipping cost and logistics accessibility.
 **/
export interface GetGlobalProductDataPackageWeightResponseInterface {
  /**
   * @description: The weight of the product in the unit
   * @type: string
   **/
  ^^value?: string;

  /**
   * @description: The unit for the weight of the product.
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "Get Global Category Rule" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. 
 **/
export interface GetGlobalProductDataCertificationsResponseInterface {
  /**
   * @description: product certification id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The title of product certification.
   * @type: string
   **/
  ^^title?: string;

  /**
   * @description: The title of product certification.
   * @type: []object
   **/
  ^^files?: []object;

  /**
   * @description: product certification image information
   * @type: []object
   **/
  ^^images?: []object;

  /**
   * @description: product sku list. This list will be empty if the product has no sku.
   * @type: []object
   **/
  ^skus?: []object;
}


/**
 * @description The title of product certification.
 **/
export interface GetGlobalProductDataCertificationsFilesResponseInterface {
  /**
   * @description: Certification file id
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Certification file url list
   * @type: string[]
   **/
  ^^^urls?: string[];

  /**
   * @description: The name of the certification file
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: File format, currently only supports PDF
   * @type: string
   **/
  ^^^format?: string;
}


/**
 * @description product certification image information
 **/
export interface GetGlobalProductDataCertificationsImagesResponseInterface {
  /**
   * @description: Height of the product certification in pixels.
   * @type: int
   **/
  ^^^height?: int;

  /**
   * @description: Width of the product certification in pixels.
   * @type: int
   **/
  ^^^width?: int;

  /**
   * @description: Certification image URI
   * @type: string
   **/
  ^^^uri?: string;
}


/**
 * @description product sku list. This list will be empty if the product has no sku.
 **/
export interface GetGlobalProductDataCertificationsSkusResponseInterface {
  /**
   * @description: Specify product global SKU  ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The name of SKU(Stock Keeping Unit)
   * @type: string
   **/
  ^^seller_sku?: string;

  /**
   * @description: This price is for the SKU of a global product. When a global product is published to local stores in various countries, its global product price is converted into the local store price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
   * @type: object
   **/
  ^^price?: object;

  /**
   * @description: The total inventory quantity of the global SKU.
   * @type: int
   **/
  ^^global_quantity?: int;

  /**
   * @description: If the SKU has a unique identifier code, it can be filled in here.
   * @type: object
   **/
  ^^identifier_code?: object;

  /**
   * @description: What are the sales attributes of Tiktok Shop?<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br><br>If the product doesn't have a SKU, this object will be empty.
   * @type: []object
   **/
  ^^sales_attributes?: []object;

  /**
   * @description: The time when the product status is updated.<br>Unix timestamp GMT (UTC+00:00). This timestamp is used across all API requests. Developers can use this convert to local time.
   * @type: int
   **/
  ^update_time?: int;

  /**
   * @description: The time when the product is created.<br>Unix timestamp GMT (UTC+00:00). This timestamp is used across all API requests. Developers can use this convert to local time.
   * @type: int
   **/
  ^create_time?: int;

  /**
   * @description: What are the product attributes of Tiktok Shop?<br>Product attributes are the characteristics or properties of a product that can help buyers make informed purchasing decisions. Product attributes describe the attributes or functionalities of a product, enabling buyers to understand potential safety risks associated with specific product features and usage.<br><br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Global Attributes" API.
   * @type: []object
   **/
  ^product_attributes?: []object;
}


/**
 * @description This price is for the SKU of a global product. When a global product is published to local stores in various countries, its global product price is converted into the local store price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
 **/
export interface GetGlobalProductDataCertificationsSkusPriceResponseInterface {
  /**
   * @description: Price of the Global SKU
   * @type: string
   **/
  ^^^amount?: string;

  /**
   * @description: This price currency of the SKU for the global product.
   * @type: string
   **/
  ^^^currency?: string;

  /**
   * @description: The unit price calculated for the sku, formula: sale price/(sku unit count/base unit count)
   * @type: string
   **/
  ^^^unit_price?: string;
}


/**
 * @description If the SKU has a unique identifier code, it can be filled in here.
 **/
export interface GetGlobalProductDataCertificationsSkusIdentifierCodeResponseInterface {
  /**
   * @description: SKU identifier code
   * @type: string
   **/
  ^^^code?: string;

  /**
   * @description: identifier code type value: GTIN、EAN、UPC、ISBN
   * @type: string
   **/
  ^^^type?: string;
}


/**
 * @description What are the sales attributes of Tiktok Shop?<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br><br>If the product doesn't have a SKU, this object will be empty.
 **/
export interface GetGlobalProductDataCertificationsSkusSalesAttributesResponseInterface {
  /**
   * @description: sales attribute id
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: sales attribute name
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: sales attribute value id
   * @type: string
   **/
  ^^^value_id?: string;

  /**
   * @description: sales attribute value name
   * @type: string
   **/
  ^^^value_name?: string;

  /**
   * @description: SKU images
   * @type: object
   **/
  ^^^sku_img?: object;

  /**
   * @description: A product's inventory is the quantity of a particular product that is available for sale, including quantity of all variants
   * @type: []object
   **/
  ^^inventory?: []object;

  /**
   * @description: The number of unit count of the SKU. The range is from 0.01 - 99999.99
   * @type: string
   **/
  ^^sku_unit_count?: string;
}


/**
 * @description SKU images
 **/
export interface GetGlobalProductDataCertificationsSkusSalesAttributesSkuImgResponseInterface {
  /**
   * @description: Height of the SKU image in pixels.
   * @type: int
   **/
  ^^^^height?: int;

  /**
   * @description: Width of the SKU image in pixels.
   * @type: int
   **/
  ^^^^width?: int;

  /**
   * @description: Links, or URLs, for the SKU image thumbnail.<br>
   * @type: string[]
   **/
  ^^^^thumb_urls?: string[];

  /**
   * @description: SKU image URI
   * @type: string
   **/
  ^^^^uri?: string;

  /**
   * @description: The Image URLs, which can be used to access the image.<br>
   * @type: string[]
   **/
  ^^^^urls?: string[];
}


/**
 * @description A product's inventory is the quantity of a particular product that is available for sale, including quantity of all variants
 **/
export interface GetGlobalProductDataCertificationsSkusSalesAttributesInventoryResponseInterface {
  /**
   * @description: Global warehouse ID. You can obtain global entity warehouses through the interface "Get Gloabal Warehouse List", <br>Specifying a global warehouse is only required in multi-warehouse scenarios.
   * @type: string
   **/
  ^^^global_warehouse_id?: string;

  /**
   * @description: The inventory quantity of the global SKU.
   * @type: int
   **/
  ^^^quantity?: int;
}


/**
 * @description What are the product attributes of Tiktok Shop?<br>Product attributes are the characteristics or properties of a product that can help buyers make informed purchasing decisions. Product attributes describe the attributes or functionalities of a product, enabling buyers to understand potential safety risks associated with specific product features and usage.<br><br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Global Attributes" API.
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesResponseInterface {
  /**
   * @description: Specify product attribute ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The product attribute name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The product attribute values.
   * @type: []object
   **/
  ^^values?: []object;

  /**
   * @description: What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br>How to use It？<br>- Whether the size chart is required and related to the category, and you can obtain relevant information through the "Get Global Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
   * @type: object
   **/
  ^size_chart?: object;
}


/**
 * @description The product attribute values.
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesValuesResponseInterface {
  /**
   * @description: Specify product attributes value ID.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: The product attributes value name.
   * @type: string
   **/
  ^^^name?: string;
}


/**
 * @description What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br>How to use It？<br>- Whether the size chart is required and related to the category, and you can obtain relevant information through the "Get Global Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartResponseInterface {
  /**
   * @description: The image of size chart
   * @type: object
   **/
  ^^image?: object;

  /**
   * @description: The size chart template generated by the size chart tool. 
   * @type: object
   **/
  ^^template?: object;

  /**
   * @description: Published product for the corresponding market.<br>A global product can be published in multiple countries. The product in each country is called a published product in that specific country
   * @type: []object
   **/
  ^products?: []object;

  /**
   * @description: The seller of global product
   * @type: string
   **/
  ^global_seller_id?: string;

  /**
   * @description: The brand information corresponding to the global product.
   * @type: object
   **/
  ^brand?: object;

  /**
   * @description: The category of the global product
   * @type: object
   **/
  ^category?: object;

  /**
   * @description: Return the manufacturer information of the product
   * @type: object
   **/
  ^manufacturer?: object;
}


/**
 * @description The image of size chart
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartImageResponseInterface {
  /**
   * @description: Height of the size chart in pixels.
   * @type: int
   **/
  ^^^height?: int;

  /**
   * @description: Width of the size chart in pixels.
   * @type: int
   **/
  ^^^width?: int;

  /**
   * @description: size chart image URI
   * @type: string
   **/
  ^^^uri?: string;
}


/**
 * @description The size chart template generated by the size chart tool. 
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartTemplateResponseInterface {
  /**
   * @description: Size chart template ID
   * @type: string
   **/
  ^^^id?: string;
}


/**
 * @description Published product for the corresponding market.<br>A global product can be published in multiple countries. The product in each country is called a published product in that specific country
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartProductsResponseInterface {
  /**
   * @description: The region published by the global product
   * @type: string
   **/
  ^^region?: string;

  /**
   * @description: Product ID for the corresponding market.
   * @type: string
   **/
  ^^id?: string;
}


/**
 * @description The brand information corresponding to the global product.
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartBrandResponseInterface {
  /**
   * @description: The brand id.
   * @type: string
   **/
  ^^id?: string;
}


/**
 * @description The category of the global product
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartCategoryResponseInterface {
  /**
   * @description: The category id.
   * @type: string
   **/
  ^^id?: string;
}


/**
 * @description Return the manufacturer information of the product
 **/
export interface GetGlobalProductDataCertificationsSkusProductAttributesSizeChartManufacturerResponseInterface {
  /**
   * @description: The name of the manufacturer. <br>- Must be filled with address, phone number and email to be valid
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The address of the manufacturer. <br>- Must be filled with name, phone number and email to be valid
   * @type: string
   **/
  ^^address?: string;

  /**
   * @description: The phone number of the manufacturer. <br>- Must start with "+" <br>- Must be a valid country code<br>- Must have a " " or "-" between the country code and the local phone number<br>- Must have a valid local phone number<br>- Must be filled with name, address and email to be valid
   * @type: string
   **/
  ^^phone_number?: string;

  /**
   * @description: The email address of the manufacturer. <br>- Must be a valid email address<br>- Must be filled with name, address and phone number to be valid
   * @type: string
   **/
  ^^email?: string;
}
