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

