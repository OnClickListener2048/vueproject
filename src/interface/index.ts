export interface Result {
  code?: string,
  msg?: string,
}

export interface ResultData<Data = any> extends Result {
  data?: Data;
}


export namespace Login {
  export interface LoginResponse {
    access_token: string;
  }
}

export namespace Menu {
  export interface AuthItem {
    path: string | undefined,
    name: string | undefined,
    component: string | undefined,
    meta: Meta | undefined,
    children: AuthItem[] | undefined

  }

  export interface Meta {
    icon: string | undefined,
    title: string | undefined,
    isLink: string | undefined,
    isHide: boolean | undefined,
    isFull: boolean | undefined,
    isAffix: boolean | undefined,
    isKeepAlive: boolean | undefined,
  }
}

