export interface ErrorResponse {
  code: string;
  message: string;
}

export interface ScrollRequest {
  size: number;
  cursor?: any;
  subCursor?: any;
}

export interface ScrollResponse<T> {
  content: T[];
  nextCursor: any;
  nextSubCursor: any;
}
