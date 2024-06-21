export interface ErrorResponse {
  code: string;
  message: string;
}

export interface ScrollRequest {
  size: number;
  cursor?: any;
  nextCursor?: any;
}

export interface ScrollResponse<T> {
  content: T[];
  nextCursor: any;
  nextSubCursor: any;
}
