export interface Result {
  code?: string,
  msg?: string,
}

export interface ResultData<Data = any> extends Result {
  data?: Data;
}

