export const PARTIAL_EDIT_PRODUCT_URL_PATH = '/product/202309/products/{product_id}/partial_edit';,export const PARTIAL_EDIT_PRODUCT_METHOD = '1';


/**
 * 接口名称：Partial Edit Product
 * 接口标识：Partial Edit Product
 * 接口使用场景：Partial Edit Product
 **/
export interface PartialEditProductRequestInterface {
  /**
   * @description: HTML rich text of a product description to describe your product information in detail.<br><br>**Prerequisites:**<br>- Must conform to html syntax<br>- Currently, it only supports html tags \\<p\\> \\<img\\> \\<ul\\> \\<ol\\> \\<li\\> \\<br\\> \\<strong\\> \\<b\\> \\<i\\> \\<em\\> \\<u\\>, other HTML tags will be filtered out and will not take effect. <br>- Tags can not be nested<br>- This field character limit needs to be within 10000 characters.<br>- It is recommended to avoid using Chinese because the copy will be displayed to local users.<br>- The img tag needs to include the src, width, and height attributes, and the image dimensions can not exceed 4000<br>- Only Tiktok Shop image URLs are allowed, no external URLs.<br>- \\<strong\\> \\<b\\> \\<i\\> \\<em\\> \\<u\\> \\<br\\> should be used within  \\<p\\> and \\<li\\><br><br>**Tips**<br>- Please provide a clear and comprehensive product description preferably longer than 300 characters, and adding images to the description will help customers make purchasing decisions.<br>- We recommend publishing 3 to 5 selling points. Different selling points are described in segments and a single selling point is within 250 characters to increase the readability of consumers.<br>- We recommend adding auxiliary illustration images under each selling point, and the recommended image resolution is 1200* 1600px, which is convenient for consumers to understand the product more intuitively and accurately.<br><br>**Sample**<br>\\<p\\>Please compare above detailed size with your measurement before purchase.\\<\\/p\\><br>\\<ul\\> <br>  \\<li\\>M-Size\\<\\/li\\><br>  \\<li\\>XL-Size\\<\\/li\\><br>\\<\\/ul\\> <br>\\<img src="https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/181595ea7d26489284b5667488d708c1~tplv-o3syd03w52-origin-jpeg.jpeg?from=1432613627" width='100' height='100' \\/\\>
   * @type: string
   **/
  description?: string;

  /**
   * @description: You can get all brand information through the "Get Brands" API. The Get Brands API will return the available status of the brand.<br><br>**Notice:**<br>The unauthorized brand information is only used for statistical purposes and won't be displayed to customers.
   * @type: string
   **/
  brand_id?: string;

  /**
   * @description: You can only use the response parameters of the "**Upload Image**" API as the request parameters. <br>**Prerequisites**<br>- Upload 1 to 9 images in png, jpg or jpeg format with file size not more than 5 MB.<br>- The order of image arraylist will become the sequence of images. <br>- The resolution of the image should not be lower than 300*300px, and not higher than 4000px*4000px<br>- Use a language acceptable to the marketplace if need text.<br>**Tips**<br>- The main body of the product is clear. Please display your product as comprehensively as possible, and it is recommended that there be no less than 5 images.<br>- We recommend using a white background image as the first image,notamosaic containing psoriasis elements: text, logos, borders, color blocks, watermarks or other graphics.
   * @type: []object
   **/
  main_images?: []object;

  /**
   * @description: The product skus contain sales attributes, inventory, price, identifier code and other information.
   * @type: []object
   **/
  skus?: []object;
}


/**
 * @description You can only use the response parameters of the "**Upload Image**" API as the request parameters. <br>**Prerequisites**<br>- Upload 1 to 9 images in png, jpg or jpeg format with file size not more than 5 MB.<br>- The order of image arraylist will become the sequence of images. <br>- The resolution of the image should not be lower than 300*300px, and not higher than 4000px*4000px<br>- Use a language acceptable to the marketplace if need text.<br>**Tips**<br>- The main body of the product is clear. Please display your product as comprehensively as possible, and it is recommended that there be no less than 5 images.<br>- We recommend using a white background image as the first image,notamosaic containing psoriasis elements: text, logos, borders, color blocks, watermarks or other graphics.
 **/
export interface PartialEditProductMainImagesRequestInterface {
  /**
   * @description: The image URI returned by the "Upload Image" API. 
   * @type: string
   **/
  ^uri: string;
}


/**
 * @description The product skus contain sales attributes, inventory, price, identifier code and other information.
 **/
export interface PartialEditProductSkusRequestInterface {
  /**
   * @description: The ID of SKU(Stock Keeping Unit)<br>**How to Use？**<br>- When the SKU ID is provided, it is considered editing an existing SKU. If the SKU ID is not provided, the operation will be to create a new SKU. <br>- The SKU ID that existed in this product previously but was not provided during editing will be treated as a deletion operation.<br>- The provided SKU ID must belong to this product.
   * @type: string
   **/
  ^id?: string;

  /**
   * @description: **What are the sales attributes of Tiktok Shop?**<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br>Optionally fill in either the sales attribute ID or the sales attribute name. If both are filled, the ID will be prioritized.<br><br>**How to Use?**<br>You can obtain information about sales attributes through the "Get Attributes" API. The sales attribute information of SKU can not be duplicated. <br>If the structure is empty, it means that the product has no sales attribute.<br>**Tips**<br>- Capitalize the first letter of each word (except conjunctions, articles, prepositions) to customize the variation name.<br>- Set the most important variation as the first, and add SKU pictures, and add corresponding product pictures under different SKUs, instead of using the same picture.
   * @type: []object
   **/
  ^sales_attributes?: []object;

  /**
   * @description: Chinese characters are not allowed in the product title. <br>- For US and UK shops, the product name must have at least 1 character and no more than 255 characters. <br>- For shops in other regions, the product name must have at least 25 characters and no more than 255 characters.
   * @type: string
   **/
  title?: string;

  /**
   * @description: COD stands for Cash On Delivery, which is allowed by certain categories. You can check if your category allows COD through the '**Get Category Rule**' API. <br>Set is_cod_allowed is true in unsupported regions or categories will be intercepted. If enabled, buyers can choose this payment method during checkout.
   * @type: bool
   **/
  is_cod_allowed?: bool;

  /**
   * @description: Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "**Get Category Rule**" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>i.e US market in [Restricted and Unsupported Products Guidelines](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy)
   * @type: []object
   **/
  certifications?: []object;
}


/**
 * @description **What are the sales attributes of Tiktok Shop?**<br>SKU(Stock Keeping Unit) contains sales attributes. Each SKU represents a specific product variant, and product variants are typically composed of multiple sales attributes. <br>Optionally fill in either the sales attribute ID or the sales attribute name. If both are filled, the ID will be prioritized.<br><br>**How to Use?**<br>You can obtain information about sales attributes through the "Get Attributes" API. The sales attribute information of SKU can not be duplicated. <br>If the structure is empty, it means that the product has no sales attribute.<br>**Tips**<br>- Capitalize the first letter of each word (except conjunctions, articles, prepositions) to customize the variation name.<br>- Set the most important variation as the first, and add SKU pictures, and add corresponding product pictures under different SKUs, instead of using the same picture.
 **/
export interface PartialEditProductSkusSalesAttributesRequestInterface {
  /**
   * @description: You can obtain the built-in sales attribute IDs through the **Get Attributes** API. You can also obtain IDs through custom attributes, which will be returned in the response of the **Create Product** API.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: You can use custom sales attributes instead of using platform-provided sales attribute ids. <br>If you do not specify a sales attribute ID and instead input a string to define a sales attribute (for example, inputting the name as "Battery Type"), the system will generate a new unique attribute ID for you.<br>**Prerequisites:**<br>- It is recommended to avoid using Chinese.<br>- Custom sales attribute names can not contain sensitive characters.<br>- The character length of sales attribute names can not exceed 20 characters.<br>- The number of sales attribute names can not exceed 3.
   * @type: string
   **/
  ^^name?: string;

  /**
   * @description: When creating a new sales attribute value, there is no need to input the value_id. After submitting the value_name request, the seller will receive the value_id assigned by the platform (which can be viewed in the response body).
   * @type: string
   **/
  ^^value_id?: string;

  /**
   * @description: When creating new sales attribute values, sellers are required to input custom sales attribute values. <br>**Prerequisites:**<br>- There can not be duplicate sales attribute values under the same sales attribute. <br>- It is recommended to avoid using Chinese.<br>- The character length of sales attribute value names can not exceed 50 characters.
   * @type: string
   **/
  ^^value_name?: string;

  /**
   * @description: You can add an image to a sales attribute value, and the image will be displayed to the buyer.
   * @type: object
   **/
  ^^sku_img?: object;

  /**
   * @description: You can use seller_sku to identify and manage SKUs, and seller_sku will not be displayed to buyers.
   * @type: string
   **/
  ^seller_sku?: string;

  /**
   * @description: The price of the SKU, whether it is for cross-border or domestic, should be provided as the pre-tax price of the product.
   * @type: object
   **/
  ^price: object;

  /**
   * @description: If the SKU has a unique identifier code, it can be filled in here.
   * @type: object
   **/
  ^identifier_code?: object;

  /**
   * @description: This is inventory information for SKU, including warehouse and corresponding inventory quantity.
   * @type: []object
   **/
  ^inventory: []object;

  /**
   * @description: The external_sku_id is the sku identifier for the external system. It is used to associate it with the product sku.
   * @type: string
   **/
  ^external_sku_id?: string;

  /**
   * @description: The number of unit count of the SKU. The range is from 0.01 - 99999.99
   * @type: string
   **/
  ^sku_unit_count?: string;
}


/**
 * @description You can add an image to a sales attribute value, and the image will be displayed to the buyer.
 **/
export interface PartialEditProductSkusSalesAttributesSkuImgRequestInterface {
  /**
   * @description: The image URI returned by the "**Upload Image**" API. If a product has variants that share more than one sales attribute, such as size and color,  you can only choose one of the sales attribute to link an image.  <br><br>**Example: **<br>- SKU Color-RED(Image 1) Size-XL(No image associated) (allowed)<br>- SKU Color-RED(Image 1) Size-XL(Image 2) (not allowed)<br>
   * @type: string
   **/
  ^^^uri: string;
}


/**
 * @description The price of the SKU, whether it is for cross-border or domestic, should be provided as the pre-tax price of the product.
 **/
export interface PartialEditProductSkusSalesAttributesPriceRequestInterface {
  /**
   * @description: The price restrictions vary in different regions and different types of businesses.<br>i) local<br>  a) For ID, the minimum price is 100 and the maximum price is 100 million. Please note that products with a discounted price of less than 2000 IDR may lead to a negative balance.<br>b) For UK, the minimum price is 0.01GBP and the maximum price is 5600 GBP.<br>c) For TH, the minimum price is 30TNB and the maximum price is 260000TNB .<br>d) For MY, the minimum price is 0.01 MRY and the maximum price is 320000 MYR.<br>e) For VN, the minimum price is 1 VND and the maximum price is 180000000 VND.<br>f) For PH local to local, the minimum price is 0.01PHP and the maximum price is 400000PHP.<br>g) For SG, the minimum price is 0.01SGD and the maximum price is 10000SGP.<br>  h) For US, the minimum price is 0.01USD and the maximum price is 7600USD.<br>ii) cross border<br>  a) For UK, the minimum price is 0.01GBP and the maximum price is 134.5 GBP.<br>  b) For TH, the minimum price is 0.01THB and the maximum price is 260000THB.<br>c) For MY, the minimum price is 0.01 MRY and the maximum price is 320000 MYR.<br>d) For VH , the minimum price is 1 VND and the maximum price is 1000000 VND.<br>e) For PH, the minimum price is 0.01PHP and the maximum price is 400000PHP.<br>  f)For SG, the minimum price is 0.01SGD and maximum price is 400SGD.
   * @type: string
   **/
  ^^amount: string;

  /**
   * @description: Currencies are different in different regions. The mapping relationship between region and currency is as follows:<br>US: USD<br>GB: GBP<br>ID: IDR<br>TH: THB<br>MY: MYR<br>PH: PHP<br>VN: VND<br>SG: SGD
   * @type: string
   **/
  ^^currency: string;
}


/**
 * @description If the SKU has a unique identifier code, it can be filled in here.
 **/
export interface PartialEditProductSkusSalesAttributesIdentifierCodeRequestInterface {
  /**
   * @description: Different SKUs are not allowed to use the same identifier code. The rules for the identifier code are as follows:<br>- GTIN: 14 digits, numbers only;<br>- EAN: 8, 13, 14 digits, numbers only;<br>- UPC: 12 digits, numbers only; <br>- ISBN: 13 digits, and the last digit supports input X (uppercase)
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
 * @description This is inventory information for SKU, including warehouse and corresponding inventory quantity.
 **/
export interface PartialEditProductSkusSalesAttributesInventoryRequestInterface {
  /**
   * @description: You can obtain all available warehouses through the interface "Get Warehouse List", and then select some of them when creating SKU.
   * @type: string
   **/
  ^^warehouse_id: string;

  /**
   * @description: The quantity value of stock must be a non-negative number, and the upper limit of inventory value set at one time is 99999.
   * @type: int
   **/
  ^^quantity: int;
}


/**
 * @description Based on the category your product belongs to, your product may require product certification. You can obtain the requirements for each category via the "**Get Category Rule**" API. <br>Refers to certain types of products that require prior approval from TikTok Shop to be sold. Sellers who wish to sell restricted products may be required to pass a category approval process before selling such products. <br>i.e US market in [Restricted and Unsupported Products Guidelines](https://seller-us.tiktok.com/university/essay?identity=1&role=1&knowledge_id=3238037484275457&from=policy)
 **/
export interface PartialEditProductSkusCertificationsRequestInterface {
  /**
   * @description: This is the certification ID. You can get this id using the "**Get Category Rule**"API
   * @type: string
   **/
  ^id: string;

  /**
   * @description: Specific category certification image information.
   * @type: []object
   **/
  ^images?: []object;

  /**
   * @description: Specific category qualification file information.
   * @type: []object
   **/
  ^files?: []object;

  /**
   * @description: The weight of the product package may affect the shipping cost and logistics accessibility. It must be within the limited scope of the carriage.<br>- Please note that the unit of package_dimensions and the unit of package_weight must match. <br>- Currently, only "CENTIMETER"-"KILOGRAM" and "INCH"-"POUND" are supported.<br>Tips<br>- Enter the weight by weighing the product after it is packaged.<br>- If there is a difference between the weight entered and the actual weight, you may be required to make up the difference.<br>- If the estimated fee based on the weight is greater than the fee based on the dimensions, the product's weight will be used.<br>- TikTok weight calculation: weight * price per unit of weight
   * @type: object
   **/
  package_weight?: object;

  /**
   * @description: You can obtain information about product attributes through the "Get Attributes" API.
   * @type: []object
   **/
  product_attributes?: []object;
}


/**
 * @description Specific category certification image information.
 **/
export interface PartialEditProductSkusCertificationsImagesRequestInterface {
  /**
   * @description: You can only use the response parameters of the **Upload Image** API as this request parameter.
   * @type: string
   **/
  ^^uri: string;
}


/**
 * @description Specific category qualification file information.
 **/
export interface PartialEditProductSkusCertificationsFilesRequestInterface {
  /**
   * @description: You can only use the response parameters of the **Upload File** API as the request parameters.
   * @type: string
   **/
  ^^id: string;

  /**
   * @description: You can fill in your certificate file name here.
   * @type: string
   **/
  ^^name: string;

  /**
   * @description: Specific category qualification documents, with the requirement that the file type should be in PDF format.
   * @type: string
   **/
  ^^format: string;
}


/**
 * @description The weight of the product package may affect the shipping cost and logistics accessibility. It must be within the limited scope of the carriage.<br>- Please note that the unit of package_dimensions and the unit of package_weight must match. <br>- Currently, only "CENTIMETER"-"KILOGRAM" and "INCH"-"POUND" are supported.<br>Tips<br>- Enter the weight by weighing the product after it is packaged.<br>- If there is a difference between the weight entered and the actual weight, you may be required to make up the difference.<br>- If the estimated fee based on the weight is greater than the fee based on the dimensions, the product's weight will be used.<br>- TikTok weight calculation: weight * price per unit of weight
 **/
export interface PartialEditProductSkusCertificationsPackageWeightRequestInterface {
  /**
   * @description: The package weight must be a positive number.
   * @type: string
   **/
  ^value: string;

  /**
   * @description: The current system supports units including "KILOGRAM" and "POUND". <br>For the US  region, you can fill in "KILOGRAM" or "POUND", and for non-US regions, only "KILOGRAM" can be filled in.
   * @type: string
   **/
  ^unit: string;
}


/**
 * @description You can obtain information about product attributes through the "Get Attributes" API.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesRequestInterface {
  /**
   * @description: Only support the input of the product attribute id that is provided by the platform(from "Get Attributes" API).
   * @type: string
   **/
  ^id: string;

  /**
   * @description: You can fill in the product attribute value information corresponding to the product attribute id.<br>Optionally fill in either the product attribute value ID or the product attribute value name. If both are filled, the product attribute value ID will be prioritized.
   * @type: []object
   **/
  ^values: []object;

  /**
   * @description: **What is the size chart on Tiktok Shop？**<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br><br>**How to use It？**<br>- Whether the size chart is required and related to the category, and you can obtain size chart listing rules through the "Get Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
   * @type: object
   **/
  size_chart?: object;
}


/**
 * @description You can fill in the product attribute value information corresponding to the product attribute id.<br>Optionally fill in either the product attribute value ID or the product attribute value name. If both are filled, the product attribute value ID will be prioritized.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesValuesRequestInterface {
  /**
   * @description: Only support the input of the product attribute value id that is provided by the platform(from "**Get Attributes**" API).
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: This field is for you to fill in the custom attribute value. Here are some conditions of the field:<br>- There are no language restrictions, but Chinese can not be used.<br>- The maximum character is 500.<br>- This field support submits multiple values, but these custom values can not be duplicated.
   * @type: string
   **/
  ^^name?: string;
}


/**
 * @description **What is the size chart on Tiktok Shop？**<br>A size chart is a guide that helps individuals find the right size by providing measurements and corresponding sizes for different clothing or products.<br><br>**How to use It？**<br>- Whether the size chart is required and related to the category, and you can obtain size chart listing rules through the "Get Category Rule" API.<br>- You can choose to pass in the size chart image or the pre-generated size chart template ID. If both are filled, the size chart template ID will be prioritized.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartRequestInterface {
  /**
   * @description: Size chart image
   * @type: object
   **/
  ^image?: object;

  /**
   * @description: The size chart template generated by the size chart tool. This feature can be accessed by going to **Seller Center -> Batch Tools -> Batch Manage size chart**.
   * @type: object
   **/
  ^template?: object;

  /**
   * @description: The dimensions of the product package may affect the shipping cost and logistics accessibility. Please fill in the accurate information<br>**Tips**<br>- Enter the product dimensions after it is packaged to calculate the shipping fee based on the dimensions (i.e. volume weight).<br>- If there is a difference between the dimension entered and the actual dimension, you may be required to make up the difference.
   * @type: object
   **/
  package_dimensions?: object;

  /**
   * @description: You can fill in the video information related to the product, and this video will be displayed to the buyer.<br>**Tips**<br>- The recommended ratio is 1:1 and recommended resolution is above HD 720p.<br>- We recommend the video duration is within 20s, and the longest should not exceed 60s.<br>- Try highlighting 1-2 core selling points for your product. This will be displayed in the product details section.
   * @type: object
   **/
  video?: object;

  /**
   * @description: The external_product_id is the product identifier for the external system. It is used to associate it with the product.
   * @type: string
   **/
  external_product_id?: string;

  /**
   * @description: You can fill in the Manufacturer Information using this object, including the following fielkds
   * @type: object
   **/
  manufacturer?: object;
}


/**
 * @description Size chart image
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartImageRequestInterface {
  /**
   * @description: You can use the "**Upload Image**" API to upload the size chart image, and then use the image uri returned by the "**Upload Image**" API as the size chart id.
   * @type: string
   **/
  ^^uri: string;
}


/**
 * @description The size chart template generated by the size chart tool. This feature can be accessed by going to **Seller Center -> Batch Tools -> Batch Manage size chart**.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartTemplateRequestInterface {
  /**
   * @description: Size chart template ID
   * @type: string
   **/
  ^^id: string;
}


/**
 * @description The dimensions of the product package may affect the shipping cost and logistics accessibility. Please fill in the accurate information<br>**Tips**<br>- Enter the product dimensions after it is packaged to calculate the shipping fee based on the dimensions (i.e. volume weight).<br>- If there is a difference between the dimension entered and the actual dimension, you may be required to make up the difference.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartPackageDimensionsRequestInterface {
  /**
   * @description: The package length must be a non-negative integer.<br>- For cross-border business, the length, width, and height fields of the package are required. <br>- For local business in MY, SG, UK, and US regions, the length, width, and height fields are required. <br>- For other countries (ID, TH, VN), it is recommended to either fill in all the dimensions or leave them all blank.
   * @type: string
   **/
  ^length: string;

  /**
   * @description: The package width must be a non-negative integer.<br>- For cross-border business, the length, width, and height fields of the package are required. <br>- For local business in MY, SG, UK, and US regions, the length, width, and height fields are required. <br>- For other countries (ID, TH, VN), it is recommended to either fill in all the dimensions or leave them all blank.
   * @type: string
   **/
  ^width: string;

  /**
   * @description: The package height must be a non-negative integer.<br>- For cross-border business, the length, width, and height fields of the package are required. <br>- For local business in MY, SG, UK, and US regions, the length, width, and height fields are required. <br>- For other countries (ID, TH, VN), it is recommended to either fill in all the dimensions or leave them all blank.
   * @type: string
   **/
  ^height: string;

  /**
   * @description: The current system supports units including "CENTIMETER" and "INCH". <br>For the US  region, you can fill in "CENTIMETER" or "INCH", and for non-US regions, only "CENTIMETER" can be filled in.
   * @type: string
   **/
  ^unit: string;
}


/**
 * @description You can fill in the video information related to the product, and this video will be displayed to the buyer.<br>**Tips**<br>- The recommended ratio is 1:1 and recommended resolution is above HD 720p.<br>- We recommend the video duration is within 20s, and the longest should not exceed 60s.<br>- Try highlighting 1-2 core selling points for your product. This will be displayed in the product details section.
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartVideoRequestInterface {
  /**
   * @description: Please follow these steps if you need to upload a video here:<br><br>- Please upload the video file using the "**Upload File**" API.<br>- Please get the response information (file id from the "**Upload File**" API) and use this information to fill in the field.<br>- If you upload a video, it should have an aspect ratio between 9:16 to 16:9. The file can be no bigger than 20MB.
   * @type: string
   **/
  ^id: string;
}


/**
 * @description You can fill in the Manufacturer Information using this object, including the following fielkds
 **/
export interface PartialEditProductSkusCertificationsProductAttributesSizeChartManufacturerRequestInterface {
  /**
   * @description: The name of the manufacturer. Must be filled with address, phone number and email to be valid
   * @type: string
   **/
  ^name?: string;

  /**
   * @description: The address of the manufacturer. Must be filled with name, phone number and email to be valid
   * @type: string
   **/
  ^address?: string;

  /**
   * @description: The phone number of the manufacturer. Must be filled with name, address and email to be valid
   * @type: string
   **/
  ^phone_number?: string;

  /**
   * @description: The email address of the manufacturer. Must be filled with name, address and phone number to be valid
   * @type: string
   **/
  ^email?: string;
}


/**
 * 接口名称：Partial Edit Product
 * 接口标识：Partial Edit Product
 * 接口使用场景：Partial Edit Product
 **/
export interface PartialEditProductRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Partial Edit Product
 * 接口标识：Partial Edit Product
 * 接口使用场景：Partial Edit Product
 **/
export interface PartialEditProductResponseInterface {
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
export interface PartialEditProductDataResponseInterface {
  /**
   * @description: This is a unique product id generated by the system, and you can manage the product you created by it.
   * @type: string
   **/
  ^product_id?: string;

  /**
   * @description: SKU info
   * @type: []object
   **/
  ^skus?: []object;
}


/**
 * @description SKU info
 **/
export interface PartialEditProductDataSkusResponseInterface {
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
   * @description: The external_sku_id is used to associate product SKU between Tiktok Shop and the external system.
   * @type: string
   **/
  ^^external_sku_id?: string;
}


/**
 * @description If you have not filled in the sales attribute information, this structure will be  empty.
 **/
export interface PartialEditProductDataSkusSalesAttributesResponseInterface {
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
