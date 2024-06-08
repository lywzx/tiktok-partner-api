export const GET_CONVERSATION_MESSAGES_URL_PATH = '/customer_service/202309/conversations/{conversation_id}/messages';,export const GET_CONVERSATION_MESSAGES_METHOD = '2';


/**
 * 接口名称：Get Conversation Messages
 * 接口标识：Get Conversation Messages
 * 接口使用场景：Get Conversation Messages
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetConversationMessagesRequestInterface {

}


/**
 * 接口名称：Get Conversation Messages
 * 接口标识：Get Conversation Messages
 * 接口使用场景：Get Conversation Messages
 **/
export interface GetConversationMessagesRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;

  /**
   * @description: Paging cursor, this means where this query should start.<br>For the next page, use "next_page_token" in response.
   * @type: string
   **/
  page_token?: string;

  /**
   * @description: Number of conversations in one page <br>Max 10.
   * @type: int
   **/
  page_size: int;

  /**
   * @description: System message's display language<br>Available values:<br>zh-CN<br>id-ID<br>ms-MY<br>th-TH<br>vi-VN<br>en (default)<br>en-GB
   * @type: string
   **/
  locale?: string;

  /**
   * @description: Sort messages by<br>Available value:<br>create_time (default)
   * @type: string
   **/
  sort_order?: string;

  /**
   * @description: Sort order for create_time. <br>Available value:<br>ASC <br>DESC(default)
   * @type: string
   **/
  sort_field?: string;
}


/**
 * 接口名称：Get Conversation Messages
 * 接口标识：Get Conversation Messages
 * 接口使用场景：Get Conversation Messages
 **/
export interface GetConversationMessagesResponseInterface {
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
export interface GetConversationMessagesDataResponseInterface {
  /**
   * @description: The index indicates where we should start on the next page. <br>If there is no more record, this field will be ""(empty string).<br>Put this value to request param "page_token" for the next page query.
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: If a message with a new type occurs, which is not supported by client, this text can be displayed to user.<br>For example, if a message with type called LOGISTIC_CARD occurs, and the client does not know how to display it, this text can be displayed to the user, in order to guide the user to check this message in TikTok Shop.
   * @type: string
   **/
  ^unsupported_msg_tips?: string;

  /**
   * @description: Messages in conversation.
   * @type: []object
   **/
  ^messages?: []object;
}


/**
 * @description Messages in conversation.
 **/
export interface GetConversationMessagesDataMessagesResponseInterface {
  /**
   * @description: Message ID.
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Message type.<br>Available values:<br>TEXT<br>IMAGE<br>ALLOCATED_SERVICE<br>NOTIFICATION<br>BUYER_ENTER_FROM_TRANSFER<br>BUYER_ENTER_FROM_PRODUCT<br>BUYER_ENTER_FROM_ORDER<br>PRODUCT_CARD<br>ORDER_CARD<br>EMOTICONS<br>VIDEO<br>OTHER
   * @type: string
   **/
  ^^type?: string;

  /**
   * @description: Message content, in JSON serialized string.<br>Samples: <br>- TEXT: <br>{<br>    "content": "simple text"<br>}<br>- IMAGE: <br>{<br>    "height": "290",<br>    "url": "https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290",<br>    "width": "304"<br>}<br>- PRODUCT_CARD, BUYER_ENTER_FROM_PRODUCT:<br>{<br>    "product_id": "12345"<br>}<br>- ORDER_CARD, BUYER_ENTER_FROM_ORDER :<br>{<br>    "order_id": "12345"<br>}<br>- VIDEO:<br>{<br>    "url": "https://video-boei18n.byted.org/storage/v1/tos-boei18n-v-c72c01/e8240f35244646428df9c3244d1a7408?x-tos-algorithm=v2&x-tos-authkey=5bf25627da095a5cba28ace592de46cc&x-tos-expires=1681980481&x-tos-signature=r_bRxtrvGhXAuZgMmNhlZ_Upqzg",<br>    "cover": "https://p-boei18n.byted.org/tos-boei18n-v-c72c01/o8keEOhzTcNCcJyAbkWZwpLIyTfkJxcGbRBvLP~tplv-jvtte31kaf-origin-jpeg.jpeg?",<br>    "width": 640,<br>    "height": 360,<br>    "duration": "20.504",<br>    "vid": "v0e30cg700f7cgcmu8jc77u9e2bdp95g",<br>    "expire_time": "1681980481",<br>    "format": "mp4",<br>    "size": 400000,<br>    "bit_rate": 156067,<br>    "quality": "original",<br>    "codec_type": "h264"<br>}<br>- ALLOCATED_SERVICE, NOTIFICATION, BUYER_ENTER_FROM_TRANSFER, OTHER eg: <br>{<br>    "content": "simple text"<br>}<br>
   * @type: string
   **/
  ^^content?: string;

  /**
   * @description: Message create time. In second.
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Whether this message should be displayed to customer service.
   * @type: bool
   **/
  ^^is_visible?: bool;

  /**
   * @description: The message sender. For system and robot roles, shop is the sender. 
   * @type: object
   **/
  ^^sender?: object;
}


/**
 * @description The message sender. For system and robot roles, shop is the sender. 
 **/
export interface GetConversationMessagesDataMessagesSenderResponseInterface {
  /**
   * @description: Sender's ID.<br>These are IM IDs, and can not be used to query orders.
   * @type: string
   **/
  ^^^im_user_id?: string;

  /**
   * @description: Sender's role.<br>Available values:<br>BUYER<br>SHOP<br>CUSTOMER_SERVICE<br>SYSTEM<br>ROBOT<br><br>
   * @type: string
   **/
  ^^^role?: string;

  /**
   * @description: Sender's nickname.<br>For shops, the nickname is the shop's name. <br>For customer service, the nickname is the customer service's name. <br>For buyers, the nickname is the buyer's nickname on TikTok. <br>Nicknames for shops and customer service can be configured on Seller Center.  
   * @type: string
   **/
  ^^^nickname?: string;

  /**
   * @description: Sender's avatar URL.<br>
   * @type: string
   **/
  ^^^avatar?: string;
}
