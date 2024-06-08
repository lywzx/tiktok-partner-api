export const GET_PACKAGE_SHIPPING_DOCUMENT_URL_PATH = '/fulfillment/202309/packages/{package_id}/shipping_documents';,export const GET_PACKAGE_SHIPPING_DOCUMENT_METHOD = '2';


/**
 * 接口名称：Get Package Shipping Document
 * 接口标识：Get Package Shipping Document
 * 接口使用场景：Get Package Shipping Document
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetPackageShippingDocumentRequestInterface {

}


/**
 * 接口名称：Get Package Shipping Document
 * 接口标识：Get Package Shipping Document
 * 接口使用场景：Get Package Shipping Document
 **/
export interface GetPackageShippingDocumentRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Available document types: <br>- SHIPPING_LABEL: Return "shipping label, only in PDF format; <br>- PACKING_SLIP: Return "packing slip", only in PDF format;<br>- SHIPPING_LABEL_AND_PACKING_SLIP: Return both the shipping label and the packing slip for the package, only in PDF format.              <br>- SHIPPING_LABEL_PICTURE: Return the shipping label in PNG format. 
   * @type: string
   **/
  document_type: string;

  /**
   * @description: Use this field to specify the size of document to obtain.  This parameter is only applicable to PDF format shipping documents.  If you specify SHIPPING_LABEL_PICTURE for document_type, document_size will be ignored.  Available values for document_size include: <br>- A6： The default value<br>- A5
   * @type: string
   **/
  document_size?: string;
}


/**
 * 接口名称：Get Package Shipping Document
 * 接口标识：Get Package Shipping Document
 * 接口使用场景：Get Package Shipping Document
 **/
export interface GetPackageShippingDocumentResponseInterface {
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
export interface GetPackageShippingDocumentDataResponseInterface {
  /**
   * @description: The URL of the shipping label and packing slip generated for the specified package. <br>The URL is valid for 24 hours.
   * @type: string
   **/
  ^doc_url?: string;
}
