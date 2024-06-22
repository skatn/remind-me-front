import { ScrollRequest, ScrollResponse } from './axios';

export interface SubjectAddRequest {
  title: string;
  color: string;
}

export interface SubjectAddResponse {
  subjectId: number;
}

export interface SubjectListGetRequest extends ScrollRequest {
  title?: string;
}

export interface SubjectListGetResponse extends ScrollResponse<Subject> {}

export interface Subject {
  id: number;
  title: string;
  color: string;
  questionCount: number;
}
