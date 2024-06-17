export interface InvalidField {
  [key: string]: string[];
}

export interface InvalidParamsResponse {
  code: string;
  message: string;
  fieldErrors: InvalidParamsFieldErrors[];
  globalErrors: string[];
}

interface InvalidParamsFieldErrors {
  field: string;
  rejectedValue: string;
  message: string;
}
