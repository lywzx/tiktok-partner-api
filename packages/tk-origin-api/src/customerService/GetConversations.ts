export const GET_CONVERSATIONS_URL_PATH = '/customer_service/202309/conversations';,export const GET_CONVERSATIONS_METHOD = '2';


/**
 * 接口名称：Get Conversations
 * 接口标识：Get Conversations
 * 接口使用场景：Get Conversations
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetConversationsRequestInterface {

}


/**
 * 接口名称：Get Conversations
 * 接口标识：Get Conversations
 * 接口使用场景：Get Conversations
 **/
export interface GetConversationsRequestInterface {
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
   * @description: Number of conversations on one page <br>Max 20. 
   * @type: int
   **/
  page_size: int;

  /**
   * @description: System message's display language<br>Available values:<br>zh-CN<br>id-ID<br>ms-MY<br>th-TH<br>vi-VN<br>en (default)<br>en-GB
   * @type: string
   **/
  locale?: string;
}


/**
 * 接口名称：Get Conversations
 * 接口标识：Get Conversations
 * 接口使用场景：Get Conversations
 **/
export interface GetConversationsResponseInterface {
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
export interface GetConversationsDataResponseInterface {
  /**
   * @description: The index indicates where we should start on the next page.<br>If there is no more record, this field will be ""(empty string).<br>Put this value to request param "page_token" for the next page query.
   * @type: string
   **/
  ^next_page_token?: string;

  /**
   * @description: Conversation info.<br>
   * @type: []object
   **/
  ^conversations?: []object;
}


/**
 * @description Conversation info.<br>
 **/
export interface GetConversationsDataConversationsResponseInterface {
  /**
   * @description: Conversation ID
   * @type: string
   **/
  ^^id?: string;

  /**
   * @description: Number of participants in the conversation.<br>If there is no customer service serving this customer, there will be 2 members: shop and buyer;<br>If there is customer service serving this customer, there will be 3 members: shop, buyer and customer service.
   * @type: int
   **/
  ^^participant_count?: int;

  /**
   * @description: Whether customer service agent can send message to this conversation.
   * @type: bool
   **/
  ^^can_send_message?: bool;

  /**
   * @description: Number of unread messages by customer service agent.
   * @type: int
   **/
  ^^unread_count?: int;

  /**
   * @description: Conversation create time. In second.
   * @type: int
   **/
  ^^create_time?: int;

  /**
   * @description: Conversation participants.
   * @type: []object
   **/
  ^^participants?: []object;

  /**
   * @description: The latest message in conversation.
   * @type: object
   **/
  ^^latest_message?: object;
}


/**
 * @description Conversation participants.
 **/
export interface GetConversationsDataConversationsParticipantsResponseInterface {
  /**
   * @description: Participant's ID, in IM system. This ID is used in IM system and can not be used to query orders. For querying orders, use user_id instead.
   * @type: string
   **/
  ^^^im_user_id?: string;

  /**
   * @description: Participant's avatar URL.<br>
   * @type: string
   **/
  ^^^avatar?: string;

  /**
   * @description: Participant's ID.
   * @type: string
   **/
  ^^^user_id?: string;

  /**
   * @description: Participant's role.<br>Available values:<br>BUYER<br>SHOP<br>CUSTOMER_SERVICE<br><br>
   * @type: string
   **/
  ^^^role?: string;

  /**
   * @description: Participant's nickname.
   * @type: string
   **/
  ^^^nickname?: string;
}


/**
 * @description The latest message in conversation.
 **/
export interface GetConversationsDataConversationsLatestMessageResponseInterface {
  /**
   * @description: Message ID.
   * @type: string
   **/
  ^^^id?: string;

  /**
   * @description: Message type.<br>Available values:<br>TEXT<br>IMAGE<br>ALLOCATED_SERVICE<br>NOTIFICATION<br>BUYER_ENTER_FROM_TRANSFER : This conversation is transferred from another customer service.<br>BUYER_ENTER_FROM_PRODUCT : The buyer is viewing a product before starting this conversation.<br>BUYER_ENTER_FROM_ORDER : The buyer is viewing an order before starting this conversation.<br>PRODUCT_CARD<br>EMOTICONS<br>ORDER_CARD<br>VIDEO<br>OTHER: Messages that are not supported via API falls under this category. 
   * @type: string
   **/
  ^^^type?: string;

  /**
   * @description: Message content, in JSON serialized string.<br>Samples: <br>- TEXT: <br>{<br>    "content": "simple text"<br>}<br>- IMAGE: <br>{<br>    "height": "290",<br>    "url": "https://tosv.boei18n.byted.org/obj/temai-im/FszkJ53nSapYG6KDaJQmqR3jjoZGwww304-290",<br>    "width": "304"<br>}<br>- PRODUCT_CARD, BUYER_ENTER_FROM_PRODUCT:<br>{<br>    "product_id": "12345"<br>}<br>- ORDER_CARD, BUYER_ENTER_FROM_ORDER :<br>{<br>    "order_id": "12345"<br>}<br>- VIDEO:<br>{<br>    "url": "https://video-boei18n.byted.org/storage/v1/tos-boei18n-v-c72c01/e8240f35244646428df9c3244d1a7408?x-tos-algorithm=v2&x-tos-authkey=5bf25627da095a5cba28ace592de46cc&x-tos-expires=1681980481&x-tos-signature=r_bRxtrvGhXAuZgMmNhlZ_Upqzg",<br>    "cover": "https://p-boei18n.byted.org/tos-boei18n-v-c72c01/o8keEOhzTcNCcJyAbkWZwpLIyTfkJxcGbRBvLP~tplv-jvtte31kaf-origin-jpeg.jpeg?",<br>    "width": 640,<br>    "height": 360,<br>    "duration": "20.504",<br>    "vid": "v0e30cg700f7cgcmu8jc77u9e2bdp95g",<br>    "expire_time": "1681980481",<br>    "format": "mp4",<br>    "size": 400000,<br>    "bit_rate": 156067,<br>    "quality": "original",<br>    "codec_type": "h264"<br>}<br>- ALLOCATED_SERVICE, NOTIFICATION, BUYER_ENTER_FROM_TRANSFER, OTHER eg: <br>{<br>    "content": "simple text"<br>}<br>
   * @type: string
   **/
  ^^^content?: string;

  /**
   * @description: Message create time. In second.
   * @type: int
   **/
  ^^^create_time?: int;

  /**
   * @description: Whether this message should be displayed to customer service.
   * @type: bool
   **/
  ^^^is_visible?: bool;

  /**
   * @description: Sender info
   * @type: object
   **/
  ^^^sender?: object;
}


/**
 * @description Sender info
 **/
export interface GetConversationsDataConversationsLatestMessageSenderResponseInterface {
  /**
   * @description: Sender's IM ID. Sender's unique identifier in TikTok Shop's IM system. 
   * @type: string
   **/
  ^^^^im_user_id?: string;

  /**
   * @description: Sender's avatar URL.<br>
   * @type: string
   **/
  ^^^^avatar?: string;

  /**
   * @description: Sender's role.<br>Available values:<br>BUYER<br>SHOP<br>CUSTOMER_SERVICE<br>SYSTEM<br>ROBOT<br>
   * @type: string
   **/
  ^^^^role?: string;

  /**
   * @description: Sender's nickname.
   * @type: string
   **/
  ^^^^nickname?: string;
}
