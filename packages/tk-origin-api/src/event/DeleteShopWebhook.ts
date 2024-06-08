export const DELETE_SHOP_WEBHOOK_URL_PATH = '/event/202309/webhooks';,export const DELETE_SHOP_WEBHOOK_METHOD = '4';


/**
 * 接口名称：Delete Shop Webhook
 * 接口标识：Delete Shop Webhook
 * 接口使用场景：Delete Shop Webhook
 **/
export interface DeleteShopWebhookRequestInterface {
  /**
   * @description: The event type of the webhook:<br>- ORDER_STATUS_CHANGE: Each order status update starting from new order placement to all the subsequent order status will trigger this push.<br>- CANCELLATION_STATUS_CHANGE: When the cancel order status changes, it will trigger this push.<br>- RETURN_STATUS_CHANGE: When the return order status changes, it will trigger this push.<br>- RECIPIENT_ADDRESS_UPDATE: When receiver address is updated, it will trigger this push.<br>- PACKAGE_UPDATE: When the package is updated, such as being combined, split or address updated etc., it will trigger this push.<br>- PRODUCT_STATUS_CHANGE: When product audit results are updated, this type of push will be triggered.<br>- SELLER_DEAUTHORIZATION: After a seller is deauthorized, the platform needs to notify developers via webhook push to avoid developers misunderstanding that there is a problem with the platform authorization function.<br>- UPCOMING_AUTHORIZATION_EXPIRATION: The platform triggers a webhook push to developer 30 days before the authorization automatically expires, and pushes the message to developer once a day at 0:00 before the seller completes the re-authorization.<br>- PRODUCT_INFORMATION_CHANGE: This webhook triggers a notification when changes to a product's title, description, main images, or attributes become effective online.<br>- PRODUCT_CREATION: Triggers a webbook message when a product is created.
   * @type: string
   **/
  event_type: string;
}


/**
 * 接口名称：Delete Shop Webhook
 * 接口标识：Delete Shop Webhook
 * 接口使用场景：Delete Shop Webhook
 **/
export interface DeleteShopWebhookRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Delete Shop Webhook
 * 接口标识：Delete Shop Webhook
 * 接口使用场景：Delete Shop Webhook
 **/
export interface DeleteShopWebhookResponseInterface {
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
