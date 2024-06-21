import { ScrollRequest, ScrollResponse } from './axios';

export interface SubjectListGetRequest extends ScrollRequest {
  title?: string;
}

export interface SubjectListGetResponse extends ScrollResponse<SubjectType> {}

export interface SubjectType {
  id: number;
  title: string;
  color: string;
  questionCount: number;
}
