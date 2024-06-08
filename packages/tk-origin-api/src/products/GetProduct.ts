export const GET_PRODUCT_URL_PATH = '/product/202309/products/{product_id}';,export const GET_PRODUCT_METHOD = '2';


/**
 * 接口名称：Get Product
 * 接口标识：Get Product
 * 接口使用场景：Get Product
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetProductRequestInterface {

}


/**
 * 接口名称：Get Product
 * 接口标识：Get Product
 * 接口使用场景：Get Product
 **/
export interface GetProductRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: The "return_under_review_version" parameter can be used to retrieve the snapshot information of products that are under review. <br>- If the "return_under_review_version" param is set to false, it will retrieve the snapshot information of products that have already been approved and are in the "activated" state.<br>- If the "return_under_review_version" param is set to true, it will retrieve the snapshot information of products that have already been approved but are still under review. <br>- If no value is provided for the "return_under_review_version" param, it will default to false.
   * @type: bool
   **/
  return_under_review_version?: bool;
}


/**
 * 接口名称：Get Product
 * 接口标识：Get Product
 * 接口使用场景：Get Product
 **/
export interface GetProductResponseInterface {
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
export interface GetProductDataResponseInterface {
  /**
   * @description: The unique ID of the product.
   * @type: string
   **/
  ^id?: string;

  /**
   * @description: The status of the target product, including ALL, DRAFT, PENDING, FAILED, ACTIVATE, SELLER_DEACTIVATED, PLATFORM_DEACTIVATED, FREEZE, DELETED.
   * @type: string
   **/
  ^status?: string;

  /**
   * @description: The name of the product.
   * @type: string
   **/
  ^title?: string;

  /**
   * @description: The category chain information corresponding to the product. Return the complete category structure corresponding to this product.
   * @type: []object
   **/
  ^category_chains?: []object;

  /**
   * @description: The brand information corresponding to the product.
   * @type: object
   **/
  ^brand?: object;

  /**
   * @description: Main image of the product. Up to 9 images.
   * @type: []object
   **/
  ^main_images?: []object;

  /**
   * @description: Product video information.
   * @type: object
   **/
  ^video?: object;

  /**
   * @description: The description of the product, complete with HTML formatting.
   * @type: string
   **/
  ^description?: string;

  /**
   * @description: The dimensions of the product package 
   * @type: object
   **/
  ^package_dimensions?: object;

  /**
   * @description: The weight of the product package may affect the shipping cost and logistics accessibility. Currently, only "CENTIMETER"-"KILOGRAM" and "INCH"-"POUND" are supported.
   * @type: object
   **/
  ^package_weight?: object;

  /**
   * @description: product sku list. This list will be empty if the product has no sku.
   * @type: []object
   **/
  ^skus?: []object;
}


/**
 * @description The category chain information corresponding to the product. Return the complete category structure corresponding to this product.
 **/
export interface GetProductDataCategoryChainsResponseInterface {
  /**
   * @description: The category id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The parent category id, and the parent category ID of the first-level category is "0".
   * @type: string
   **/
  ^^parent_id?: string;

  /**
   * @description: The name of the category in the country where the shop operates.
   * @type: string
   **/
  ^^local_name?: string;

  /**
   * @description: Indicate whether the category is a leaf category. Creating and editing products is only supported using leaf categories.
   * @type: bool
   **/
  ^^is_leaf?: bool;
}


/**
 * @description The brand information corresponding to the product.
 **/
export interface GetProductDataBrandResponseInterface {
  /**
   * @description: The brand id.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The brand name.
   * @type: string
   **/
  ^^name?: string;
}


/**
 * @description Main image of the product. Up to 9 images.
 **/
export interface GetProductDataMainImagesResponseInterface {
  /**
   * @description: Height of the image in pixels.
   * @type: int
   **/
  ^^height?: int;

  /**
   * @description: Width of the image in pixels.
   * @type: int
   **/
  ^^width?: int;

  /**
   * @description: The Image thumbnail URLs, through which the image thumbnail can be accessed.
   * @type: string[]
   **/
  ^^thumb_urls?: string[];

  /**
   * @description: Product main image ID.
   * @type: string
   **/
  ^^uri?: string;

  /**
   * @description: Links, or URLs, for the image, which can be used to access the image.
   * @type: string[]
   **/
  ^^urls?: string[];
}


/**
 * @description Product video information.
 **/
export interface GetProductDataVideoResponseInterface {
  /**
   * @description: video ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Link, or URL, for the video poster image
   * @type: string
   **/
  ^^cover_url?: string;

  /**
   * @description: video format type, currently only supports MP4 format.
   * @type: string
   **/
  ^^format?: string;

  /**
   * @description: Link, or URL, for the video playback.
   * @type: string
   **/
  ^^url?: string;

  /**
   * @description: Width of the video in pixels.
   * @type: int
   **/
  ^^width?: int;

  /**
   * @description: Height of the video in pixels.
   * @type: int
   **/
  ^^height?: int;

  /**
   * @description: The video source's size.
   * @type: int
   **/
  ^^size?: int;
}


/**
 * @description The dimensions of the product package 
 **/
export interface GetProductDataPackageDimensionsResponseInterface {
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
   * @description: The current system supports units including "CENTIMETER" and "INCH". 
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description The weight of the product package may affect the shipping cost and logistics accessibility. Currently, only "CENTIMETER"-"KILOGRAM" and "INCH"-"POUND" are supported.
 **/
export interface GetProductDataPackageWeightResponseInterface {
  /**
   * @description: The weight of the product in the unit specified by weight unit
   * @type: string
   **/
  ^^value?: string;

  /**
   * @description: The current system supports units including "KILOGRAM" and "POUND". 
   * @type: string
   **/
  ^^unit?: string;
}


/**
 * @description product sku list. This list will be empty if the product has no sku.
 **/
export interface GetProductDataSkusResponseInterface {
  /**
   * @description: Specify product SKU  ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The name of SKU(Stock Keeping Unit)
   * @type: string
   **/
  ^^seller_sku?: string;

  /**
   * @description: The price of the SKU in currency.
   * @type: object
   **/
  ^^price?: object;

  /**
   * @description: This is inventory information for SKU, including warehouse and corresponding inventory quantity.
   * @type: []object
   **/
  ^^inventory?: []object;

  /**
   * @description: If the SKU has a unique identifier code, it can be filled in here.
   * @type: object
   **/
  ^^identifier_code?: object;

  /**
   * @description: Sale attributes. If the product doesn't have SKU, this object will be empty.
   * @type: []object
   **/
  ^^sales_attributes?: []object;
}


/**
 * @description The price of the SKU in currency.
 **/
export interface GetProductDataSkusPriceResponseInterface {
  /**
   * @description: The price of the product, before tax.
   * @type: string
   **/
  ^^^tax_exclusive_price?: string;

  /**
   * @description: The actual price the customers pay for the product.In the context of cross-border scenarios, the price including tax. 
   * @type: string
   **/
  ^^^sale_price?: string;

  /**
   * @description: Currencies are different in different regions. The mapping relationship between region and currency is as follows:<br>US: USD<br>GB: GBP<br>ID: IDR<br>TH: THB<br>MY: MYR<br>PH: PHP<br>VN: VND<br>SG: SGD
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
 * @description This is inventory information for SKU, including warehouse and corresponding inventory quantity.
 **/
export interface GetProductDataSkusInventoryResponseInterface {
  /**
   * @description: The SKU warehouse ID.
   * @type: string
   **/
  ^^^warehouse_id?: string;

  /**
   * @description: The available stock quantity of the SKU in this warehouse.
   * @type: int
   **/
  ^^^quantity?: int;
}


/**
 * @description If the SKU has a unique identifier code, it can be filled in here.
 **/
export interface GetProductDataSkusIdentifierCodeResponseInterface {
  /**
   * @description: SKU identifier code
   * @type: string
   **/
  ^^^code?: string;

  /**
   * @description: identifier code type value: GTIN、EAN、UPC、ISBN<br>
   * @type: string
   **/
  ^^^type?: string;
}


/**
 * @description Sale attributes. If the product doesn't have SKU, this object will be empty.
 **/
export interface GetProductDataSkusSalesAttributesResponseInterface {
  /**
   * @description: sale attribute id
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: sale attribute name
   * @type: string
   **/
  ^^^name?: string;

  /**
   * @description: sale attribute value id
   * @type: string
   **/
  ^^^value_id?: string;

  /**
   * @description: sale attribute value name
   * @type: string
   **/
  ^^^value_name?: string;

  /**
   * @description: SKU images
   * @type: object
   **/
  ^^^sku_img?: object;

  /**
   * @description: The external_sku_id is the product identifier for the external system. It is used to associate it with the product.
   * @type: string
   **/
  ^^external_sku_id?: string;

  /**
   * @description: For a combined listing SKU, an array of related product SKUs that compose the combined listing SKU.
   * @type: []object
   **/
  ^^combined_skus?: []object;

  /**
   * @description: If the product is a target product for GPR synchronization, return synchronization relationship information.<br>
   * @type: object
   **/
  ^^global_listing_policy?: object;

  /**
   * @description: product certification information
   * @type: []object
   **/
  ^certifications?: []object;
}


/**
 * @description SKU images
 **/
export interface GetProductDataSkusSalesAttributesSkuImgResponseInterface {
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
   * @description: Links, or URLs, for the SKU image thumbnail.
   * @type: string[]
   **/
  ^^^^thumb_urls?: string[];

  /**
   * @description: SKU image uri
   * @type: string
   **/
  ^^^^uri?: string;

  /**
   * @description: The Image URLs, which can be used to access the image.
   * @type: string[]
   **/
  ^^^^urls?: string[];
}


/**
 * @description For a combined listing SKU, an array of related product SKUs that compose the combined listing SKU.
 **/
export interface GetProductDataSkusSalesAttributesCombinedSkusResponseInterface {
  /**
   * @description: The original product_id related to the combined listing SKU
   * @type: string
   **/
  ^^^product_id?: string;

  /**
   * @description: The orginal sku_id related to the combined listing SKU
   * @type: string
   **/
  ^^^sku_id?: string;

  /**
   * @description: The quantity of original SKU that compose the combined listing SKU
   * @type: int
   **/
  ^^^sku_count?: int;
}


/**
 * @description If the product is a target product for GPR synchronization, return synchronization relationship information.<br>
 **/
export interface GetProductDataSkusSalesAttributesGlobalListingPolicyResponseInterface {
  /**
   * @description: For the GPR price synchronization rules of product, optional fields, if the product is a target product for GPR synchronization.
   * @type: bool
   **/
  ^^^price_sync?: bool;

  /**
   * @description: inventory synchronization type, including the enumeration of: <br>SHARED:Inventory Area Sharing<br>EXCLUSIVE：Inventory Exclusive
   * @type: string
   **/
  ^^^inventory_type?: string;

  /**
   * @description: Source Information for Global Listing Product.
   * @type: object
   **/
  ^^^replicate_source?: object;

  /**
   * @description: The number of unit count of the SKU. The range is from 0.01 - 99999.99
   * @type: string
   **/
  ^^sku_unit_count?: string;
}


/**
 * @description Source Information for Global Listing Product.
 **/
export interface GetProductDataSkusSalesAttributesGlobalListingPolicyReplicateSourceResponseInterface {
  /**
   * @description: Return the product id of the Global Listings Source product.
   * @type: string
   **/
  ^^^^product_id?: string;

  /**
   * @description: Return the shop id of the Global Listings Source product.
   * @type: string
   **/
  ^^^^shop_id?: string;

  /**
   * @description: Return the sku ID of the Global Listings Source product.
   * @type: string
   **/
  ^^^^sku_id?: string;
}


/**
 * @description product certification information
 **/
export interface GetProductDataSkusSalesAttributesCertificationsResponseInterface {
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
   * @description: The files of product certification.
   * @type: []object
   **/
  ^^files?: []object;

  /**
   * @description: product certification image information
   * @type: []object
   **/
  ^^images?: []object;

  /**
   * @description: What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br><br>How to use It？<br>- Whether the size chart is required and related to the category, and you can obtain size chart listing rules through the "Get Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
   * @type: object
   **/
  ^size_chart?: object;
}


/**
 * @description The files of product certification.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsFilesResponseInterface {
  /**
   * @description: Certification file id
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Certification file url list<br>
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
export interface GetProductDataSkusSalesAttributesCertificationsImagesResponseInterface {
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
   * @description: Links, or URLs, for the product certification thumbnail.
   * @type: string[]
   **/
  ^^^thumb_urls?: string[];

  /**
   * @description: Certification image URI
   * @type: string
   **/
  ^^^uri?: string;

  /**
   * @description: Links, or URLs, for the certification image
   * @type: string[]
   **/
  ^^^urls?: string[];
}


/**
 * @description What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br><br>How to use It？<br>- Whether the size chart is required and related to the category, and you can obtain size chart listing rules through the "Get Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartResponseInterface {
  /**
   * @description: size chart image
   * @type: object
   **/
  ^^image?: object;

  /**
   * @description: The size chart template generated by the size chart tool. This feature can be accessed by going to Seller Center -> Batch Tools -> Batch Manage size chart.
   * @type: object
   **/
  ^^template?: object;

  /**
   * @description: Indicates whether the product is cod enabled
   * @type: bool
   **/
  ^is_cod_allowed?: bool;

  /**
   * @description: What are the product attributes of Tiktok Shop?<br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Attributes" API.
   * @type: []object
   **/
  ^product_attributes?: []object;
}


/**
 * @description size chart image
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartImageResponseInterface {
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
   * @description: Links, or URLs, for the size chart thumbnail.
   * @type: string[]
   **/
  ^^^thumb_urls?: string[];

  /**
   * @description: size chart image URi
   * @type: string
   **/
  ^^^uri?: string;

  /**
   * @description: Links, or URLs, for the size chart images
   * @type: string[]
   **/
  ^^^urls?: string[];
}


/**
 * @description The size chart template generated by the size chart tool. This feature can be accessed by going to Seller Center -> Batch Tools -> Batch Manage size chart.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartTemplateResponseInterface {
  /**
   * @description: Size chart template ID
   * @type: string
   **/
  ^^^id?: string;
}


/**
 * @description What are the product attributes of Tiktok Shop?<br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Attributes" API.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartProductAttributesResponseInterface {
  /**
   * @description: The product attribute id.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: The product attribute name.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The product attribute value.
   * @type: []object
   **/
  ^^values?: []object;

  /**
   * @description: The reasons for audit failure.
   * @type: []object
   **/
  ^audit_failed_reasons?: []object;

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
   * @description: Delivery option information associated with the product.
   * @type: []object
   **/
  ^delivery_options?: []object;

  /**
   * @description: The external_product_id is the product identifier for the external system. It is used to associate it with the product. The input character length can not exceed 999.
   * @type: string
   **/
  ^external_product_id?: string;

  /**
   * @description: The type of product creation,including：<br>COMBINED_PRODUCT： combined listing product.<br>IN_COMBINED_PRODUCT：products participating in virtual bundling.<br>GPR_Target_Product:Global listing synchronized target products
   * @type: string[]
   **/
  ^product_types?: string[];

  /**
   * @description: Return the manufacturer information of the product
   * @type: object
   **/
  ^manufacturer?: object;

  /**
   * @description: True：The product is not for sale.<br>False: The product is a normally sold product.
   * @type: bool
   **/
  ^is_not_for_sale?: bool;
}


/**
 * @description The product attribute value.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartProductAttributesValuesResponseInterface {
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
 * @description The reasons for audit failure.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartProductAttributesAuditFailedReasonsResponseInterface {
  /**
   * @description: Position of the audit failed.<br>
   * @type: string
   **/
  ^^position?: string;

  /**
   * @description: Brief reason for the audit failure.
   * @type: string[]
   **/
  ^^reasons?: string[];

  /**
   * @description: Detailed reasons for audit failure
   * @type: string[]
   **/
  ^^suggestions?: string[];
}


/**
 * @description Delivery option information associated with the product.
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartProductAttributesDeliveryOptionsResponseInterface {
  /**
   * @description: Delivery logistics service id
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Delivery logistics service name
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: This is the status of delivery service option, it means whether the delivery service is available on the current product, rather than the status of the delivery service itself.<br>ture=yes， false=no
   * @type: bool
   **/
  ^^is_available?: bool;
}


/**
 * @description Return the manufacturer information of the product
 **/
export interface GetProductDataSkusSalesAttributesCertificationsSizeChartProductAttributesManufacturerResponseInterface {
  /**
   * @description: The name of the manufacturer. 
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: The address of the manufacturer. 
   * @type: string
   **/
  ^^address?: string;

  /**
   * @description: The phone number of the manufacturer. 
   * @type: string
   **/
  ^^phone_number?: string;

  /**
   * @description: The email address of the manufacturer.
   * @type: string
   **/
  ^^email?: string;
}
