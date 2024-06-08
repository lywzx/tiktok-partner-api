export const GET_AGENT_SETTINGS_URL_PATH = '/customer_service/202309/agents/settings';,export const GET_AGENT_SETTINGS_METHOD = '2';


/**
 * 接口名称：Get Agent Settings
 * 接口标识：Get Agent Settings
 * 接口使用场景：Get Agent Settings
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAgentSettingsRequestInterface {

}


/**
 * 接口名称：Get Agent Settings
 * 接口标识：Get Agent Settings
 * 接口使用场景：Get Agent Settings
 **/
export interface GetAgentSettingsRequestInterface {
  /**
   * @description: Use this property to pass shop information in requesting the API. Failure in passing the correct value when requesting the API for cross-border shops will return incorrect response. <br> Get by API [Get Authorization Shop](https://partner.tiktokshop.com/docv2/page/6507ead7b99d5302be949ba9?external_id=6507ead7b99d5302be949ba9)
   * @type: string
   **/
  shop_cipher: string;
}


/**
 * 接口名称：Get Agent Settings
 * 接口标识：Get Agent Settings
 * 接口使用场景：Get Agent Settings
 **/
export interface GetAgentSettingsResponseInterface {
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
export interface GetAgentSettingsDataResponseInterface {
  /**
   * @description: Whether the current agent can accept chat.<br>If true, the agent will receive auto-assigned chats. The agent can manually select chats to respond. <br>If false, the agent will receive manually assigned chats only.<br>
   * @type: bool
   **/
  ^can_accept_chat?: bool;
}
