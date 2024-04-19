/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

interface capabilities {
  browserName: string;
  browserVersion: string;
  'selenoid:options': {
    enableVNC?: true;
    enableVideo?: false;
  };
}

export interface RemoteOptions {
  hostname?: string;
  port?: number;
  capabilities: capabilities;
}
