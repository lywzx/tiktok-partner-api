export interface ApiDetailInterface {
  interface_path: string;
  title: string;
  env_desc: string;
  method: 1,
  query: string;
  request_header_param: any[];
  request_query_param: IApiBodyParam[];
  request_body_param: IApiBodyParam[];
  response_param: IApiBodyParam[];
  error_code_list: IApiErrorList[];
  api_auth_info_list: IApiAuthInfoList[];
  is_v2: boolean;
  is_shop_chiper_exist: boolean;
}


export interface IApiBodyParam {
  name: string;
  type: string;
  required: string;
  desc: string;
}

export interface IApiBodyParamWithTree extends IApiBodyParam {
  children: IApiBodyParamWithTree[];
}

export interface IApiErrorList {
  code: string;
  msg: string;
}

export interface IApiAuthInfoList {
  package: string;
  package_type: string;
}
