export const PRODUCT_INFORMATION_ISSUE_DIAGNOSIS_URL_PATH = '/product/202405/products/diagnoses';,export const PRODUCT_INFORMATION_ISSUE_DIAGNOSIS_METHOD = '2';


/**
 * 接口名称：Product Information Issue Diagnosis
 * 接口标识：Product Information Issue Diagnosis
 * 接口使用场景：Product Information Issue Diagnosis
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductInformationIssueDiagnosisRequestInterface {

}


/**
 * 接口名称：Product Information Issue Diagnosis
 * 接口标识：Product Information Issue Diagnosis
 * 接口使用场景：Product Information Issue Diagnosis
 **/
export interface ProductInformationIssueDiagnosisRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: A list of product ID strings, separated by commas. <br>Product(s) must be active, and no more than 20 products can be queried at a time.
   * @type: string[]
   **/
  product_ids: string[];
}


/**
 * 接口名称：Product Information Issue Diagnosis
 * 接口标识：Product Information Issue Diagnosis
 * 接口使用场景：Product Information Issue Diagnosis
 **/
export interface ProductInformationIssueDiagnosisResponseInterface {
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
export interface ProductInformationIssueDiagnosisDataResponseInterface {
  /**
   * @description: A list of queried products and their corresponding diagnoses and suggestions.
   * @type: []object
   **/
  ^products?: []object;
}


/**
 * @description A list of queried products and their corresponding diagnoses and suggestions.
 **/
export interface ProductInformationIssueDiagnosisDataProductsResponseInterface {
  /**
   * @description: Product ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: A list of specific diagnoses and their corresponding solutions and suggestions.
   * @type: []object
   **/
  ^^diagnoses?: []object;
}


/**
 * @description A list of specific diagnoses and their corresponding solutions and suggestions.
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesResponseInterface {
  /**
   * @description: Product field, with possible values:<br>- TITLE: product title<br>- DESCRIPTION: product description<br>- MAIN_IMAGE: product main image
   * @type: string
   **/
  ^^^field?: string;

  /**
   * @description: Specific diagnosis information
   * @type: []object
   **/
  ^^^diagnosis_results?: []object;

  /**
   * @description: Specific suggestion information
   * @type: object
   **/
  ^^^suggestion?: object;
}


/**
 * @description Specific diagnosis information
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesDiagnosisResultsResponseInterface {
  /**
   * @description: Problem code, with possible values:<br>- UNDEFINED_DIAGNOSTIC_ITEM_NAME: the diagnostic item type is undefined.<br>- STOCK_LESS_THAN_FIVE: the stock is less than five.<br>- DESC_NO_NEW_LINE: the description contains no new lines.<br>- DESC_NOT_CONTAINING_IMG: the description does not contain an image.<br>- DESC_LESS_THAN_FIVE_HUNDRED_CHARS: the description is less than 500 characters.<br>- DESC_LESS_THAN_FIFTY_CHARS: the description is less than 50 characters.<br>- TITLE_LESS_THAN_TEN_CHARS: the title is less than 10 characters.<br>- MAIN_IMG_NUMBER_LESS_THAN_FIVE: there are less than five images in the main image set.<br>- MAIN_IMG_FIRST_IMG_NO_WHITE_BACKGROUND_PRODUCT: the first image in the main image set has no white background for the product.<br>- MAIN_IMG_FIRST_IMG_BAD_STYLE: the first image in the main image set has a bad style.<br>- MAIN_IMG_FIRST_IMG_SPLICED_PICTURE: the first image in the main image set is a spliced picture.<br>- MAIN_IMG_FIRST_IMG_MISSING_PRODUCT_SUBSTANCE: the first image in the main image set is missing the essence of the product.<br>- MAIN_IMG_FIRST_IMG_PSORIASIS: the first image in the main image set shows psoriasis.<br>- MAIN_IMG_FIRST_IMG_LOW_QUALITY: the first image in the main image set is of low quality.<br>- MAIN_IMG_FIRST_IMG_UNPLEASANT: the first image in the main image set is unpleasant.<br>- SEO_DIAGNOSTIC_ITEM: search engine optimization (SEO) related.<br>- TITLE_LESS_THAN_40_CHARACTERS: the title contains fewer than 40 characters.<br>- MAIN_IMG_FIRST_IMG_PRODUCT_SUBJECT_NOT_COMPLETE: the first image in the main image set does not show the product subject completely.<br>- MAIN_IMG_FIRST_IMG_BACKGROUND_UNTIDY: the first image in the main image set has an untidy background.<br>- MAIN_IMG_FIRST_IMG_NOT_CLEAR: the first image in the main image set is not clear.<br>- MAIN_IMG_FIRST_IMG_INCLUDE_NON_LOCAL_LANGUAGE: the first image in the main image set includes non-local language.<br>- MAIN_IMG_FIRST_IMG_FAKE_MODEL: the first image in the main image set is a fake model.<br>- MAIN_IMG_FIRST_IMG_WHITE_BORDER: the first image in the main image set has a white border.<br>- MAIN_IMG_FIRST_IMG_BLACK_BORDER: the first image in the main image set has a black border.<br>- MAIN_IMG_DUPLICATE: the main image is duplicated.<br>- ATTRIBUTE_MISSING_REQUIRED_ITEM: the attribute is missing a required item.
   * @type: string
   **/
  ^^^^code?: string;

  /**
   * @description: Instructions on how to resolve the issue.
   * @type: string
   **/
  ^^^^how_to_solve?: string;
}


/**
 * @description Specific suggestion information
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesSuggestionResponseInterface {
  /**
   * @description: Recommended SEO keywords. Only returns if the field is TITLE.
   * @type: []object
   **/
  ^^^^seo_words?: []object;

  /**
   * @description: This value depends on what the field is：<br>If the field is title, then it is intelligent title; if the field is description, then it is intelligent description.
   * @type: []object
   **/
  ^^^^smart_texts?: []object;

  /**
   * @description: Images
   * @type: []object
   **/
  ^^^^images?: []object;
}


/**
 * @description Recommended SEO keywords. Only returns if the field is TITLE.
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesSuggestionSeoWordsResponseInterface {
  /**
   * @description: SEO keyword
   * @type: string
   **/
  ^^^^^text?: string;
}


/**
 * @description This value depends on what the field is：<br>If the field is title, then it is intelligent title; if the field is description, then it is intelligent description.
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesSuggestionSmartTextsResponseInterface {
  /**
   * @description: Smart text
   * @type: string
   **/
  ^^^^^text?: string;
}


/**
 * @description Images
 **/
export interface ProductInformationIssueDiagnosisDataProductsDiagnosesSuggestionImagesResponseInterface {
  /**
   * @description: Image height
   * @type: int
   **/
  ^^^^^height?: int;

  /**
   * @description: Image width
   * @type: int
   **/
  ^^^^^width?: int;

  /**
   * @description: The URI returned from uploading the image, which can be used for product main image, SKU image, size chart image, qualification image, etc. when listing a product.
   * @type: string
   **/
  ^^^^^uri?: string;

  /**
   * @description: Original image URL
   * @type: string
   **/
  ^^^^^url?: string;

  /**
   * @description: Image URI after optimization
   * @type: string
   **/
  ^^^^^optimized_uri?: string;

  /**
   * @description: Image URL after optimization
   * @type: string
   **/
  ^^^^^optimized_url?: string;
}
