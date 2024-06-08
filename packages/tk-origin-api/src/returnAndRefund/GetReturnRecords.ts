export const GET_RETURN_RECORDS_URL_PATH = '/return_refund/202309/returns/{return_id}/records';,export const GET_RETURN_RECORDS_METHOD = '2';


/**
 * 接口名称：Get Return Records
 * 接口标识：Get Return Records
 * 接口使用场景：Get Return Records
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetReturnRecordsRequestInterface {

}


/**
 * 接口名称：Get Return Records
 * 接口标识：Get Return Records
 * 接口使用场景：Get Return Records
 **/
export interface GetReturnRecordsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: BCP 47 locale identifier, reference to http://www.unicode.org/reports/tr35/#Unicode_locale_identifier, default "en", effect multilingual text such as reason_text
   * @type: string
   **/
  locale?: string;
}


/**
 * 接口名称：Get Return Records
 * 接口标识：Get Return Records
 * 接口使用场景：Get Return Records
 **/
export interface GetReturnRecordsResponseInterface {
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
export interface GetReturnRecordsDataResponseInterface {
  /**
   * @description: return records
   * @type: []object
   **/
  ^records?: []object;
}


/**
 * @description return records
 **/
export interface GetReturnRecordsDataRecordsResponseInterface {
  /**
   * @description: event
   * @type: string
   **/
  ^^event?: string;

  /**
   * @description: Who triggered the event, available values:<br>- BUYER: The order buyer.<br>- SELLER: The shop seller.<br>- OPERATOR: If the order is canceled by the platform customer manually, then the cancel initiator will be 'OPERATOR'.<br>- SYSTEM: If the order is automatically canceled due to the policy, then the cancel initiator will be 'SYSTEM'.
   * @type: string
   **/
  ^^role?: string;

  /**
   * @description: Description of the record
   * @type: string
   **/
  ^^description?: string;

  /**
   * @description: The multilingual text of reason, change lang by locale
   * @type: string
   **/
  ^^reason_text?: string;

  /**
   * @description: Note by seller or buyer. You can use the role field to recognize notes from seller or buyer.
   * @type: string
   **/
  ^^note?: string;

  /**
   * @description: Upload by seller or buyer. You can use the role field to recognize  from seller or buyer.
   * @type: []object
   **/
  ^^images?: []object;

  /**
   * @description: Videos uploaded by buyer. Only allow buyers to upload the video.
   * @type: []object
   **/
  ^^videos?: []object;

  /**
   * @description: When the event happened Unix Timestamp
   * @type: int
   **/
  ^^create_time?: int;
}


/**
 * @description Upload by seller or buyer. You can use the role field to recognize  from seller or buyer.
 **/
export interface GetReturnRecordsDataRecordsImagesResponseInterface {
  /**
   * @description: URL of the  image
   * @type: string
   **/
  ^^^url?: string;

  /**
   * @description: The width of Image, unit px
   * @type: int
   **/
  ^^^width?: int;

  /**
   * @description: The height of Image, unit px
   * @type: int
   **/
  ^^^height?: int;
}


/**
 * @description Videos uploaded by buyer. Only allow buyers to upload the video.
 **/
export interface GetReturnRecordsDataRecordsVideosResponseInterface {
  /**
   * @description: Video url
   * @type: string
   **/
  ^^^url?: string;

  /**
   * @description: Video post
   * @type: string
   **/
  ^^^cover?: string;

  /**
   * @description: Video Image width, unit px
   * @type: int
   **/
  ^^^width?: int;

  /**
   * @description: Video height, unit px
   * @type: int
   **/
  ^^^height?: int;

  /**
   * @description: Duration, unit millsecond
   * @type: int
   **/
  ^^^duration_millis?: int;
}
