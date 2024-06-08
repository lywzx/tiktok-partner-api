export const CREATE_CONVERSATION_URL_PATH = '/customer_service/202309/conversations';,export const CREATE_CONVERSATION_METHOD = '1';


/**
 * 接口名称：Create Conversation
 * 接口标识：Create Conversation
 * 接口使用场景：Create Conversation
 **/
export interface CreateConversationRequestInterface {
  /**
   * @description: Buyer's user ID<br>User_id in Customer Service API is the same as the buyer_user_id in Order API. You can fetch orders of a buyer who reached out to you via chat using "buyer_use_id."
   * @type: string
   **/
  buyer_user_id: string;
}


/**
 * 接口名称：Create Conversation
 * 接口标识：Create Conversation
 * 接口使用场景：Create Conversation
 **/
export interface CreateConversationRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Create Conversation
 * 接口标识：Create Conversation
 * 接口使用场景：Create Conversation
 **/
export interface CreateConversationResponseInterface {
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
export interface CreateConversationDataResponseInterface {
  /**
   * @description: Converstaion ID.<br>The unique identifier for a conversation between the buyer and a shop.
   * @type: string
   **/
  ^conversation_id?: string;
}
