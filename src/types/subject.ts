import { ScrollRequest, ScrollResponse } from './axios';

export interface SubjectFormData {
  title: string;
  color: string;
  visibility: 'PUBLIC' | 'PRIVATE';
  tags: string[];
}

export interface SubjectUpdateRequest {
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

export interface NotificationUpdateRequest {
  enable: boolean;
}

export interface NotificationGetResponse {
  isEnable: boolean;
}

export type SubjectRecentList = Subject[];
