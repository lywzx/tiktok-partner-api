export const EDIT_GLOBAL_PRODUCT_URL_PATH = '/product/202309/global_products/{global_product_id}';,export const EDIT_GLOBAL_PRODUCT_METHOD = '3';


/**
 * 接口名称：Edit Global Product
 * 接口标识：Edit Global Product
 * 接口使用场景：Edit Global Product
 **/
export interface EditGlobalProductRequestInterface {
  /**
   * @description: The name of a global product.<br>Prerequisites:<br>- Only English characters and numbers are supported<br>- The product name must include at least 1 character and no more than 255 characters.  
   * @type: string
   **/
  title: string;

  /**
   * @description: HTML rich text of a product description to describe your product information in detail.<br><br>**Prerequisites:**<br>- Must conform to html syntax<br>- Currently, it only supports html tags \\<p\\> \\<img\\> \\<ul\\> \\<ol\\> \\<li\\> \\<br\\> \\<strong\\> \\<b\\> \\<i\\> \\<em\\> \\<u\\>, other HTML tags will be filtered out and will not take effect. <br>- Tags can not be nested<br>- This field character limit needs to be within 10000 characters.<br>- It is recommended to avoid using Chinese because the copy will be displayed to local users.<br>- The img tag needs to include the src, width, and height attributes, and the image dimensions can not exceed 4000<br>- Only Tiktok Shop image URLs are allowed, no external URLs.<br>- \\<strong\\> \\<b\\> \\<i\\> \\<em\\> \\<u\\> \\<br\\> should be used within  \\<p\\> and \\<li\\><br><br>**Tips**<br>- Please provide a clear and comprehensive product description preferably longer than 300 characters, and adding images to the description will help customers make purchasing decisions.<br>- We recommend publishing 3 to 5 selling points. Different selling points are described in segments and a single selling point is within 250 characters to increase the readability of consumers.<br>- We recommend adding auxiliary illustration images under each selling point, and the recommended image resolution is 1200* 1600px, which is convenient for consumers to understand the product more intuitively and accurately.<br><br>**Sample**<br>\\<p\\>Please compare above detailed size with your measurement before purchase.\\<\\/p\\><br>\\<ul\\> <br>  \\<li\\>M-Size\\<\\/li\\><br>  \\<li\\>XL-Size\\<\\/li\\><br>\\<\\/ul\\> <br>\\<img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' heigh='100' \\/\\>
   * @type: string
   **/
  description: string;

  /**
   * @description: The global product category must be a Leaf Category, which is the lowest level of category. Leaf Categories are a category which has no sub categories under it. If you do not use a Leaf Category, your Edit Global Product call will be rejected.<br>You can get all category information through the "Get Global Categories" API.
   * @type: string
   **/
  category_id: string;

  /**
   * @description: You can get all brand information through the "Get Global Brands" API. The Get Global Brands API will return the available status of the brand.<br>Notice:<br>The unauthorized brand information is only used for statistical purposes and won't be displayed to customers.
   * @type: string
   **/
  brand_id?: string;

  /**
   * @description: You can only use the response parameters of the "Upload Image" API as the request parameters. <br>Prerequisites<br>- Upload 1 to 9 images in png, jpg or jpeg format with file size not more than 5 MB.<br>- The order of image arraylist will become the sequence of images. <br>- The resolution of the image should not be lower than 300*300px, and not higher than 4000px*4000px<br>- Use a language acceptable to the marketplace if need text.<br>Tips<br>- The main body of the product is clear. Please display your product as comprehensively as possible, and it is recommended that there be no less than 5 images.<br>- We recommend using a white background image as the first image,notamosaic containing psoriasis elements: text, logos, borders, color blocks, watermarks or other graphics.
   * @type: []object
   **/
  main_images: []object;

  /**
   * @description: The product skus contain sales attributes, inventory, price, identifier code and other information.
   * @type: []object
   **/
  skus: []object;
}


/**
 * @description You can only use the response parameters of the "Upload Image" API as the request parameters. <br>Prerequisites<br>- Upload 1 to 9 images in png, jpg or jpeg format with file size not more than 5 MB.<br>- The order of image arraylist will become the sequence of images. <br>- The resolution of the image should not be lower than 300*300px, and not higher than 4000px*4000px<br>- Use a language acceptable to the marketplace if need text.<br>Tips<br>- The main body of the product is clear. Please display your product as comprehensively as possible, and it is recommended that there be no less than 5 images.<br>- We recommend using a white background image as the first image,notamosaic containing psoriasis elements: text, logos, borders, color blocks, watermarks or other graphics.
 **/
export interface EditGlobalProductMainImagesRequestInterface {
  /**
   * @description: The image URI returned by the "Upload Image" API. 
   * @type: string
   **/
  ^uri: string;
}


/**
 * @description The product skus contain sales attributes, inventory, price, identifier code and other information.
 **/
export interface EditGlobalProductSkusRequestInterface {
  /**
   * @description: The ID of Global SKU(Stock Keeping Unit)<br>How to Use？<br>- When the global SKU ID is provided, it is considered editing an existing global SKU. If the global SKU ID is not provided, the operation will be to create a new global SKU. <br>- The global SKU ID that existed in this product previously but was not provided during editing will be treated as a deletion operation.<br>- The provided global SKU ID must belong to this product.
   * @type: string
   **/
  ^id?: string;

  /**
   * @description: This is inventory information for Global SKU. The global product inventory is the sum of the inventory of each country's shops. <br>How to Use？<br>When a product is first published to a local shop, the store's product inventory will be automatically calculated. You can also manually modify the inventory of each shop.<br>Once a product is published, the global product inventory cannot be directly changed. However, you can change the total inventory of the global product by modifying the inventory of each individual shop.
   * @type: int
   **/
  ^global_quantity?: int;

  /**
   * @description: You can use seller_sku to identify and manage SKUs, and seller_sku will not be displayed to buyers. The character length can not exceed 50 characters.
   * @type: string
   **/
  ^seller_sku?: string;

  /**
   * @description: This price is for the SKU of a global product. When a global product is published to local stores in various countries, its global product price is converted into the local store price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
   * @type: object
   **/
  ^price: object;

  /**
   * @description: What are the sales attributes of Tiktok Shop?<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br>Optionally fill in either the sales attribute ID or the sales attribute name. If both are filled, the ID will be prioritized.<br><br>How to Use?<br>You can obtain information about sales attributes through the "Get Attributes" API. The sales attribute information of SKU can not be duplicated. <br>If the structure is empty, it means that the product has no sales attribute.<br>Tips<br>- Capitalize the first letter of each word (except conjunctions, articles, prepositions) to customize the variation name.<br>- Set the most important variation as the first, and add SKU pictures, and add corresponding product pictures under different SKUs, instead of using the same picture.
   * @type: []object
   **/
  ^sales_attributes?: []object;

  /**
   * @description: The weight of the global product package must be in metric KILOGRAM.<br>Product weight will affect the calculation of freight. It must be within the limited scope of the carriage.<br>Tips<br>- Enter the weight by weighing the product after it is packaged.<br>- If there is a difference between the weight entered and the actual weight, you may be required to make up the difference.<br>- If the estimated fee based on the weight is greater than the fee based on the dimensions, the product's weight will be used.<br>- TikTok weight calculation: weight * price per unit of weight
   * @type: object
   **/
  package_weight: object;

  /**
   * @description: Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "Get Global Category Rule" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>i.e US market in [Restricted and Unsupported Products Guidelines](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy)
   * @type: []object
   **/
  certifications?: []object;
}


/**
 * @description This price is for the SKU of a global product. When a global product is published to local stores in various countries, its global product price is converted into the local store price.<br>The conversion formula is as follows: <br>shop sale price=(global product price * market exchange rate+cross-border freight) * (1+VAT tax rate)/(1- order commission rate - payment procedures)
 **/
export interface EditGlobalProductSkusPriceRequestInterface {
  /**
   * @description: The price can not exceed 99999999.99, up to 2 digits after the decimal point.
   * @type: string
   **/
  ^^amount: string;

  /**
   * @description: This price currency is for the SKU of a global product, with the currency unit in USD. 
   * @type: string
   **/
  ^^currency: string;
}


/**
 * @description What are the sales attributes of Tiktok Shop?<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br>Optionally fill in either the sales attribute ID or the sales attribute name. If both are filled, the ID will be prioritized.<br><br>How to Use?<br>You can obtain information about sales attributes through the "Get Attributes" API. The sales attribute information of SKU can not be duplicated. <br>If the structure is empty, it means that the product has no sales attribute.<br>Tips<br>- Capitalize the first letter of each word (except conjunctions, articles, prepositions) to customize the variation name.<br>- Set the most important variation as the first, and add SKU pictures, and add corresponding product pictures under different SKUs, instead of using the same picture.
 **/
export interface EditGlobalProductSkusSalesAttributesRequestInterface {
  /**
   * @description: You can obtain the built-in sales attribute IDs through the Get Global Attributes API. 
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: You can use custom sales attributes instead of using platform-provided sales attribute ids. <br>If you do not specify a sales attribute ID and instead input a string to define a sales attribute (for example, inputting the name as "Battery Type"), the system will generate a new unique attribute ID for you.<br>Prerequisites:<br>- There are no language restrictions, but Chinese can not be used.<br>- Custom sales attribute names can not contain sensitive characters.<br>- The character length of sales attribute names range [1,20].<br>- The  level of sales attribute names (variations) can not exceed 3.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: When creating a new sales attribute value, there is no need to input the value_id. After submitting the custom_value request, the seller will receive the value_id assigned by the platform (which can be viewed in the response body).
   * @type: string
   **/
  ^^value_id?: string;

  /**
   * @description: When creating new sales attribute values, merchants are required to input custom sales attribute values. <br>- Only English characters and numbers are supported<br>- Different variants cannot share the same value for a given attribute combination<br>Example:<br>- SKU1 Color -RED; SKU2 Color - RED (not allowed)<br>- SKU1 Color-RED Size-XL; SKU2 Color-RED Size-M(allowed)<br>
   * @type: string
   **/
  ^^value_name?: string;

  /**
   * @description: You can add an image to a sales attribute value, and the image will be displayed to the buyer.
   * @type: object
   **/
  ^^sku_img?: object;

  /**
   * @description: In a multi-warehouse scenario, it is necessary to set the inventory values for each global warehouse. <br>If inventory is set, global_quantity will not take effect"<br>Prerequisites:<br>Sellers need to enable multi-warehouse permission in the global settings.
   * @type: []object
   **/
  ^inventory?: []object;

  /**
   * @description: If the SKU has a unique identifier code, it can be filled in here.
   * @type: object
   **/
  ^identifier_code?: object;

  /**
   * @description: The number of unit count of the SKU. The range is from 0.01 - 99999.99
   * @type: string
   **/
  ^sku_unit_count?: string;
}


/**
 * @description You can add an image to a sales attribute value, and the image will be displayed to the buyer.
 **/
export interface EditGlobalProductSkusSalesAttributesSkuImgRequestInterface {
  /**
   * @description: The image URI returned by the "Upload Image" API. If a product has variants that share more than one sales attribute, such as size and color,  you can only choose one of the sales attribute to link an image.  <br><br>Example: <br>- SKU Color-RED(Image 1) Size-XL(No image associated) (allowed)<br>- SKU Color-RED(Image 1) Size-XL(Image 2) (not allowed)<br>
   * @type: string
   **/
  ^^^uri: string;
}


/**
 * @description In a multi-warehouse scenario, it is necessary to set the inventory values for each global warehouse. <br>If inventory is set, global_quantity will not take effect"<br>Prerequisites:<br>Sellers need to enable multi-warehouse permission in the global settings.
 **/
export interface EditGlobalProductSkusSalesAttributesInventoryRequestInterface {
  /**
   * @description: Global warehouse ID. You can obtain global entity warehouses through the interface "Get Gloabal Warehouse List", <br>Specifying a global warehouse is only required in multi-warehouse scenarios.
   * @type: string
   **/
  ^^global_warehouse_id: string;

  /**
   * @description: The quantity value of stock must be a non-negative number, and the upper limit of inventory value set at one time is 99999.
   * @type: int
   **/
  ^^quantity: int;
}


/**
 * @description If the SKU has a unique identifier code, it can be filled in here.
 **/
export interface EditGlobalProductSkusSalesAttributesIdentifierCodeRequestInterface {
  /**
   * @description: Different SKUs are not allowed to use the same identifier code. The rules for the identifier code are as follows:<br>i) GTIN: 14 digits, numbers only;<br>i) EAN: 8, 13, 14 digits, numbers only;<br>iii) UPC: 12 digits, numbers only; <br>iv) ISBN: 13 digits, and the last digit supports input X (uppercase)
   * @type: string
   **/
  ^^code?: string;

  /**
   * @description: Code type value: GTIN、EAN、UPC、ISBN (please input one of them into this field)
   * @type: string
   **/
  ^^type?: string;
}


/**
 * @description The weight of the global product package must be in metric KILOGRAM.<br>Product weight will affect the calculation of freight. It must be within the limited scope of the carriage.<br>Tips<br>- Enter the weight by weighing the product after it is packaged.<br>- If there is a difference between the weight entered and the actual weight, you may be required to make up the difference.<br>- If the estimated fee based on the weight is greater than the fee based on the dimensions, the product's weight will be used.<br>- TikTok weight calculation: weight * price per unit of weight
 **/
export interface EditGlobalProductSkusPackageWeightRequestInterface {
  /**
   * @description: The package weight must be a positive number.
   * @type: string
   **/
  ^value: string;

  /**
   * @description: The unit for the weight of the global product package must be in metric KILOGRAM, and it should remain in metric units when published in various markets.
   * @type: string
   **/
  ^unit: string;
}


/**
 * @description Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "Get Global Category Rule" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>i.e US market in [Restricted and Unsupported Products Guidelines](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy)
 **/
export interface EditGlobalProductSkusCertificationsRequestInterface {
  /**
   * @description: This is the certification ID. You can get this id using the "Get Global Category Rule"API.
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Specific category certification image information.
   * @type: []object
   **/
  ^images?: []object;

  /**
   * @description: Specific category certification file information.
   * @type: []object
   **/
  ^files?: []object;

  /**
   * @description: The dimensions of the global product package may affect the shipping cost and logistics accessibility. Please fill in the accurate information<br>Tips<br>- Enter the product dimensions after it is packaged to calculate the shipping fee based on the dimensions (i.e. volume weight).<br>- If there is a difference between the dimension entered and the actual dimension, you may be required to make up the difference.
   * @type: object
   **/
  package_dimensions?: object;

  /**
   * @description: What are the product attributes of Tiktok Shop?<br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Global Attributes" API.
   * @type: []object
   **/
  product_attributes?: []object;
}


/**
 * @description Specific category certification image information.
 **/
export interface EditGlobalProductSkusCertificationsImagesRequestInterface {
  /**
   * @description: You can only use the response parameters of the Upload Img API as this request parameter.
   * @type: string
   **/
  ^^uri: string;
}


/**
 * @description Specific category certification file information.
 **/
export interface EditGlobalProductSkusCertificationsFilesRequestInterface {
  /**
   * @description: You can only use the response parameters of the UploadFile API as the request parameters.
   * @type: string
   **/
  ^^id: string;

  /**
   * @description: This is the name of the file for certification. The suffix of the file needs to be included.
   * @type: string
   **/
  ^^name: string;

  /**
   * @description: Specific category certification documents, with the requirement that the file type should be in PDF format.
   * @type: string
   **/
  ^^format: string;
}


/**
 * @description The dimensions of the global product package may affect the shipping cost and logistics accessibility. Please fill in the accurate information<br>Tips<br>- Enter the product dimensions after it is packaged to calculate the shipping fee based on the dimensions (i.e. volume weight).<br>- If there is a difference between the dimension entered and the actual dimension, you may be required to make up the difference.
 **/
export interface EditGlobalProductSkusCertificationsPackageDimensionsRequestInterface {
  /**
   * @description: The package length must be a non-negative integer.
   * @type: string
   **/
  ^length: string;

  /**
   * @description: The package width must be a non-negative integer.
   * @type: string
   **/
  ^width: string;

  /**
   * @description: The package width must be a non-negative integer.
   * @type: string
   **/
  ^height: string;

  /**
   * @description: The unit for the weight of the global product package must be in metric CENTIMETER, and it should remain in metric units when published in various markets.
   * @type: string
   **/
  ^unit: string;
}


/**
 * @description What are the product attributes of Tiktok Shop?<br>Product attributes must be complete, accurate, and consistent with the product's name, description, and images on the listing page.<br>How to Use?<br>You can obtain information about product attributes through the "Get Global Attributes" API.
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesRequestInterface {
  /**
   * @description: Only support the input of the product attribute id that is provided by the platform (from "Get Global Attributes" API).
   * @type: string
   **/
  ^id: string;

  /**
   * @description: You can fill in the product attribute value information corresponding to the product attribute id.<br>Optionally fill in either the product attribute value ID or the product attribute value name. If both are filled, the product attribute value ID will be prioritized.
   * @type: []object
   **/
  ^values: []object;

  /**
   * @description: What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br>How to use It？<br>Whether the size chart is required and related to the category, and you can obtain relevant information through the "Get Global Category Rule" API.
   * @type: object
   **/
  size_chart?: object;
}


/**
 * @description You can fill in the product attribute value information corresponding to the product attribute id.<br>Optionally fill in either the product attribute value ID or the product attribute value name. If both are filled, the product attribute value ID will be prioritized.
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesValuesRequestInterface {
  /**
   * @description: You can use the custom product attribute value ID returned by the listing API or use the platform-provided product attribute value ID (obtained through the "Get Global Attributes" API).
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: This field is for you to fill in the custom attribute value. Here are some conditions of the field:<br>1. Only English characters and numbers are supported<br>2. The maximum character is 500.<br>3. This field support submits multiple nonrepeated attribute values<br><br>Example:<br>Product Attribute ID : 100111 "Material"<br>Product Attribute Values: "Steel, Twill" <br>
   * @type: string
   **/
  ^^name?: string;
}


/**
 * @description What is the size chart on Tiktok Shop？<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br>How to use It？<br>Whether the size chart is required and related to the category, and you can obtain relevant information through the "Get Global Category Rule" API.
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesSizeChartRequestInterface {
  /**
   * @description: The image of size chart
   * @type: object
   **/
  ^image?: object;

  /**
   * @description: The size chart template generated by the size chart tool. This feature can be accessed by going to Seller Center -> Batch Tools -> Manage Template.
   * @type: object
   **/
  ^template?: object;

  /**
   * @description: You can fill in the video information related to the product, and this video will be displayed to the buyer.<br>Tips<br>- The recommended ratio is 1:1 and recommended resolution is above HD 720p.<br>- We recommend the video duration is within 20s, and the longest should not exceed 60s.<br>- Try highlighting 1-2 core selling points for your product. This will be displayed in the product details section.
   * @type: object
   **/
  video?: object;

  /**
   * @description: You can fill in the Manufacturer Information using this object, including the following fielkds
   * @type: object
   **/
  manufacturer?: object;
}


/**
 * @description The image of size chart
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesSizeChartImageRequestInterface {
  /**
   * @description: You can use the "Upload Image" API to upload the size chart image, and then use the image URI returned by the "Upload Image" API as the size chart id.
   * @type: string
   **/
  ^^uri: string;
}


/**
 * @description The size chart template generated by the size chart tool. This feature can be accessed by going to Seller Center -> Batch Tools -> Manage Template.
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesSizeChartTemplateRequestInterface {
  /**
   * @description: Size chart template ID
   * @type: string
   **/
  ^^id: string;
}


/**
 * @description You can fill in the video information related to the product, and this video will be displayed to the buyer.<br>Tips<br>- The recommended ratio is 1:1 and recommended resolution is above HD 720p.<br>- We recommend the video duration is within 20s, and the longest should not exceed 60s.<br>- Try highlighting 1-2 core selling points for your product. This will be displayed in the product details section.
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesSizeChartVideoRequestInterface {
  /**
   * @description: Please follow these steps if you need to upload a video here:<br><br>- Please upload the video file using the "Upload File" API.<br>- Please get the response information (file id from the "UploadFile" API) and use this information to fill in the field.<br>- If you upload a video, it should have an aspect ratio between 9:16 to 16:9. The file can be no bigger than 20MB.
   * @type: string
   **/
  ^id: string;
}


/**
 * @description You can fill in the Manufacturer Information using this object, including the following fielkds
 **/
export interface EditGlobalProductSkusCertificationsProductAttributesSizeChartManufacturerRequestInterface {
  /**
   * @description: The name of the manufacturer. <br>- Must be filled with address, phone number and email to be valid
   * @type: string
   **/
  ^name?: string;

  /**
   * @description: The address of the manufacturer. <br>- Must be filled with name, phone number and email to be valid
   * @type: string
   **/
  ^address?: string;

  /**
   * @description: The phone number of the manufacturer. <br>- Must start with "+" <br>- Must be a valid country code<br>- Must have a " " or "-" between the country code and the local phone number<br>- Must have a valid local phone number<br>- Must be filled with name, address and email to be valid
   * @type: string
   **/
  ^phone_number?: string;

  /**
   * @description: The email address of the manufacturer. <br>- Must be a valid email address<br>- Must be filled with name, address and phone number to be valid
   * @type: string
   **/
  ^email?: string;
}


/**
 * 接口名称：Edit Global Product
 * 接口标识：Edit Global Product
 * 接口使用场景：Edit Global Product
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EditGlobalProductRequestInterface {

}


/**
 * 接口名称：Edit Global Product
 * 接口标识：Edit Global Product
 * 接口使用场景：Edit Global Product
 **/
export interface EditGlobalProductResponseInterface {
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
export interface EditGlobalProductDataResponseInterface {
  /**
   * @description: Global SKU info
   * @type: []object
   **/
  ^global_skus?: []object;
}


/**
 * @description Global SKU info
 **/
export interface EditGlobalProductDataGlobalSkusResponseInterface {
  /**
   * @description: This is a unique sku id generated by the system, and you can manage the SKU under your own product through it.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: This is the seller_sku you fill, and you can use seller_sku to identify and manage SKUs.
   * @type: string
   **/
  ^^seller_sku?: string;

  /**
   * @description: If you have not filled in the sales attribute information, this structure will be  empty.
   * @type: []object
   **/
  ^^sales_attributes?: []object;

  /**
   * @description: Results of publishing to markets
   * @type: []object
   **/
  ^publish_results?: []object;
}


/**
 * @description If you have not filled in the sales attribute information, this structure will be  empty.
 **/
export interface EditGlobalProductDataGlobalSkusSalesAttributesResponseInterface {
  /**
   * @description: This is the sales attribute id you filled in or the unique id generated by the platform based on attribute_name.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: This is the sales attribute id you filled in or the unique id generated by the platform based on custom_value.
   * @type: string
   **/
  ^^^value_id?: string;
}


/**
 * @description Results of publishing to markets
 **/
export interface EditGlobalProductDataGlobalSkusPublishResultsResponseInterface {
  /**
   * @description: Publish to the corresponding market.
   * @type: string
   **/
  ^^region?: string;

  /**
   * @description: Publish to the corresponding status.<br>The status includes:<br>SUCCESS: Successful synchronization of global products to the shop, listing a product and submitting it for review.<br>FAILED: Failed synchronization of global products to the shop.
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
export interface EditGlobalProductDataGlobalSkusPublishResultsFailReasonsResponseInterface {
  /**
   * @description: Failed status message<br>
   * @type: string
   **/
  ^^^message?: string;
}
